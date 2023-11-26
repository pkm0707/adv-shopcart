import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export function Navbar(){
    return(
        <div className="navbar">
            <div className="links">
            <Link to="/"> Shop </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/cart">
                <ShoppingCartIcon fontSize="medium" />
            </Link>
            </div>
      </div>
    );
}