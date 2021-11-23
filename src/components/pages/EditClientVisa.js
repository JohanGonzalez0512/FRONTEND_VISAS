import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { startUpdatingClient } from "../../actions/trips";
import { useForm } from "../../hooks/useForm"

export default function EditClientVisa() {


    // iniciar con info del cliente

    const initialState = {
        name: '',
        last_name: '',
        address: '',
        birthday: '',
        phone_number: '',
        date_expiration: '',



    }

    const [formValues, handleInputChange, reset] = useForm(initialState);
    const initial = {
        sheet_visa_payment: 0,
        accepted: 0,
        copy_passport: 0,
        right_visa: 0,
        picture_visa: 0
    }
    const { name, last_name, address, birthday, phone_number, date_expiration } = formValues;
    const [checkValues, setCheckValues] = useState(initial)
    const dispatch = useDispatch();

    const { accepted, sheet_visa_payment, right_visa, copy_passport, picture_visa } = checkValues;

    const handleChange = ({ target }) => {
        setCheckValues({ ...checkValues, [target.name]: target.checked ? 1 : 0 })
    }

    const resetCheck = () => {
        setCheckValues(
            {
                sheet_visa_payment: false,
                accepted: false,
                copy_passport: false,
                right_visa: false,
                picture_visa: false
            }
        )
        setCheckValues(initial)
    }

    const handleSubmit = () => {
        dispatch(startUpdatingClient({ ...formValues, ...checkValues }))
        resetCheck();
        reset();

    }



    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Editar Cliente VISA
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
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Fecha de expiración
                            </label>
                            <input
                                name='date_expiration'
                                value={date_expiration}
                                onInput={handleInputChange}
                                type="date" />
                        </div>
                    </div>
                    <div className="col">
                        <label><input type="checkbox" checked={accepted} name="accepted" onChange={handleChange} />
                            Aceptado
                        </label>
                        <label><input type="checkbox" checked={sheet_visa_payment} name="sheet_visa_payment" onChange={handleChange} />
                            Pago de visa
                        </label>
                        <label><input type="checkbox" name="copy_passport" checked={copy_passport} onChange={handleChange} />
                            Copia de pasaporte
                        </label>
                        <label><input type="checkbox" checked={picture_visa} name="picture_visa" onChange={handleChange} />
                            Fotos para visa
                        </label>
                        <label><input type="checkbox" checked={right_visa} name="right_visa" onChange={handleChange} />
                            Derecho a visa
                        </label>
                    </div>
                </div>

                <div className="buttons">
                    <button
                        className="btn"
                        onClick={handleSubmit}>
                        Actualizar Cliente
                    </button>
                </div>
            </div>

        </div>
    )
}
