import React, {useRef, useState} from "react";
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css";
import {Link} from "react-router-dom";
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {Helmet} from "react-helmet";

const navColor = "nav-icon-black";

const AboutUs = () => {
    const mamoriat = useRef(null);
    const ethic = useRef(null);
    const anavin = useRef(null);
    const coperation = useRef(null);
    const outh = useRef(null);

    const aboutUs = {
        resume: [
            "images/customer-1.png",
            "images/customer-2.png",
            "images/customer-3.png",
            "images/customer-4.png",
            "images/customer-5.png",
        ],
        certificates: [
            {
                picture: "images/certificates.png",
                title: "گواهینامه 1"
            },
            {
                picture: "images/certificates.png",
                title: "گواهینامه 2"
            },
            {
                picture: "images/certificates.png",
                title: "گواهینامه 3"
            },
            {
                picture: "images/certificates.png",
                title: "گواهینامه 4"
            },
            {
                picture: "images/certificates.png",
                title: "گواهینامه 5"
            },
        ],
        appreciations: [
            {
                picture: "images/appreciation.png",
                title: "لوح تقدیر 1"
            },
            {
                picture: "images/appreciation.png",
                title: "لوح تقدیر 2"
            },
            {
                picture: "images/appreciation.png",
                title: "لوح تقدیر 3"
            },
            {
                picture: "images/appreciation.png",
                title: "لوح تقدیر 4"
            },
            {
                picture: "images/appreciation.png",
                title: "لوح تقدیر 5"
            },
        ],
        associations: [
            {
                picture: "images/association.png",
                title: "انجمن 1"
            },
            {
                picture: "images/association.png",
                title: "انجمن 1"
            },
            {
                picture: "images/association.png",
                title: "انجمن 1"
            },
            {
                picture: "images/association.png",
                title: "انجمن 1"
            },
            {
                picture: "images/association.png",
                title: "انجمن 1"
            },
        ],

    }
    const picArenge = (arrays) => {
        return arrays.map(
            (array, index) => {
                return (
                    <div className="my-4" key={index}>
                        <Zoom>
                            <img className="d-block" src={array.picture} alt="..." key={index}/>
                        </Zoom>
                        <h6 className="text-center text-fosfori Wbold my-5">
                            {array.title}
                        </h6>
                    </div>
                )
            }
        )
    }
    const [description, setDescription] = useState(picArenge(aboutUs.certificates));
    const [p1Class, setP1Class] = useState("tab-active");
    const [p2Class, setP2Class] = useState("tab-deactivate");
    const [p3Class, setP3Class] = useState("tab-deactivate");
    const action1 = () => {
        setDescription(
            picArenge(aboutUs.certificates)
        );
        setP1Class("tab-active")
        setP2Class("tab-deactivate")
        setP3Class("tab-deactivate")
    }
    const action2 = () => {
        setDescription(
            picArenge(aboutUs.appreciations)
        );
        setP1Class("tab-deactivate")
        setP2Class("tab-active")
        setP3Class("tab-deactivate")
    }
    const action3 = () => {
        setDescription(
            picArenge(aboutUs.associations)
        );
        setP1Class("tab-deactivate")
        setP2Class("tab-deactivate")
        setP3Class("tab-active")
    }
    const goToEthic = () => {
        ethic.current.scrollIntoView({
                behavior: "smooth",


            }
        )
    }
    const goToAnavin = () => {
        anavin.current.scrollIntoView({
                behavior: "smooth",
            }
        )
    }
    const goToCoperation = () => {
        coperation.current.scrollIntoView({
                behavior: "smooth",
            }
        )
    }


    const goToMamoriat = () => {
        mamoriat.current.scrollIntoView({
                behavior: "smooth",
            }
        )
    }
    const goToOuth = () => {
        outh.current.scrollIntoView({
                behavior: "smooth",
            }
        )
    }
    const renderedResume = aboutUs.resume.map(
        (symbol, index) => {
            return (
                <img src={symbol} alt="..." key={index}/>
            )
        }
    )
    return (
        <React.Fragment>
            <Helmet>
                <title>درباره ما</title>
            </Helmet>
            {/*<Nav/>*/}
            <div className="container">
                <CustomNavbar nameClass={navColor}/>
            </div>

            <div className="l-container pl-0" style={{paddingRight: "33px"}}>
                <div className="row">
                    <div className="col-10 pl-0">
                        <h5 className="text-fosfori mt-3 ">
                            شعار ما بهترین تعهد ماست
                        </h5>
                        <h1 className="f40 Wblack sormei mb-4">
                            کیفیت ، تخصص ، صداقت
                        </h1>
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src="/images/component21.png" alt="شعر"/>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button onClick={goToOuth} target="_blank" className="btn btn-outline-primary text-fosfori"
                                    to="/oaths">
                                <img src="/images/about-us-icon-1.png" alt=""/>
                                &nbsp;                                سوگند نامه مهندسی
                            </button>
                            <button onClick={goToMamoriat} className="btn btn-outline-primary text-fosfori">
                                <img src="/images/about-us-icon-2.png" alt=""/>
                                &nbsp;                            ماموریت سازمانی
                            </button>
                            <button onClick={goToEthic} className="btn btn-outline-primary text-fosfori">
                                <img src="/images/about-us-icon-3.png" alt=""/>
                                &nbsp;                            اصول اخلاق حرفه ای
                            </button>
                            <button onClick={goToAnavin} className="btn btn-outline-primary text-fosfori">
                                <img src="/images/about-us-icon-4.png" alt=""/>
                                &nbsp;                            عناوین کسب شده
                            </button>
                            <button onClick={goToCoperation} className="btn btn-outline-primary text-fosfori">
                                <img src="/images/about-us-icon-5.png" alt=""/>
                                &nbsp;                              همکاری با شرکت ها
                            </button>
                        </div>
                    </div>
                    <div className="col-2 px-0 mx-0 pt-3" id="section2" style={{paddingRight: "-15px"}}>
                        <img src="/images/about-us-1.png" className="img-fluid ms-n5" alt="..."/>
                    </div>
                </div>

            </div>
            <div className="l-container" style={{paddingRight: "33px"}}>
                <div ref={outh} style={{paddingTop: "10px"}}>
                    <div style={{marginTop: "70px", marginBottom: "80px"}}>
                        <h1 className="f40 Wblack sormei my-3">
                            سوگند نامه مهندسی
                        </h1>
                        <p className="f18 sormei">
                            من در پیشگاه خداوند متعال ، سوگند یاد می‌کنم : در مقام یک مهندس ، در تمام فعالیت‌های خود،
                            صداقت،
                            دقت، نظم، حفظ منافع اجتماع و رعایت حقوق همگان را سر لوحه‌ی کار خود در نظر گرفته، ایمنی،
                            سلامت و
                            آینده‌ی انسان‌ها را در نظر بگیرم و منافع مردم را برتر از همه‌ی تمایلات
                            ... خویش قرار دهم
                        </p>
                        <Link target="_blank" to="/oaths" className="text-fosfori d-flex justify-content-end f14 ">
                            <span className="under-line">
                                مطالعه متن کامل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="l-container" ref={mamoriat} style={{paddingRight: "33px", background: "#F7F7F7"}}>
                <div className="row srow" style={{}}>
                    <div className="col-4">
                        <div className="mr-3" id="section3">
                        </div>
                    </div>
                    <div className="col-8 khat-mashy">
                        <h5 className="text-fosfori f18">برای بهترین ها تلاش میکنیم</h5>
                        <h1 className="f40 Wblack sormei my-3">
                            خط مشی و ماموریت سازمانی
                        </h1>
                        <ul className="f18 mamoriat" style={{color: "black"}}>
                            <li>
                                <h5>
                                    ایجاد بستر مناسب برای مشارکت نیروهای متخصص و متعهد در صحنه توسعه اقتصادی
                                    کشور
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    کارآفرینی برای جوانان وطن عزیزمان ایران
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    اعتماد آفرینی در اجرای مناسب و به ‌موقع تعهدات
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    پاسخگو در قبال کارفرما
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    نهادینه کردن کیفیت در کل زنجیره ارائه خدمات
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    بهره‌مندی از کارکنان توانمند و دانش محور
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    توجه به سلامت، ایمنی، رشد و ایجاد انگیزه و خشنودی کارکنان
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    تلاش در جهت ارتقاء سطح علمی و فرهنگی کارکنان
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    متعهد به حفظ محیط زیست در راستای مسئولیت اجتماعی
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    اعتقاد به فرهنگ دینی، ملی و تجلی آن در رفتار، گفتار و کردار خود
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    پایبندی به ارزش های اخلاقی (اعتماد و احترام متقابل، برخورد صادقانه و صریح، عدل
                                    (...و انصاف، پایبندی به قانون، وفای به عهد و
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    استفاده از تجربیات بزرگان و صاحب نظران در ارائه خدمت
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div ref={ethic} className="container"
                 style={{marginTop: "50px", marginBottom: "80px", paddingRight: "85px", paddingTop: "30px"}}>
                <h1 className="f40 Wblack sormei mb-5">
                    نظام نامه رفتار حرفه ای اخلاقی در مهندسی ساختمان
                </h1>
                <p className="f18 sormei">
                    برای مشاهده متن کامل نظام نامه رفتار حرفه ای اخلاقی در مهندسی ساختمان کلیک کنید.
                </p>

                <Link target="_blank" to="/regulations" className="text-fosfori d-flex justify-content-end">
                        <span className="under-line f14">
                                مطالعه متن کامل
                            </span>
                </Link>
            </div>

            <div ref={anavin} className="r-container"
                 style={{background: "#F7F7F7", marginTop: "80px", marginBottom: "80px", paddingRight: "88px"}}>
                <div className="row">
                    <div className="col-9 ">
                        <h1 className="f40 Wblack sormei mb-5">
                            اسناد
                        </h1>
                    </div>
                    <div className="col-3 ">
                        <p style={{cursor: "pointer"}} onClick={action1}
                           className={`d-inline m-1 ${p1Class}`}>{"گواهینامه ها "}</p>
                        <p style={{cursor: "pointer"}} onClick={action2}
                           className={`d-inline m-1 ${p2Class}`}>{"لوح تقدیر "}</p>
                        <p style={{cursor: "pointer"}} onClick={action3}
                           className={`d-inline m-1 ${p3Class}`}>{"انجمن ها "}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-around ">
                    {description}
                </div>
            </div>
            <div ref={coperation} className="container"
                 style={{ marginBottom: "80px", paddingRight: "88px"}}>
                <div style={{paddingTop: "2px"}}>
                    <h5 className="text-fosfori f18 my-5">
                        آنهایی که به ما اعتماد کردند
                    </h5>
                    <h1 className="Wblack f40 sormei my-5">
                        همکاری با شرکت ها و مجموعه ها
                    </h1>
                    <div className="d-flex justify-content-around ">
                        {renderedResume}
                    </div>
                </div>
            </div>


            <Footer/>
        </React.Fragment>
    );
}
export default AboutUs;