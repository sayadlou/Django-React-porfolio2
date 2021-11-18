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
                <title>پاسخ به پرسش‌های متداول</title>
            </Helmet>
            <div className="container" style={{backgroundColor: oathBackground}}>
                <CustomNavbar nameClass={navColor}/>
            </div>
            <div style={{backgroundColor: oathBackground}}>
                <div className="container">
                    <div id="oath1">
                        <div style={{paddingTop: "75px", paddingRight: "75px", height: "150px"}}>
                            <h1 className="Wblack f40 sormei">پاسخ به پرسش‌های متداول</h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end" style={{maxHeight: "537px"}}>
                    <img
                        style={{height: "537px"}}
                        src="/images/faq.jpg" className="img-fluid" alt="..."/>
                </div>

                <div className="container mt-5 " style={{fontSize: "19px"}}>
                    <div id="oath2">
                        <div style={{paddingLeft: "25px", paddingBottom: "75px", paddingRight: "15px"}}>
                            <ul className="text-justify ss02">
                                <li style={{listStyleType: "disc"}}>
                                    سوال: حداکثر چند نفر می توانند در یک کلاس آنلاین شرکت کنند؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: محدودیتی در ظرفیت کلاس های آنلاین وجود ندارد. با این حال ما حداکثر تعداد نفرات
                                    را 30 نفر تعیین نموده ایم.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: برای شرکت در یک کلاس آنلاین چه تجهیزاتی لازم است؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: یک دستگاه رایانه و اینترنت مناسب برای شرکت در کلاس آنلاین کافی می باشد. اما
                                    برای برقراری ارتباط صوتی یا تصویری مدرس با دانشپذیران می بایست از هدست و وبکم
                                    استفاده نمود.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: آیا مدرس باید برای آموزش در محل شرکت، حضور داشته باشد؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: مدرس می تواند از هر مکان دلخواه که به اینترنت دسترسی داشته باشد در کلاس حضور
                                    یافته و به تدریس بپردازد. یکی از امتیازات آموزش آنلاین امکان استفاده از اساتید مجرب
                                    در سایر شهرها و کشورها می باشد.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: چگونه می توان با شرکت چارسو امید توسعه در تولید محتوا همکاری کنم؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: هر یک از کاربران محترم می‌توانند در بخش های مختلف صفحه علمی، با این مجموعه
                                    همکاری نماید. در صورت تمایل درخواست همکاری خود را به ایمیل info@comidt.ir ارسال
                                    نمایید.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: رمز عبور خود را فراموش کرده ام. باید چه کار کنم؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: روی قسمت "رمز عبور خود را فراموش کرده ام" کلیک کنید. با وارد کردن آدرس ایمیل
                                    یا شماره همراه، کد بازیابی را دریافت کنید. (در ایمیل حتماً صندوق اسپم‌ها را نیز چک
                                    کنید).
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: من مسئول فروش یک انتشارات هستم. چطور می توانیم کتاب هایمان را در فروشگاه شرکت
                                    شما عرضه کنیم؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: برای عرضه کالا در شرکت چارسو امید توسعه، لازم است درخواست خود را از طریق ایمیل
                                    info@comidt.ir و یا تماس با شرکت اطلاع دهید تا راهنمایی بیشتر در این زمینه انجام
                                    شود.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: آیا امکان خرید حضوری وجود دارد؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: خیر، به دلیل ماهیت فروش اینترنتی، امکان رؤیت کالاها از نزدیک وجود ندارد. اما
                                    برای فراهم آوردن امکان خرید برای مشتریان، اطلاعات کامل محصولات و عکس آنها در وب سایت
                                    قرار داده شده که مشتریان به کمک آن می توانند خرید خود را انجام دهند. ضمن اینکه می
                                    توانید برای کسب اطلاعات بیشتر از طریق راه های ارتباطی با ما تماس بگیرید.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: آیا امکان ثبت سفارش در طول هفته وجود دارد؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: بله. سفارش خود را می توانید در همه ساعات شبانه روز و تمامی روزهای هفته انجام
                                    دهید.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: آیا قیمت محصولات در فروشگاه به روز هستند؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: بله. شرکت چارسو امید توسعه، به طور منظم و روزانه قیمت‏ محصولات عرضه شده در وب‏
                                    سایت خود را کنترل و به روز رسانی می‏‌کند.
                                </li>
                                <br className="my-3"/>


                                <li style={{listStyleType: "disc"}}>
                                    سوال: آیا سایت‌ شرکت شما در موبایل و تبلت هم قابل نمایش هستند؟
                                </li>
                                <li style={{listStyleType: "disc"}}>
                                    جواب: بله. سایت‌ شرکت کاملا به صورت واکنشگرا می باشد. اگر سایت را با گوشی، تبلت و
                                    کامپیوتر باز کنید، در هر کدام متناسب با آن سیستم به نمایش درمی‌آید.
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
