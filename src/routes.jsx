import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/About-me";
import { Menu } from "./components/Menu";
import { Footer } from "components/Footer";
import { Pagedefault } from "components/PageDefault";
import { Post } from "pages/Post";
import { NotFound } from "pages/Not-Found";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Pagedefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          
        </Route>
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
