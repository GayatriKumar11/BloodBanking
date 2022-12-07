import React from 'react'

export const SmallCard = (props) => {
    return (
        <>
            <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>{props.title}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}
