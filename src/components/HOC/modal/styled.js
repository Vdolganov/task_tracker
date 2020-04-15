import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
`;

const ModalWindow = styled.div`
    width: 700px;
    height: 500px;
    background: white;
    border-radius: 4px;
    margin: 20px auto;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
`;

export default { Modal, ModalWindow };
