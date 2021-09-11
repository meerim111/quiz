import React,{ useState }from 'react';
import classes from './QuizCreator.module.css'
import { createControl} from "../../form/formFrameWork";
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";
import Select from "../../components/UI/select/select";



const creatOptions = (num) => {
    return createControl({
        label:`Вариант${num}`,
        errorMessage:'Значение не может быть пустым',
        id:num
    },{required:true})
}

const createFormControl = () => {
    return {
        question:createControl({
            label:'Введите вопрос',
            errorMessage:'Вопрос не может быть пустым'
        },{required:true}),
        option1: creatOptions(1),
        option2: creatOptions(2),
        option3: creatOptions(3),
        option4: creatOptions (4),

    }
}


const QuizCreator = () => {
    const [formControls,setFormControls] = useState(createFormControl())
    const [rightAnswerId,setRightAnswerId] = useState(1)
    const [quiz,setQuiz] = useState([])



    const handleOnChangeControl = (event,controlName) => {
        const formControl = {...formControls }
        const control = formControl[controlName]


        control.value = event


         formControl[controlName] = control
         setFormControls(formControl)

    }

    const selectChangeHandler = (e) => {
setRightAnswerId (+e.target.value)
    }

    const select = <Select
        label='Выберите правильный ответ'
        value={rightAnswerId}
        onChange={selectChangeHandler}
        options={[
            {text:1,value:1},
            {text:2,value:2},
            {text:3,value:3},
            {text:4,value:4},
        ]}
    />

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const addQuestionHandler =() => {
        const idx = quiz.length + 1

        const {question,option1,option2,option3,option4} = formControls

        const questionItem = {
            question: '',
            rightAnswerId,
            id:idx,
            answers:[
                { text: option1.value,id:option1.id},
                { text: option2.value,id:option2.id},
                { text: option3.value,id:option3.id},
                { text: option4.value,id:option4.id}
            ]

        }
        setQuiz ([...quiz,questionItem])

    }

    const createQuizHandler =() => {

    }





    const renderControl = () => {
        return Object.keys(formControls).map((controlName,idx)=>{
            let control = formControls[controlName]

            return (
                <>
              <Input
              label={control.label}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              validate={control.validate}
              errorMessage={control.errorMessage}
              onChange={(e)=>handleOnChangeControl(e.target.value,controlName)}

              />
            { idx === 0 ?<hr/>: ''}
              </>
            )
        })
    }



    return (
        <div className={classes.quizCreator}>
            <div>
            <h1>Создать тест</h1>
            <form onSubmit={handleSubmit}>
                {
                    renderControl()
                }
                { select }

            <select></select>
            <Button
                type='primary'
                onClick={addQuestionHandler}
            >
             Создать вопрос
            </Button>
            <Button
                type='success'
                onClick={createQuizHandler}
            >
                Создать тест
            </Button>
            </form>
        </div>
        </div>
    );
};

export default QuizCreator;