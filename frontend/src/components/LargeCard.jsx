import React from 'react'
import { Button } from './Button'

export const LargeCard = (props) => {
    return (
        <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
                <h3>{props.title}</h3>
                <p>
                    {props.desc}
                </p>
                <Button btnText="Learn More" />

            </div>
        </div>
    )
}
