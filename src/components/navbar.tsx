import { Container } from "react-bootstrap";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function NavBar() {
    const linkages: string[] = [
        "Home",
        "Firm-Overview",
        "Attorney-Profiles",
        "Practice-Areas",
        "Contact",
        "Blog",
        "Resources",
    ];


    let buttonCSS = {
        border:"rgb(255,255,255,0.25) 0.25px solid", 
        borderLeftWidth:0.5, borderRightWidth:0.5,  
        height:75, color:"white", backgroundColor:"rgb(70,50,120,.85)",
        cursor: "pointer",
    };

    return <Col sm={12} style={{ verticalAlign:"center", alignContent:"center", textAlign:"center", paddingTop:25}}>
                <ul style={{listStyleType: "none"}}> 
                    {linkages.map((link) => 
                        <span style={{paddingLeft:30, paddingRight:30, }}><Link className="topLink" to={"/"+(link !== "Home" ? link : "")}><span className="topLink" style={{ fontFamily: "Roboto-Regular", fontSize:18}}>{link.replace("-", " ")}</span></Link>
                        </span>
                    )}
                </ul>
            <div className="scale">

                <Row style={{paddingLeft:15, height:75, paddingTop:225, width:"100%"}}>
                <Col sm={2} className="hoverTransition" style={buttonCSS} onClick={()=>{console.log("click")}}><a style={{textDecoration:"none", color:"white",}} href="/Practice-Areas/Elder-Law"><p style={{ textAlign:"center", paddingTop:20, fontFamily:"Roboto-Regular", fontSize:16}}>Elder Law</p></a></Col>
                <Col sm={2} className="hoverTransition" style={buttonCSS} onClick={()=>{console.log("click")}}><a style={{textDecoration:"none", color:"white",}} href="/Practice-Areas/Estate-Administration"><p style={{ textAlign:"center",  paddingTop:20, fontFamily:"Roboto-Regular", fontSize:16}}>Estate Planning</p></a></Col>
                <Col sm={2} className="hoverTransition" style={buttonCSS} onClick={()=>{console.log("click")}}><a style={{textDecoration:"none", color:"white",}} href="/Practice-Areas/Special-Needs-Planning"><p style={{ textAlign:"center",  paddingTop:20, fontFamily:"Roboto-Regular", fontSize:16}}>Special Needs Planning</p></a></Col>
                <Col sm={2} className="hoverTransition" style={buttonCSS} onClick={()=>{console.log("click")}}><a style={{textDecoration:"none", color:"white",}} href="/Practice-Areas/Estate-Administration"><p style={{ textAlign:"center",  paddingTop:20, fontFamily:"Roboto-Regular", fontSize:16}}>Estate Administration</p></a></Col>
                <Col sm={2} className="hoverTransition" style={buttonCSS} onClick={()=>{console.log("click")}}><a style={{textDecoration:"none", color:"white",}} href="/Practice-Areas/Special-Needs-Planning"><p style={{ textAlign:"center",  paddingTop:20, fontFamily:"Roboto-Regular", fontSize:16}}>Mental Health Law</p></a></Col>
                <Col sm={2} className="hoverTransition" style={buttonCSS} onClick={()=>{console.log("click")}}><a style={{textDecoration:"none", color:"white",}} href="/Practice-Areas/Guardianship-&-Estate-Litigation"><p style={{ textAlign:"center",  paddingTop:20, fontFamily:"Roboto-Regular", fontSize:16}}>Guardianships</p></a></Col>
                </Row>
            </div>
        </Col>
}