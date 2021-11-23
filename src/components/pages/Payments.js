import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { paymentsStartLoading, setActivePayment, startPaymentDelete } from "../../actions/payments";
import IconList from "../IconList"

export default function Payments({  }) {

    const dispatch = useDispatch();
    const { paymentsWithExpenses, totalPaymentsWithExpenses } = useSelector(state => state.payment)
    
    const handleChangeDispatch = (monthAndYear) => {
        dispatch(paymentsStartLoading(monthAndYear))
    }
    useEffect(() => {

        dispatch(paymentsStartLoading());

    }, [dispatch])

    const handleDelete = (payment) => {
        dispatch(setActivePayment(payment))
        dispatch(startPaymentDelete())
    }
    const handleEdit = (payment) => {
        dispatch(setActivePayment(payment))
        // dispatch()
    }


    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Pagos y Gastos
                </h1>



                <IconList
                    data={paymentsWithExpenses}
                    headers={['Tipo de recibo', 'Descripción', 'Monto', 'Fecha de creación']}
                    deleteLink="./borrar/"
                    handleEdit={handleEdit}
                    editLink="/editar-gasto"
                    idPropName='id_income'
                    idPropName2='id_expense'
                    handleChangeFunction={handleChangeDispatch}
                    handleDelete={handleDelete}
                    filterProp="month"
                    searchInputType2="month"
                    searchInputLabel2="Mes y Año"
                // handleChange2={handleChange2}
                />


                <div className="total">
                    <span className="text">
                        Total: <strong>{totalPaymentsWithExpenses}</strong>
                    </span>
                </div>

                {/* <div className="buttons">
                    <button
                        
                        className="btn">
                        Ver pagos
                    </button>

                    <button
                      
                        className="btn">
                        Ver gastos
                    </button>
                </div> */}

            </div>


        </div>
    )
}
