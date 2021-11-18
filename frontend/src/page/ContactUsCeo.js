import React, {useEffect, useState} from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import ContactUsC from "../components/ContactUsC";
import {Button, Col, Modal, Row} from "react-bootstrap";
import FormInput from "../components/FormInput";
import axios from "axios";
import {Helmet} from "react-helmet";

const navColor = "nav-icon-black";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [file, setFile] = useState("");
    const [show, setShow] = useState(false);

    const changeEmail = (str) => {
        setEmail(str);
    };

    const changePhone = (str) => {
        setPhone(str);
    };

    const changeTitle = (str) => {
        setTitle(str);
    };

    const changeName = (str) => {
        setName(str);
    };

    const changeText = (str) => {
        setText(str);
    };
    const changeFile = (e) => {
        setFile(e.target.files[0]);
    };

    const submitMessage = (e) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("text", text);
        formData.append("name", name);
        formData.append("file", file);
        formData.append("email", email);
        formData.append("phone", phone);
        e.preventDefault();
        axios
            .post("http://103.215.223.142:8000/api/message", formData)
            .then((res) => {
                setShow(true);
            });
    };
    useEffect(() => {

    }, [])
    const data = {
        title1: "با ما همراه باشید",
        title2: "تماس با مدیریت",
        address: "تهران، بلوار شهيد برادران دستواره، كوچه شهيد سرلك، پلاك 146 مجتمع پارسيان، بلوك 3، طبقه چهارم، واحد 351",
        phone: "021-26200367",
        email: "info@comidt.ir",
    }
    const backGround = "#f000000";
    return (
        <div style={{backgroundColor: backGround}}>
            <Helmet>
                <title>تماس با مدیریت</title>
            </Helmet>
            <div className="container" style={{backgroundColor: backGround}}>
                <CustomNavbar nameClass={navColor}/>
            </div>
            <div style={{backgroundColor: backGround}}>
                <div className="container">
                    <div id="oath1">
                        <div style={{paddingTop: "75px", paddingRight: "75px", height: "150px"}}>
                            <h1 className="Wblack f40 sormei">ارتباط مستقیم با مدیریت</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-11">
                        <div style={{maxHeight: "537px"}}>
                            <img
                                style={{height: "537px"}}
                                src="/images/contact-to-ceo.png" className="img-fluid" alt="..."/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="main-container contact-us mt-lg-5 mx-5 pr-5" style={{backgroundColor: backGround}}>
                <Row className="box-left justify-content-between">
                    <Col lg={12} xs={12}>
                        {/*<div className="text-secondary  mb-3">{data.title1}</div>*/}
                        <h2 className="f40 Wblack sormei mt-2 mb-5">{data.title2}</h2>
                        <div className="group">
                            <form
                                onSubmit={submitMessage}
                                action="http://103.215.223.142:8000/api/text"
                                method="POST"
                            >
                                <Row>
                                    <Col xs="12">
                                        <FormInput
                                            name="name"
                                            type="text"
                                            handleChange={changeName}
                                            value={name}
                                            label="نام و نام خانوادگی"
                                            required
                                        />
                                    </Col>
                                    <Col xs="12" md="6">
                                        <FormInput
                                            name="email"
                                            type="email"
                                            handleChange={changeEmail}
                                            value={email}
                                            label="ایمیل"
                                            required
                                        />
                                    </Col>
                                    <Col xs="12" md="6">
                                        <FormInput
                                            name="phone"
                                            type="phone"
                                            handleChange={changePhone}
                                            value={phone}
                                            label="تلفن همراه"
                                            required
                                        />
                                    </Col>
                                    <Col xs="12">
                                        <FormInput
                                            name="title"
                                            type="text"
                                            handleChange={changeTitle}
                                            value={title}
                                            label="موضوع پیام"
                                            required
                                        />
                                    </Col>
                                    <Col xs="12">
                                        <FormInput
                                            name="text"
                                            type="text"
                                            handleChange={changeText}
                                            value={text}
                                            label="متن پیام"
                                            required
                                        />
                                    </Col>
                                    <Col xs="12">
                                        <Row className="justify-content-end">
                                            <label
                                                htmlFor="file"
                                                className="px-3 py-3 ml-4 mb-lg-0 form-button text-secondary"
                                                style={{cursor: "pointer"}}
                                            >
                                                ارسال پیوست
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="15.992"
                                                    height="15.989"
                                                    viewBox="0 0 15.992 15.989"
                                                    className="mr-4"
                                                >
                                                    <path
                                                        id="Icon_awesome-upload"
                                                        data-name="Icon awesome-upload"
                                                        d="M9.245,12h-2.5a.748.748,0,0,1-.75-.75V6H3.258a.624.624,0,0,1-.44-1.065L7.568.181a.605.605,0,0,1,.853,0l4.754,4.754A.624.624,0,0,1,12.734,6H9.995v5.247A.748.748,0,0,1,9.245,12Zm6.746-.25v3.5a.748.748,0,0,1-.75.75H.75a.748.748,0,0,1-.75-.75v-3.5A.748.748,0,0,1,.75,11H5v.25A1.75,1.75,0,0,0,6.746,13h2.5a1.75,1.75,0,0,0,1.749-1.749V11h4.248A.748.748,0,0,1,15.992,11.747ZM12.119,14.5a.625.625,0,1,0-.625.625A.627.627,0,0,0,12.119,14.5Zm2,0a.625.625,0,1,0-.625.625A.627.627,0,0,0,14.118,14.5Z"
                                                        transform="translate(0 -0.005)"
                                                        fill="#00626d"
                                                    />
                                                </svg>
                                            </label>
                                            <input
                                                type="file"
                                                id="file"
                                                name="file"
                                                className="d-none "
                                                onChange={changeFile}
                                            />

                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className="px-3 py-3 ml-4 form-button"
                                            >
                                                ارسال پیام
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="13.268"
                                                    height="13.266"
                                                    viewBox="0 0 13.268 13.266"
                                                    className="mr-4"
                                                >
                                                    <path
                                                        id="Icon_ionic-ios-send"
                                                        data-name="Icon ionic-ios-send"
                                                        d="M17.352,4.533,4.667,10.061a.291.291,0,0,0,.01.529l3.431,1.939a.553.553,0,0,0,.632-.062l6.766-5.833c.045-.038.152-.111.194-.069s-.024.149-.062.194L9.785,13.351a.551.551,0,0,0-.055.66l2.243,3.6A.292.292,0,0,0,12.5,17.6L17.743,4.916A.291.291,0,0,0,17.352,4.533Z"
                                                        transform="translate(-4.503 -4.503)"
                                                        fill="#fff"
                                                    />
                                                </svg>
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
            <Modal
                show={show}
                onHide={() => {
                    setShow(false);
                }}
                style={{zIndex: "500000"}}
            >
                <Modal.Header className="bg-success" closeButton/>
                <Modal.Body>پیام با موفقیت ارسال شد!</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="success"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        تایید
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer/>
        </div>
    );
}
