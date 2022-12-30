import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ReactDiffViewer from 'react-diff-viewer';



export default function App() {
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
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 10, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-textarea" label="old" variant="outlined" multiline onChange={onChangeOld} />
      <TextField id="outlined-textarea" label="new" variant="outlined" multiline onChange={onChangeNew} />
    </Box>
      <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} /> 
      </>
  );
}