import React from 'react'
import {Link} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG} from "../assets/svg/to-top3.svg";


const Footer = ({background}) => {
    return (
        <React.Fragment>
            <ScrollToTop style={{right: "10px", bottom: "15px", height: "20px"}} smooth component={<MySVG/>}/>
            <div style={{backgroundColor: background}}>
                <div className="container">
                    <div className="row pr-5 text-rtl pt-5">
                        <div className="col-lg-3">
                            <img src="/images/logo-1.png" alt="چارسو امید ایرانیان"/>
                            <p className="my-4 f14 text-justify">
                                این شرکت، براساس نگرشی پویا به منظور ارائه خدمات مهندسی، ایجاد گردیده است. ما خود را به
                                عنوان
                                آغازگر جریانی نو می دانیم که در تلاش هستیم با بهبود مستمر، این رسالت بزرگ خود را بر پایه
                                دانش
                                روز با كیفیت هر چه بیشتر به انجام برسانیم.
                            </p>
                            <div className="row">
                                <div className="col-6 p-0">
                                    <p className="d-inline p-1 f14">info@comidt.ir</p>
                                    <img src="/images/email.png" alt="Email"/>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="d-inline p-1 f14 ss02">021-26200367</p>
                                    <img src="/images/phone-number.png" alt="Phone number"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 footer-link f14">
                            <h4 className="text-fosfori f18 Wbold">
                                دسترسی سریع
                            </h4>
                            <Link target="_blank" to="/faq">

                                پاسخ به پرسش‌های متداول

                            </Link>
                            <Link target="_blank" to="/rules">

                                قوانین و مقررات

                            </Link>
                            <Link target="_blank" to="/support">

                                پشتیبانی خرید

                            </Link>
                            <Link target="_blank" to="/privacy">
                                حریم خصوصی
                            </Link>
                            <Link target="_blank" to="/contact-ceo">
                                ارتباط مستقیم با مدیریت
                            </Link>
                        </div>
                        <div className="col-lg-3 footer-link">
                            <h4 className="text-fosfori f18 Wbold">
                                پیوند ها
                            </h4>
                            <a target="_blank" href="https://www.president.ir/fa/">

                                پایگاه اطلاع رسانی ریاست جمهوری

                            </a>
                            <a target="_blank" href="https://www.mrud.ir/">

                                وبسایت وزارت راه و شهرسازی

                            </a>
                            <a target="_blank" href="https://moe.gov.ir/">

                                پایگاه اینترنتی وزارت نیرو

                            </a>
                            <a target="_blank" href="https://www.mporg.ir/home/wid/news">

                                سازمان برنامه و بودجه کشور

                            </a>
                            <a target="_blank" href="http://www.irceo.net/Default.aspx">

                                سازمان نظام مهندسی ساختمان

                            </a>
                        </div>
                        <div className="col-lg-3" style={{paddingTop: "77px"}}>
                            <h4 className="text-fosfori f18 Wbold">
                                شبکه های اجتماعی
                            </h4>
                            <div className="social-network text-ltr d-flex justify-content-center my-5">
                                <a target="_blank" href="tg://resolve?domain=comidt">
                                    <img className="" src="/images/telegram.png" alt="telegram"/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/comidt.ir">
                                    <img className="icon-down" src="/images/instagram.png" alt="instagram"/>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCkT1Yh_pMtpeRIjC_lJdL9w">
                                    <img className="" src="/images/youtube.png" alt="youtube"/>
                                </a>
                                <a target="_blank" href="https://www.aparat.com/comidt.ir">
                                    <img className="icon-down" src="/images/aparat.png" alt="aparat"/>
                                </a>
                                <a target="_blank"
                                   href="https://www.linkedin.com/in/%D8%B4%D8%B1%DA%A9%D8%AA-%DA%86%D8%A7%D8%B1%D8%B3%D9%88-%D8%A7%D9%85%DB%8C%D8%AF-%D8%AA%D9%88%D8%B3%D8%B9%D9%87-8407b5203/">
                                    <img className="" src="/images/linkdin.png" alt="linkdin"/>
                                </a>
                                <a target="_blank" href="https://twitter.com/tVq92LjS3WpH2FX">
                                    <img className="icon-down" src="/images/twiteer.png" alt="twiteer"/>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <a href="https://www.comidt.ir">
                                        <img src="/images/light.png" alt="web"/>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="https://www.comidt.ir">
                                        <img src="/images/e-namad.png" alt="namad"/>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="https://www.comidt.ir">
                                        <img src="/images/light.png" alt="web"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-3 " style={{backgroundColor: background}}>
                    <h5 className="bg-lajani py-3 mb-0 text-center text-white ">تمام حقوق این سایت متعلق به شرکت چارسو
                        امید توسعه
                        می باشد و هرگونه کپی برداری بدون درج منبع آن، پیگرد قانونی خواهد داشت</h5>
                </div>

            </div>
        </React.Fragment>

    )
}
Footer.defaultProps = {
    background: "#FFFFFF"
}
export default Footer;