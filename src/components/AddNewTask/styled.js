import styled from 'styled-components';
import { variables } from 'utils/variables';

import { RegularButton } from '../uiElements';

const {
  fontSizeBiggest, textColor, acceptColor, declineColor,
} = variables;

const AddNewTaskTitle = styled.p`
font-size: ${fontSizeBiggest};
color: ${textColor};
margin: 3px 0;
`;

const AddNewTaskControls = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin-top: 10px;
`;

const AcceptButton = styled(RegularButton)`
background: ${acceptColor};
color: white;
margin-top: 10px;
margin-right: 10px;
`;

const CancelButton = styled(RegularButton)`
background: ${declineColor};
color: white;
margin-top: 10px;
`;

const ButtonsContainer = styled.div`
position: absolute;
bottom: 20px;
background: white;
left: 20px;
box-sizing: border-box;
`;

export default {
  AddNewTaskTitle, AddNewTaskControls, AcceptButton, CancelButton, ButtonsContainer,
};
