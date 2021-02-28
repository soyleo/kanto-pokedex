import {useState, useEffect} from 'react';
import './Card.css';
const Card = ({ name, url }) => { 

    const [poke, setPoke] = useState(null);
    useEffect(()=>{
        fetch(url).then(response => response.json()).then(data=> {
            setPoke(data);
        })
    },[url]);
    const onClick=(event)=>{

    }

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
                            return <button className={`btn ${tipo.type.name}`} key={i} value={tipo.type.url}>{tipo.type.name}</button>
                        })
                    }</p>
                </div>
            </div>}
        </div>
           
    );
}

export default Card;