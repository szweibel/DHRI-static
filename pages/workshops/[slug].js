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

export default function WorkshopPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {

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

  const handlePageChange = (index) => {
    setCurrentPage(index);
    setCurrentContent(pages[index]);
  };

  // list of page titles and highlight current page
  const pageTitles = pages.map((page, index) => {
    return (
      <li key={index}>
        <a onClick={() => handlePageChange(index)} className={index === currentPage ? 'active' : ''}>
          {page.props.name}
        </a>
      </li>
    );
  });

  const lastPageAndNextPageButton = (currentPage) => {
    return (
      <div className="last-page-and-next-page-button">
        <div className="WorkshopPage-nav-left">
          {currentPage > 0 && <button className='button is-primary' onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}
        </div>
        <div className="WorkshopPage-nav-right">
          {currentPage < pages.length - 1 && <button className='button is-primary' onClick={() => handlePageChange(currentPage + 1)}>Next</button>}
        </div>
      </div>
    )
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
      <nav>
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
          <div>{lastPageAndNextPageButton(currentPage)}</div>
          {contentAndQuiz(currentContent)}
          <div>{lastPageAndNextPageButton(currentPage)}</div>
        </div>
      </div>
    </div>
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


export async function getStaticProps({ params: { slug } }) {

  const dirents = fs.readdirSync(path.join('workshops'), { withFileTypes: true })
  const workshopFiles = dirents
    .filter((file) => file.isFile())
    .map((file) => file.name);
  // Get slug and frontmatter from workshop
  const workshops = workshopFiles.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('workshops', filename),
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
  const currentWorkshop = workshops.find((workshop) => workshop.slug === slug)
  const content = currentWorkshop.content
  const frontmatter = currentWorkshop
  return {
    props: {
      frontmatter: frontmatter,
      slug: slug,
      content: content,
      workshops: workshops.sort(),
    },
  }
}