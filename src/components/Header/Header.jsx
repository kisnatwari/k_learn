import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
} from "react-bootstrap";
import "./Header.css";
import "font-awesome/css/font-awesome.css";
import "animate.css/animate.min.css"

import { BrowserRouter as Router, Link } from "react-router-dom";
import Menu from "../../json-api/Menu.json";
import Brand from "../../json-api/Brand.json";

const NormalMenu = (data) => {
    return (
        <>
            <Link className={data.menuInfo.button ? "btn btn-primary nav-link" : "nav-link"} to={data.menuInfo.url}>
                {data.menuInfo.label}
            </Link>
        </>
    )

}

const DropdownMenu = (data) => {
    const design = (
        <>
            <NavDropdown title={data.menuInfo.label} id="basic-nav-dropdown">
                <i className="fa fa-caret-up up-arrow"></i>
                {
                    data.menuInfo.dropdownMenu.map((data) => {
                        return (
                            <NormalMenu menuInfo={data} key={data.key} />
                        )
                    })
                }
            </NavDropdown>
        </>
    );
    return design;
}


const Header = () => {
    const design = (
        <>
            <Navbar bg="transparent" expand="lg" className="border-bottom border-bottom-white fixed-top">
                <Container>
                    <Navbar.Brand>
                        <img src={Brand.logo_sm} alt="" className="me-2 nav-img rounded-circle" />
                        {Brand.name}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                Menu.map((data) => {
                                    if (data.dropdown) {
                                        return <DropdownMenu menuInfo={data} key={data.key} />
                                    }
                                    return <NormalMenu menuInfo={data} key={data.key} />
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
    return design;
}

export default Header;