import React from 'react';

const CartWidget = () => {
    return (
        <div className='position-relative mx-4'>
            <i className="bi bi-cart3 px-2 fs-4"></i>
            <span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-pill bg-danger p-2'>10</span>
        </div>
    )
}

//Exportando el componente
export default CartWidget;
