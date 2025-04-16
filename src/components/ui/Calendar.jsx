import styled from "styled-components";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const StyledCalendarWrapper = styled.div`
  .rdp-root {
    background-color: transparent;
    --rdp-accent-color: #272b2b;
  }

  .rdp-months {
    padding: 8px;
    font-size: 13px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .rdp-nav {
    top: 7px;
    right: 10px;
  }

  .rdp-chevron {
    width: 16px;
    color: #272b2b;
  }

  .rdp-day_button {
    font-size: 11px;
    color: #272b2b;
  }

  .rdp-selected .rdp-day_button {
    font-size: 15px;
    font-weight: 700;
  }

  .rdp-day {
    font-weight: 700;
  }

  .rdp-caption_label {
    padding-left: 8px;
    letter-spacing: 0.2px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const Calendar = (props) => {
  return (
    <StyledCalendarWrapper>
      <DayPicker {...props} />
    </StyledCalendarWrapper>
  );
};

export default Calendar;
