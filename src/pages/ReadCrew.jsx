import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadCrew = (props) => {

    const [crew, setCrew] = useState([]);

    useEffect(() => {
        setCrew(props.data);
    }, [props]);
    
    console.log(props)

    return (
        <div className="ReadCrew">
            {
                crew && crew.length > 0 ?
                crew.map((mem,index) => 
                   <Card id={mem.id} name={mem.Name} entity={mem.Entity} hp={mem.Hp} damage={mem.Damage} description={mem.Description}/>
                ) : <h2>{'No Mobs Yet 💀'}</h2>
            }
        </div>  
    )
}

export default ReadCrew;