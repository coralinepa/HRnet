import styled from "styled-components";

const buttonStyles = `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
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

export default Button;
