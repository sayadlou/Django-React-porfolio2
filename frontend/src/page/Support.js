import React from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import {Helmet} from "react-helmet";

const navColor = "nav-icon-black";
export default function Oaths() {
    const oathBackground = "#f3f3f3";
    return (
        <div style={{backgroundColor: oathBackground}}>
            <Helmet>
                <title>پشتیبانی خرید</title>
            </Helmet>
            <div className="container" style={{backgroundColor: oathBackground}}>
                <CustomNavbar nameClass={navColor}/>
            </div>
            <div style={{backgroundColor: oathBackground}}>
                <div className="container">
                    <div id="oath1">
                        <div style={{paddingTop: "75px", paddingRight: "75px", height: "150px"}}>
                            <h1 className="Wblack f40 sormei">پشتیبانی خرید</h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end" style={{maxHeight: "448px"}}>
                    <img

                        style={{height: "448px"}}
                        src="/images/support.jpg" className="img-fluid" alt="..."/>
                </div>

                <div className="container mt-5 " style={{fontSize: "19px"}}>
                    <div id="oath2">
                        <div style={{paddingLeft: "25px", paddingBottom: "75px", paddingRight: "15px"}}>
                            <ul className="text-justify ss02">
                                <li style={{listStyleType: "disc"}}>
                                    کارشناسان بخش فروشگاه شرکت چارسو امید توسعه، تمام تلاش خود را می‏‌کنند تا اطلاعات
                                    مورد نیاز برای خرید هر کالا در سایت موجود، کافی و روشن باشد. شما راه ‌‏های مختلفی
                                    برای کسب اطلاعات تکمیلی و تخصصی محصولات دارید. می‌‏توانید از ابزارهای ایجاد شده برای
                                    این منظور از قبیل جدول اطلاعات فنی کالاها استفاده کنید. همچنین ما، نقدها و نظرات
                                    کاربران را با دیدگاه بی‏طرفانه در سایت نمایش می‏‌دهیم که مطالعه آنها می‏‌تواند در
                                    انتخاب کالا به شما کمک کند. همچنین شما می توانید از بخش سوالات متداول جواب بیشتر
                                    سوالات خود را دریافت کنید. با این حال اگر باز هم شما پاسخ سوالات خود را دریافت نکرده
                                    اید می توانید از اطلاعات تماس زیر برای کسب اطلاعات بیشتر استفاده کنید.
                                </li>
                                <br className="my-3"/>
                                <li style={{listStyleType: "disc"}}>
                                    ایمیل: info@comidt.ir
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    شماره تلفن: 02126200367
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    شماره موبایل: 09120150710
                                </li>
                                <br className="my-3"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer background={oathBackground}/>
        </div>
    );
}
