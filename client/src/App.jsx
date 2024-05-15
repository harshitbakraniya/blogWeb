import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "./components/header/Header";
import { Toaster } from 'react-hot-toast';
import AddBlog from "./pages/add-blog/AddBlog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="sign-up" element={<Register />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
