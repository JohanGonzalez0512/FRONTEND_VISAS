import { useParams } from "react-router";
import { useForm } from "../../hooks/useForm"

export default function EditTrip() {

    const { id } = useParams();
    // iniciar con info del cliente

    const initialState = {
        date: '',
        limit: ''
    }

    const [formValues, handleInputChange] = useForm(initialState);

    const { date, limit } = formValues;

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Editar viaje
                </h1>

                <div className="card__form scroll">
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="date">
                                Fecha aproximada
                            </label>
                            <input
                                name='date'
                                value={date}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="limit">
                                Límite de personas
                            </label>
                            <input
                                name='limit'
                                value={limit}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                    </div>

                </div>

                <div className="buttons">
                    <button
                        className="btn">
                        Crear
                    </button>
                </div>
            </div>

        </div>
    )
}
