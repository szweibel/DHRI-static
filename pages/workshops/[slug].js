import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React, { useEffect, useState } from 'react'
import ConvertMarkdown from '../../components/ConvertMarkdown'
import { useRouter } from 'next/router'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FrontPage from '../../components/FrontPage'
import Sidebar from '../../components/Sidebar'
import Container from '@mui/material/Container';

export default function WorkshopPage({
  workshops,
  guides,
  insights
}) {

  const router = useRouter()
  const { slug } = router.query
  const currentFile = workshops.find((workshop) => workshop.slug === slug)

  const content = currentFile.content
  const cover_image_location = currentFile.cover_image

  const title = currentFile.title

  // get front page content
  const frontPageContent = FrontPage(
    currentFile,
    {
      workshops,
      guides,
      insights
    })

  // convert markdown to html and split into pages
  const htmlContent = function (content) {
    const htmlifiedContent = ConvertMarkdown(content);
    // split react element array into pages
    const allPages = [];
    
    const pages = htmlifiedContent.props.children.reduce((acc, curr) => {
      if (typeof curr === 'string') {
        return acc;
      }else if (curr.type === 'h1') {
        allPages.push([curr]);
      } else {
        allPages[allPages.length - 1].push(curr);
      }
      return acc;
    }, []);
    allPages.unshift(frontPageContent);
    return (
      allPages.map((page, index) => {  // page = [h1, p, p]
        // if page classname is 'frontpage' then render frontpage
        if (page.props != undefined && page.props.className.includes('frontpage')) {
          return (
            frontPageContent
          )
        }
        return (
          <div key={index}>
            {page.map((element, index) => {
              return (
                <React.Fragment key={index}>
                  {element}
                </React.Fragment>
              )
            }
            )}
          </div>
        )
      }
      )
    )
  }

  // set defaults 
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(htmlContent(content));
  const [currentContent, setCurrentContent] = useState([]);
  const [pageTitles, setPageTitles] = useState([]);

  // list of page titles and highlight current page
  const getPageTitles = pages.map((page, index) => {
    let header = undefined;
    // if it's the frontpage vs not
    index === 0 ? header = page.props.children[0].props.children : header = page.props.children[0].props.children.props.children[0]
    return (
      <li key={index}>
        <a className={currentPage === index + 1 ? 'active' : ''} onClick={() => handlePageChange(event, index + 1)}>{header}</a>
      </li>
    )
  })

  const sidebar = Sidebar(getPageTitles, currentPage)
  useEffect(() => {
    setCurrentPage(1);
    setCurrentContent(frontPageContent);
    setPageTitles(getPageTitles);
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    if (page) {
      setCurrentPage(page);
      setCurrentContent(pages[page - 1]);
    }
  }, [content]);

  const PaginationComponent = (currentPage) => {
    return (
      <Stack className='pagination'>
        <Pagination
          count={pages.length}
          page={Number(currentPage)}
          onChange={handlePageChange}
          siblingCount={2}
          boundaryCount={2}
        />
      </Stack>
    )
  }


  const handlePageChange = (event, value) => {
    // scroll smoothly to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const valueAsNumber = Number(value);
    router.push(`/workshops/${slug}/?page=${valueAsNumber}`, undefined, { shallow: true, scroll: false });
    setCurrentPage(valueAsNumber);
    setCurrentContent(pages[valueAsNumber - 1]);
  }

  return (
    <Container
      maxWidth="xl"
      style={{
        display: 'flex',
        marginTop: '1rem',
      }}
    >
      <div className='sidebar'
        sx={{ display: { md: 'none' } }}
      >
        {sidebar}
      </div>
      <div className="content card-page">
        <div className="workshop-container">
          <div>{PaginationComponent(currentPage)}</div>
          {currentContent}
          <div>{PaginationComponent(currentPage)}</div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('workshops'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps() {
  // Get files from the workshops dir
  const getFilesandProcess = (dir) => {
    const dirents = fs.readdirSync(path.join(dir), { withFileTypes: true })
    const dirFiles = dirents
      .filter((file) => file.isFile())
      .map((file) => file.name);
    // Get slug and frontmatter from workshop
    const markdownFiles = dirFiles.map((filename) => {
      // Create slug
      const slug = filename.replace('.md', '')

      // Get frontmatter
      const markdownWithMeta = fs.readFileSync(
        path.join(dir, filename),
        'utf-8',
      )
      const itemPath = path.join(dir, filename).replace('.md', '')

      // replace '+' with '&#43;' 
      const replaced = markdownWithMeta.replace(/\+/g, String.fromCharCode(65291))
      const matterResult = matter(replaced)
      const content = matterResult.content
      return {
        slug,
        itemPath,
        content: content,
        ...matterResult.data,
      }

    })
    return markdownFiles
  }
  const workshopFiles = getFilesandProcess('workshops')
  const installFiles = getFilesandProcess('guides')
  const insightsFiles = getFilesandProcess('insights')

  return {
    props: {
      workshops: workshopFiles.sort(),
      guides: installFiles.sort(),
      insights: insightsFiles.sort(),
    },
  }
}