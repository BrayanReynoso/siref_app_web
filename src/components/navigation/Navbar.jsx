import logo from "../../assets/img/logo_jorges.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPersonCircle, BsSearch , BsFillArrowRightCircleFill } from "react-icons/bs";

function NavbarUser() {
  return (
    <>
      <Container fluid style={{backgroundColor:"#37424A", height:"60px"}}>
        <Row>
          <Col style={{
        }} >
            <img src={logo} style={{marginLeft:"9%", width:"20%"}}/>
            
          </Col>
          <Col style={{color:"white", marginTop:"1%", textAlign:"center", fontSize:"20px"}}>
          Sistema de Gestion para Refacciones Automotrices 
          </Col>
          <Col style={{backgroundColor:"green", justifyContent:"center", display:"flex"}} >
            <Button className="shadow-sm w-150 w-md-auto"  variant="danger">
              Cerrar Sesión <BsFillArrowRightCircleFill size={"15"}/>
            </Button></Col>
        </Row>
      </Container>
      <Navbar className="shadow-sm" style={{ backgroundColor: "#f57921" }} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ marginLeft: "8%", color: "white" }}>
            SIREF
          </Navbar.Brand>
          <Form
              className="d-flex"
              style={{ marginRight: "15%", width: "50%", marginLeft:"15%"}}
            >
              <Form.Control
                type="search"
                placeholder='Encuentra refacciones'
                className="me-2 w-100 w-md-auto"
                aria-label="Search"
              />
              <Button variant="primary"><BsSearch size={'25'}/></Button>
            </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            <div style={{  textAlign:"center"}}>Menesio osegera<BsPersonCircle style={{marginLeft:"5%"}} size={'25'}/></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarUser;
