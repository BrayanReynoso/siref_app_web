import React, { useState } from 'react';
import './styleScreen.css';
import logo from '../../assets/img/logo_jorges.png';
import { Button } from 'react-bootstrap';
const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
    const loginFuntion = () => {
        // validar que los campos no esten vacios
        if (username.trim() === '' || password.trim() === '') {
            // Validación de campos vacíos
            alert('Por favor, completa todos los campos');
            return;
          }
        // validar que el usuario y contraseña sean correctos
        // guardar el token en el localstorage

        window.location.href = '/home';
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
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Usuario'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label className='label-form-group'>Contraseña</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Contraseña'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button className='btn-login'  type='submit' onClick={loginFuntion}>
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
