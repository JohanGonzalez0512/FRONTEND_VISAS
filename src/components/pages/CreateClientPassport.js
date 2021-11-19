import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientStartCreation } from "../../actions/passports";
import { useForm } from "../../hooks/useForm"
import DocumentList from "../DocumentList";

export default function CreateClientPassport() {

    const initialState = {
        name: '',
        last_name: '',
        address: '',
        birthday: '',
        phone_number: '',
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
    const { _id: id_certification_type } = document
    const { name, last_name, address, birthday, phone_number, curp } = formValues;


    const handleSubmit = () => {
        dispatch(clientStartCreation({...formValues, id_certification_type}))
        reset();
        setDocument({});
    }
    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Registro de cliente para pasaporte
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
                    </div>
                    <div className="col">

                        <DocumentList documents={documents} document={document} setDocument={setDocument} />

                    </div>
                </div>

                <div className="buttons">
                    <button
                        className="btn"
                        onClick={handleSubmit}
                        >
                        Crear Cliente
                    </button>
                    
                    
                </div>
            </div>

        </div>
    )
}
