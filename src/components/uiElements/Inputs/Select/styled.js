import styled from 'styled-components';
import { variables } from '../../../../utils/variables';

const {
  primaryColor, textColor, fontSizeBig, lightGrayColor,
} = variables;

const Select = styled.div`
padding: 0;
border: 2px solid ${primaryColor};
border-radius: 4px;
width: 400px;
position: relative;
&:focus {
outline: 2px solid darken(${primaryColor});
}
`;

const SelectList = styled.ul`
padding: 0;
margin: 0;
list-style: none;
width: 100%;
position: absolute;
left: 0;
top: 0;
border: 1px solid ${primaryColor};
z-index: 1000;
`;

const SelectListItem = styled.li`
font-size: 18px;
color: ${textColor};
padding: 5px 10px;
cursor: pointer;
user-select: none;
background: ${(props) => (props.preselected ? primaryColor : '#fff')};
&:hover {
background: ${primaryColor};
}
`;

const SelectedElementHeader = styled.div`
font-size: ${fontSizeBig};
color: ${textColor};
cursor: pointer;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const SelectedListContainer = styled.div`
position: relative;
`;

const SelectPlaceholder = styled.span`
color: ${lightGrayColor};
font-size: 24px;
`;

export default {
  Select,
  SelectList,
  SelectListItem,
  SelectedElementHeader,
  SelectedListContainer,
  SelectPlaceholder,
};
