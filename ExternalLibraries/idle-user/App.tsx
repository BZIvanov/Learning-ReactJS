import { useState, type CSSProperties } from "react";
import { useIdleTimer } from "react-idle-timer"; // 5.7.2

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const onPrompt = () => {
    if (isLoggedIn) {
      setIsDialogOpen(true);
    }
  };

  const onIdle = () => {
    setIsDialogOpen(false);
    setIsLoggedIn(false);
  };

  const onActive = () => {
    setIsDialogOpen(false);
  };

  const onMessage = (message: string) => {
    if (message === "LOGOUT_USER") {
      setIsLoggedIn(false);
    } else if (message === "LOGIN_USER") {
      setIsLoggedIn(true);
    }
  };

  const { activate, reset, message } = useIdleTimer({
    timeout: 1000 * 10, // Total idle timeout
    promptBeforeIdle: 1000 * 5, // Show prompt 5s before going idle
    onPrompt,
    onIdle,
    onActive,
    onMessage,
    crossTab: true,
    syncTimers: 200,
  });

  const handleStillHere = () => {
    setIsDialogOpen(false);
    activate();
  };

  const handleLogout = () => {
    setIsDialogOpen(false);
    message("LOGOUT_USER", true);
    reset();
  };

  const handleLogin = () => {
    message("LOGIN_USER", true);
    activate();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h3 style={{ color: isLoggedIn ? "green" : "red" }}>
        {isLoggedIn ? "User still here" : "User left"}
      </h3>

      {isDialogOpen && (
        <div style={styles.dialogOverlay}>
          <div style={styles.dialog}>
            <p>Are you still there?</p>
            <div style={styles.dialogActions}>
              <button onClick={handleStillHere} style={styles.button}>
                Stay logged in
              </button>
              <button onClick={handleLogout} style={styles.button}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={isLoggedIn ? handleLogout : handleLogin}
        style={{ ...styles.button, marginTop: "1rem" }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  button: {
    padding: "0.5rem 1rem",
    margin: "0 0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
  dialogOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    minWidth: "300px",
    textAlign: "center",
  },
  dialogActions: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-around",
  },
};

export default App;
