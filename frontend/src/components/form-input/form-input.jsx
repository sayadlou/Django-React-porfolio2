import React from "react";

const FromInput = ({
  submitMessage,
  handleChange,
  label,
  name,
  ...otherProps
}) => {
  const changeInput = (e) => {
    handleChange(e.target.value);
  };
  return (
    <div className="group">
      <input className="form-input" name={name} onChange={changeInput} required />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FromInput;
