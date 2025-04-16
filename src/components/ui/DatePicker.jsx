import styled from "styled-components";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";

import Popover from "./Popover";
import Input from "./Form/Input";
import Calendar from "./Calendar";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  padding-left: 35px;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 10px;
  pointer-events: none;
  display: flex;
  align-items: center;
  color: #272b2b;
`;

function DatePicker({ title, selected, onChange, ...props }) {
  return (
    <Popover
      trigger={
        <InputWrapper>
          <IconWrapper>
            <CalendarIcon />
          </IconWrapper>
          <StyledInput
            type="text"
            value={selected ? format(selected, "PPP") : ""}
            placeholder={title}
            readOnly
          />
        </InputWrapper>
      }
    >
      <Calendar
        mode="single"
        selected={selected}
        onSelect={onChange}
        initialFocus
        {...props}
      />
    </Popover>
  );
}

DatePicker.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

export default DatePicker;
