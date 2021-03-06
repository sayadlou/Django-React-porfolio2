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
                <title>حریم خصوصی</title>
            </Helmet>
            <div className="container" style={{backgroundColor: oathBackground}}>
                <CustomNavbar nameClass={navColor}/>
            </div>
            <div style={{backgroundColor: oathBackground}}>
                <div className="container">
                    <div id="oath1">
                        <div style={{paddingTop: "75px", paddingRight: "75px", height: "150px"}}>
                            <h1 className="Wblack f40 sormei">حریم خصوصی</h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end" style={{maxHeight: "448px"}}>
                    <img

                        style={{height: "448px"}}
                        src="/images/privacy.jpg" className="img-fluid" alt="..."/>
                </div>
                <div className="container mt-5 " style={{fontSize: "19px"}}>
                    <div id="oath2">
                        <div style={{paddingLeft: "25px", paddingBottom: "75px", paddingRight: "15px"}}>
                            <ul className="text-justify ulp ss02">
                                <li className="mt-5 lip">
                                    حفظ حریم خصوصی
                                </li>
                                <li>
                                    چارسو امید توسعه خود را متعهد به حفاظت از حریم خصوصی همه بازدیدکنندگان www.comidt.ir
                                    می داند و ما به عنوان بخشی از تعهد خود نسبت به حریم خصوصی شما، این بیانیه محرمانگی
                                    را تهیه کرده ایم. شما به عنوان مشتری ما می توانید بدون نیاز به وارد کردن هرگونه
                                    اطلاعات شخصی در شبکه جهانی اینترنت از سایت چارسو امید توسعه بازدید کنید. مقدار
                                    اطلاعاتی که جمع آوری می کنیم به اطلاعاتی که شما در اختیار ما قرار می دهید، بستگی
                                    دارد.
                                    با ثبت یا درخواست اطلاعات در این سایت، شما اجازه می دهید تا اطلاعات شما بر اساس مفاد
                                    این خط مشی جمع آوری، استفاده و منتقل شود.

                                </li>
                                <li className="mt-5 lip">اطلاعاتی که ما از شما جمع آوری می کنیم</li>
                                <li>
                                    هنگام بازدید از www.comidt.ir از شما خواسته می شود که اطلاعاتی نظیر نام و جزئیات
                                    تماس خود را وارد کنید. همچنین ممکن است ما اطلاعاتی درباره استفاده شما از سایت را در
                                    کنار اطلاعاتی که بوسیله نامه و یا ایمیل برای ما می فرستید، جمع آوری کنیم.
                                </li>
                                <li className="mt-5 lip">
                                    افشاء
                                </li>
                                <li>
                                    اطلاعاتی که در اختیار ما قرار می دهید در سرورهای امن ما قرار می گیرد. همچنین ممکن
                                    است ما اطلاعات جمع آوری شده درباره استفاده از سایت خود را در اختیار اشخاص ثالثی قرار
                                    دهیم اما این موارد شامل اطلاعاتی که قابل استفاده برای تعیین هویت شما باشند نخواهد
                                    بود.
                                    هر جا که رمز ورودی به شما ارائه شده (یا خود انتخاب کرده اید)، این رمز ورود شما را
                                    قادر خواهد ساخت تا به بخش های مشخصی از سایت ما دسترسی داشته باشید، حفظ و نگهداری از
                                    این رمز ورود بر عهده شخص شما خواهد بود. ما از شما می خواهیم تا این رمز ورود را در
                                    اختیار هیچ کس قرار ندهید.
                                    متأسفانه انتقال اطلاعات از طریق اینترنت کاملا امن نیست. علی رغم اینکه ما همه تلاشمان
                                    را جهت حفاظت از اطلاعات شخصی شما به کار می گیریم، نمی توانیم امنیت انتقال اطلاعات
                                    شما را تضمین کنیم؛ بنابراین مسئولیت هرگونه انتقال بر عهده شما خواهد بود. با دریافت
                                    اطلاعات شما، ما از روش های سخت گیرانه و امنیتی در جهت تلاش برای جلوگیری از دسترسی
                                    غیر مجاز به آن ها استفاده خواهیم کرد.
                                </li>
                                <li className="mt-5 lip">
                                    IP ها و کوکی ها
                                </li>
                                <li>
                                    ما ممکن است اطلاعات کامپیوتر شما، از جمله آدرسIP، سیستم عامل و نوع مرورگر را جمع
                                    آوری کرده و جهت مدیریت و اهداف بازاریابی مورد استفاده قرار دهیم. این امر شامل داده
                                    های آماری درباره الگوها و عملکرد جستجوی شما در اینترنت بوده و نمی تواند هویت شما را
                                    تعیین کند. کوکی ها بسته های کوچک اطلاعاتی هستند که ما روی کامپیوتر شما ذخیره می
                                    کنیم. هنگامی که شما وارد سایت ما می شوید، سیستم ما کوکی هایی را روی کامپیوتر شما
                                    ذخیره خواهد کرد. مگر اینکه مخالفت خود را هنگام ارائه اطلاعات خود به ما اعلام کرده
                                    باشید. کوکی ها به دفعات بعدی بازدید از سایت سرعت بیشتری می دهند. همچنین کوکی ها به
                                    ما اجازه می دهند تا بتوانیم ترافیک سایت را کنترل و نظارت کرده و محتوای سایت را برای
                                    شما شخصی سازی کنیم. شما می توانید با فعال کردن تنظیمات خاص در مرورگر کامپیوتر خود از
                                    ذخیره کوکی ها جلوگیری کنید، در این صورت ممکن است نتوانید از برخی قابلیت های ویژه
                                    سایت ما استفاده نمایید.
                                </li>
                                <li className="mt-5 lip">
                                    امنیت و حفاظت
                                </li>
                                <li>
                                    ما از اقدامات امنیتی استفاده می کنیم تا اطلاعات شما را از دسترسی اشخاص غیر مجاز و
                                    عملکردهای غیر قانونی، خسارات اتفاقی، تخریب و نقصان مصون نگاه داریم. ما اطلاعات شما
                                    را برای مدتی متعارف که قانون ملزم می داند، نگاه خواهیم داشت.
                                    در موارد خاص ممکن است سایت ما حاوی لینک های الکترونیکی به سایت های دیگر باشد. در
                                    صورتی که بخواهید از این سایت ها بازدید کنید، خط مشی حفظ حریم خصوصی و اولویت های حریم
                                    خصوصی آن ها معتبر خواهد بود.
                                </li>
                                <li className="mt-5 lip">
                                    امنیت و حفاظت دسترسی و به روزآوری
                                </li>
                                <li>
                                    ما از اقدامات امنیتی استفاده می کنیم تا اطلاعات شما را از دسترسی اشخاص غیر مجاز مصون
                                    نگه داريم. شما این حق را دارید که از اطلاعات نگهداری شده خود آگاهی داشته و از ما
                                    بخواهید تا تغییراتی در آن ها ایجاد کنیم تا دقیق و به روز باشند. اگر به این امر تمایل
                                    داشتید، ما را در جریان بگذارید.
                                </li>
                                <li className="mt-5 lip">
                                    تغییرات در خط مشی حفظ حریم خصوصی ما
                                </li>
                                <li>
                                    هرگونه تغییرات آتی در خط مشی حفظ حریم خصوصی ما، بر روی سایت قرار خواهد گرفت و در
                                    صورت نیاز از طریق ایمیل نیز اطلاع رسانی خواهد شد.
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
