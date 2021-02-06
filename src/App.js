import Dialog from './Dialog';
import React, { useState } from 'react';

function App() {
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const [showUserDialog, setShowUserDialog] = useState(false);

  const confirm = () => {
    console.log('Confirm');
    setShowTaskDialog(false);
  };

  const confirmUser = () => {
    console.log('Confirm user');
    setShowUserDialog(false);
  };

  const cancel = () => {
    setShowTaskDialog(false);
    setShowUserDialog(false);
  };

  return (
  <>
    <div className="mt-10 text-center">
      <button className="btn" onClick={() => { setShowTaskDialog(true) }}>Delete Task</button>
      <button className="btn" onClick={() => { setShowUserDialog(true) }}>Delete User</button>
    </div>

    <Dialog
      show={showTaskDialog}
      title="Delete a task?"
      description="Are you sure you want to delete this task?"
      confirm={confirm}
      cancel={cancel} />

    <Dialog
      show={showUserDialog}
      title="Delete a user?"
      description="Are you sure you want to delete this user?"
      confirm={confirmUser}
      cancel={cancel} />
  </>
  );
}

export default App;
