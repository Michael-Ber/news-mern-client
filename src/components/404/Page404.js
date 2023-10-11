import React from 'react';
import { Link } from 'react-router-dom';
import './page404.scss';

export const Page404 = () => {
    return (
        <div className='wrapper404'>
            <p>Page no found:(</p>
            <Link to={"/category/general"}>Back to homepage</Link>
        </div>
    )
}
