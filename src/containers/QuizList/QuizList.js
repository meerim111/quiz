import React from 'react';
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";

const QuizList = () => {


    const  renderQuizes =() => {
        return[1,2,3].map((quiz,idx)=>{
            return (
                <li key={idx}>
               <NavLink
                to={`/quiz/${quiz}`}

                 >
                  Тест {quiz}
                </NavLink>
                </li>
            )
        })

    }
    return (
        <div className={classes.quizList} >
           <div>
               <h1>Quiz List</h1>
               <ul>
                   {
                       renderQuizes()
                   }
               </ul>
           </div>
        </div>
    );
};

export default QuizList;