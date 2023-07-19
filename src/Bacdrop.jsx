import React from "react";
import { styled } from "styled-components";

function Bacdrop(props) {
  return <Wrapper>
    <Modal>
      {props.children}
    </Modal>
  </Wrapper>;
}

export default Bacdrop;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 10px 30px;
  border-radius: 10px;
`