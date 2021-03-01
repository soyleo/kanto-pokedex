
import { useState, useEffect } from 'react';

const Modal = ({url}) =>{

    const [tipos, setTipos] = useState(null);
    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {
            setTipos(data);
        })
    }, [url]);
    return(
        <div>

            {tipos && <div>

                <p>Double Damage from: {
                    tipos.damage_relations.double_damage_from.map((t, j) => {
                        return <button className={`btn ${t.name}`} key={`3${j}`}>{t.name}</button>
                    })
                }</p>
                <p>Double Damage to: {
                    tipos.damage_relations.double_damage_to.map((t, o) => {
                        return <button className={`btn ${t.name}`} key={`4${o}`}>{t.name}</button>
                    })
                }</p>
                <p>Half Damage from: {
                    tipos.damage_relations.half_damage_from.map((t, k) => {
                        return <button className={`btn ${t.name}`} key={`5${k}`}>{t.name}</button>
                    })
                }</p>
                <p>Half Damage to: {
                    tipos.damage_relations.half_damage_to.map((t, l) => {
                        return <button className={`btn ${t.name}`} key={`6${l}`}>{t.name}</button>
                    })
                }</p>
                <p>No Damage from:{
                    tipos.damage_relations.no_damage_from.map((t, m) => {
                        return <button className={`btn ${t.name}`} key={`7${m}`}>{t.name}</button>
                    })
                }</p>
                <p>No Damage to: {
                    tipos.damage_relations.no_damage_to.map((t, n) => {
                        return <button className={`btn ${t.name}`} key={`8${n}`}>{t.name}</button>
                    })
                }</p>

            </div>}

            
        </div>
    )
    

}

export default Modal;