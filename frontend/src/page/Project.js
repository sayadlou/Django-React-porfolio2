import React, {useEffect, useRef, useState} from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import {useParams} from "react-router-dom";
import axios from "../apis/axios";
import Wait from "../components/Wait";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import moment from 'jalali-moment'
import {Helmet} from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const navColor = "nav-icon-black";
const Project = () => {
    let {id} = useParams();
    const clip = "/video/visum.mp4";
    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const result = await axios.get(`apiv1/project/${id}`);
                    if (result.status === 200) {
                        Object.keys(result.data).map(
                            (key, index) => {
                                if (typeof (result.data[key]) === "string") {
                                    result.data[key] = result.data[key].includes("http://comidt.ir:8000") ? result.data[key].slice(21) : result.data[key];
                                    result.data[key] = result.data[key].includes("http://127.0.0.1:8000") ? result.data[key].slice(21) : result.data[key];
                                    result.data[key] = result.data[key].includes("http://127.0.0.1:3000") ? result.data[key].slice(21) : result.data[key];
                                    result.data[key] = result.data[key].includes("http://localhost:3000") ? result.data[key].slice(21) : result.data[key];
                                    result.data[key] = result.data[key].includes("http://localhost:8000") ? result.data[key].slice(21) : result.data[key];
                                }
                            }
                        );
                        setProject(result.data);

                        setPageStatus("successful");

                    }
                } catch (error) {
                    setPageStatus("error")
                }
            }
            fetchData()
        }, [])
    const [project, setProject] = useState({})
    const [pageStatus, setPageStatus] = useState("load")


    switch (pageStatus) {
        case "load":
            <Wait/>
        case "error":
            return (
                <React.Fragment>
                    <div className="container">
                        <CustomNavbar nameClass={navColor}/>
                    </div>

                    <div className="l-container" style={{background: "#F7F7F7"}}>
                        <div className="d-flex justify-content-center">
                            <h1>
                                پروژه پیدا نشد
                            </h1>
                        </div>
                    </div>
                    <Footer/>
                </React.Fragment>
            )
        case "successful":
            return (
                <React.Fragment>
                    <Helmet>
                        <title>{`${project.title}`}</title>
                    </Helmet>
                    <div className="container">
                        <CustomNavbar nameClass={navColor}/>
                    </div>

                    <div className="l-container" style={{background: "#F7F7F7"}}>
                        <div className="container">
                            <div className="mr-4 row">
                                <div className="col-lg-8">
                                    <div className="card box-shadow" style={{background: "white"}}>
                                        <img className="card-img-top" src={project.image_big}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-fosfori Wbold "
                                                style={{fontSize: "16px"}}>توضیح مختصر درباره پروژه</h5>
                                            <p className="card-text text-black f16 text-justify"  dangerouslySetInnerHTML={{ __html: project.description }}/>
                                        </div>
                                    </div>
                                    <h5 className="text-fosfori my-5 Wbold f18">آلبوم عکس</h5>
                                    <div className="w-100 box-shadow" style={{background: "white"}}>
                                        <Tabs>
                                            <TabList>
                                                <div className="mr-5 mt-5 pt-4">
                                                    <Tab>
                                                    <span className="Wbold f14">
                                                        نقشه
                                                    </span>
                                                    </Tab>
                                                    <Tab>
                                                    <span className="Wbold f14">
                                                    پرسپکتیو
                                                    </span>
                                                    </Tab>
                                                    <Tab>
                                                    <span className="Wbold f14">
                                                    مراحل اجرا
                                                    </span>
                                                    </Tab>
                                                </div>
                                            </TabList>
                                            <TabPanel>
                                                <div className="row">
                                                    {
                                                        project.map.map(
                                                            (image, index) => {
                                                                return (
                                                                    <div className="col-4">
                                                                        <img key={index} className="img-thumbnail m-2"
                                                                             src={image.file} alt="map"/>
                                                                    </div>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </div>

                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row">
                                                    {
                                                        project.perspective.map(
                                                            (image, index) => {
                                                                return (
                                                                    <div className="col-4">
                                                                        <img key={index} className="img-thumbnail m-2"
                                                                             src={image.file} alt="map"/>
                                                                    </div>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row">
                                                    {
                                                        project.execution_step.map(
                                                            (image, index) => {
                                                                return (
                                                                    <div className="col-4">
                                                                        <img key={index} className="img-thumbnail m-2"
                                                                             src={image.file} alt="map"/>
                                                                    </div>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </div>
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                    <h5 className="text-fosfori my-5  Wbold f18">کلیپ</h5>
                                    <div className="card box-shadow" style={{background: "white"}}>
                                        {/*<div className="embed-responsive embed-responsive-16by9">*/}
                                        {/*<ReactPlayer controls url={clip}/>*/}
                                        <div className="p-2">
                                            <video controls width="100%">
                                                <source src={clip} type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                                    {/*</div>*/}
                                    <div className="w-100 box-shadow row" style={{background: "white"}}>

                                        {/*<div className="col-1 d-flex align-items-center" style={{fontSize: "3rem"}}>*/}
                                        {/*    <i className="fa fa-arrow-circle-right my-auto" data-fa-transform="up-6"*/}
                                        {/*       style={{cursor: "pointer"}} onClick={pervSlid}/>*/}
                                        {/*</div>*/}
                                        {/*<div className="col-10 p-0">*/}


                                        {/*<div className="d-block">*/}
                                        {/*<Slider*/}
                                        {/*    swipe={false}*/}
                                        {/*    arrows={false}*/}
                                        {/*    dots={false}*/}
                                        {/*    slidesToShow={1}*/}
                                        {/*    slidesToScroll={1}*/}
                                        {/*    initialSlide={0}*/}
                                        {/*    rtl={false}*/}
                                        {/*    infinite={true}*/}
                                        {/*    autoplay={false}*/}
                                        {/*    autoplaySpeed={10000}*/}
                                        {/*    speed={1000}*/}
                                        {/*    accessibility={false}*/}
                                        {/*    pauseOnHover={true}*/}
                                        {/*    dotsClass="slider-project-dots"*/}
                                        {/*    ref={slider}*/}
                                        {/*>*/}
                                        {/*    {*/}

                                        {/*        clips.map(*/}
                                        {/*            (clip, index) => {*/}
                                        {/*                return (*/}

                                        {/*                    <div className="embed-responsive ">*/}
                                        {/*                        /!*<ReactPlayer controls playing={play} url={clip}/>*!/*/}
                                        {/*                        <ReactPlayer controls playing={play[index]}*/}
                                        {/*                                     url={clips} onPlay={played}*/}
                                        {/*                                     onPause={puased}/>*/}

                                        {/*                    </div>*/}
                                        {/*                )*/}
                                        {/*            }*/}
                                        {/*        )*/}
                                        {/*    }*/}
                                        {/*</Slider>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*<div className="col-1 d-flex align-items-center" style={{fontSize: "3rem"}}>*/}
                                        {/*    <i className="fa fa-arrow-circle-left" data-fa-transform="up-6"*/}
                                        {/*       style={{cursor: "pointer"}} onClick={nextSlid}/>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-white sticky-top box-shadow">
                                        <div className="pr-3">
                                            <h5 className="text-fosfori pt-3 f14">رو تیتر</h5>
                                            <h1 className="pb-3 Wblack f24">
                                                {project.title}
                                            </h1>
                                        </div>
                                        <div className="card" style={{background: "white"}}>
                                            <img className="card-img-top" src={project.image_small}
                                                 alt="Card image cap"/>
                                        </div>
                                        <div className="row p-4">
                                            <div className="col-4">
                                                <p className="Wbold f12">
                                                    کارفرما
                                                </p>
                                                <div>
                                                    <h5 className="text-fosfori py-2 Wbold f16">{project.employer}</h5>

                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <p className="Wbold f12">
                                                    مشاور
                                                </p>
                                                <div>
                                                    <h5 className="text-fosfori py-2 Wbold f16">{project.consultant}</h5>

                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <p className="Wbold f12">
                                                    محل اجرا
                                                </p>
                                                <div>
                                                    <h5 className="text-fosfori py-2 Wbold f16">{project.place}</h5>

                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <p className="Wbold f12">
                                                    زمان شروع
                                                </p>
                                                <div>
                                                    <h5 className="text-fosfori py-2 Wbold f16 ss02">{moment(project.start_time, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</h5>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <p className="Wbold f12">
                                                    مدت قرارداد
                                                </p>
                                                <div>
                                                    <h5 className="text-fosfori py-2 Wbold f16 ss02">{project.duration}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </React.Fragment>
            );

    }


}
export default Project;