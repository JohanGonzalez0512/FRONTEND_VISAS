import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startSendEmail } from '../../actions/auth';
import logo from '../../helpers/resources/images/logo.png';
import { useForm } from '../../hooks/useForm';

export default function RecoverPwd() {


    const dispatch = useDispatch();

    const [formValue, handleInputChange, reset]=useForm({
        email:''
    })
    const {email} = formValue;

    const  history = useHistory();
    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(startSendEmail(email, history));
        //reset();
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src={logo} alt="" className="logo" />
                </div>
                    <p>Confirme su correo electronico</p>
                <form className="login-card__form" onSubmit={handleSubmit}>
                    <div className="inputs" style={{ marginBottom: '13rem' }}>
                        <input placeholder="Correo electrónico" type="text" name="email" value= {email}onChange={handleInputChange} />
                    </div>
                    <button className="btn" type="submit">
                        Enviar Correo
                    </button>
                </form>
            </div>
        </div>
    )
}
