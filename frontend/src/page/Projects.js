import React, {useEffect, useState} from "react"
import Footer from "../components/Footer";
import "../styles/customTheme.styles.css";
import "../style.css"
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import {Link, useParams} from "react-router-dom";
import axios from "../apis/axios";
import {Helmet} from "react-helmet";
import urlTable from "../Constant/urlTable";

const navColor = "nav-icon-black";
const Projects = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${urlTable.project}`);
                setProjects(result.data);
            } catch (error) {
                setPageStatus("error")
            }
        }
        fetchData();

    }, [])
    const [projects, setProjects] = useState([])
    const [pageStatus, setPageStatus] = useState("")
    console.log(projects);
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
                    تیتر
                </h2>
                <h1 className="f40 Wblack sormei mb-5">
                    پروژه های شاخص اجرا شده
                </h1>
                <div className="mr-4 d-flex flex-wrap">
                    {
                        projects.map((project, index) => {

                            return (
                                <div key={index} className="card m-2" style={{width: "30rem"}}>
                                    <img className="card-img-top" src={project.image_page}
                                         alt="Card image cap"/>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title Wbold text-half-black d-inline">{project.title}</h5>
                                            <Link to={`/project/${project.id}`} className="btn btn-outline-primary"
                                                  style={{border: " 0px solid #0098a0"}}>
                                                <img src="/images/feather-arrow-left.png" alt="next"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
export default Projects;


// import React, {useEffect, useState} from "react"
// import Footer from "../components/Footer";
// import "../styles/customTheme.styles.css";
// import "../style.css"
// import CustomNavbar from "../components/custom-navbar/custom-navbar";
// import {Link, useParams} from "react-router-dom";
// import axios from "../apis/axios";
// import {Helmet} from "react-helmet";
// import {Button} from "react-bootstrap";
// import ImageList from "../components/ImageList";
//
// const navColor = "nav-icon-black";
// const Projects = () => {
//     let {id} = useParams();
//     const oathBackground = "#ffffff";
//     const [departmants, setDepartmants] = useState([])
//     const [projects, setProjects] = useState([])
//     const [pageStatus, setPageStatus] = useState("")
//     useEffect(() => {
//         const fetchProject = async () => {
//             try {
//                 const result = await axios.get("comidt/service/project");
//                 setProjects(result.data);
//             } catch (error) {
//                 setPageStatus("error")
//             }
//         }
//         const fetchDepartments = async () => {
//             try {
//                 const result = await axios.get(`comidt/service/department/${id}/show`);
//                 setDepartmants(result.data.project);
//             } catch (error) {
//                 setPageStatus("error")
//             }
//         }
//         fetchDepartments();
//
//     }, [])
//     const images = departmants.map(
//         (departmant, index) => {
//             return {
//                 id: index,
//                 title: departmant.title,
//                 urls: departmant.department_image,
//                 description: "bla",
//             };
//         }
//     )
//     return (
//         <React.Fragment>
//             <Helmet>
//                 <title>پروژه های شاخص اجرا شده</title>
//             </Helmet>
//             <div className="container">
//                 <CustomNavbar nameClass={navColor}/>
//             </div>
//             <div className="container mr-5 my-5">
//                 <h2 className="text-fosfori">
//                     تیتر
//                 </h2>
//                 <h1 className="f40 Wblack sormei mb-5">
//                     پروژه های شاخص اجرا شده
//                 </h1>
//             </div>
//             <div className="l-container" style={{background: "#F7F7F7"}}>
//                 <div className="mr-5 pr-2">
//                     <div className="d-flex justify-content-center">
//                         {
//                             departmants.map(
//                                 (departmant) => {
//
//                                     return (
//                                         <React.Fragment>
//                                             <button className="btn btn-outline-primary text-fosfori mx-3"
//                                                     style={{
//                                                         border: "1px solid #00626D",
//                                                         borderRadius: "5px",
//                                                         minHeight: "47px"
//                                                     }}>
//                                                 <span className="m-5" style={{fontSize: "15px"}}>
//                                                     {departmant.title}
//                                                 </span>
//
//                                             </button>
//                                         </React.Fragment>
//                                     )
//                                 }
//                             )
//
//                         }
//                     </div>
//
//                     <div className="mt-5">
//                         <ImageList images={images}/>
//                     </div>
//
//                 </div>
//
//
//             </div>
//
//             <Footer/>
//         </React.Fragment>
//     );
// }
// export default Projects;
//
//
//
