import styled from 'styled-components';
import { variables } from '../../../../utils/variables';

const { textColor, declineColor, fontSizeSmaller } = variables;

const TitleLayout = styled.div`
margin-bottom: 10px;
position: relative;
`;

const TitleLayoutTitle = styled.p`
padding: 0;
margin-bottom: 3px;
font-size: 14px;
color: ${textColor};
padding-left: 5px;
`;

const InputError = styled.p`
color: ${declineColor};
font-size: ${fontSizeSmaller};
position: absolute;
bottom: -10px;
left: 3px;
margin: 0;
`;

export default { TitleLayout, TitleLayoutTitle, InputError };
