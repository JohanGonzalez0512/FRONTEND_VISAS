

export default function SetPwd() {

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src="./logo.png" alt="" className="logo" />
                </div>
                <form className="login-card__form">
                    <div className="inputs" style={{ marginBottom: '11rem' }}>
                        <input placeHolder="Código de verificación" type="text" />
                        <input placeHolder="Nueva contraseña" type="password" name="pwd" id="pwd" />
                    </div>
                    <button className="btn">
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    )
}
