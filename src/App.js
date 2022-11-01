import Login from "./components/login/login"
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from "./components/info/info"
import Settings from "./components/settings/settings"
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          <Route path="/info" element={<Info />} />
          <Route path="/settings" element={<Settings />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
