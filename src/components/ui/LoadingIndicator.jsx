import styled, { keyframes } from "styled-components";
import { SymbolIcon } from "@radix-ui/react-icons";

const loadingAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const Root = styled(SymbolIcon)`
  position: relative;
  display: inline-block;
  animation: ${loadingAnimation} 3000ms linear infinite;
`;

function LoadingIndicator(props) {
  return <Root name="Loading" width="8px" {...props} />;
}

export default LoadingIndicator;
