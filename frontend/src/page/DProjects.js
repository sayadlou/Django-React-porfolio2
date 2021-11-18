import React, {useEffect, useState} from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import {Link} from "react-router-dom";
import axios from "../apis/axios";
import {Helmet} from "react-helmet";
import {Button} from "react-bootstrap";
import ImageList from "../components/ImageList";
import DepartmentList from "../components/DepartmentList";
import urlTable from "../Constant/urlTable";

const navColor = "nav-icon-black";
const DProjects = () => {
    const oathBackground = "#ffffff";
    const [departmants, setDepartmants] = useState([]);
    const [projects, setProjects] = useState([]);
    const [pageStatus, setPageStatus] = useState("");
    const [filter, setFilter] = useState(0);
    const [list, setList] = useState([]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const result = await axios.get(urlTable.project);
                shuffleArray(result.data)
                setProjects(result.data);
            } catch (error) {
                setPageStatus("error")
            }
        }
        const fetchDepartments = async () => {
            try {
                const result = await axios.get(urlTable.departments);
                setDepartmants(result.data);
            } catch (error) {
                setPageStatus("error")
            }
        }
        fetchDepartments()
        fetchProject();


    }, [])
    const onButtonClick = (e) => {
        console.log(e.target.key)
        setFilter(e.target.key)
    }
    useEffect(() => {
        if (filter === 0) {
            setList(
                projects.map(
                    (project) => {
                        return {
                            id: project.id,
                            title: project.title,
                            urls: project.image_page,
                            label: "مشاهده پروژه ",
                            link: "project",
                        };
                    }
                )
            )
        } else {
            console.log("yesssssssssssss")
            setList(
                projects
                    .filter(
                        (projectFilter) => {
                            // console.log(projectFilter.department)
                            return filter == projectFilter.department;
                        }
                    )
                    .map(
                        (project) => {
                            return {
                                id: project.id,
                                title: project.title,
                                urls: project.image_page,
                                label: "مشاهده پروژه ",
                                link: "project",
                            };
                        }
                    )
            )
        }
    }, [filter, projects])


    return (
        <React.Fragment>
            <Helmet>
                <title>پروژه های شاخص اجرا شده</title>
            </Helmet>
            <div className="container">
                <CustomNavbar nameClass={navColor}/>
            </div>
            <div className="container mr-5 my-5">
                <h2 className="text-fosfori">
                    کارنامه چهارسو
                </h2>
                <h1 className="f40 Wblack sormei mb-5">
                    پروژه های اجرا شده
                </h1>
            </div>
            <div className="l-container" style={{background: "#F7F7F7"}}>
                <div className="mr-5 pr-2">
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() => setFilter(0)}
                            className="btn btn-outline-primary text-fosfori mx-3"
                            style={{
                                border: "1px solid #00626D",
                                borderRadius: "5px",
                                minHeight: "47px"
                            }}
                        >
                            <span className="m-3" style={{fontSize: "15px"}}>
                                کامل
                            </span>
                        </button>
                        {
                            departmants.map(
                                (departmant, index) => {
                                    return (
                                        <React.Fragment>
                                            <button
                                                key={index}
                                                onClick={() => setFilter(departmant.id)}
                                                className="btn btn-outline-primary text-fosfori mx-3"
                                                style={{
                                                    border: "1px solid #00626D",
                                                    borderRadius: "5px",
                                                    minHeight: "47px"
                                                }}
                                            >
                                                <span className="m-3" style={{fontSize: "15px"}}>
                                                    {departmant.title}
                                                </span>
                                            </button>
                                        </React.Fragment>
                                    )
                                }
                            )
                        }
                    </div>
                    <div className="mt-5">
                        <DepartmentList images={list}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </React.Fragment>
    );
}
export default DProjects;



