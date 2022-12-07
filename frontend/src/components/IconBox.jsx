import React from 'react'

export const IconBox = (props) => {
    return (
        <>
            <div className="icon-box">
                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                <h4 className="title"><a href="">{props.title}</a></h4>
                <p className="description">{props.desc}</p>
            </div>
        </>
    )
}
