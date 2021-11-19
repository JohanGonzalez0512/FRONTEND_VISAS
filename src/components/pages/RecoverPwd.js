

export default function RecoverPwd() {

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src="./logo.png" alt="" className="logo" />
                </div>
                <form className="login-card__form">
                    <div className="inputs" style={{ marginBottom: '13rem' }}>
                        <input placeholder="Correo electrónico" type="text" />
                    </div>
                    <button className="btn">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}
