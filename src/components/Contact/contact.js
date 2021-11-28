import female from '../../img/female.png'
import male from '../../img/male.png'
import anonymous from '../../img/anonymous.png'
import '../Contact/contact.css'

export default function Contact(props) {
    const { firstName, lastName, phone, gender } = props;

    function setGender(gender) {
        if (gender === "male") return male
        else if (gender === "female") return female
        else if(!gender) return anonymous
    }
    return (
        <div className='contacts'>
            <p>Name: {firstName} {lastName} </p>
            <p>Phone: {phone}</p>
            <img src={setGender(gender)} />
        </div>
    )
}