import styled from "styled-components";

const Badge = styled.span`
  background: var(--grey_001);
  border-radius: 2px;
  padding: 2px 4px;
  font-size: var(--fs_xsmall);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--grey_006);
`;

Badge.displayName = "Badge";

export default Badge;
