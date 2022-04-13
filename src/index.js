import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider, RegisterProvider, WatchLaterProvider, AuthProvider, 
  VideoProvider, LikedVideosProvider, PlaylistProvider, HistoryProvider, 
  ThemeProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <RegisterProvider>
          <VideoProvider>
            <AuthProvider>
              <WatchLaterProvider>
                <LikedVideosProvider>
                  <PlaylistProvider>
                    <HistoryProvider>
                      <ThemeProvider>
                        <App />
                      </ThemeProvider>
                    </HistoryProvider>
                  </PlaylistProvider>
                </LikedVideosProvider>
              </WatchLaterProvider>
            </AuthProvider>
          </VideoProvider>
        </RegisterProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
