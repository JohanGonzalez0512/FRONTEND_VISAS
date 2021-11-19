import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { ReactComponent as EditSVG } from '../helpers/resources/images/edit.svg';
import { ReactComponent as SearchSVG } from '../helpers/resources/images/search.svg';
import { ReactComponent as TrashSVG } from '../helpers/resources/images/trash.svg';
import { useDispatch } from "react-redux";
import { setClientActive, setClientAtive } from "../actions/passports";

export default function IconList(
    { data,
        headers,
        idPropName,
        handleEdit,
        editLink,
        filterProp,
        searchInputType,
        searchInputType2,
        searchInputLabel,
        searchInputLabel2,
        handleDelete,
        usersIcon,
        handleChangeFunction,

        idPropName2 }) {

    const [searchValue, setSearchValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [displayData, setdisplayData] = useState([]);
    
    useEffect(() => {
        setdisplayData(data)
    }, [data])
    const dispatch = useDispatch()
    const handleChange = (e) => {
        e.preventDefault();
        let currentSearchValue = e.target.value;
        setSearchValue(currentSearchValue);
        // si el input está vacío, nos devuelve toda la data original
        if (!currentSearchValue.length) {
            setdisplayData(data);
            return;
        }

        // ** Checa bien cual es la propiedad que vas a filtar.
        // código para normalizar fecha EXACTA

        if (searchInputType === 'date') {
            const tempDate = currentSearchValue.split('-');
            currentSearchValue = `${tempDate[2]}/${tempDate[1]}/${tempDate[0]}`
        }
        const newData = data.filter(item => item[filterProp].toString().toLowerCase().includes(currentSearchValue));

        setdisplayData(newData);

    }

    const handleChange2 = (e) => {
        e.preventDefault();
        let currentSearchValue = e.target.value;
        setDateValue(currentSearchValue);
        if (handleChangeFunction) {
            handleChangeFunction(currentSearchValue)
        }
    }


    return (
        <div className={`table`}>
            <div className="table__form">

                <SearchSVG className="icon" />

                {/* <svg className="icon"><use href="./search.svg#search"></use></svg> */}
                <div className="table__form__input">

                    {
                        (searchInputLabel && searchInputType)
                        &&

                        <input id="input" placeholder={searchInputLabel} type={searchInputType} value={searchValue} onInput={handleChange} />
                    }
                </div>
                {
                    (searchInputLabel2 && searchInputType2)
                    &&
                    (
                        <div className="table__form__input">
                            <label htmlFor="input">{searchInputLabel2}</label>
                            <input id="input" placeholder={searchInputLabel2} type={searchInputType2} value={dateValue} onChange={handleChange2} />
                        </div>
                    )
                }

            </div>
            <div className={`table__header cols-${headers.length}`}>
                {
                    headers.map(header => (

                        <p key={header}>{header}</p>

                    ))
                }
            </div>
            <div className={`table__body`}>
                {
                    displayData.map((row, i ) => {

                        const info = []
                        if (idPropName2) {
                            for (const value in row ) {
                                if ((value !== idPropName) ) {

                                    if (value !== idPropName2){

                                        info.push(row[value])
                                    }
                                }
                            }      
                        }
                        else {
                            for (const value in row) {
                                if (value !== idPropName) {
                                    info.push(row[value])
                                }
                            }
                        }
                        

                        return (
                            <div key={i} className={`table__body__item cols-${headers.length}`}>
                            {/* <div key={row[(idPropName2) ? (row.type === 'Gasto') ? idPropName2 : idPropName : idPropName]} className={`table__body__item cols-${headers.length}`}> */}

                                {
                                    info.map((p, index) => (
                                        <p key={index} >{p}</p>

                                    ))

                                }

                                <div className="icons">
                                    <Link to={`${editLink}`} onClick={() => handleEdit(row)}  >

                                        <EditSVG className="edit" />
                                        {/* <svg className="edit"><use href="./edit.svg#edit" ></use></svg> */}
                                    </Link >
                                    {/* TODO: AQUI CREO QUE NO LLEVA LINK */}


                                    {/* <svg className="trash"><use href={`./${usersIcon ? 'users' : 'trash'}.svg#${usersIcon ? 'users' : 'trash'}`} ></use></svg> */}
                                    <button style={{
                                        border: "0rem",
                                        cursor: 'pointer'
                                    }} onClick={() => handleDelete(row)}>
                                        <TrashSVG className="trash" />

                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
