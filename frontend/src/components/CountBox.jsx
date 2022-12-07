import React from 'react';
import CountUp from 'react-countup';


const CountBox = (props) => {
    return (
        <>
            <div className={props.clsNme}>
                <div className="count-box">
                    <i className={props.icon}></i>
                    <span className="purecounter">{props.figure}</span>
                    <p>{props.title}</p>
                </div>
            </div>
        </>

    )
}

export default CountBox