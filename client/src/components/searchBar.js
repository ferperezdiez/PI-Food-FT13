import React, {useState} from 'react';
import { connect } from "react-redux";
import {findRecipe} from "../actions/actions";

function SearchBar (props) {

    const [inputState, setInput] = useState("")

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.findRecipe(inputState)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input name="name" placeholder="ingrese el nombre de la receta" onChange={handleChange} value={inputState}/>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        findRecipe: name => dispatch(findRecipe(name))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)