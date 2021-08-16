import React from "react";
import { useSort } from "../../Controllers";
import './sort.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



export default function Sort (){    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {ascendent, descendent} = useSort()
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

   
     
    return (        
        <div className="sort-container">          
            <span onClick={handleClick} aria-controls="simple-menu" >sort</span>
             <Menu id="simple-menu" anchorEl={anchorEl} keepMounted 
             open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={ascendent}>sort ascendent</MenuItem>
                <MenuItem onClick={descendent}>sort descendent</MenuItem>                           
            </Menu>
        </div>
    )

}