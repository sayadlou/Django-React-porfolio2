import React, {useEffect} from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import ContactUsC from "../components/ContactUsC";
import {Helmet} from "react-helmet";

const navColor = "nav-icon-black";

export default function ContactUs() {
    useEffect(() => {

    }, [])
    const data = {
        title1: "با ما همراه باشید",
        title2: "چارسو در کنار شما",
        address: "تهران، بلوار شهيد برادران دستواره، كوچه شهيد سرلك، پلاك 146 مجتمع پارسيان، بلوك 3، طبقه چهارم، واحد 351",
        phone: "021-26200367",
        email: "info@comidt.ir",
    }
    return (
        <React.Fragment>
            <Helmet>
                <title>تماس با ما</title>
            </Helmet>
            <div className="container">
                <CustomNavbar nameClass={navColor}/>
            </div>
            <ContactUsC data={data}/>
            <Footer/>
        </React.Fragment>
    );
}
