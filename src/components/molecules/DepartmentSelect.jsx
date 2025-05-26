import PropTypes from "prop-types";
import { Select } from "../atoms";

const departmentOptions = [
  { value: "S", label: "Sales" },
  { value: "M", label: "Marketing" },
  { value: "E", label: "Engineering" },
  { value: "HR", label: "Human Resources" },
  { value: "L", label: "Legal" },
];

function DepartmentSelect({ value, onChange }) {
  const selectedOption = departmentOptions.find((opt) => opt.label === value);
  return (
    <Select
      options={departmentOptions}
      value={selectedOption}
      onChange={(selected) => onChange(selected?.label || "")}
      placeholder="Select a Department"
    />
  );
}

DepartmentSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default DepartmentSelect;
