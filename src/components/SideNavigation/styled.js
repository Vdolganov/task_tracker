import styled from 'styled-components';
import { variables } from 'utils/variables';
import { Link } from 'react-router-dom';

const { primaryDark, lightColor } = variables;

const NavigationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background: ${primaryDark};
padding-right: 3px;
position: sticky;
position: -webkit-sticky;
position: sticky;
top: 0;
width: 63px;
`;

const StyledLink = styled(Link)`
width: 60px;
height: 60px;
margin: 2px 0;
box-shadow: 0 0 1px #00004e;
padding: 10px;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: none;
i {
transition: 0.5s ease;}
&:hover {
box-shadow: 0 0 4px #00004e;
 i {transform: scale(1.6);}
}
`;

const FuncButton = styled.button`
width: 30px;
height: 30px;
margin: 15px auto;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: none;
background: ${lightColor};
border-radius: 30px;
border: none;
cursor: pointer;
transition: 0.3s ease;
outline: none;
&:hover {
transform: scale(1.3);
}
&:active {
transform: scale(1.1);
}
`;

const StickyContainer = styled.div`
position: sticky;
top: 0
`;


export default {
  StyledLink, NavigationContainer, StickyContainer, FuncButton,
};
