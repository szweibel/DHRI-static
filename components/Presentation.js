import { compiler } from 'markdown-to-jsx';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function Presentation(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        // press escape to close modal 
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
    }, [handleClose]);

    const content = props.content;

    // convert markdown to html and split into pages
    const htmlContent = function (content) {
        const htmlifiedContent = compiler(content);
        // split react element array into pages
        const allPages = [];

        const pages = htmlifiedContent.props.children.reduce((acc, curr) => {
            // allPages = [[h1, p, p][h1, p, div]]
            if (typeof curr === 'string') {
                return acc;
              } else if (curr.type === 'h1') {
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
            allPages
        )
    }
    const slideContent = htmlContent(content)

    const SpectacleDeck = () => {
        const Spectacle = require('spectacle');
        const Deck = Spectacle.Deck;
        const Slide = Spectacle.Slide;
        const Heading = Spectacle.Heading;
        const CodePane = Spectacle.CodePane;
        return (
            <Deck>
                {slideContent.map((page, index) => {
                    return (
                        <Slide key={index}>
                            <Button
                                onClick={handleClose}
                                style={{
                                    position: 'absolute',
                                    width: '50px',
                                }}
                            >
                                <CancelPresentationIcon />
                            </Button>
                            {page.map((item, index) => {
                                if (item.type === 'h1' || item.type === 'h2') {
                                    return (
                                        <Heading key={index}>
                                            {item.props.children}
                                        </Heading>
                                    )
                                } else if (item.type === 'CodeEditor') {
                                    return
                                }

                                //                                 else if(item.type=== 'pre') {
                                //                                     return (
                                //                                         <CodePane 
                                //                                         key={index}
                                //                                         showLineNumbers={false}
                                //                                         language={item.props.className}

                                //                                         >
                                // {item.props.children.props.children}
                                //                                         </CodePane>
                                //                                     )

                                //                                 }
                                else {
                                    return (
                                        <div key={index}>
                                            {item}
                                        </div>
                                    )
                                }
                            })}
                        </Slide>
                    )
                })}
            </Deck>
        )
    }
    return (
        <>
            <div>
                <Button onClick={handleOpen}>
                    <SlideshowIcon
                        fontSize="large"
                    />
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <SpectacleDeck />

                </Modal>
            </div>
        </>
    )
}



