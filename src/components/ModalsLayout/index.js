import { ModalsLayoutComponent } from 'components/ModalsLayout/ModalsLayoutComponent';
import { closeAllModals } from 'store/modalsControl/actionCreaters';
import { activeModalName } from 'store/modalsControl/selectors';
import { connect } from 'react-redux';

const mapDispatchToProps = {
  closeModal: closeAllModals,
};

const mapStateToProps = (state) => ({
  activeModal: activeModalName(state.modalsVisibility),
});


export const ModalsLayout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalsLayoutComponent);
