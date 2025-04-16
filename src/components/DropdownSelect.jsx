import { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select, { components } from "react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const MenuList = (props) => {
  const { children, selectProps } = props;

  useEffect(() => {
    const selectedOption = document.querySelector(
      ".react-select__option--is-selected"
    );
    if (selectedOption) {
      selectedOption.scrollIntoView({ block: "nearest" });
    }
  }, [selectProps.menuIsOpen]);

  return <components.MenuList {...props}>{children}</components.MenuList>;
};

MenuList.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object,
};

const StyledDropdownSelect = styled(Select)`
  margin-top: 1px;
  margin-left: 6px;

  .react-select__input-container {
    font-size: var(--fs_xsmall);
    font-weight: 700;
    letter-spacing: 0.2px;
    color: var(--fc_link_grey);
    cursor: text;
  }

  .react-select__input-container {
    position: relative;
    display: flex; /* Ensures the input adapts within its container */
    flex-wrap: wrap;
    width: 100%; /* The container takes full width */
  }

  .react-select__input-container input {
    position: absolute; /* prevent weird positionning due to the flex prop of its parent */
    top: 0;
    left: 0;
    width: auto !important; /* Allows the input to adapt to the content */
    min-width: 100% !important; /* Ensure a minimum width */
    flex-grow: 1; /* Allows the input to grow and take available space */
  }

  .react-select__single-value {
    font-size: var(--fs_xsmall);
    font-weight: 800;
    letter-spacing: 0.6px;
    color: var(--fc_link_grey);
    text-transform: uppercase;
    cursor: text;
  }

  .react-select__input {
    text-transform: uppercase;
  }

  .react-select__menu {
    background: var(--grey_002);
    border-radius: 6px;
    color: var(--fc_link_grey);
    min-width: 200px;
    z-index: 3;
    width: max-content;
    border: 1px solid var(--grey_000);
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 3px 3px;
    margin-top: 4px;
    overflow-y: auto;
  }

  .react-select__menu-list::-webkit-scrollbar {
    width: 10px;
  }

  .react-select__menu-list::-webkit-scrollbar-thumb {
    background: var(--grey_000);
    height: 16px;
    border-radius: 4px;
  }

  .react-select__menu-list::-webkit-scrollbar-thumb:hover {
    background: var(--grey_005);
  }

  .react-select__menu-list::-webkit-scrollbar-track {
    background: var(--grey_001);
  }

  .react-select__option {
    font-size: var(--fs_xsmall);
    padding: 5px 12px;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
      background-color: var(--dropdown_bg);
    }
  }

  .react-select__option--is-selected {
    background: var(--grey_000);
  }

  .react-select__option:not(:last-child) {
    border-bottom: 1px solid var(--grey_000);
  }

  .react-select__placeholder {
    color: var(--grey_005);
  }

  .react-select__indicator {
    padding-left: 8px;
  }

  .react-select__dropdown-indicator {
    top: "-2px";
  }

  .react-select__control {
    width: 100%;
    cursor: text;
  }
`;

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon
        width="9px"
        color="var(--grey_005)"
        style={{ cursor: "pointer", position: "relative", top: -1 }}
      />
    </components.DropdownIndicator>
  );
};

function DropdownSelect(props) {
  return (
    <StyledDropdownSelect
      isSearchable
      isClearable={false}
      escapeClearsValue={false}
      controlShouldRenderValue={true}
      components={{ DropdownIndicator, MenuList }}
      unstyled
      className="react-select-container"
      classNamePrefix="react-select"
      {...props}
    />
  );
}

export default DropdownSelect;
