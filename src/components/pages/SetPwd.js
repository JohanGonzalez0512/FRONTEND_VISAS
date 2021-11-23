
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startResetPassword } from '../../actions/auth';
import logo from '../../helpers/resources/images/logo.png';
import { useForm } from '../../hooks/useForm';
export default function SetPwd() {


    const initialForm = {
        code: '',
        password: ''
    }
    const dispatch = useDispatch();
    const history = useHistory();
    const [formValues, handleInputChange] = useForm(initialForm)
    const { code, password } = formValues

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(startResetPassword(code,password,history))
    } 


    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src={logo} alt="" className="logo" />
                </div>
                <p>Se ha enviado un codigo de recuperacion al correo</p>
                <form className="login-card__form" onSubmit={handleSubmit}>
                    <div className="inputs" style={{ marginBottom: '11rem' }}>
                        <input placeholder="Código de verificación" type="text" value={code} onChange={handleInputChange} name="code" />
                        <input placeholder="Nueva contraseña" type="password" value= {password} onChange={handleInputChange} name="password"  />
                    </div>
                    <button className="btn" type="submit">
                        Restablecer contraseña
                    </button>
                </form>
            </div>
        </div>
    )
}
