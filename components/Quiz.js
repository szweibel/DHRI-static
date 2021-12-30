import ReactDOMServer from 'react-dom/server';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import parse from 'html-react-parser';

// evaluate quiz questions
export default function Quiz({ className, children }) {

    // list of lis in children 
    const lis = children.map((child, index) => {
        const flattened = ReactDOMServer.renderToString(child);
        // remove <li data-reactroot="">
        // strip last 5 characters '</li>'
        const li = flattened.replace('<li data-reactroot="">', '').slice(0, -5);
        // correct if ends with *</li>
        const correct = li.endsWith('*');
        // strip *
        if (correct) {
            const liStripped = li.slice(0, -1);
            return {
                index,
                correct,
                li: parse(liStripped)
            };
        }
        return {
            index,
            correct,
            li: parse(li)
        }
    })



   
    const onSubmit = (e) => {
        e.preventDefault();
        // which checkboxes are checked 
        const checked = Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        // check if correct
        const correct = checked.every(answer => lis[answer].correct);
        console.log(checked, correct);

      };

    // if at least one item is correct, it's a quiz
    const isQuiz = lis.some(li => li.correct);
    if (!isQuiz) {
        return (<ul>{children}</ul>);
    }
    return (
       <div>
            <form
                onSubmit={onSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
    >
       <FormControl component="fieldset">
            <FormLabel component="legend">Quiz</FormLabel>
                {lis.map(li => (
                    <FormControlLabel
                        key={li.index}
                        value={li.index}
                        control={<Checkbox />}
                        label={li.li}

                    />
                        
                ))}
        </FormControl>
        <Button type="submit" variant="contained" color="primary" className='quizButton'
       >
            Submit
        </Button>
        </form>

        {/* {isCorrect && <p>Correct!</p>} */}
        </div>
    );
}