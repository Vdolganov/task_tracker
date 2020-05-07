import styled from 'styled-components';
import { variables } from 'utils/variables';

const {
  primaryColor, fontSizeSmaller, lightGrayColor, primaryDark,
} = variables;

const RangeContainer = styled.div`
width: ${(props) => props.pWidth}px;
padding: 3px;
border: 2px solid ${primaryColor};
border-radius: 4px;
cursor: pointer;
user-select: none;
&:focus {
outline: 2px solid darken(${primaryColor});
}
`;

const RangeActiveElementContainer = styled.div`
background: #cbc3bf;
width: 100%;
border-radius: 5px;
height: 20px;
`;

const RangeActiveElement = styled.div`
background: #099abc;
width: ${(props) => props.actWidth}px;
border-radius: 4px;
height: 10px;
box-shadow: 1px 1px 2px #2659bc;
`;

const RangeNumbersContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const RangeNumber = styled.p`
font-size: ${fontSizeSmaller};
color: ${lightGrayColor};
padding: 2px 0;
margin: 0;
`;

const RangeValue = styled.p`
background: white;
border-radius: 5px;
height: 20px;
width: 20px;
font-size: ${fontSizeSmaller};
color: ${primaryDark};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 2px ${lightGrayColor};
margin: 0;
&:hover {
transform: scale(2);
box-shadow: 2px 2px 3px ${lightGrayColor};
}
`;

export default {
  RangeContainer,
  RangeActiveElement,
  RangeActiveElementContainer,
  RangeNumbersContainer,
  RangeNumber,
  RangeValue,
};
