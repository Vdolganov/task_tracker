import { variables } from 'utils/variables';

import styled from 'styled-components';


const { fontSizeRegular, textColor, primaryColor } = variables;

export const RegularButton = styled.button`
font-size: ${fontSizeRegular};
color: ${textColor};
border: none;
padding: 5px 20px;
border-radius: 4px;
cursor: pointer;
outline: none;
background: ${(props) => (props.backgroundColor || primaryColor)};
margin-right: ${(props) => (props.marginRight || 0)};
background-position: center;
transition: 0.8s;

&:hover {
box-shadow: 1px 1px 10px gray;
opacity: 0.8;
}
&:active {
opacity: 1;
}

&:disabled {
opacity: 0.3;
cursor: not-allowed;
}
`;
