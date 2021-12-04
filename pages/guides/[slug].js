import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import hljs from 'highlight.js'
import { sortByDate } from '../../utils'
import { endianness, type } from 'os'
import { current } from 'hero-patterns'
import { elementAcceptingRef } from '@mui/utils'
import evaluationAnswers from '../../components/Quiz'
import {Glossary} from '../../components/Glossary'
import { useRouter } from 'next/router'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// Set options for marked
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const hljs = require('highlight.js');
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default function GuidePage({
  workshops,
  guides,
  insights
}) {
  const router = useRouter()
  const { slug } = router.query
  const currentFile = guides.find((guide) => guide.slug === slug)

  const content = currentFile.content
  const cover_image = currentFile.cover_image
  const title = currentFile.title

   // return content according to the current page
   const [currentPage, setCurrentPage] = useState(0);
   const [pages, setPages] = useState([]);
   const [currentContent, setCurrentContent] = useState([]);
   // convert from markdown to HTML 
   const htmlContent = marked(content);
   // split by h1s
   const sections = htmlContent.split('<h1');
   // remove first, empty section
   sections.shift();
   // add h1 back to sections
   const sectionsWithHeaders = sections.map((section, index) => {
     return `<h1 ${section}`;
   });
   const renderedSections = sectionsWithHeaders.map((section, index) => {
     // get header of section
     const header = section.split('</h1>')[0];
     // get header text after <h1>
     const headerText = header.split('>')[1];
 
     return (
       <div dangerouslySetInnerHTML={{ __html: section }} key={index} name={headerText} className='workshop-content'>
       </div>
     );
   });
 
   useEffect(() => {
     // set state
     setPages(renderedSections);
     setCurrentContent(renderedSections[0]);
   }, [content]);
 
 
 const PaginationComponent = (currentPage) => {
   return (
     <Stack spacing={2} className='pagination'>
       <Pagination
         count={pages.length - 1}
         page={currentPage}
         onChange={handlePageChange}
         siblingCount={2} 
         boundaryCount={2}
         defaultPage={1}
       />
     </Stack>
   )
 }
 
 // list of page titles and highlight current page
 const pageTitles = pages.map((page, index) => {
  return (
    <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
      <a onClick={() => handlePageChange(event, index + 1)}>{page.props.name}</a>
    </li>
  );
});
 
       
 const handlePageChange = (event, value) => {
   console.log(event, value)
   setCurrentPage(value);
   setCurrentContent(pages[value - 1]);
 }
 
 
   // if content contains a quiz
   const contentAndQuiz = (currentContent) => {
     if (currentContent.props) {
       const currentText = currentContent.props.dangerouslySetInnerHTML.__html;
       if (currentText.includes('Evaluation</h2>')) {
         return evaluationAnswers(currentText);
       } else {
         return currentContent;
       }
     } else {
       return currentContent;
     }
   }
   return (
     <div className='workshopContainer container'>
       <nav className='sidenav'>
         <ul>
           {pageTitles}
         </ul>
       </nav>
       <div className="content card-page">
         <div className="workshop-container">
           <img className="hero" src={cover_image} alt="cover" />
           <div className="title">
             {title}
           </div>
            {pages.length > 1 && (
              <PaginationComponent currentPage={currentPage} />
            )}
           {contentAndQuiz(currentContent)}
           {pages.length > 1 && (
              <PaginationComponent currentPage={currentPage} />
            )}
         </div>
       </div>
     </div>
   );
 }


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('guides'))
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

          const matterResult = matter(markdownWithMeta)
          const content = matterResult.content
          return {
              slug,
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
//   const currentWorkshop = workshops.find((workshop) => workshop.slug === slug)
//   const content = currentWorkshop.content
//   const frontmatter = currentWorkshop
//   return {
//     props: {
//       frontmatter: frontmatter,
//       slug: slug,
//       content: content,
//       workshops: workshops.sort(),
//     },
//   }
// }