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
                <title>قوانین و مقررات</title>
            </Helmet>
            <div className="container" style={{backgroundColor: oathBackground}}>
                <CustomNavbar nameClass={navColor}/>
            </div>
            <div style={{backgroundColor: oathBackground}}>
                <div className="container">
                    <div id="oath1">
                        <div style={{paddingTop: "75px", paddingRight: "75px", height: "150px"}}>
                            <h1 className="Wblack f40 sormei">قوانین و مقررات</h1>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end" style={{maxHeight: "480px"}}>
                    <img
                        // style={{height:"420px"}}
                        src="/images/rules.jpg" className="img-fluid" alt="..."/>
                </div>

                <div className="container mt-5 text-justify ss02" style={{fontSize: "19px"}}>
                    <div id="oath2">
                        <div style={{paddingLeft: "25px", paddingBottom: "75px", paddingRight: "15px"}}>
                            1. تشكيل كلاس‌ها منوط به احراز حد نصاب لازم جهت تشكيل كلاس می‌باشد.
                            <br/>
                            2. در صورت تأخیر در شروع دوره، دانشپذیر می تواند کل مبلغ پرداختی را پس بگیرد و یا برای تکمیل
                            ظرفیت و شروع دوره در هفته های آتی صبر نماید.
                            <br/>
                            3. در صورت عدم تشکیل دوره به هر دلیـل ازجمله به حد نصـاب نرسیـدن تعداد نفرات، مبالغ دریافتی
                            عیناً مسترد خـواهد شد.
                            <br/>
                            4. کلیه جلسات دوره‌ها در روزها و ساعات تعیین شـده تشــکیل می‌گـردد و در صورت هرگونه تغییر
                            احتمــــالی، مرکز موظف است در اسرع وقت دانش پذیران محترم را مطلع نماید.
                            <br/>
                            5. شرکت چارسو امید توسعه، به هیچ وجه اطلاعات منحصر به فرد کاربران را به اشخاص و طرفين غیر
                            واگذار نخواهد کرد.
                            <br/>
                            6. توجه داشته باشید کلیه اصول و رویه‏‌های فروشگاه اینترنتی شرکت چارسو امید توسعه، منطبق با
                            قوانین جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و
                            متعاقباً کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است.
                            <br/>
                            7. همه مطالب در دسترس از طریق هر یک از خدمات فروشگاه اینترنتی شرکت چارسو امید توسعه، مانند
                            لوگو، علائم تجاری، متن، توضیحات، گرافیک، آرم، تصاویر و کپی، داده‌ها و کلیه محتوای تولید شده
                            توسط فروشگاه اینترنتی، جزئی از اموال فروشگاه اینترنتی این شرکت محسوب می‏‌شود.
                            <br/>
                            8. کلیه سفارش‌‏های ثبت شده در سایت فروشگاه اینترنتی شرکت چارسو امید توسعه به وسیله فاکتور از
                            طریق ایمیل، در صف پردازش قرار می‏‌گیرند. فروشگاه اینترنتی این شرکت همواره در ارسال و تحویل
                            کلیه سفارش‌‏های ثبت شده، نهایت دقت و تلاش خود را می‏‌نماید. با وجود این، در صورتی که موجودی
                            محصولی در فروشگاه اینترنتی به پایان برسد، حتی پس از اقدام مشتری به سفارش‌‏گذاری، حق کنسل
                            کردن آن سفارش و یا استرداد وجه سفارش برای فروشگاه محفوظ است.
                            <br/>
                            9. روز کاری به معنی روز شنبه تا پنج شنبه هر هفته، به استثنای تعطیلات عمومی در ایران است و
                            کلیه سفارش‏‌های ثبت شده در طول روزهای کاری و اولین روز پس از تعطیلات، بررسی و اعلام موجودی
                            می‌‏شوند.
                            <br/>
                            10. با توجه به ثبت سیستمی سفارش، به هیچ عنوان امکان صدور فاکتور مجدد یا تغییر مشخصات آن از
                            جمله تغییر فاکتوری که به نام شخص حقیقی صادر شده، به نام شخص حقیقی دیگری وجود ندارد.

                        </div>
                    </div>
                </div>
            </div>
            <Footer background={oathBackground}/>
        </div>
    );
}
