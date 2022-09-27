import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <div className="mt-4 w-[75%] flex px-8 py-6 justify-between items-center border-b-[1px] border-[#f2f2f2]">
        <h1 className="text-3xl font-bold text-[#f1356d]">Zakaria's blog</h1>
        <div className="flex items-center justify-evenly space-x-6">
          <Link to="/" className="font-semibold text-lg hover:text-[#f1356d] transition-colors duration-150">Home</Link>
          <Link to="/NewBlog" className="font-semibold text-lg hover:text-[#f1356d] transition-colors duration-150">New blog</Link>
        </div>
      </div>
  );
}
 
export default Navbar;