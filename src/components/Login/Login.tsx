import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*<Field name="lastName" component="input" type="text" />*/}
                <Field name={'login'} placeholder={'Login'} component="input"/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component="input"/>
            </div>
            <div>
                <Field name={'rememberMe'} component="input" type={"checkbox"}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData:FormDataType)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;