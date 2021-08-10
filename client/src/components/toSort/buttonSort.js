import React from "react";
import { useSort } from "../../Controllers";
import './buttonSort.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



export default function ButtonSort (){    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {ascendent, descendent} = useSort()
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (e) => {
       if ( e.target.value === 'ascendent') return ascendent()
       else return descendent()
    }
     
    return (        
        <div className="sort-container">
            {/* <select onChange={handleChange} className="sortStyle">
                <option className="sort" value="descendent">sort a/z </option>
                <option className="sort" value="ascendent">sort z/a</option>
            </select> */}
            <span onClick={handleClick} aria-controls="simple-menu" >sort</span>
             <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={ascendent}>sort ascendent</MenuItem>
                <MenuItem onClick={descendent}>sort descendent</MenuItem>                           
            </Menu>
        </div>
    )

}