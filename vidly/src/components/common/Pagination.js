import React from 'react';
import _ from 'lodash'; // _ common convention beacuse lodash is the version of popular js library called as underscore  
//lodash is the popular javascript library 
//here we are using lodash to generat array

const Pagination = (props) => {
    const {itemsCount,pageSize} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize); // 9 / 4
    if(pagesCount === 1) return null;
    console.log("pagesCount",pagesCount);
    //[1... pageCount].map()
    const pages = _.range(1, pagesCount + 1);

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li className="page-item" key={page}>
                        <a className="page-link">{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;