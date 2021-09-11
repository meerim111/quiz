import React ,{ useState }from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";
const Auth = () => {

    const [formControl,setFormControl] =useState({
        email:{
            value:' ',
            type: 'email',
            label:'Email',
            errorMessage:'Введите корректный Email',
            valid:false,
            touched :false,
            validate:{
                required :true,
                email:true
            }
        },
        password: {
            value:'',
            type: 'password',
            label: 'Password',
            errorMessage: 'Введите корректный пароль',
            valid: false,
            touched: false,
            validate: {
                required: true,
                minlength: 6
            }
        }

    })


    const [isFormValid,setIsFormValid] = useState(false)

  const handleLogin = ()  => {

  }

  const registerHandler = () => {

    }
    const submitHandler = (e) => {
    e.preventDefault()
    }

    const validateControl = (value,validate) => {
        if (!validate) {
            return true
        }

        let isValid = true

        if (validate.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(validate.email) {
            isValid = validate.email(value) && isValid
        }



        if (validate.minlength) {
     isValid = value.length >= validate.minlength && isValid
        }

        return isValid
    }

    const onChangeHandle = (e,controlName) => {
       const formControls = {...formControl }


       const control = formControls[controlName]

        control.value = e.target.value
        control.touched = true
        control.valid = validateControl(control.value,control.validate)

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        setFormControl(formControls)
        setIsFormValid(isFormValid)
    }

    const renderInput = () => {
        return Object.keys(formControl).map((controlName,idx)=>{
            const control = formControl[controlName]
            return (
                <Input
                    key={controlName + idx}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    validate={control.validate}
                    errorMessage={control.errorMessage}
                    onChange={(e)=>onChangeHandle(e,controlName)}

                />
            )
        })
    }

    return (
        <div className={classes.auth}>
<div>
    <h1>Авторизация</h1>
    <form
        onSubmit={submitHandler}
          className={classes.authForm}
    >
        {
            renderInput()
        }
        <Button
            type='success'
            onClick={handleLogin}
            disabled={!isFormValid}

        >Войти</Button>
        <Button
            type='primary'
            onClick={registerHandler}
            disabled={!isFormValid}


        >Регистрация</Button>
    </form>
</div>
        </div>
    );
};

export default Auth;