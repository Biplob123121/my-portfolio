import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Home from './Pages/Home';
import HomeInfo from './Pages/HomeInfo';
import Projects from './Pages/Projects';
import Skill from './Pages/Skill';

function App() {
  return (
    <section>

      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<HomeInfo></HomeInfo>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/skill' element={<Skill></Skill>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/education' element={<Education></Education>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </section>
  );
}

export default App;
