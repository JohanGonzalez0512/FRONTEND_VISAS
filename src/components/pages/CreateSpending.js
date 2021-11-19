import { useDispatch } from "react-redux";
import { ExpenseStartCreation } from "../../actions/payments";
import { useForm } from "../../hooks/useForm"

export default function CreateSpending() {

    const initialState = {
        description: '',
        date: '',
        amount: ''
    }

    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { description, date, amount } = formValues;
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(ExpenseStartCreation({ ...formValues }))
        reset();
        // setClient({});
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Crear Gasto
                </h1>

                <div className="card__form scroll">
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Descripcion
                            </label>
                            <textarea name='description'
                                value={description}
                                onInput={handleInputChange}
                            ></textarea>
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Fecha
                            </label>
                            <input
                                name='date'
                                value={date}
                                onInput={handleInputChange}
                                type="date" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Monto
                            </label>
                            <input
                                name='amount'
                                value={amount}
                                onInput={handleInputChange}
                                type="number" />
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button
                        className="btn"
                        onClick={handleSubmit}>
                        Crear gasto
                    </button>
                </div>
            </div>

        </div>
    )
}
