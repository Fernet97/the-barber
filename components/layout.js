import styles from './layout.module.css'
import { Navbar, Nav , Offcanvas} from 'react-bootstrap';


export default function Layout({ children }) {
  return (
    <div className= {styles.App}>
        <Navbar className= {styles.Navbar}  fixed="top"  collapseOnSelect expand="md">
        <Navbar.Brand href="/">UpperClass</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Navbar.Offcanvas placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title  href="/">
                UpperClass
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
            <Nav.Link href="areaPrenotazione" >Prenotati</Nav.Link>
            <Nav.Link href="#pricing">Servizi</Nav.Link>
            <Nav.Link href="#pricing">Dove Siamo</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Promo</Nav.Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Navbar>


      <div  className= {styles.main}>
        <div className= {styles.IlCosoDelBarbiereDx}/>
        <div className= {styles.IlCosoDelBarbiereSx}/>

          {children}
      </div>

    </div>
  );
}
