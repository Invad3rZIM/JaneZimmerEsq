import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { address, phoneNumbers } from "./data";
import Axios from 'axios';

export function ContactInformation(props: { textAlign: "left" | "right" | "center"}) {
    return <>
        <p style={{ textAlign: props.textAlign, fontFamily: "Roboto-Regular" }}><span style={{ fontWeight: "bold" }}> Law Offices of Jane F.<br />
            Zimmer</span><br /><br />
            {address.map(add => <><span>{add}</span><br /></>)}
            <br />
            {phoneNumbers.map(number => <><span>{number}</span><br /></>)}
        </p>
    </>
}

export default function ContactForm(props: { includeContactInfo: boolean }) {
    let color = "orange";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [preferredContactMethod, setContactMethod] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSucess] = useState("");
    const senderFunc = () => {
            console.log({
                name, email, phoneNumber
            });
            
    
            if(!name){
                setError('Missing name');
            }
            if(!email){
                setError('Missing email address');
            }
            if(!phoneNumber){
                setError('Missing phone number');
            }
            if(!message){
                setError('Missing message');
            }
            setError('');
    
            fetch("https://xwmjv2x5y3o4mttebovjd66ehq0yckri.lambda-url.us-east-1.on.aws/",  
                {method: "POST", // *GET, POST, PUT, DELETE, etc.
                 mode: "cors", // no-cors, *cors, same-origin
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
         
                    "body":  "new message",
                    "subject": "Form submit",
                    "message" : "`name: ${name}, email: ${email}, phone: ${phoneNumber}, preferred: ${preferredContactMethod}, message: ${message}`"
                 
            }), // body data type must match "Content-Type" header
          });
        //  return response.json(); // parses JSON response into native JavaScript objects
    }


        
    
    const labelStyle = { color: color, fontFamily: "Roboto-Regular" };
    return <Container style={{ marginTop: 20, fontFamily: "Roboto-Regular", textAlign: "left", borderRightColor: "gray", borderTopColor: "gray", borderLeftWidth: 0.0125, borderLeftStyle: "solid", borderTopWidth: 0.0125 }}>

        <Container>
            <br />
        <Form onSubmit={senderFunc}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={labelStyle}>Name</Form.Label>
                <Form.Control type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)} required />
                <br />
                <Form.Label style={labelStyle}>Email</Form.Label>
                <Form.Control type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />

                <Form.Label style={labelStyle}>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                <br />

                <Form.Label style={labelStyle}>Preferred Method of Contact</Form.Label>

                <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                    <Form.Check.Input type={"radio"} name="group1" />
                    <Form.Check.Label>{`Email`}</Form.Check.Label>
                    <br />
                    <Form.Check.Input type={"radio"} name="group1" />
                    <Form.Check.Label>{`Phone`}</Form.Check.Label>
                </Form.Check>
                <br />
                <Form.Label style={labelStyle}>Message</Form.Label>
                <Form.Control as="textarea" placeholder="" value={message} onChange={(e) => setMessage(e.target.value)} />
                <br/>
                <button onClick={senderFunc}> Submit</button>
            </Form.Group>

        </Form>
        </Container>
        {props.includeContactInfo && <>
            <hr style={{ width: "100%", fontFamily: "Roboto-Regular" , backgroundColor: "black" }} />
            <ContactInformation textAlign="right"/>
        </>}
    </Container>
}