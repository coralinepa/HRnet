import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes`
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideRightAndFade = keyframes`
  0% { opacity: 0; transform: translateX(-2px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slideDownAndFade = keyframes`
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideLeftAndFade = keyframes`
  0% { opacity: 0; transform: translateX(2px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const DropdownMenuItem = styled(Item)`
  all: unset;
  font-size: var(--fs_small);
  color: var(--fc_link_grey);
  display: flex;
  align-items: center;
  padding: 5px 12px;

  position: relative;
  cursor: pointer;
  user-select: none;

  &[data-disabled],
  &[data-disabled] a {
    cursor: not-allowed;
    pointer-events: none;
    color: var(--fc_link_grey);
    opacity: 0.5;
  }

  &[data-highlighted] {
    background-color: var(--dropdown_bg);
  }
`;

const StyledContent = styled(Content)`
  background: var(--grey_002);
  border-radius: 6px;
  color: var(--fc_link_grey);
  min-width: 200px;
  border: 1px solid var(--grey_000);
  z-index: 3;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 3px 3px;
  margin-top: 13px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  overflow: hidden;
  &[data-state="open"] {
    &[data-side="top"] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side="right"] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side="bottom"] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side="left"] {
      animation-name: ${slideRightAndFade};
    }
  }

  & ${DropdownMenuItem}:not(:last-child) {
    border-bottom: 1px solid var(--grey_000);
  }
`;

const TriggerContent = styled.div`
  display: flex;
  color: var(--fc_link_grey);
  cursor: pointer;
`;

DropdownMenuItem.displayName = "DropdownMenuItem";

function Dropdown({ trigger, children, ...props }) {
  return (
    <Root {...props}>
      <Trigger asChild>
        <TriggerContent>{trigger}</TriggerContent>
      </Trigger>
      <Portal>
        <StyledContent collisionPadding={2} align="center">
          {children}
        </StyledContent>
      </Portal>
    </Root>
  );
}

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export { DropdownMenuItem };

export default Dropdown;
