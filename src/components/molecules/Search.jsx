import PropTypes from "prop-types";
import styled from "styled-components";

import { Input } from "../atoms";

const StyledInput = styled(Input)`
  width: 50%;
`;

function Search({ value, onChange, ...props }) {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={(e) => onChange(e)}
      placeholder="Search..."
      {...props}
    />
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
};

export default Search;
