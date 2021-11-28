import React, { useState } from 'react';
import './Contacts.css'
import Contact from '../Contact/contact';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

export default function Contacts() {
    const [state, setState] = useState(contacts)
    const [searchTerm, setSearchTeam] = useState("")
    
    function handleInputChange(e) {
        setSearchTeam(e.target.value)
    }
    return (
        <div className="body">
            <input className="input"
                type="text"
                placeholder="Search......"
                onChange={handleInputChange} />
            <div className="container">
                {state.filter((contact) => {
                    return contact.lastName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                        contact.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                        contact.phone.includes(searchTerm);
                })
                    .map((contact, index) =>
                        <Contact
                            firstName={contact.firstName}
                            lastName={contact.lastName}
                            phone={contact.phone}
                            gender={contact.gender}
                            key={index}
                        />)
                }</div>
        </div>
    )

}

