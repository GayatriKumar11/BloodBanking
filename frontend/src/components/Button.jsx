import React from 'react'

export const Button = (props) => {
    return (
        <div>
            <div className="text-center">
                <a href="#" className="more-btn">{props.btnText}<i className="bx bx-chevron-right"></i></a>
            </div>
        </div>
    )
}
