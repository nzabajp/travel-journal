import React from 'react';
import location from '../images/location.png'

export default function Location(props) {
    return (
        <div>
            <section>
                <img src={`../images/${props.imageUrl}`} alt="location view" />
                <div className='info'>
                    <img src={location} alt="location pin" />
                    <span>{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer"><span>View on Google Maps</span></a>
                    <h1>{props.title}</h1>
                    <p className='dates'>{props.startDate} - {props.endDate}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </section>
            <hr />
        </div>
    )
}