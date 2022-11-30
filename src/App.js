import ReactDiffViewer from 'react-diff-viewer';
import React, { useState } from "react";
import { Button, Input, Col, Row } from 'antd';

const { TextArea } = Input;

function App() {
  const onChangeOld = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateOldCode(e.target.value)
  };
  const onChangeNew = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateNewCode(e.target.value)
  };
  const [oldCode, updateOldCode] = useState('');
  const [newCode, updateNewCode] = useState('');

  return (
    <>
      <TextArea onChange={onChangeOld} rows={20} />
      <TextArea onChange={onChangeNew} rows={20} />
      {/* <Button type="primary">Primary Button</Button> */}
      <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
    </>
  );
}

export default App;
