import React, {useState} from "react";
import {Row, Col, Button, Modal} from "react-bootstrap";
import FormInput from "./FormInput";
import axios from "axios";

const ContactUsC = ({data}) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [title, settitle] = useState("");
    const [text, settext] = useState("");
    const [file, setfile] = useState("");
    const [show, setShow] = useState(false);

    const [latitude] = useState("35.624595")
    const [longitude] = useState("51.419667")
    const changeEmail = (str) => {
        setemail(str);
    };

    const changePhone = (str) => {
        setphone(str);
    };

    const changeTitle = (str) => {
        settitle(str);
    };

    const changeName = (str) => {
        setname(str);
    };

    const changeText = (str) => {
        settext(str);
    };
    const changeFile = (e) => {
        setfile(e.target.files[0]);
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
    const createMarkup = () => {
        // return {__html: "<iframe width=\"425\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://www.openstreetmap.org/export/embed.html?bbox=51.41760349273682%2C35.62608194908785%2C51.425821781158454%2C35.6310526396224&amp;layer=mapnik&amp;marker=35.62856733298726%2C51.42171263694763\" style=\"border: 1px solid black\"></iframe><br/><small><a href=\"https://www.openstreetmap.org/?mlat=35.62857&amp;mlon=51.42171#map=17/35.62857/51.42171&amp;layers=ND\">View Larger Map</a></small>"};
        // return {__html: `<iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed&language=fa"" />`};
        return {__html: `<iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed&language=fa"" />`};
    }

    return (
        <div className="main-container contact-us mt-lg-5 pl-0 ml-0">
            <Row className="box-left justify-content-between">
                <Col lg={5} xs={12}>
                    <div className="text-secondary  mb-3">{data.title1}</div>
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
                                            for="file"
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
                <Col lg={5} xs={12} className="location">
                    <div style={{height: "334px"}} class="embed-responsive embed-responsive-16by9"
                         dangerouslySetInnerHTML={createMarkup()}/>
                    <div className="my-5 d-flex align-items-center">
                        <div className="icon ml-2 d-flex align-items-center justify-content-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13.69"
                                height="19.557"
                                viewBox="0 0 13.69 19.557"
                            >
                                <path
                                    id="Icon_material-location-on"
                                    data-name="Icon material-location-on"
                                    d="M14.345,3A6.84,6.84,0,0,0,7.5,9.845c0,5.134,6.845,12.712,6.845,12.712S21.19,14.979,21.19,9.845A6.84,6.84,0,0,0,14.345,3Zm0,9.29A2.445,2.445,0,1,1,16.79,9.845,2.446,2.446,0,0,1,14.345,12.29Z"
                                    transform="translate(-7.5 -3)"
                                    fill="#0098a0"
                                />
                            </svg>
                        </div>
                        <span className="f16 ss02">{data.address}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="icon ml-2 d-flex align-items-center justify-content-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13.176"
                                    height="13.176"
                                    viewBox="0 0 13.176 13.176"
                                >
                                    <path
                                        id="Icon_awesome-phone"
                                        data-name="Icon awesome-phone"
                                        d="M12.7.633,10.02.015a.622.622,0,0,0-.708.358L8.077,3.255a.616.616,0,0,0,.178.721L9.814,5.252a9.537,9.537,0,0,1-4.56,4.56L3.978,8.252a.617.617,0,0,0-.721-.178L.375,9.31a.625.625,0,0,0-.36.71L.633,12.7a.617.617,0,0,0,.6.479,11.939,11.939,0,0,0,11.94-11.94A.617.617,0,0,0,12.7.633Z"
                                        transform="translate(0.001 0.001)"
                                        fill="#0098a0"
                                    />
                                </svg>
                            </div>
                            <span className="ss02">{data.phone}</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span>{data.email}</span>
                            <div className="icon mr-2 d-flex align-items-center justify-content-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14.562"
                                    height="10.921"
                                    viewBox="0 0 14.562 10.921"
                                >
                                    <path
                                        id="Icon_simple-gmail"
                                        data-name="Icon simple-gmail"
                                        d="M14.562,5.41v9.1a.894.894,0,0,1-.91.91h-.91V7.162L7.281,11.083,1.82,7.162v8.259H.91a.893.893,0,0,1-.91-.91V5.41A.894.894,0,0,1,.91,4.5h.3L7.281,8.9l6.067-4.4h.3a.894.894,0,0,1,.91.91Z"
                                        transform="translate(0 -4.5)"
                                        fill="#0098a0"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className="d-none d-lg-block p-0">
                    <img
                        src="./images/nick-morrison-FHnnjk1Yj7Y-unsplash.png"
                        alt=""
                        width="100%"
                        height="473px"
                    />
                </Col>
            </Row>
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
        </div>
    );
};
export default ContactUsC;
