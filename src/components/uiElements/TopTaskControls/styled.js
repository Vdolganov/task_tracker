import styled from 'styled-components';
import { variables } from 'utils/variables';

const { primaryDark, lightColor } = variables;

const ControlsContainer = styled.div`
    width: 100%;
    background: ${primaryDark}; 
    box-shadow: 1px 1px 4px gray;
    padding: 10px;
    color: ${lightColor};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    top: -40px;
    transition: 0.2s ease;
    &:hover {
    top: 0
    }
`;

const Label = styled.label`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`

export default { ControlsContainer, Label };
