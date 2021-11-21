import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import hljs from 'highlight.js'
// import TableOfContents from '../../components/tableOfContents';


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


  useEffect(() => {
    // split markdown by h1 (needs a better way!)
    const sections = content.split('\n\n# ');
    // remove first, empty section
    sections.shift();
    // add h1s back to sections

    const sectionsWithHeaders = sections.map((section, index) => {
      return `# ${section}`;
    });
    // render markdown
    const renderedSections = sectionsWithHeaders.map((section, index) => {
      const htmlSection = marked(section);
      const htmlSectionHeader = marked(`# ${section.split('\n')[0]}`);
      // get innerhtml of htmlSectionHeader
      const header = htmlSectionHeader.replace(/<[^>]*>/g, '').replace('#', '');
      return (
        <div key={index} name={header}>
          <div dangerouslySetInnerHTML={{ __html: marked(section) }} />
        </div>
      );
    });
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
    console.log(page.props);
    return (
      <li key={index}>
        <a onClick={() => handlePageChange(index)} className={index === currentPage ? 'active' : ''}>
          {page.props.name}
        </a>
      </li>
    );
  });
  


const lastPageAndNextPageButton = (currentPage) => {
  return(
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

  return (
<div className='container'>
<nav>
  <ul>
    {pageTitles}
  </ul>
</nav>
    <div className="content card card-page">
      <div className="">
        <img className="hero" src={cover_image} alt="cover" />
        <div className="title">
          {title}
        </div>
        <div>{lastPageAndNextPageButton(currentPage)}</div>
        <div className="WorkshopPage-content-container">
          {currentContent}
        </div>
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
  const markdownWithMeta = fs.readFileSync(
    path.join('workshops', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}