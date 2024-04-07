import React from "react";
import styled from "styled-components";
import { Box } from "./compnents/Box";
import { Title } from "./compnents/Title";
import { Rectangle } from "./compnents/Rectangle";
import StyledBtn from "./compnents/StyledBtn";
import {Text} from "./compnents/Text"
function App() {
  return (
    <div className="App">
    <Box>
      <Rectangle /> 
       <Title>Headline</Title>
       <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
       <div>
          <StyledBtn>See more</StyledBtn>
            <div></div>
      </div>
      </Box>
    </div>
  );
}    

export default App

const SuperBtn = styled(StyledBtn)`
 
 background-color: #2acf1b;
 //gap: 30px;
 color: blue;
`;
;
