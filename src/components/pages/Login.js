
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import logo from '../../helpers/resources/images/logo.png';
import { useForm } from '../../hooks/useForm';
export default function Login() {

    const initialForm = {
        email: 'jopi20101@gmail.com',
        password: 'jopigonzalez'
        
    }
    const [formValues, handleInputChange] = useForm(initialForm)
    const {email, password} =formValues
    const dispatch = useDispatch()
    const handleLogin = ( e ) => {
        e.preventDefault();
        
         dispatch(startLogin(email, password))
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src={logo} alt="" className="logo" />
                </div>
                <form className="login-card__form" onSubmit= {handleLogin}>
                    <div className="inputs">
                        <input 
                            placeholder="Correo electrónico" 
                            type="text" 
                            name="email" 
                            value={email}
                            onChange={handleInputChange}
                        />
                        <input 
                            placeholder="Contraseña" 
                            type="password" 
                            name="password" 
                            id="pwd"
                            value={password}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <button type="submit" className="btn">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    )
}
