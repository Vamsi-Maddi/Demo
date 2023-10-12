import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import C1 from './components/C1';
// import C2 from './components/C2';
import {Home,Contact,Blog,Project} from "./components/Main";
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import Nav from "./components/Nav";
import { HashRouter,Routes,Route } from 'react-router-dom';

function App(){
  return (
    <div>
      {/* <C1/> */}
      {/* <C2/> */}
      <Header/>
      <Nav/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </HashRouter>
      {/* <Contact/>
      <Blog/>
      <Project/>
      <Footer/> */}
    </div>
  );
}

export default App;
