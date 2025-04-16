import { useState } from "react";
import Select from "../components/ui/Select";

const departmentOptions = [
  { value: "S", label: "Sales" },
  { value: "M", label: "Marketing" },
  { value: "E", label: "Engineering" },
  { value: "HR", label: "Humain Resources" },
  { value: "L", label: "Legal" },
];

function DepartmentSelect() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <div>
      <Select
        options={departmentOptions}
        value={selectedDepartment}
        onChange={setSelectedDepartment}
        placeholder="Select a Department"
      />
    </div>
  );
}

export default DepartmentSelect;
