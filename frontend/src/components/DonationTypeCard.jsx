import React from 'react'

export const DonationTypeCard = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                    <div className="icon"><i className="fa fa-heartbeat"></i></div>
                    <h4><a href="">{props.title}</a></h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}
