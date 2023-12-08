import React, { useState } from 'react'; // v18.2.0
import { Button, Dialog, DialogActions, Typography } from '@mui/material'; // v5.10.14
import { useIdleTimer } from 'react-idle-timer'; // v5.4.2

/* 
This is a demo of how to track user activity using 3rd party package react-idle-timer.

Some keypoints:
- if the user was inactive for some duration of time, prompt him with dialog
- the user can either stay loggedin or logout by clicking the modal buttons
- if the user didn't click anything after prompted, log it out after some additional duration
- the functionallity should work on multiple tabs with the app open
*/

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);

  const onPrompt = () => {
    if (isLoggedIn) {
      setOpen(true);
    }
  };

  const onIdle = () => {
    setOpen(false);
    setIsLoggedIn(false);
  };

  const onActive = () => {
    setOpen(false);
  };

  const onMessage = (message) => {
    if (message === 'LOGOUT_USER') {
      setIsLoggedIn(false);
    }
    if (message === 'LOGIN_USER') {
      setIsLoggedIn(true);
    }
  };

  const { activate, reset, message } = useIdleTimer({
    timeout: 1000 * 5,
    promptTimeout: 1000 * 5,
    onPrompt,
    onIdle,
    onActive,
    onMessage,
    crossTab: true,
    syncTimers: 200,
  });

  const handleStillHere = () => {
    setOpen(false);
    activate();
  };

  const handleLogout = () => {
    setOpen(false);
    message('LOGOUT_USER', true);
    reset();
  };

  const handleLogin = () => {
    message('LOGIN_USER', true);
    activate();
  };

  return (
    <>
      {isLoggedIn ? (
        <Typography variant='h3' style={{ color: 'green' }}>
          User still here
        </Typography>
      ) : (
        <Typography variant='h3' style={{ color: 'red' }}>
          User left
        </Typography>
      )}

      <Dialog open={open} onClose={handleStillHere}>
        <DialogActions>
          <Button onClick={handleStillHere}>Stay logged in</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </DialogActions>
      </Dialog>

      {isLoggedIn ? (
        <Button variant='contained' onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button variant='contained' onClick={handleLogin}>
          Login
        </Button>
      )}
    </>
  );
};

export default App;
