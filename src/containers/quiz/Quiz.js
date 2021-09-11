import React,{useState } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/finishedQuiz/FinishedQuiz"


const Quiz = () => {
  const [quiz,setQuiz] = useState ([
      {
          question:'Какого цвета небо',
          id:1,
          rightAnswer:3,
          answer:[
              {text :'красный',id:1},
              {text :'черный',id:2},
              {text :'синий',id:3},
              {text :'зеленый',id:4}
          ]
      },
      {
          question:'Сколько часов в сутке',
          id:1,
          rightAnswer:3,
          answer:[
              {text :23,id:1},
              {text :19,id:2},
              {text :24,id:3},
              {text :20,id:4}
          ]
      }
  ])
const[activeAnswer,setActiveAnswer] = useState(0)
    const [answerState,setAnswerState] = useState(null)
    const[ isFinished,setIsFinished] = useState(false)
    const[results,setResults] = useState({})

    const handleNextAnswer = (answerId) => {

        const question = quiz[activeAnswer]
        const result = results

        if (question.rightAnswer === answerId) {
            result[question.id] ='success'
            setResults(result)
            setAnswerState({
                [answerId]:'Success'
            })
        } else {
            result[question.id] ='error'
            setResults(result)
            setAnswerState({
                [answerId]: 'Error'
            })
        }

        let timeOut = setTimeout(() => {
            if (quizFinished()) {
                setIsFinished(true)
            } else {
                setAnswerState(null)
                setActiveAnswer(activeAnswer + 1)
            }
            clearTimeout(timeOut)
        }, 1500)
    }

    const quizFinished = () => {
      return activeAnswer +1 === quiz.length
}
const onRetry = () => {
      setResults({})
      setIsFinished(false)
      setAnswerState(null)
      setActiveAnswer(0)
}


    return (
        <div className={classes.Quiz}>
         <div className={classes.QuizWrapper}>
             {
                 isFinished ? <FinishedQuiz
                     results={results}
                     quiz={quiz}
                     onRetry={onRetry}
                     /> :
                     <>
                         <h1>
                             Пройдите опрос
                         </h1>
                         <ActiveQuiz
                         answer={ quiz[activeAnswer].answer}
                         question={quiz[activeAnswer].question}
                         quizLength={quiz.length}
                         activeAnswer={activeAnswer + 1}
                         handleNextAnswer={handleNextAnswer}
                         answerState={answerState}
                         />
                     </>
             }
         </div>
        </div>
    );
};

export default Quiz;