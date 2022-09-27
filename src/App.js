import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex flex-col items-center justify-start">
        <Navbar/>
        <div className="w-[75%] flex flex-col items-center justify-start">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Blogs" element={<Home/>} />
            <Route path="/Blogs/:id" element={<BlogDetails/>} />            
            <Route path="/NewBlog" element={<NewBlog/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
