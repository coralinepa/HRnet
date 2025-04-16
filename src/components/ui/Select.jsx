import styled from "styled-components";
import ReactSelect, { components } from "react-select";

import { ChevronDownIcon } from "@radix-ui/react-icons";

const ChevronDown = styled(ChevronDownIcon)`
  transition: transform 0.3s ease;
`;

const selectStyles = `
  border-bottom: 1px solid #D8D4D0);
  min-height: 25px;

  &.react-select--is-disabled {
    opacity: 0.6;
  }

  .react-select__control {
    min-height: 25px;
    padding-right: 0;
  }

.react-select__value-container {
    font-size:  12px;

    color: #5D6069;
   
    border: 1px solid #BFC5C5;
    padding: 5px 8px 4px;
    width: 100%;
  }

  .react-select__input-container {
    font-size:  12px;
  }

  .react-select__single-value {
    font-size: 12px;
    color: #BFC5C5
    letter-spacing: 0.1px;
  }

  .react-select__menu {
    background: #F8F9FA;
    color: #5d6069;
    min-width: 50px;
    border: 1px solid #BFC5C5;
    z-index: 3;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 3px 3px;
    border-top: none;
    border-radius: 0;
    transition: opacity 0.1s ease;

  }

  .react-select__option {
    font-size: 12px;
    padding: 7px 14px;
    cursor: pointer;
    color: #5d606;
    line-height: 10px;
    font-weight: 400;

    &:hover {
    background-color: #F8F9FA;
        color: #5d6069;
    }
  }

  .react-select__option--is-selected {
    font-weight: 700;
    color: #5d6069;

    &:hover {
    background-color: transparent;
    color: #5d6069;
}
    }
.react-select__dropdown-indicator > span {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 6px;
}

.react-select__clear-indicator > span {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative; 
  margin-left: 8px;
}

`;

const StyledSelect = styled(ReactSelect)`
  ${selectStyles}
`;

function DropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown width="6px" color="#D8D4D0" />
    </components.DropdownIndicator>
  );
}

const Select = ({ ...props }) => {
  return (
    <StyledSelect
      escapeClearsValue={false}
      controlShouldRenderValue={true}
      components={{
        DropdownIndicator,
      }}
      unstyled
      className="react-select-container"
      classNamePrefix="react-select"
      {...props}
    />
  );
};

Select.displayName = "Select";

export { DropdownIndicator };
export default Select;
