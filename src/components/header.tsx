import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { address } from './data';
import { useWindowSize } from './utils';

export default function Header() {

    const [width, height] = useWindowSize();
    
    let x = width < 576;
    return <Container fluid="sm">
      <Row style={{paddingTop:45, paddingRight:width >= 576 ? "5%" : "0%", paddingLeft: width >= 576 ? "5%" : "0%"}}>
        <Col xs={12} sm={4}><h4 style={{ fontFamily: "Spectral-Regular", textAlign:width >= 576 ? "left" : "center" }}>Law Office of<br /><span style={{color:"orange"}}>Jane Fearn-Zimmer</span></h4></Col>
        <Col sm={4}></Col>
        <Col sm={4} ><p style={{ fontFamily: "Spectral-Regular", paddingTop: width < 576 ? 15 : 0, textAlign:width >= 576 ? "right" : "center" }}>{address.map(add => <><span>{add}</span><br/></>)}</p></Col>
      </Row>
    </Container>
}