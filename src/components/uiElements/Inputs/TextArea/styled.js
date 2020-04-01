import styled from 'styled-components';
import { variables } from 'utils/variables';

const { primaryColor, textColor, fontSizeSmall } = variables;

const TextArea = styled.div`
padding: 0;
border: 2px solid ${primaryColor};
border-radius: 4px;
width: 400px;
`;

const TextAreaWorkArea = styled.textarea`
padding: 10px;
font-size: ${fontSizeSmall};
color: ${textColor};
box-shadow: none;
width: 100%;
border: none;
box-sizing: border-box;
outline: none;
resize: none;
white-space: normal;
height: 100px;
`;


export default { TextArea, TextAreaWorkArea };
