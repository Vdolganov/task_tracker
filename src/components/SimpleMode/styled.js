import styled from 'styled-components';
import { variables } from 'utils/variables';

const { textColor, primaryColor } = variables;

const SimpleTasks = styled.div`
padding: 5px 20px;
width: 100%;
border: 1px solid ${primaryColor};
box-sizing: border-box;
`;

const SimpleTaskItem = styled.div`
width: 100%;
padding: 5px;
box-shadow: 1px 1px 4px gray;
box-sizing: border-box;
`;

const TaskTitle = styled.h4`
color: ${textColor};
`;

const TaskDescription = styled.p`
color: ${textColor};
`;

export default { SimpleTaskItem, TaskTitle, TaskDescription, SimpleTasks };
