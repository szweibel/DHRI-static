import Markdown, { compiler } from 'markdown-to-jsx';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import * as $ from 'jquery';

export default function Presentation({
    workshops,
    guides,
    insights
}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const content = workshops[2].content

    // convert markdown to html and split into pages
    const htmlContent = function (content) {
        const htmlifiedContent = compiler(content);
        // split react element array into pages
        const allPages = [];

        const pages = htmlifiedContent.props.children.reduce((acc, curr) => {
            // allPages = [[h1, p, p][h1, p, div]]
            if (curr.type === 'h1') {
                allPages.push([curr]);
            }
            else if (curr.type === 'h2') {
                allPages.push([curr]);
            }
            else {
                allPages[allPages.length - 1].push(curr);
            }
            return acc;
        }, []);
        return (
            allPages.map((page, index) => {
                return (
                    <section key={index}>
                        <div className='masonry'>
                            {page.map((item, index) => {
                                // if (item.type === 'h2') {
                                //     return (
                                //         <h2 key={index}>{item.props.children}</h2>
                                //     )
                                // }
                                return (
                                    <div className='masonry-brick' key={index}>
                                    {item}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )
            }
            )
        )
    }
    const slideContent = htmlContent(content)

    const [deck, setDeck] = useState(null);
    useEffect(() => {
        if (deck) {
            Reveal.initialize({
                controls: true,
                height: '100%',
                width: '100%',
                plugins: [RevealMarkdown],
            });

        }
    }, [deck]);

    const Presentation = () => (
        <>
            <link rel="stylesheet" href="https://unpkg.com/reveal.js@3.9.2/css/reset.css" />
            <link rel="stylesheet" href="https://unpkg.com/reveal.js@3.9.2/css/reveal.css" />
            <link rel="stylesheet" href="https://unpkg.com/reveal.js@3.9.2/css/theme/black.css" />
            
            <div className="reveal">
                <div className="slides">
                    {slideContent}
                </div>
            </div>

            <Script src="https://unpkg.com/reveal.js@3.9.2/js/reveal.js"
                onLoad={() => {
                    setDeck(true);
                }}
            />
            <Script src="https://unpkg.com/marked@0.3.6/marked.min.js" />
            <Script src="https://unpkg.com/reveal.js@3.9.2/plugin/markdown/markdown.js" />
            <Script src="https://unpkg.com/reveal.js@3.9.2/plugin/highlight/highlight.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/FitText.js/1.2.0/jquery.fittext.min.js" 
            integrity="sha512-e2WVdoOGqKU97DHH6tYamn+eAwLDpyHKqPy4uSv0aGlwDXZKGwyS27sfiIUT8gpZ88/Lr4UZpbRt93QkGRgpug==" 
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
            strategy="lazyonload"
            onLoad={() => {

                $('.masonry').fitText(1.2, { minFontSize: '2px', maxFontSize: '4px' });
            }}
            />
        </>
    )


    return (
        <>
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Presentation />
                </Modal>
            </div>
        </>
    )
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