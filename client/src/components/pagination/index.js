import React from "react";
import "./pagination.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Pagination } from "../../Controllers";




 export default function Pag(){
    
   
    const { next, prev } = Pagination()

    
    return (
        <div className="pagination_container" >
            <button className="pagination_left" onClick={prev}><FaChevronLeft/>  </button>
            <button className="pagination_right" onClick={next}><FaChevronRight/></button>
        </div>
    )
}