import "./App.css";
import { Route, Routes } from "react-router-dom";
import Post from "./component/Post";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
