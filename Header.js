import React from 'react';
import"./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from './StateProvider';

function Header() {
 const [{basket},dispatch ]= useStateValue();
 console.log(basket);
   
    return (
        <nav className="header ">
           <Link to="/ "> <img className="header-logo" alt="" src="data:image/jpeg;base64,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MJ/zGfmv0cXpR/6iL/UZ+a8/xOujbnb3d/Q0vlX2cSPV/hw/dPPTI78F9UGhuHM3UrT5zpHdjnEL6pNJKFu+ri+2D6rrnVOneHM3Tl3msee0gBe4txHJtHb93ma6Sny+zs02FU0fiU8TehjQfTZfYB/4UDrNZkIHwVNI48XlrB/TcqOYhrDrpLhhZEP4G3d9p1+xS04VrMvxzy9ZR21+mx7V39IW3UVDI27b3ta0criAPSVEcY1iUsV2wgzP4jwYwfOOZ6h1qrayulmO1LI954vcXevcvkWng4Jipvknte0KObimS21I5O7julNVVZSSWZfKNngs6/ldJXDJXiLYpStK9mscoZtr2tPO08071ZQRxmaulcGsibsAnkL8zlxsLfWK4el2kDqybvlrRt8GNp3hvKT/ABHeVwgV4VDXT1jNOad56ekJJzz+nGOOn+wrxEVhCIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAvV4iAiIgIiIPbrxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k="></img></Link>
        <div className="header_search">
            <input type="text" className="searchInput"/>
            <SearchIcon className="Header-searchIcon"/>
        </div>
{/* 1st */}
        <div className="header_nav">
            <Link to="/login"className="header_link">
            <div className="header_option">
                <span className="header_lineone">
                    Hello 
                    </span>
                <span className="header_linetwo">
                 Sign In
                </span>
            </div>
            </Link>
{/* 2nd */}
            <Link className="header_link">
            <div className="header_option">
                <span className="header_lineone">
                   Returns
                    </span>
                <span className="header_linetwo">
                  Orders
                </span>
            </div>
            </Link>
{/* 3rd */}
            <Link className="header_link">
            <div className="header_option">
                <span className="header_lineone">
                    Your 
                    </span>
                <span className="header_linetwo">
                Prime 
                </span>
            </div>
            </Link>

            <Link  to="checkout" className="header_link">
          <div className="header_optionBasket">
          <ShoppingBasketIcon/>
    <span className="header_linetwo basketCount">{basket.length}</span>
    {/* <span className="header_linetwo basketCount">0</span> */}

        </div>
            </Link>
        </div>
        
        </nav>
        
    )
}

export default Header
