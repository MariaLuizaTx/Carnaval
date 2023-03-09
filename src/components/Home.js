import React, {Component} from 'react';
import bruxaImg from './assets/bruxa.png';
import fantasmaImg from './assets/fantasma.png';
import vampiroImg from './assets/vampiro.png';
import zumbiImg from './assets/zumbi.png';
import fadaImg from './assets/fada.png';
import pirataImg from './assets/pirata.png';
import "../App.css";


class Home extends Component{
state = {
    personagens:[
        {
            imagem: bruxaImg,
            legenda:"Bruxa"
        },
        {
            imagem: fantasmaImg,
            legenda:"Fantasma"
        },
        {
            imagem: vampiroImg,
            legenda:"Vampiro"
        },
        {
            imagem: zumbiImg,
            legenda:"Zumbi"
        },
        {
            imagem: fadaImg,
            legenda:"Fada"
        },
        {
            imagem: pirataImg,
            legenda:"Pirata"
        },
    ]
}

    render(){
        const {personagens} = this.state;
        return(
            <section>
                <header>
                    <h1>Carnaval VnW</h1>
                </header>
                <main>
                    <div className="containerFantasias"> 
                        {personagens.map((fantasias) =>(
                        <div className="containerFundo">
                            <img className="Imagens" src= {fantasias.imagem} alt=""></img>
                            <p className="Legendas"> {fantasias.legenda} </p>
                        </div>
                    ))}
                    </div>
                </main>
            </section>
        )
    }
}
export default Home;
