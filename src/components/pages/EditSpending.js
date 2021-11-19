import { useDispatch, useSelector } from "react-redux";
import { startUpdatingIncomeAndExpense } from "../../actions/payments";
import { useForm } from "../../hooks/useForm"

export default function EditSpending() {

    const initialState = {
        description: '',
        date: '',
        amount: ''
    }
    const {activePayment} = useSelector(state => state.payment)
    const {type} = activePayment
    const dispatch = useDispatch()
    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { description, date, amount } = formValues;

    const handleSubmit = ()=> {
        dispatch(startUpdatingIncomeAndExpense({...formValues}))
        reset();
    } 

    return (
  
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Editar {(type) && (type)}
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
                        Editar gasto
                    </button>
                </div>
            </div>

        </div>
    )
}
