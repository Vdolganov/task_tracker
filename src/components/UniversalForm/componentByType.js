import { inputTypes } from 'utils/variables';
import { inputDataWrapper } from 'components/HOC/inputDataWrapper';
import {
  TextField, Select, TextArea, Input, Range, Datepicker, CheckBox, Switch, TextEditor,
} from 'components/uiElements';

export const componentByType = {
  [inputTypes.email]: inputDataWrapper(TextField),
  [inputTypes.text]: inputDataWrapper(TextField),
  [inputTypes.password]: inputDataWrapper(TextField),
  [inputTypes.select]: inputDataWrapper(Select),
  [inputTypes.textarea]: inputDataWrapper(TextArea),
  [inputTypes.radio]: inputDataWrapper(Input),
  [inputTypes.range]: inputDataWrapper(Range),
  [inputTypes.checkbox]: inputDataWrapper(CheckBox),
  [inputTypes.datepicker]: inputDataWrapper(Datepicker),
  [inputTypes.switchControl]: inputDataWrapper(Switch),
  [inputTypes.textEditor]: inputDataWrapper(TextEditor),
};
