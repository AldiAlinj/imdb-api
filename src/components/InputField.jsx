import React from "react";

const InputField = ({ label, children }) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-2">
    <label htmlFor="input-group" className="form-label">
      {label}
    </label>
    <div className="input-group mb-3">
     {children}
    </div>
  </div>
  );
};

export default InputField;
