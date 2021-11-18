import React, {useState} from 'react'
import {Link} from "react-router-dom";

const Tab = ({homeAboutTab}) => {
    const [description, setDescription] = useState(homeAboutTab[0].description);
    const [p1Class, setP1Class] = useState("tab-active");
    const [p2Class, setP2Class] = useState("tab-deactivate");
    const [p3Class, setP3Class] = useState("tab-deactivate");
    const [link, setLink] = useState(homeAboutTab[0].link);


    const action1 = () => {
        setDescription(homeAboutTab[0].description);
        setP1Class("tab-active")
        setP2Class("tab-deactivate")
        setP3Class("tab-deactivate")
        setLink(homeAboutTab[0].link)
    }
    const action2 = () => {
        setDescription(homeAboutTab[1].description);
        setP1Class("tab-deactivate")
        setP2Class("tab-active")
        setP3Class("tab-deactivate")
        setLink(homeAboutTab[1].link)
    }
    const action3 = () => {
        setDescription(homeAboutTab[2].description);
        setP1Class("tab-deactivate")
        setP2Class("tab-deactivate")
        setP3Class("tab-active")
        setLink(homeAboutTab[2].link)
    }
    return (
        <div>
            <span onClick={action1} style={{cursor: "pointer"}} className={`d-inline m-1 ${p1Class}`}>{` ${homeAboutTab[0].title} `}</span>
            <span onClick={action2} style={{cursor: "pointer"}} className={`d-inline m-1 ${p2Class}`}>{` ${homeAboutTab[1].title} `}</span>
            <span onClick={action3} style={{cursor: "pointer"}} className={`d-inline m-1 ${p3Class}`}>{` ${homeAboutTab[2].title} `}</span>
            <br/>
            <p className='mt-3'>{description}</p>
            <Link  className="float-end" href="">مطالعه بیشتر</Link>
        </div>
    )
}
Tab.defaultProps = {
    aboutUs: {
        construction: "lorem ipsum construction",
        eShop: "lorem ipsum eShop",
        eSchool: "lorem ipsum eSchool",
    }
}
export default Tab;