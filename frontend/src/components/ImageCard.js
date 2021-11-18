import React from 'react';
import {Link} from "react-router-dom";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10) + 6;

        this.setState({spans});
    };

    render() {
        const {description, urls, title, id} = this.props.image;

        return (

            <div
                style={{gridRowEnd: `span ${this.state.spans}`}}
            >
                <Link to={`/projects/${id}`}>
                    <div className=" d-flex justify-content-center">
                        <img ref={this.imageRef} alt={description} src={urls}/>
                    </div>
                    <div className=" mx-3 mt-4 d-flex justify-content-between">
                        <h5 className=" card-title f24 Wblack text-fosfori">{title}</h5>
                    </div>
                </Link>
            </div>

        );
    }
}

export default ImageCard;
