import { Col, Row } from "react-bootstrap";

export default function Footer() {
    return <>
    <br/><br/>
    <div style={{background:"rgb(5,0,0)"}}>
    <br/>
        <Row>
            <Col sm={4}></Col>
            <Col sm={4}></Col>
            <Col sm={4}></Col>
        </Row>
        <span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>2023 Law Office of Jane F. Zimmer</span><br/>
        <span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>Website Disclaimer | Privacy Policy </span><br/>
        <span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.</span><br/>
        <span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>Law Firm Web Design by Kirk Zimmer</span><br/><br/>
    </div></>
}