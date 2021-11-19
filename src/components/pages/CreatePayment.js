import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncomeStartCreation, startLoadingCLientNames } from "../../actions/payments";
import { useForm } from "../../hooks/useForm"
import ClientsList from "../ClientsList";

export default function CreatePayment() {


    const initialState = {
        description: '',
        date: '',
        amount: ''
    }
    const { clientsName } = useSelector(state => state.payment)
    const [client, setClient] = useState({});
    const { id_client } = client

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(startLoadingCLientNames());


    }, [dispatch])

    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { description, date, amount } = formValues;
    console.log(description)

    const handleSubmit = () => {
        dispatch(IncomeStartCreation({ ...formValues }, id_client))
        reset();
        setClient({});
    }

    return (
        <div className="container">

            <div className="card">
                <h1 className="card__title">
                    Crear Pago
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
                    <div className="col">
                        <ClientsList clients={clientsName} client={client} setClient={setClient} />
                    </div>
                </div>

                <div className="buttons">
                    <button
                        className="btn" onClick={handleSubmit}>
                        Crear gasto
                    </button>
                </div>
            </div>

        </div>
    )
}
