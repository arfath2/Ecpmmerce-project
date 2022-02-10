import { useRef } from 'react';
import classes from './Contact.module.css'
const Contact = (props)=>{

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        const contact = {
            name: name,
            email: email,
            phone: phone,
        }
        props.putRequest(contact)
        nameRef.current.value='';
        emailRef.current.value='';
        phoneRef.current.value='';
    }


    return (
        <div className={classes.contactBody}>
            <h2>Any Issues? Contact us directly</h2>
            <form className={classes.contactForm} onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" ref={nameRef} className={classes.contactName}></input>
                <label htmlFor="email">Email ID:</label>
                <input id="email" type="text" ref={emailRef} className={classes.contactEmail}></input>
                <label htmlFor="mobile">Phone Number:</label>
                <input id="mobile" type="number" ref={phoneRef} className={classes.contactPhone}></input>
                <button className={classes.contactBtn}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;