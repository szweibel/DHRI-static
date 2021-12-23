import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import marked from 'marked'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { sortByDate } from '../../utils'
import { endianness, type } from 'os'
import { elementAcceptingRef } from '@mui/utils'
import evaluationAnswers from '../../components/Quiz'
import ConvertMarkdown from '../../components/ConvertMarkdown'
import { Glossary } from '../../components/Glossary'
import { useRouter } from 'next/router'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import hljs from 'highlight.js';
import FrontPage from '../../components/FrontPage'
import Image from 'next/image'
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
      // allPages = [[h1, p, p][h1, p, div]]
      if (curr.type === 'h1') {
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
  const [pages, setPages] = useState([]);
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


  useEffect(() => {
    setPages(htmlContent(content));
    setCurrentContent(frontPageContent);
    setPageTitles(getPageTitles);
  }, [content]);



  const PaginationComponent = (currentPage) => {
    return (
      <Stack className='pagination'>
        <Pagination
          count={pages.length}
          page={currentPage}
          onChange={handlePageChange}
          siblingCount={2}
          boundaryCount={2}
        />
      </Stack>
    )
  }


  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setCurrentContent(pages[value - 1]);
    // scroll smoothly to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  return (
    <Container
    maxWidth="xl"
    style={{display: 'flex'}}
    >
      <nav className='sidenav'>
        <ul>
          {getPageTitles}
        </ul>
      </nav>
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

      const matterResult = matter(markdownWithMeta)
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