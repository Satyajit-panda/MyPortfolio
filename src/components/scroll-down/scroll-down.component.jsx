import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 5em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: 800;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  animation: MoveUpDown 2s linear infinite;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
    color:black
  }
  @keyframes MoveUpDown {
   0%, 100% {
         bottom: 100;
       }
       50% {
         bottom:  50px;
       }
}
`;
const ScrollDown =()=>
{
    return(
    <MyScroll>
    <div className="turn">
    <span>&gt;</span>
      </div>
    
</MyScroll>
    );
};
export default ScrollDown;