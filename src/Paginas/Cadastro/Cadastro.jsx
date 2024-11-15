import ImageLogin from '../../assets/imagens/imagemdelogin.svg'
import ImageSignUp from '../../assets/imagens/imagemderegistro.svg'
import './Cadastro.css'

function Cadastro(){
return(
    <>
        <div className="login-signup-container">
            <div className="forms-login-signup-container">
                <div className="login-signup-div">

                    <form action="#" className="login-form">
                        <h2 className="login-title">Acesso</h2>
                        <div className="login-input-field">
                            <input type='email' placeholder='E-mail'/>
                        </div>

                        <div className="login-input-field">
                            <input type='password' placeholder='Senha'/>
                        </div>

                        <input type="submit" value="Entrar" className='btn solid'/>
                    </form>

                </div>
                <div className="panels-login-signup-container">

                </div>
            </div>
        </div>
    </>
)
}

export default Cadastro;