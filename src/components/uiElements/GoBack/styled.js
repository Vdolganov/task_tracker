import styled from 'styled-components';
import { variables } from 'utils/variables';

const { lightColor } = variables;

const GoBack = styled.div`
    width: 100%;
    background: ${lightColor}; 
    box-shadow: 1px 1px 4px gray;
    padding: 10px;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    i {
    transition: 0.5s ease;
    }
    &:hover {
    i {
    transform: scale(1.1);
    }
    }
`;


export default { GoBack, Button };
