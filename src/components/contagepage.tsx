import { Col, Container, Row } from "react-bootstrap";
import { ContactInformation } from "./contactform";

const AddressMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.6670436398788!2d-74.92428718300779!3d39.88915177386787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1348067f47265%3A0xa460d4f0e6b64bd9!2s30%20S%20Maple%20Ave%2C%20Marlton%2C%20NJ%2008053!5e0!3m2!1sen!2sus!4v1677885763091!5m2!1sen!2sus"
            width="100%" height="425"
            style={{ border: 1 }} allowFullScreen={true} aria-hidden={true} tabIndex={0}></iframe>
    );
}

export function ContactPage() {
    return <Row>
        <Col sm={8}>
            <div style={{ }}>
                <AddressMap />
            </div>
        </Col>
        <Col sm={4}>
            <Container>
                <p style={{ fontFamily: "Roboto-Regular", fontWeight: "bold", color: "orange", textAlign: "center", fontSize:20 }}>Contact Information</p>
                <ContactInformation textAlign="center"/>
            </Container>
        </Col>
    </Row>
}