import styled from "styled-components";

const Input = styled.input`
  color: #272b2b;
  width: 100%;
  margin: 0;
  outline: none;
  line-height: 1.21428571em;
  padding: 5px 8px 4px;
  font-size: 12px;
  background: transparent;
  border: 1px solid #bfc5c5;
  border-radius: 2px;
  letter-spacing: 0.3px;

  &:focus {
    border-color: #bfc5c5;
  }
`;

Input.displayName = "Input";

export default Input;
