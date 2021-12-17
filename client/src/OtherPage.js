import React from 'react';
import {Link} from 'react-router-dom';

const fn = () => {
    return (
        <div>
            Im some other page
            <Link to="/">Go Back!</Link>
        </div>
    );
}

export default fn;