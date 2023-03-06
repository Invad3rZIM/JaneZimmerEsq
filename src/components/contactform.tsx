import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { address, phoneNumbers } from "./data";

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

    
    const labelStyle = { color: color, fontFamily: "Roboto-Regular" };
    return <Container style={{ marginTop: 20, fontFamily: "Roboto-Regular", textAlign: "left", borderRightColor: "gray", borderTopColor: "gray", borderLeftWidth: 0.0125, borderLeftStyle: "solid", borderTopWidth: 0.0125 }}>

        <Container>
            <br />
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={labelStyle}>Name</Form.Label>
                <Form.Control type="text" placeholder="" onChange={(text)=>{
                }} />
                <br />
                <Form.Label style={labelStyle}>Email</Form.Label>
                <Form.Control type="email" placeholder="" />
                <br />

                <Form.Label style={labelStyle}>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="" />
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
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>

        </Container>
        {props.includeContactInfo && <>
            <hr style={{ width: "100%", fontFamily: "Roboto-Regular" , backgroundColor: "black" }} />
            <ContactInformation textAlign="right"/>
        </>}
    </Container>
}