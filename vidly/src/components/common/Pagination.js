import React from 'react';
import _ from 'lodash'; // _ common convention beacuse lodash is the version of popular js library called as underscore  
//lodash is the popular javascript library 
//here we are using lodash to generat array

import PropTypes from 'prop-types'; //used to check type of props // npm i prop-types

const Pagination = (props) => {
    const {itemsCount,pageSize,currentPage,onPageChange} = props;
    console.log("currentPage",currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize); // 9 / 4
    if(pagesCount === 1) return null;
    console.log("pagesCount",pagesCount);
    //[1... pageCount].map()
    const pages = _.range(1, pagesCount + 1);

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li className={page === currentPage ? 'page-item active': 'page-item' } key={page}>
                        <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}

Pagination.propTypes = {
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired
}
export default Pagination;