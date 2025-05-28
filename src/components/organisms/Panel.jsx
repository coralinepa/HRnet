import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.section`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  background-color: #f4f5f5;
  border-radius: 4px;
`;

const Content = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

function Panel({ children = null, ...props }) {
  return (
    <Root {...props}>
      <Content>{children}</Content>
    </Root>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
};

export { Root, Content };

export default Panel;
