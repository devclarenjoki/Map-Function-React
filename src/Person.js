import React from 'react'

function Person(props){
    return(
        <div>
            <h3>{props.person.first_name} {props.person.last_name}</h3>
            <p>{props.person.email}</p>
            <p>{props.person.gender}</p>
            <p>{props.person.ip_address}</p>
            <hr/>
        </div>
    )
}
export default Person