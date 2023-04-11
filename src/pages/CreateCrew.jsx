import React, { useState } from 'react';
import './CreateCrew.css'
import { supabase } from '../client';

const CreateCrew = () => {

    const [crew, setCrew] = useState({name: "", entity: "", hp: 20, damage: 0, description: ""})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrew = async (event) => {
        event.preventDefault();
        // console.log(event.target.title)
       await supabase
        .from('Crew')
        .insert({Name: crew.name, Entity: crew.entity, Hp: crew.hp, Damage: crew.damage, Description: crew.description})
        .select();
    
        window.location = "/";
    }

    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} /><br />
                <br/>

                <label for="entity">Entity</label><br />
                <input type="text" id="entity" name="entity" value={crew.entity} onChange={handleChange} /><br />
                <br/>

                <label for="hp">Hp</label><br />
                <input type="number" id="hp" name="hp" value={crew.hp} onChange={handleChange} /><br />
                <br/>

                <label for="damage">Damage</label><br />
                <input type="number" id="damage" name="damage" value={crew.damage} onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={crew.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createCrew}/>
            </form>
        </div>
    )
}

export default CreateCrew;