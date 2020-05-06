import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';

const width = 400;

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
  ],
};

export const TextEditor = ({ onChange, onBlur }) => {
  const [editorValue, setEditorValue] = useState('');
  const handleEditorChange = (val) => {
    console.log(val);
    setEditorValue(val);
    onChange(val);
  };
  return (
    <div
      style={{ width: `${width}px` }}
      onBlur={onBlur}
      tabIndex="0"
    >
      <ReactQuill
        value={editorValue}
        onChange={handleEditorChange}
        modules={modules}
      />
    </div>
  );
};
