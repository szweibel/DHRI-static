import ReactDOMServer from 'react-dom/server';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import parse from 'html-react-parser';

// evaluate quiz questions
export default function Quiz({ className, children }) {
    // useState 
    const [isCorrect, setIsCorrect] = useState(false);

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
            console.log(liStripped);
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
    // if at least one item is correct, it's a quiz
    const isQuiz = lis.some(li => li.correct);
    if (!isQuiz) {
        return children;
    }
    return (
       <div>
       <FormControl component="fieldset">
            <FormLabel component="legend">Quiz</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
                {lis.map(li => (
                    <FormControlLabel
                        key={li.index}
                        value={li.index}
                        control={<Radio />}
                        label={li.li}
                        onChange={() => setIsCorrect(li.correct)}
                    />
                ))}
            </RadioGroup>
        </FormControl>
        {isCorrect && <p>Correct!</p>}
        </div>
    );
}
