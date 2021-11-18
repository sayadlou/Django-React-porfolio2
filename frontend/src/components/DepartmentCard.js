import React from 'react';
import {Link} from "react-router-dom";

class DepartmentCard extends React.Component {
    constructor(props) {
        super(props);
        const colorQuantity = Math.floor(Math.random() * 3) + 1;
        const colorBar = [];
        for (let i = 0; i < colorQuantity; i++) {
            colorBar.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
        }

        this.state = {
            spans: 0,
            colorQty: colorQuantity,
            colorBar: colorBar
        };
    }

    componentDidMount() {
        let spansTemp = 0;
        if (this.state.colorQty === 1) {
            spansTemp = 36;
            if (this.props.image.title.length >= 26) spansTemp += 3;

        } else if (this.state.colorQty === 2) {
            spansTemp = 39
            if (this.props.image.title.length >= 26) spansTemp += 4;

        } else if (this.state.colorQty === 3) {
            spansTemp = 42
            if (this.props.image.title.length >= 26) spansTemp += 3;

        }
        this.setState({spans: 38});
    }


    render() {
        const {description, urls, title, id, label, link, key} = this.props.image;

        return (

            <div
                key={key}
                className="m-3"
                style={{
                    minHeight: "",
                    backgroundColor: "white",
                    gridRowEnd: `span ${this.state.spans}`,
                    border: "1px solid rgba(0, 0, 0, 0.125)"
                }}
            >


                <img style={{objectFit: "none", objectPosition: "center", height: "240px", width: "100%"}}
                     alt={description} src={urls}/>
                {/*<div className=" mx-3 mt-4 d-flex justify-content-between">*/}
                <div style={{minHeight: "65px"}}>
                    <h5 className="card-title my-2 mx-1 f24 Wblack text-fosfori">{title}</h5>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to={`/${link}/${id}`}
                          className="btn btn-outline-primary"
                          style={{border: " 1px solid #0098a0"}}>
                        <span className="text-dark f10">{label}</span>
                        <img src="/images/feather-arrow-left.png" style={{height: "8px", width: "14px"}} alt="next"/>
                    </Link>
                </div>

                {/*</div>*/}
                {/*<div className="py-1">*/}
                {/*    {*/}
                {/*        this.state.colorBar.map(*/}
                {/*            (bar) => {*/}
                {/*                return (*/}
                {/*                    <div className="my-2 mx-1" style={{height: "20px", backgroundColor: bar}}/>*/}
                {/*                );*/}
                {/*            }*/}
                {/*        )*/}
                {/*    }*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default DepartmentCard;
