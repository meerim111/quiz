import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswerList from "../AnswerList/AnswerList";

const ActiveQuiz = ({answer,question,quizLength,activeAnswer,handleNextAnswer}) => {
    return (
        <div className={classes.ActiveQuiz } >
          <p className={classes.Question} >
              <span> {question} </span>
              <span> {activeAnswer}/{quizLength}</span>
          </p>
            <AnswerList answer={ answer }
                        handleNextAnswer={handleNextAnswer}
            />
        </div>
    );
};

export default ActiveQuiz;