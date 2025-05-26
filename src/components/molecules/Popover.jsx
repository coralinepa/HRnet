import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import * as PopoverPrimitive from "@radix-ui/react-popover";

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PopoverContent = styled(PopoverPrimitive.Content)`
  border-radius: 4px;
  z-index: 100;
  font-size: 12px;
  line-height: 1;
  background-color: #eaecec;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="delayed-open"][data-side="top"] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state="delayed-open"][data-side="right"] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state="delayed-open"][data-side="bottom"] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state="delayed-open"][data-side="left"] {
    animation-name: ${slideRightAndFade};
  }
`;

const Arrow = styled(PopoverPrimitive.Arrow)`
  fill: #f8f9fa;
`;

const Provider = PopoverPrimitive.Provider;
const PopoverTrigger = PopoverPrimitive.Trigger;

const Popover = ({
  children = null,
  trigger = null,
  portalProps = {},
  rootProps = {},
  ...props
}) => (
  <PopoverPrimitive.Root {...rootProps}>
    <PopoverTrigger asChild>{trigger}</PopoverTrigger>
    <PopoverPrimitive.Portal {...portalProps}>
      <PopoverContent sideOffset={5} collisionPadding={5} {...props}>
        {children}
        <Arrow />
      </PopoverContent>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
);

Popover.propTypes = {
  trigger: PropTypes.node,
  children: PropTypes.node,
  portalProps: PropTypes.object,
  rootProps: PropTypes.object,
};

export { Provider, PopoverTrigger, PopoverContent };

export default Popover;
