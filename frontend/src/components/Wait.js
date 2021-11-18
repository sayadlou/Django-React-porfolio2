import React from "react";
import {css} from "@emotion/core";
import {BeatLoader} from "react-spinners";

const override = css`
  display: block;
`;

const Wait = ({pageError}) => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center " style={{marginTop:"200px"}}>
                <div className="sweet-loading">
                    <BeatLoader color={"#36D7B7"} loading={true} css={override} size={50}/>
                </div>
            </div>
            {/*<div className="d-flex justify-content-center">*/}
            {/*    <div className="spinner-border m-5" role="status">*/}
            {/*        <span className="visually-hidden">Loading...</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="d-flex justify-content-center">
                <h1>{pageError}</h1>
            </div>
        </React.Fragment>
    )
}
export default Wait;