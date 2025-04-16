import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Cross1Icon } from "@radix-ui/react-icons";

import Input from "./Input";

const Root = styled.div`
  position: relative;
`;

const SearchInput = styled(Input)`
  padding-right: 20px;

  &:focus {
    border-color: #9ea9a9;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  color: #5d6069;
  background: none;
  border: none;
  cursor: pointer;
  right: 8px;
  top: 4px;

  &:hover {
    color: #5d6069;
  }
`;

function Search({
  value: initialValue = "",
  onChange = undefined,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  const clearSearch = () => {
    setValue("");
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Root {...props}>
      <SearchInput
        value={value}
        onChange={handleChange}
        type="search"
        placeholder="Search"
      />
      {value && (
        <ClearButton onClick={clearSearch}>
          <Cross1Icon
            style={{
              width: "9px",
            }}
          />
        </ClearButton>
      )}
    </Root>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  debounce: PropTypes.number,
};

export default Search;
