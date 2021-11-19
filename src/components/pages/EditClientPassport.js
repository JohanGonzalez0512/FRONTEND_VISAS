import { useState } from "react";
import { useDispatch } from "react-redux";
import { startUpdatingClient } from "../../actions/passports";
import { useForm } from "../../hooks/useForm"
import DocumentList from "../DocumentList";

export default function EditClientPassport() {



    const initialState = {
        name: '',
        last_name: '',
        address: '',
        birthday: '',
        phone_number: '',
        date_expiration: '',
        curp: '',
    }

    const documents = [
        {
            _id: 1,
            name: 'Acta de nacimiento'
        },
        {
            _id: 2,
            name: 'Credencial INE',
        },
        {
            _id: 3,
            name: 'Ángel Cruz',
        },
        {
            _id: 4,
            name: 'Eduardo Retana',
        }
    ]
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm(initialState);
    const [document, setDocument] = useState({});
    const [checkValue, setcheckValue] = useState(0);
    const {_id: id_certification_type} = document
    const { name, last_name, address, birthday, phone_number, date_expiration, curp } = formValues;
    const handleChange= ({target}) => {

        setcheckValue( target.checked ? 1 : 0 )
    }

    const handleSubmit = () => {
        
        dispatch(startUpdatingClient({...formValues, id_certification_type, expired_passport: checkValue})  )
        reset();
        setDocument({});
        setcheckValue(false)
    }
    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Editar Cliente Pasaporte
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
                                CURP
                            </label>
                            <input
                                name='curp'
                                value={curp}
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
                       
                       <DocumentList  documents={documents} document={document} setDocument={setDocument} />
                       <label style={{
                           marginTop: "3rem"
                       }}><input type="checkbox" checked={checkValue}onChange={handleChange}  />
                            Pasaporte vencido
                        </label>
                        
                   </div>
                   
                   
                </div>

                <div className="buttons">
                    <button
                        className="btn"
                        onClick={handleSubmit}
                        >
                        Actualizar Cliente
                    </button>
                </div>
            </div>

        </div>
    )
}
