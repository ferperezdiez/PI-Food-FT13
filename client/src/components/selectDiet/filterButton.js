import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findDietType } from '../../actions/actions';
import "./filterButton.css"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function FilterButton() {
 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const diets = useSelector(state => state.diets)
    const dispatch = useDispatch()

    function handleChange(e){
        e.preventDefault()
        dispatch(findDietType(e.target.value))
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
       

        <form  className="diet_container">
            <select className="diet_select" onChange={handleChange}>
                <option className="diet_option">Seleccione por tipo de dieta</option>
                {diets.map(function(diet){
                    return(                                 
                            <option key={diet.id} className="diet_option" type="Checkbox" value={diet.name}>{diet.name}</option>     
                    )                        
                })}                   
            </select>           
        </form>        
    )         
}