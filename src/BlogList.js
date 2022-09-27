import { Link } from "react-router-dom";
const BlogList = ({blogs, title, handleDelete}) => {
  
  return (
    <>
      <h1 className="font-bold text-black text-2xl">{title}</h1>
      {blogs.map( blog => (
        <div className="w-full flex items-center justify-between shadow-sm" key={blog.id}>
          <div className="w-3/4 px-6 py-3 space-y-1">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="italic">written by {blog.author}</p>
          </div>
          <div className="w-1/4 flex items-center justify-evenly">
            <Link
              to={`/BLogs/${blog.id}`}  
              className="px-2 py-1 text-white bg-green-400 hover:bg-green-500 rounded-md transition-colors duration-150">View</Link>
            <button
              onClick={() => handleDelete(blog.id)}
              className="px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors duration-150">Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
 
export default BlogList;