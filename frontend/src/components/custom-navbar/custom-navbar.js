import React, {useState, useEffect} from "react";
import classnames from "classnames";
import axios from "axios";
import {
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Modal,
} from "react-bootstrap";
import FormInput from "../form-input/form-input";
import "./custom-navbar.module.scss";
import {Link} from "react-router-dom";
import {
    useLocation
} from "react-router-dom";

const CustomNavbar = ({nameClass}) => {
    const location = useLocation();
    const [modalShow, setModalShow] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [searchBox, setsearchBox] = useState(false);

    useEffect(() => {
        // axios.get("http://103.215.223.142:8000/api/nav").then((res) => {
        //   setdata(res.data.data);
        // });
    }, []);

    const changeEmail = (str) => {
        setemail(str);
    };

    const changePassword = (str) => {
        setpassword(str);
    };

    const submitMessage = (e) => {
        e.preventDefault();
        const object = {email, password};
        axios
            .post("http://103.215.223.142:8000/api/message", object)
            .then((res) => {
            });
    };
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                className="customnavbar"
                style={{zIndex: 100, marginRight: "-23px", paddingTop: "22px"}}
            >

                <Navbar.Brand href="/">
                    <img src="/images/logo.png" alt="logo" width="135px" height="72px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link
                            href="/"
                            className={`mx-4 ${location.pathname === "/" ? "nav-active" : ""}`}
                        >
                            صفحه نخست
                        </Nav.Link>
                        <NavDropdown   title="درباره چارسو" id="basic-nav-dropdown">
                            <NavDropdown.Item style={{textAlign:"start"}} href="/aboutus">درباره ما</NavDropdown.Item>
                            <NavDropdown.Item style={{textAlign:"start"}}  href="/contactus">تماس با ما</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown  style={{zIndex: "100"}} title="خدمات" id="basic-nav-dropdown2">
                            <NavDropdown.Item style={{textAlign:"start"}}  href="/departments">دپارتمان های کاری</NavDropdown.Item>
                            <NavDropdown.Item style={{textAlign:"start"}}  href="/projects">پروژه های اجرا شده</NavDropdown.Item>
                        </NavDropdown>
                        <Link
                            to="#"
                            className="mx-3 nav-link2"
                        >
                            آموزشگاه
                        </Link>
                        <Link
                            to="#"
                            className={`mx-4 nav-link2 ${nameClass}`}
                        >
                            فروشگاه
                        </Link>
                        <Link
                            to="#"
                            className={`mx-4  nav-link2 ${nameClass}`}
                        >
                            علمی
                        </Link>
                    </Nav>
                    <Nav className="mr-lg-5 pr-0">
                        <Button
                            style={{border: " 2px solid #FFFFFF", borderRadius: "8px"}}
                            onClick={() => setModalShow(true)}
                            bg="transparent"
                            className={
                                `d-flex align-items-center text-white px-3 py-3 py-lg-2 ml-lg-3 mr-lg-5 justify-content-center sign-in border border-white `
                            }
                        >
                            <span className="ml-3">ورود به ناحیه کاربری</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13.056"
                                height="14.5"
                                viewBox="0 0 13.056 14.5"
                            >
                                <g
                                    id="Icon_feather-user"
                                    data-name="Icon feather-user"
                                    transform="translate(0.75 0.75)"
                                >
                                    <path
                                        id="Path_3"
                                        data-name="Path 3"
                                        d="M17.556,26.833V25.389A2.889,2.889,0,0,0,14.667,22.5H8.889A2.889,2.889,0,0,0,6,25.389v1.444"
                                        transform="translate(-6 -13.833)"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        id="Path_4"
                                        data-name="Path 4"
                                        d="M17.778,7.389A2.889,2.889,0,1,1,14.889,4.5,2.889,2.889,0,0,1,17.778,7.389Z"
                                        transform="translate(-9.111 -4.5)"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </g>
                            </svg>
                        </Button>
                        <div
                            style={{cursor: "pointer"}}
                            className={classnames(
                                "mr-lg-4 d-flex px-3 px-lg-0 py-3  justify-content-center search"
                            )}
                            onClick={() => setsearchBox(!searchBox)}
                        >
                            <i  className={`fa fa-search nav-icon-white ${nameClass}`}/>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                {searchBox === true && (
                    <div className="position-absolute search-box">
                        <Form inline className="d-flex flex-nowrap">
                            <Button style={{borderRadius: "10px"}}>جستجو</Button>
                            <FormControl
                                type="text"
                                className="mr-sm-2 w-100 ml-5 ml-md-2 ml-lg-0"
                                style={{borderRadius: "10px"}}
                            />
                        </Form>
                    </div>
                )}
            </Navbar>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header className="bg-primary text-white px-5">
                    <Modal.Title id="contained-modal-title-vcenter">ورود</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={submitMessage}
                        action="http://103.215.223.142:8000/api/text"
                        method="POST"
                    >
                        <Row style={{padding: "20px 100px"}}>
                            <Col xs="12">
                                <FormInput
                                    name="email"
                                    type="email"
                                    handleChange={changeEmail}
                                    value={email}
                                    label="ایمیل"
                                    required
                                />
                            </Col>
                            <Col xs="12">
                                <FormInput
                                    name="password"
                                    type="password"
                                    handleChange={changePassword}
                                    value={password}
                                    label="کلمه عبور"
                                    required
                                />
                            </Col>
                        </Row>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Row className="justify-content-end">
                        <Button
                            variant="primary"
                            type="submit"
                            className="px-5 py-3 ml-4 form-button"
                            onClick={() => setModalShow(false)}
                        >
                            ورود
                        </Button>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default CustomNavbar;
