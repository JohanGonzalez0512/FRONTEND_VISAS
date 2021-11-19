import { useState } from "react"

export default function DocumentList({ document, setDocument, documents }) {


    const [dispDocuments, setDispDocuments] = useState(documents);
    const [searchDocument, setSearchDocument] = useState('');

    const handleOnChange = e => {

        const tempSearch = e.target.value;
        setSearchDocument(tempSearch);

        if (!tempSearch.length) {
            setDispDocuments(documents);
            return;
        }

        const tempDocuments = documents.filter(({ name }) => name.toLowerCase().includes(tempSearch.toLowerCase()))

        setDispDocuments(tempDocuments);

    }

    return (
        <div className="clients-list">
            <h3 className="clients-list__title">
                Tipo de documento
            </h3>
            <div className="clients-list__input">
                <input type="text" value={searchDocument} onChange={handleOnChange} />
            </div>
            <div className="clients-list__list scroll">
                {
                    dispDocuments.map(document => (
                        <div
                            key={document._id}
                            onClick={e => setDocument(document)}
                            className="item">
                            <p>{`${document.name}`}</p>
                        </div>
                    ))
                }
            </div>
            {
                document.name && (
                    <p className="clients-list__chosen">
                        {`${document.name}`}
                    </p>
                )
            }
        </div>
    )
}
