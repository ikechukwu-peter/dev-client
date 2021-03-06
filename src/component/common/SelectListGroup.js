import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({
  name,
  value,
  onChange,
  error,
  placeholder,
  info,
  options,
}) => {
  const selectOptions = options?.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  info: PropTypes.string,
  options: PropTypes.array.isRequired,
};
SelectListGroup.defaultProps = {
  type: "text",
};
export default SelectListGroup;
