import React from 'react';
import './styleScreen.css';
import logo from '../../assets/img/logo_jorges.png';
import { Button } from 'react-bootstrap';
const LoginScreen = () => {
    const loginFuntion = () => {
        alert('Iniciando sesion, espere un momento......');
    };
    return (
        <>
            <div className='container-screen-login'>
            <div className='login-form'>
                <div className='title-view'>
                    <h1 className='title'>SIREF</h1>
                </div>
                <div className='form-all'>
                    <div className='title-aling-form'><h3 className='title-n2'>INICIAR SESION</h3></div>
                    <div className='form-group'>
                        <label className='label-form-group'>Usuario</label>
                        <input type='text' className='form-control' placeholder='Usuario' />
                        <label className='label-form-group'>Contraseña</label>
                        <input type='password' className='form-control' placeholder='Contraseña' />
                        <Button className='btn-login' variant='primary' type='submit' onClick={loginFuntion}>
                            Acceder
                        </Button>
                    </div>
                </div>
            </div>
            <div className='login-logo-img'>
                <img src={logo} height={'90%'} width={'100%'} />
            </div>
        </div>
        {/* <h6>Jorges Auto Refacciones S:A. de C.V.</h6> */}
        </>
    );
}

export default LoginScreen;
