import { useDispatch, useSelector } from "react-redux";
import { clientStartCreation } from "../../actions/trips";
import { useForm } from "../../hooks/useForm"

export default function CreateClientVisa() {

    const initialState = {
        name: '',
        last_name: '',
        address: '',
        birthday: '',
        phone_number: ''
    }

    const dispatch = useDispatch();
    const {activeTrip} = useSelector(state => state.trip)
    const {id_trip} = activeTrip;
    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { name, last_name, address, birthday, phone_number } = formValues;

    const handleSubmit = () => {
        dispatch(clientStartCreation({...formValues,id_trip}))
        reset();
      
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Registro de cliente para VISA
                </h1>

                <div className="card__form scroll">
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Nombre
                            </label>
                            <input
                                name='name'
                                value={name}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Apellidos
                            </label>
                            <input
                                name='last_name'
                                value={last_name}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Dirección
                            </label>
                            <input
                                name='address'
                                value={address}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Fecha de nacimiento
                            </label>
                            <input
                                name='birthday'
                                value={birthday}
                                onInput={handleInputChange}
                                type="date" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Número de teléfono
                            </label>
                            <input
                                name='phone_number'
                                value={phone_number}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                    </div>
                   
                </div>

                <div className="buttons">
                    <button
                        className="btn"
                        onClick={handleSubmit}>
                        Crear Cliente
                    </button>
                </div>
            </div>

        </div>
    )
}
