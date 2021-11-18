import React, {useEffect, useState} from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import {Link} from "react-router-dom";
import axios from "../apis/axios";
import {Helmet} from "react-helmet";
import urlTable from  "../Constant/urlTable";

const navColor = "nav-icon-black";
const Departmants = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(urlTable.departments);
                setDepartmants(result.data);
            } catch (error) {
                setPageStatus("error")
            }
        }
        fetchData();

    }, [])
    const [departmants, setDepartmants] = useState([])
    const [pageStatus, setPageStatus] = useState("")

    return (
        <React.Fragment>
            <Helmet>
                <title>دپارتمان های کاری</title>
            </Helmet>
            <div className="container">
                <CustomNavbar nameClass={navColor}/>
            </div>
            <div className="container mr-5 my-5">
                <h2 className="text-fosfori">
                    خدمات مهندسی
                </h2>
                <h1 className="f40 Wblack sormei">
                    دپارتمان های کاری
                </h1>
            </div>
            <div className="l-container" style={{background: "#F7F7F7"}}>
                <div className="mr-4 d-flex flex-wrap">
                    {
                        departmants.map((departmant, index) => {
                                return (
                                    <div className="card m-2" style={{width: "30rem"}}>
                                        <img className="card-img-top"
                                             src={departmant.department_image}
                                             style={{height:"280px"}}
                                             alt="Card "
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title f24 Wblack text-fosfori">{departmant.title}</h5>
                                            <div className="d-flex justify-content-end">
                                                <Link to={`/department/${departmant.id}`}
                                                      className="btn btn-outline-primary"
                                                      style={{border: " 1px solid #0098a0"}}>
                                                    <span className="text-dark f10">مشاهده دپارتمان</span>
                                                    <img src="/images/feather-arrow-left.png" alt="next"/>
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
            <Footer/>
        </React.Fragment>
    );
}
export default Departmants;