import {useState, useEffect} from 'react';
import './Card.css';
import Popup from 'reactjs-popup';
import Modal from './Modal';
const Card = ({ name, url }) => { 

    const [poke, setPoke] = useState(null);
    useEffect(()=>{
        fetch(url).then(response => response.json()).then(data=> {
            setPoke(data);
        })
    },[url]);
    
    return (
        <div className='card shadow'>
            
            { poke &&  <div>
                <img className='image' alt={name} src={poke.sprites.front_default} />
                <div>
                    <h2>{name}</h2>
                    <p>Pokedex number: {poke.id}</p>
                    <p>Height: {poke.height}</p>
                    <p>Wieght: {poke.weight}</p>
                    <p>Type: {
                        poke.types.map((tipo, i) =>{
                            return(
                            <Popup
                                trigger={<button className={`button ${tipo.type.name}`} key={i}>{tipo.type.name}</button>}
                                modal
                                nested
                            >
                                {close => (
                                        <div className={`modal modal${tipo.type.name}`}>
                                            <button className="close" onClick={close}>
                                                &times;
                                            </button>
                                            <div className="header"> <button className={`btn ${tipo.type.name}`} key={`1${i}`}>{tipo.type.name}</button> </div>
                                            <div className="content">
                                                {' '}
                                                <Modal url={tipo.type.url} key={`2${i}`} />
                                            </div>
                                        </div>
                                )}
                            </Popup>
                            );
                        })
                    }</p>
                </div>
            </div>}
        </div>
           
    );
}

export default Card;