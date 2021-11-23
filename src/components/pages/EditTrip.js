import { useDispatch } from "react-redux";
import { startUpdatingTrip } from "../../actions/trips";
import { useForm } from "../../hooks/useForm"

export default function EditTrip() {

    // iniciar con info del cliente

    const initialState = {
        date: '',
        limit_people: ''
    }

    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { date, limit_people } = formValues;
    const dispatch = useDispatch();
    const handleSubmit = () => {
        
        dispatch(startUpdatingTrip({...formValues}))
        reset();
    }

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
                                type="date" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="limit_people">
                                Límite de personas
                            </label>
                            <input
                                name='limit_people'
                                value={limit_people}
                                onInput={handleInputChange}
                                type="number" />
                        </div>
                    </div>

                </div>

                <div className="buttons">
                    <button
                        className="btn"
                        onClick={handleSubmit}>
                       Editar Viaje
                    </button>
                </div>
            </div>

        </div>
    )
}
