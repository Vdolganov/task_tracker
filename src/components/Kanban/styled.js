import styled from 'styled-components';
import { variables } from 'utils/variables';

const KanbanContainer = styled.div`
    width: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start
`;

const KItemsContainer = styled.div`
display: inline-flex; 
flex-direction: row;
justify-content: flex-start; 
width: auto;
`;

export default { KanbanContainer, KItemsContainer };
