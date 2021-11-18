import React, {useEffect, useState} from "react";
import labelTranslate from "./labelTranslate"
import axios from "../apis/axios";
import urlTableData from "../Constant/urlTableData";
import Select from 'react-select';


const InputRender = ({type, id, choices, setFormValues, formValues}) => {
    const [manyData, setManyData] = useState([]);
    useEffect(() => {
        if (type === 'ManyToManyField') {
            const fetchData = async () => {
                try {
                    const result = await axios.get(urlTableData[id]);
                    if (result.status === 200) {
                        setManyData(result.data.map((item) => {
                                return {label: item.title, value: item.id}
                            })
                        )
                    }
                } catch (error) {
                }
            }
            fetchData()
        }
    }, [])

    const onInputFileChange = (e) => {
        setFormValues(
            oldFormFields => {
                return {...oldFormFields, [e.target.id]: e.target.files[0]};
            }
        )
    }
    const onInputChange = (e) => {
        setFormValues(
            oldFormFields => {
                return {...oldFormFields, [e.target.id]: e.target.value};
            }
        )
    }
    const onSelectChange = (value, {name}) => {
        //console.log("on sel", value)
        setFormValues(
            oldFormFields => {
                return {...oldFormFields, [`${name}`]: value,[`${name}_many`]: value};
            }
        )
    }

    switch (type) {
        case "AutoField":
            return <React.Fragment/>
        case "FileField":
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelTranslate(id)}</label>
                    <input required onChange={onInputFileChange} className="form-control" type="file" id={id}/>
                </React.Fragment>
            )
        case "DateField":
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelTranslate(id)}</label>
                    <input onChange={onInputChange} value={formValues[id]} className="form-control" type="date" id={id}/>
                </React.Fragment>
            )
        case "ManyToManyField":
            //console.log(formValues[id]);
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelTranslate(id)}</label>
                    <div style={{direction: "ltr"}}>
                        <Select
                            name={id}
                            onChange={onSelectChange}
                            value={formValues[`${id}_many`]}
                            closeMenuOnSelect={true}
                            isMulti
                            options={manyData}
                            isRtl={true}
                            placeholder="انتخاب کنید ..."
                        />
                    </div>
                </React.Fragment>
            )
        case "CharField":
            if (choices.length === 0) {
                return (
                    <React.Fragment>
                        <label htmlFor={id} className="form-label">{labelTranslate(id)}</label>
                        <input onChange={onInputChange} value={formValues[id]} type="text" className="form-control" id={id}/>
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <label htmlFor={id} className="form-label">{labelTranslate(id)}</label>
                        <select value={formValues[id]} onChange={onInputChange} className="form-select" aria-label="Default select example" id={id}>
                            <option defaultValue hidden>یکی از گزینه ها را انتخاب کنید</option>
                            {
                                choices.map((choice, index) => {
                                        return <option key={index} value={choice}>{choice}</option>
                                    }
                                )
                            }
                        </select>
                    </React.Fragment>
                )
            }
        case "TextField":
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelTranslate(id)}</label>
                    <textarea onChange={onInputChange} value={formValues[id]} className="form-control" id={id} rows="5"/>
                </React.Fragment>
            )


        default:
            return <p>Error</p>

    }
}
export default InputRender;