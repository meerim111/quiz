import React from 'react';
import classes from './FinishedQuiz.module.css';
import Button from "../UI/button/button";

const FinishedQuiz = ({ results, quiz, onRetry}) => {
    const successCount = Object.keys(results).reduce((acc,rec)=>{
        if(results[rec] === 'success') {
            acc++
        }
        return acc
    },0)
    return (
        <div className={classes.FinishedQuiz} >
            <h1> Опрос пройден</h1>
            {
                quiz.map((quizItem,idx)=>{
                    const cls =[
                        'fa',
                        results[quizItem.id] === 'error'?'fa-times': 'fa-check',
                        classes[results[quizItem.id]]
                    ]
                    return (
                        <ul>
                            <li key={idx}>
                                <strong>{idx +1}</strong>
                                { quizItem.question }
                                <i className={cls.join(' ')}/>

                            </li>
                        </ul>
                    )
                })
            }
            <p>Правильно{successCount}/{quiz.length}</p>
            <Button onClick={onRetry} type='primary' >Повторить</Button>
            <Button onClick={onRetry} type='error' disabled={true}>Отмена</Button>
        </div>
    );
};

export default FinishedQuiz;