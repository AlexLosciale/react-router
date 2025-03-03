import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./pages/homePage";
import ChiSiamo from "./pages/ChiSiamo";
import Posts from "./pages/Posts";

function App() {

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
