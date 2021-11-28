import { endlessClouds } from "hero-patterns";

// evaluate quiz questions
export default function evaluationAnswers(currentHTML) {
    const onRadioClickhandler = (correct) => {
        const radio = document.querySelector(`input[class="${correct}"]:checked`);
        console.log(radio);
        // get the class of the radio button
        if (radio.classList.contains("true")) {
            radio.parentElement.parentElement.nextElementSibling.classList.add("correct");
            radio.parentElement.parentElement.nextElementSibling.classList.remove("incorrect");
            // add visible class
            radio.parentElement.parentElement.nextElementSibling.children[0].classList.add("visible");
            // hide incorrect 
            radio.parentElement.parentElement.nextElementSibling.children[1].classList.remove("visible");
        }else if (radio.classList.contains("false")) {
            radio.parentElement.parentElement.nextElementSibling.classList.add("incorrect");
            radio.parentElement.parentElement.nextElementSibling.classList.remove("correct");
            // add visible class
            radio.parentElement.parentElement.nextElementSibling.children[1].classList.add("visible");
            // hide correct
            radio.parentElement.parentElement.nextElementSibling.children[0].classList.remove("visible");
        }
    }





    // find 'Evaluation' h2   
    let evaluation = currentHTML.split('Evaluation</h2>')[1].split('<h2')[0];

    const nextH2 = currentHTML.split('Evaluation</h2>')[1].split('<h2')[1];
    const currentHTMLNoEval = currentHTML.split('Evaluation</h2>')[0] + '<h2 ' + nextH2;
    // find all sets of ul
    const parser = new DOMParser();
    var doc = parser.parseFromString(evaluation, "text/html");
    //   get each paragraph in doc
    const evaluationQuestions = doc.getElementsByTagName('p');
    const evaluationQuestionsArray = Object.values(evaluationQuestions);

    const ul = doc.getElementsByTagName('ul');
    const ulArray = Object.values(ul);
    // map questions to uls 
    const evaluationQuestionsMap = ulArray.map((ul, index) => {
        const answers = ul.getElementsByTagName('li');
        const answersArray = Object.values(answers);
        // answer is correct if it ends with '*'
        const correctAnswers = answersArray.filter(answer => answer.innerHTML.endsWith('*'));
        // remove '*' from answers
        const answersNoStar = answersArray.map(answer => answer.innerHTML.replace('*', ''));
        // map answers to correct answer
        const answersMap = answersNoStar.map((answer, index) => {
            const isAnswerCorrect = correctAnswers.includes(answersArray[index]);
            return {
                answer: answer,
                correct: isAnswerCorrect
            }
        });

        return {
            question: evaluationQuestionsArray[index].innerHTML,
            answers: answersMap
        }
    });

    // create quiz questions
    const evaluationQuestionsHTML = evaluationQuestionsMap.map((question, index) => {
        const answersHTML = question.answers.map((answer, index) => {
            return (
                <li key={index} >
                    <input type="radio"
                        className={`${answer.correct ? 'true' : 'false'}`}
                        name={question.question}
                        value={index}
                        onClick={() => onRadioClickhandler(answer.correct)}
                    />
                    {answer.answer}
                </li>
            )
        });
        return (
            <div className="question-container" key={index}>
                <h3>{question.question}</h3>
                <ul>
                    {answersHTML}
                </ul>
                <div className="answer-container">
                    <div className="correct">Correct</div>
                    <div className="incorrect">Incorrect</div>
                </div>
            </div>
        )
    });

    return (
        <div className='workshop-content'>
            <div dangerouslySetInnerHTML={{ __html: currentHTMLNoEval }}>
            </div>
            <h2>Evaluation</h2>
            {evaluationQuestionsHTML}
        </div>
    );
}



