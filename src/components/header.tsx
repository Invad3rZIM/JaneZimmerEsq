import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { address } from './data';

export default function Header() {
    return <Container fluid="sm">
      <Row style={{paddingTop:45, paddingRight:"5%", paddingLeft:"5%"}}>
        <Col sm={4}><h4 style={{ fontFamily: "Spectral-Regular", textAlign:"left" }}>Law Offices of<br /><span style={{color:"orange"}}>Jane F. Zimmer</span></h4></Col>
        <Col sm={4}></Col>
        <Col sm={4} ><p style={{ fontFamily: "Spectral-Regular", textAlign:"right" }}>{address.map(add => <><span>{add}</span><br/></>)}</p></Col>
      </Row>
    </Container>
}