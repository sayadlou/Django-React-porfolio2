import React, {useEffect, useState} from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import {Link, useParams} from "react-router-dom";
import axios from "../apis/axios";
import Wait from "../components/Wait";
import {Helmet} from "react-helmet";
import urlTable from "../Constant/urlTable";

const navColor = "nav-icon-black";
const Departmant = () => {
    let {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const result = await axios.get("comidt/departments"); http://comidt.ir:8000/
                const result = await axios.get(`${urlTable.departments}/${id}`);
                if (result.status === 200) {
                    setPageStatus("successful");

                    Object.keys(result.data).map(
                        (key, index) => {
                            if (typeof (result.data[key]) === "string") {
                                result.data[key] = result.data[key].includes("http://comidt.ir:8000") ? result.data[key].slice(21) : result.data[key];
                                result.data[key] = result.data[key].includes("http://127.0.0.1:8000") ? result.data[key].slice(21) : result.data[key];
                                result.data[key] = result.data[key].includes("http://127.0.0.1:3000") ? result.data[key].slice(21) : result.data[key];
                                result.data[key] = result.data[key].includes("http://localhost:3000") ? result.data[key].slice(21) : result.data[key];
                                result.data[key] = result.data[key].includes("http://localhost:8000") ? result.data[key].slice(21) : result.data[key];
                                //                                                   http://localhost:8000
                            }
                        }
                    );
                    setDepartmant(result.data);
                    //console.log(result.data);
                }
            } catch (error) {
                //console.log("finish error", error)
                setPageStatus("error")
            }
        }
        fetchData()
    }, [id])
    const [departmant, setDepartmant] = useState({})
    const [pageStatus, setPageStatus] = useState("load")

    function createMarkup() {
        return {__html: departmant.description};
    }

    function createMarkup2() {
        return {__html: departmant.responsible_resume_experience};
    }

    switch (pageStatus) {
        case "error":
            return (
                <React.Fragment>
                    <div className="container">
                        <CustomNavbar nameClass={navColor}/>
                    </div>
                    <div className=" mr-5 my-5">
                        {/*style={{marginRight: "30px"}}*/}
                        <h2 className="text-fosfori">
                            دپارتمان
                        </h2>
                        <h1 className="f40 Wblack sormei">
                            {departmant.title}
                        </h1>
                    </div>
                    <div className="l-container" style={{background: "#F7F7F7"}}>
                        <div className="d-flex justify-content-center">
                            <h1>
                                دپارتمان پیدا نشد
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
                        <title>{` دپارتمان ${departmant.title}`}</title>
                    </Helmet>
                    <div className="container">
                        <CustomNavbar nameClass={navColor}/>
                    </div>
                    <div className="container mr-5 my-5">
                        <h2 className="text-fosfori">
                            دپارتمان
                        </h2>
                        <h1 className="f40 Wblack sormei">
                            {departmant.title}
                        </h1>
                    </div>
                    <div className="l-container" style={{background: "#F7F7F7"}}>
                        <div className="px-5">
                            <div className=" row">
                                <div className="col-lg-6">
                                    <h2 className="f30 Wblack sormei mb-5">
                                        شرح خدمات
                                    </h2>
                                    <div className="text-dark ss02 text-justify" style={{fontSize: "15px"}}>
                                        <span dangerouslySetInnerHTML={createMarkup()}/>
                                    </div>

                                </div>
                                <div className="col-lg-6 bg-white py-4">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img style={{border: "3px solid #004047"}} src={departmant.responsible_image} alt="pic"
                                                 className="img-fluid"/>
                                        </div>
                                        <div className="col-lg-8">
                                            <h5 className="Wbold text-dark" style={{fontSize: "18px"}}>
                                                مسئول دپارتمان
                                            </h5>
                                            <h1 className="text-fosfori Wbold" style={{fontSize: "35px"}}>
                                                {departmant.responsible_fullname}
                                            </h1>
                                            {departmant.social_network && departmant.social_network.map(
                                                (s_net, index) => {
                                                    return (
                                                        <a href={s_net.link} key={index}>
                                                            <img src={s_net.file} alt={s_net.title}/>
                                                        </a>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </div>
                                    <h5 className="my-3 text-dark Wbold f14">سوابق تحصیلی</h5>
                                    <div className="row text-dark">
                                        <div className="col-3 px-2">
                                            <div className="d-flex flex-column">
                                                <div className="p-2 text-center WMed f14"
                                                     style={{backgroundColor: "#F3F3F3",}}>
                                                    مدرک تحصیلی
                                                </div>
                                                <div
                                                    className="p-2 text-center WMed f14">{departmant.responsible_resume_eduction_degree}</div>
                                            </div>
                                        </div>
                                        <div className="col-3 px-2">
                                            <div className="d-flex flex-column">
                                                <div className="p-2 text-center WMed f14"
                                                     style={{backgroundColor: "#F3F3F3",}}>
                                                    رشته تحصیلی
                                                </div>
                                                <div
                                                    className="p-2 text-center">{departmant.responsible_resume_eduction_field}</div>
                                            </div>
                                        </div>
                                        <div className="col-3 px-2">
                                            <div className="d-flex flex-column">
                                                <div className="p-2 text-center  WMed f14"
                                                     style={{backgroundColor: "#F3F3F3",}}>
                                                    دانشگاه محل تحصیل
                                                </div>
                                                <div
                                                    className="p-2 text-center">{departmant.responsible_resume_eduction_university}</div>
                                            </div>
                                        </div>
                                        <div className="col-3 px-2">
                                            <div className="d-flex flex-column">
                                                <div className="p-2 text-center  WMed f14 "
                                                     style={{backgroundColor: "#F3F3F3",}}>
                                                    تاریخ فارغ التحصیلی
                                                </div>
                                                <div
                                                    className="p-2 text-center ss02">{departmant.responsible_resume_eduction_date}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="Wbold f14 my-4">
                                        سوابق کاری
                                    </p>
                                    <div className="my-3 text-dark  ss02 text-justify">
                                        <span dangerouslySetInnerHTML={createMarkup2()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </React.Fragment>
            );
        default:
            return <Wait/>;
    }


}
export default Departmant;