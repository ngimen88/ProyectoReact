import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Home.css';
import auth from '../../firebaseConfig';


const Home = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            if (!email || !password) {
                throw new Error('El correo electrónico y la contraseña son obligatorios');
            }

            await signInWithEmailAndPassword(auth, email, password);
            // Redirige al usuario a la galería después del inicio de sesión exitoso
            props.history.push('/galeria');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };


    return (
        <main className="home">
            <h1>Bienvenido a mi tienda</h1>
            <p>Inicia sesión para acceder a nuestra galería</p>
            <form className="form" onSubmit={handleSignIn}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </main>
    );
};

export default Home;


