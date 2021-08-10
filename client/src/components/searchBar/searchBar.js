import React, {useState} from 'react';
import { connect } from "react-redux";
import {findRecipe, reset} from "../../actions/actions";
import "./searchBar.css";
import { FaSistrix } from "react-icons/fa";



function SearchBar (props) {

    const [inputState, setInput] = useState("")

    function handleChange(e){
        setInput(e.target.value)      
    }

    function handleSubmit(e){
        e.preventDefault()
        props.reset()
        props.findRecipe(inputState)
        setInput('')
    }

    return (
        <div className="box2">
            {props.error}            
            <form className="searchBer_form" onSubmit={handleSubmit}>
            <input className="searchBar_input" name="name" placeholder="ingrese el nombre de la receta" onChange={handleChange} value={inputState}/>
            <button className="searchBar_button" type="submit"><FaSistrix/></button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        error: state.searchError,
        recipe: state.recipe
    }
}

function mapDispatchToProps(dispatch){
    return {
        findRecipe: name => dispatch(findRecipe(name)),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)