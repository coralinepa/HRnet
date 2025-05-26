import styled from "styled-components";
import PropTypes from "prop-types";

const Checkmark = styled.span`
  display: block;
  height: 12px;
  width: 12px;
  border: 1px solid var(--grey_006);
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
`;

const CheckboxContainer = styled.div`
  vertical-align: middle;
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;

    &:hover ~ ${Checkmark} {
      border-color: var(--link);
      box-shadow: rgb(0 0 0 / 15%) 0px 3px 3px 3px;
    }

    &:focus ~ ${Checkmark} {
      border-color: var(--link);
      box-shadow: rgb(0 0 0 / 15%) 0px 3px 3px 3px;
    }

    &:checked ~ ${Checkmark} {
      border: 1px solid var(--grey_006);

      &:after {
        top: 2px;
        left: 2px;
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: var(--grey_006);
      }
    }
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-right: 15px;
  margin-bottom: 0;
  font-size: var(--fs_medium);
  color: var(--grey_006);

  > span {
    margin-left: 5px;
  }
`;

const Checkbox = ({ children = null, ...props }) => {
  return (
    <CheckboxLabel>
      <CheckboxContainer>
        <input type="checkbox" {...props} />
        <Checkmark />
      </CheckboxContainer>
      {children && <span>{children}</span>}
    </CheckboxLabel>
  );
};

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  children: PropTypes.node,
};

export default Checkbox;
