import { useForm } from "../../hooks/useForm"

export default function CreateClientVisa() {

    const initialState = {
        name: '',
        lastName: '',
        address: '',
        birthDate: '',
        phoneNumber: ''
    }

    const [formValues, handleInputChange] = useForm(initialState);

    const { name, lastName, address, birthDate, phoneNumber } = formValues;

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
                                name='lastName'
                                value={lastName}
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
                                name='birthDate'
                                value={birthDate}
                                onInput={handleInputChange}
                                type="date" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Número de teléfono
                            </label>
                            <input
                                name='phoneNumber'
                                value={phoneNumber}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                    </div>
                   
                </div>

                <div className="buttons">
                    <button
                        className="btn">
                        Crear Cliente
                    </button>
                </div>
            </div>

        </div>
    )
}
