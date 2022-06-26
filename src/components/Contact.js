// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    const {data} = props;
    return (
        <div className="card">
        <img src={data.photo} alt="broken" />
        <div>
            <h1>{data.name}</h1>
            <h2>{data.phone}</h2>
            <h3>{data.email}</h3>
        </div>
        </div>
    )
}

export default Contact;