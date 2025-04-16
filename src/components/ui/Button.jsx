import PropTypes from "prop-types";
import styled from "styled-components";

import { Cross1Icon } from "@radix-ui/react-icons";

const buttonStyles = `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 5px 25px;
  border-radius: 5px;
  height: 22px;
  box-sizing: border-box;
  letter-spacing: 0.2px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}`;

const Button = styled.button`
  ${buttonStyles}
  background-color: #A7BEAE;
  color: #5d6069;
`;

Button.displayName = "Button";

const ButtonIcon = ({ name, width = "8px", ...rest }) => {
  return (
    <Button {...rest}>
      <Cross1Icon name={name} width={width} />
    </Button>
  );
};

ButtonIcon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
};

export { ButtonIcon };
export default Button;
