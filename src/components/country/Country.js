import React from 'react';

const Country = ({
    country: { name, flag },
}) => {
    const formattedName =
        name.length > 0 ? (
            <>
                <span>Country: </span>
                {name}
            </>
        ) : ('');
    const formattedFlag =
        flag.length > 0 ? (
            <>
                <span>Flag: </span>
                {name}
            </>
        ) : ('');
    return (
        <div className='country'>
            <div className='country__flag'>
                <img src={flag} alt={name} />
            </div>
            <h3 className='country__name'>{name.toUpperCase()}</h3>
            <div className='country__text'>
                <p>{formattedName}</p>
                <p>{formattedFlag}</p>
            </div>
        </div>
    )
};

export default Country;