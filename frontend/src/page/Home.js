import React, {useState, useEffect} from "react"
import Footer from "../components/Footer";
import Tab from "../components/Tab";
import CustomNavbar from "../components/custom-navbar/custom-navbar"
import "../styles/customTheme.styles.scss";
import axios from "../apis/axios";
import Slider from "react-slick";
import Wait from "../components/Wait";
import {Link} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG} from "../assets/svg/to-top3.svg"
import urlTable from "../Constant/urlTable";

const navColor = "nav-icon-white";

const Home = () => {
    const homeData = {
        ProductSlider: [
            {
                image: "images/store1.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
            {
                image: "images/store2.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
            {
                image: "images/store3.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
            {
                image: "images/store4.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
            {
                image: "images/store1.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
            {
                image: "images/store2.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
            {
                image: "images/store3.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
            {
                image: "images/store4.png",
                name: "محصول ",
                link: "#",
                price: "245000"
            },
        ],
        CategorySlider: [
            {
                iamge: "images/category1.png",
                label: "ابزارهای ایمنی",
            },
            {
                iamge: "images/category2.png",
                label: "برش سنگ و کاشی",
            },
            {
                iamge: "images/category3.png",
                label: "ابزار های دستی",
            },
            {
                iamge: "images/category4.png",
                label: "آهن آلات",
            },
            {
                iamge: "images/category1.png",
                label: "ابزارهای ایمنی",
            },
            {
                iamge: "images/category2.png",
                label: "برش سنگ و کاشی",
            },
            {
                iamge: "images/category3.png",
                label: "ابزار های دستی",
            },
            {
                iamge: "images/category4.png",
                label: "آهن آلات",
            },
        ],
        trainingLast: [
            {
                image: "images/last-course-1.png",
                title: "عنوان دوره",
                teacher: "دکتر محمدی",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
                url: "#",

            },
            {
                image: "images/last-course-1.png",
                title: "عنوان دوره",
                teacher: "دکتر محمدی",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
                url: "#",

            },
            {
                image: "images/last-course-1.png",
                title: "عنوان دوره",
                teacher: "دکتر محمدی",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
                url: "#",

            },
            {
                image: "images/last-course-1.png",
                title: "عنوان دوره",
                teacher: "دکتر محمدی",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
                url: "#",

            },
        ],
        trainingTitr:
            {
                image: "images/course-sample.png",
                title: "معماری نوین در ایران",
                teacher: "دکتر تابش",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،.",
                url: "#",
            },
        projectResume: [
            {
                image: "images/customer-1.png"
            },
            {
                image: "images/customer-2.png"
            },
            {
                image: "images/customer-3.png"
            },
            {
                image: "images/customer-4.png"
            },
            {
                image: "images/customer-5.png"
            },
        ],
        lastProject: [
            {
                pic: "images/project-1.png",
                title: "پروژه ققنوس آسمان 0",
                location: "تهران ",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
            {
                pic: "images/project-2.png",
                title: "پروژه سجاد روح الهی 1",
                location: "تهران ",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
            {
                pic: "images/project-3.png",
                title: "پروژه کیان 2",
                location: "تهران ",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
            {
                pic: "images/project-1.png",
                location: "تهران",
                title: "پروژه کیان 3",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
            {
                pic: "images/project-2.png",
                location: "تهران",
                title: "پروژه کیان 4",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
            {
                pic: "images/project-3.png",
                location: "تهران",
                title: "پروژه کیان 5",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
        ],
        news: [
            {
                image: "images/news-1.png",
                date: "1399/06/08",
                title: "عنوان خبر یا مقاله در این قسمت وارد شود",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
            {
                image: "images/news-2.png",
                date: "1399/06/08",
                title: "عنوان خبر یا مقاله در این قسمت وارد شود",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            },
            {
                image: "images/news-3.png",
                date: "1399/06/08",
                title: "عنوان خبر یا مقاله در این قسمت وارد شود",
                content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  ",
            }
        ],
        aboutUsTab: [
            {
                construction: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم  ",
                eShop: " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم  ",
                eSchool: " متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم  ",
            }
        ],
        // homeAboutTile: [
        //     {
        //         main: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم  ",
        //         security: "توضیحات ویژگی به صورت مختصر در این بخش به نمایش در می آید و در صورتی که بیش از این باکس متن بود در صورتی که بیش از این باکس متن بود",
        //         economy: "توضیحات ویژگی به صورت مختصر در این بخش به نمایش در می آید و در صورتی که بیش از این باکس متن بود در صورتی که بیش از این باکس متن بود",
        //         position: "توضیحات ویژگی به صورت مختصر در این بخش به نمایش در می آید و در صورتی که بیش از این باکس متن بود در صورتی که بیش از این باکس متن بود",
        //     },
        homeAboutTile: [
            {
                "id": 1,
                "title": "امنیت بی نظیر",
                "image": "/images/tile3.png",
                "description": "توضیحات ویژگی به صورت مختصر در این بخش به نمایش در می آید و در صورتی که بیش از این باکس متن بود در صورتی که"
            },
            {
                "id": 2,
                "title": "مقرون به صرفه",
                "image": "/images/tile4.png",
                "description": "توضیحات ویژگی به صورت مختصر در این بخش به نمایش در می آید و در صورتی که بیش از این باکس متن بود در صورتی که"
            },
            {
                "id": 3,
                "title": "بهترین موقعیت مکانی",
                "image": "/images/tile5.png",
                "description": "توضیحات ویژگی به صورت مختصر در این بخش به نمایش در می آید و در صورتی که بیش از این باکس متن بود در صورتی که"
            }
        ]

    }
    const length = 110;
    let projectSlider;
    let mainSlider;
    let projectRange;
    const [homeSliders, setHomeSliders] = useState([]);
    const [homeAboutTab, setHomeAboutTab] = useState([]);
    const [homeAboutTile, setHomeAboutTile] = useState([]);
    const [homeAboutCustomer, setHomeAboutCustomer] = useState([]);
    const [productSlider, setProductSlider] = useState(0);
    const [categorySlider, setCategorySlider] = useState(0);
    const [lastProject, setLastProject] = useState([]);
    const [pageStatus, setPageStatus] = useState(false);
    const [pageError, setPageError] = useState("");


    useEffect(() => {
            const fetchData = async () => {
                try {
                    const result = await axios.get(urlTable.home);
                    setHomeSliders(result.data.homeSlider);
                    console.log("sli", result.data.homeSlider)
                    setHomeAboutTab(result.data.homeAboutTab)
                    setHomeAboutTile(homeData.homeAboutTile);
                    setHomeAboutCustomer(result.data.homeAboutCustomer);
                    setProductSlider(homeData.ProductSlider);
                    setCategorySlider(homeData.CategorySlider);
                    setLastProject(homeData.lastProject);
                    setPageStatus(true);
                } catch (error) {
                    setPageError("Server Error")
                }
            }
            fetchData();
        }
        , []
    )
    //console.log(projectSlider)
    const nextProduct = () => {
        productSlider.slickNext();
    }
    const previousProduct = () => {
        productSlider.slickPrev();
    }
    const onMainSliderLeftClick = () => {
        mainSlider.slickNext();
    }
    const onMainSliderRightClick = () => {
        mainSlider.slickPrev();
    }
    const nextCategory = () => {
        categorySlider.slickNext();
    }
    const previousCategory = () => {
        categorySlider.slickPrev();
    }
    const onRangeChange = (e) => {

        const pos = e.target.value;
        const rangeTotal = parseInt(e.target.max) - parseInt(e.target.min);
        const totalSlide = lastProject.length - 1;
        const slideTogo = (totalSlide * (pos / rangeTotal));
        projectSlider.slickGoTo((totalSlide - slideTogo), true);

    }
    const onSliderDragged = (index) => {
        const rangeTotal = parseInt(projectRange.max) - parseInt(projectRange.min);
        const totalSlide = lastProject.length - 1;
        projectRange.value = (projectSlider.innerSlider.state.currentSlide * rangeTotal) / totalSlide;
    }
    const projectSliderSetting = {
        arrows: false,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        infinite: true,
        initialSlide: 0,
        swipe: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }
    const customerSliderSetting = {
        arrows: false,
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        rtl: true,
        infinite: true,
        initialSlide: 0,
        swipe: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    }
    const productSliderSetting = {
        arrows: false,
        dots: true,
        swipe: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
        autoplaySpeed: 2000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    }
    const categorySliderSetting = {
        arrows: false,
        dots: false,
        swipe: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
        autoplaySpeed: 2000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    }
    if (pageStatus) {

        return (
            <React.Fragment>

                <div className="container">

                    <CustomNavbar nameClass={navColor}/>
                </div>
                <div className="main-container home-page">
                    <div className="custom-header">

                        <div className="header-contianer">
                            <div className="box"/>
                            <div className="position-relative h-100 slider-style">
                                <Slider
                                    swipe={false}
                                    arrows={false}
                                    dots={true}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    initialSlide={0}
                                    rtl={false}
                                    infinite={true}
                                    autoplay={true}
                                    autoplaySpeed={10000}
                                    speed={1000}
                                    accessibility={false}
                                    pauseOnHover={true}
                                    dotsClass="slider-dots"
                                    ref={slider => (mainSlider = slider)}
                                >
                                    {
                                        homeSliders.map(
                                            (slide) => {
                                                return (
                                                    <div className="card text-rtl mb-3 border-0 rounded-0"
                                                         key={slide.id}>
                                                        <div className="row g-0">
                                                            <div className="col-md-5">
                                                                <div className="card-body">
                                                                    <div className="text-secondary mb-3 f18">
                                                                        {slide["title"]}
                                                                    </div>
                                                                    <h1 className="card-title Wblack"
                                                                        style={{color: "#00234F"}}>
                                                                        شرکت
                                                                        چارسو امید
                                                                        توسعه</h1>
                                                                    <p style={{maxWidth: "385px"}}
                                                                       className="card-text f16 text-justify">{slide["description"]}</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-md-7  d-none d-md-block  border-0 rounded-0">
                                                                <img class="img-fluid" src={slide["file"]} alt="..."/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end ml-5 pl-4"
                         style={
                             {
                                 marginBottom: "210px",
                                 marginTop: "-210px",
                             }
                         }>
                        <img style={{zIndex: "300"}} className="mx-2 ml-5 mr-3" src="/images/Icon-right.png" alt="left"
                             onClick={onMainSliderRightClick}/>
                        <img style={{zIndex: "300"}} className="mx-2 ml-4" src="/images/Icon-left.png" alt="right"
                             onClick={onMainSliderLeftClick}/>
                    </div>
                    <div className="l-container" style={{background: "#F7F7F7"}}>
                        <div className="row  srow">
                            <div className="col-md-6">
                                <div className="mx-4">
                                    <p className="text-secondary" style={{fontSize: "18px"}}>
                                        همه چیز در مورد چارسو
                                    </p>
                                    <h1 className="Wblack f40 sormei">
                                        شرکت عمرانی آموزشی<br/> چارسو امید توسعه
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mx-4">
                                    <div className="m-5">
                                        <Tab homeAboutTab={homeAboutTab}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5 srow">
                            <div className="col-md-8 my-md-0 my-3 boxy">
                                <div className="mx-4  tile1">
                                    <div className="mx-5 pt-5">
                                        <h4 className="text-gold WUlight f14">بهترین متریال</h4>
                                        <h3 className="text-white" style={{fontSize: "30px"}}>استفاده از بهترین متریال
                                            روز</h3>
                                        <div className="row">
                                            <div className="col-1">
                                                <img src="/images/tile2.png" alt="..."/>
                                            </div>
                                            <div className="col-11">
                                                <p className="text-white WUlight f14">لورم ایپسوم متن ساختگی با تولید
                                                    سادگی
                                                    نامفهوم
                                                    از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                                                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                                                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                                    می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                                                    شناخت </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mr-0 ml-4 bg-white boxy">
                                    <div className="mx-5 pt-5">
                                        <h5 className="text-fosfori Wblack">{homeData.homeAboutTile[0].title}</h5>
                                        <img className="my-3" src={homeData.homeAboutTile[0].image} alt=""/>
                                        <p className="f14">{homeData.homeAboutTile[0].description.length > length ? homeData.homeAboutTile[0].description.substring(0, length - 3) + "..." : homeData.homeAboutTile[0].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5  srow about-box3">
                            <div className=" px-0 col-md-4 my-md-0 my-3">
                                <div className="row bg-white mx-4 boxy">
                                    <div className="col-8 px-0">
                                        <div className="mr-3 pt-5">
                                            <h5 className="text-fosfori Wblack">{homeData.homeAboutTile[1].title}</h5>
                                            <img className="my-3" src={homeData.homeAboutTile[1].image} alt=""/>
                                            <p className="f14">{homeData.homeAboutTile[1].description.length > length ? homeData.homeAboutTile[1].description.substring(0, length - 3) + "..." : homeData.homeAboutTile[1].description}</p>
                                        </div>
                                    </div>
                                    <div className="col-4"/>
                                </div>
                            </div>
                            <div className=" px-0 col-md-4 my-md-0 my-3">
                                <div className="row bg-white mx-4 boxy">
                                    <div className="col-8 px-0">
                                        <div className="mr-3 pt-5">
                                            <h5 className="text-fosfori Wblack">{homeData.homeAboutTile[2].title}</h5>
                                            <img className="my-3" src={homeData.homeAboutTile[2].image} alt=""/>
                                            <p className="f14">{homeData.homeAboutTile[2].description.length > length ? homeData.homeAboutTile[2].description.substring(0, length - 3) + "..." : homeData.homeAboutTile[2].description}</p>
                                        </div>
                                    </div>
                                    <div className="col-4"/>
                                </div>
                            </div>
                            <div className="px-0  col-md-4 my-md-0 my-3">
                                <div className="mx-4 boxy">
                                    <div className="py-5" style={{height: "280px"}}>
                                        <div style={{marginLeft: "30%", marginRight: "30%", marginTop: "70px"}}>
                                            <p className="d-inline d-flex justify-content-center under-line Wblack">ویژگی
                                                های
                                                چارسو</p>
                                            <br/>
                                            <div className="d-flex justify-content-center">
                                                <img className="" src="/images/tile6.png" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 container ">
                        <h6 className="text-fosfori mt-5 mb-2 f18">آنهایی که به ما اعتماد کردند</h6>

                        <div className="pr-5">
                            <Slider
                                {...customerSliderSetting}
                            >
                                {
                                    homeAboutCustomer.map(
                                        (project, index) => {
                                            return (
                                                <div className="card border-0 " key={index} style={{height: "500px"}}>
                                                    <img src={project.file} className="card-img-top px-2" alt="..."/>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </Slider>
                        </div>
                        <div className="my-4 sormei">
                            <h1 className="Wblack f40">پروژه های شاخص اجرا شده</h1>
                        </div>
                        <div className="pr-5">
                            <Slider
                                {...projectSliderSetting}
                                ref={slider => (projectSlider = slider)}
                            >
                                {
                                    lastProject.map(
                                        (project, index) => {
                                            return (
                                                <div className="card border-0 " key={index} style={{height: "500px"}}>
                                                    <img src={project["pic"]} className="card-img-top px-2" alt="..."/>
                                                    <div className="card-body text-rtl">
                                                        <div className="row ">
                                                            <div className="col-8">
                                                                <p className="Wbold f18">
                                                                    {project["title"]}
                                                                </p>
                                                            </div>
                                                            <div className="col-4">
                                                                <img className="w-auto d-inline"
                                                                     src="/images/location.png" alt="..."/>
                                                                <h6 className="mr-2 d-inline text-fosfori f12">&nbsp;{project["location"]}</h6>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p style={{wordWrap: "break-word", fontSize: "14px"}}
                                                               className="card-text text-rtl">{project["content"]}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </Slider>
                            <input
                                type="range"
                                defaultValue="1"
                                min="0"
                                max="100"
                                onChange={onRangeChange}
                                ref={el => projectRange = el}
                            />
                        </div>
                    </div>
                    <div className="training r-container ">
                        <div className="row pr-5">
                            <div className="col-lg-6 ml-3 ml-lg-0 pl-5 pl-lg-0 pr-5">
                                <h5 className="text-gold">بهترین اساتید را گردهم جمع کرده ایم</h5>
                                <div className="my-5 text-white">
                                    <h1 className="Wblack f40">دوره های </h1>
                                    <h1 className="Wblack f40">آموزشگاه مجازی</h1>
                                </div>
                                <img src={homeData.trainingTitr.image} className="w-100 img-fluid" alt="..."/>
                                <div className="row py-4">
                                    <div className="col-8">
                                        <h5 className="text-gold f18">{homeData.trainingTitr.title}</h5>
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid" src="/images/teacher.png" alt="..."/>
                                        <h6 className="d-inline text-gold f12">&nbsp;{homeData.trainingTitr.teacher}</h6>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-wrap text-start text-white f14">{homeData.trainingTitr.description}</p>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to="#">
                                        <button className="btn btn-outline-light">
                                            {'مشاهده دوره  '}
                                            <i className="fa fa-long-arrow-left" data-fa-transform=" up-6"/>
                                        </button>

                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="text-gold pb-5 f14">
                                    <span style={{borderBottom: "2px solid #F7F7F7", paddingBottom: "5px"}}>
                                        آخرین دوره ها
                                    </span>

                                </h5>
                                {
                                    homeData.trainingLast.map(
                                        (train, index) => {
                                            return (
                                                <div className="pr-5 p-3">
                                                    <div className="row" key={index}>
                                                        <div className="col-6">
                                                            <img className="img-fluid" src={train.image} alt="..."/>
                                                        </div>
                                                        <div className="col-6 text-white pr-0">
                                                            <h5 className="Wblack f14">
                                                                {train.title}
                                                            </h5>
                                                            <div>
                                                                <img className="d-inline" src="/images/teacher.png"
                                                                     alt="..."/>
                                                                <h5 className="d-inline f12 mr-2">
                                                                    {train.teacher}
                                                                </h5>
                                                            </div>
                                                            <h6 className="f12">
                                                                {train.description}
                                                            </h6>
                                                            <Link to="#">
                                                                <h6 className="text-gold d-inline ml-2">
                                                                    مشاهده دوره
                                                                </h6>
                                                                <img src="images/arrow-left-gold.png" alt="<"/>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="pr-5">
                            <h6 className="text-fosfori pr-2 mt-5 pt-5 my-5 f18">فروشگاهی به وسعت ایران</h6>
                            <h1 className="pr-2 f40 Wblack my-5 sormei">محصولات برتر</h1>
                            <div className="row">
                                <div className="col-11" style={{direction: "ltr"}}>
                                    <Slider
                                        ref={c => (setProductSlider(c))}
                                        {...productSliderSetting}
                                    >
                                        {
                                            homeData.ProductSlider.map(
                                                (product, index) => {
                                                    return (
                                                        <div className="card border-0 p-3" key={index}>
                                                            <img src={product["image"]}
                                                                 className="card-img-top"
                                                                 style={{border: "2px solid #e1e1e1"}}
                                                                 alt="..."/>
                                                            <div className="card-body text-rtl">
                                                                <h5 className="card-title Wbold f14">{product["name"]}</h5>
                                                                <div className="row">
                                                                    <div className="col-7 p-0 pr-2">
                                                                        <Link to="#" className="">
                                                                            <button
                                                                                className="btn btn-outline-primary ">
                                                                                <p className="d-inline f12">
                                                                                    {'مشاهده محصول  '}
                                                                                </p>
                                                                                <i className="fa fa-long-arrow-left"
                                                                                   data-fa-transform=" up-6"/>
                                                                            </button>

                                                                        </Link>
                                                                    </div>
                                                                    <div
                                                                        className="col-5 p-0 d-flex justify-content-end">
                                                                        <p className="text-fosfori f14 ss02">{`${product["price"]} تومان`}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                    </Slider>
                                </div>

                                <div className="col-1">
                                    <img className="d-block" style={{marginTop: "160px"}} src="/images/next.png" alt="<"
                                         onClick={nextProduct}/>
                                    <img className="d-block" src="/images/previous.png" alt=">"
                                         onClick={previousProduct}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mr-5">
                        <div className="row my-5 pr-5">
                            <div className="col-1">
                                <img className="d-block" src="/images/next.png" alt="<" onClick={nextCategory}/>
                                <img className="d-block" src="/images/previous.png" alt=">" onClick={previousCategory}/>
                            </div>
                            <div className="col-11" style={{direction: "ltr"}}>
                                <Slider
                                    ref={c => (setCategorySlider(c))}
                                    {...categorySliderSetting}

                                >
                                    {
                                        homeData.CategorySlider.map(
                                            (category, index) => {
                                                return (
                                                    <div className="card border-0" key={index}>
                                                        <img src={category["iamge"]} className="card-img-top"
                                                             alt="..."/>
                                                        <div
                                                            className="card-img-overlay  text-rtl d-flex align-items-end">
                                                            <h5 className="py-1 px-3 py-2 card-title bg-light  rounded-pill mt-5 Wblack f14"
                                                                style={{color: "#00626D"}}> {category["label"]}</h5>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="l-container" style={{backgroundColor: '#F7F7F7'}}>
                        <div className="row srow pr-5 py-3">
                            <div className="col-10">
                                <h1 className="f40 Wblack sormei ">اخبار و مقالات</h1>
                            </div>
                            <div className="col-2">
                                <Link className="btn btn-outline-primary">
                                    {"همه اخبار و مقالات  "}
                                    <img className="" src="/images/tile6.png" alt="..."/>
                                </Link>
                            </div>
                            <div className="row mt-5">
                                {
                                    homeData.news.map((newsData, index) => {
                                            return (
                                                <div className="col-md-4" key={index}>
                                                    <div className="news-img-container">
                                                        <img
                                                            src={newsData.image}
                                                            height="251px"
                                                            width="100%"
                                                            className="mb-3 news-img"
                                                        />
                                                        <div className="news-date text-light ss02">
                                                            {/*{jalali(newsData.created_at).format("jYYYY/jM/jD")}*/}
                                                            {newsData.date}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-fosfori Wbold f18">{newsData.title}</p>
                                                        <p style={{maxHeight: "75px", overflow: "hidden"}} className="mb-3">
                                                            {newsData.content}
                                                        </p>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <Link className={"button"}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="22.715"
                                                                height="10.724"
                                                                viewBox="0 0 22.715 10.724"
                                                            >
                                                                <g
                                                                    id="Icon_feather-arrow-left"
                                                                    data-name="Icon feather-arrow-left"
                                                                    transform="translate(0.5 0.707)"
                                                                >
                                                                    <path
                                                                        id="Path_1"
                                                                        data-name="Path 1"
                                                                        d="M29.215,18H7.5"
                                                                        transform="translate(-7.5 -13.32)"
                                                                        fill="none"
                                                                        stroke="#0098A0"
                                                                        style={{
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "1"
                                                                        }}

                                                                    />
                                                                    <path
                                                                        id="Path_2"
                                                                        data-name="Path 2"
                                                                        d="M11.866,16.811,7.5,12.155,11.866,7.5"
                                                                        transform="translate(-7.5 -7.5)"
                                                                        fill="none"
                                                                        stroke="#0098A0"
                                                                        style={{
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "1"
                                                                        }}

                                                                    />
                                                                </g>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    } else {
        return (
            <Wait pageError={pageError}/>
        )
    }

}
export default Home;