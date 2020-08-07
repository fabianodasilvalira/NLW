import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/38793420?s=460&u=8e79281d9875f109a82f30da58fcbbb8043beb5d&v=4" alt="Foto do perfil"/>
                <div>
                    <strong>Fabiano Lira</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
            Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver.
            <br /><br />
            Se a caminhada está difícil, é porque você está no caminho certo.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;