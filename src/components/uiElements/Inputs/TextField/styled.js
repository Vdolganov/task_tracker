import styled from 'styled-components';
import { variables } from '../../../../utils/variables';

const { primaryColor, textColor, lightGrayColor } = variables;

const TextField = styled.div`
padding: 0;
border: 2px solid ${primaryColor};
border-radius: 4px;
width: 400px;
`;

const TextFieldInput = styled.input`
padding: 10px;
font-size: 24px;
color: ${textColor};
box-shadow: none;
width: 100%;
border: none;
box-sizing: border-box;
outline: none;

&::placeholder {
color: ${lightGrayColor};
}
`;

export default { TextField, TextFieldInput };
