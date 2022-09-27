import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Blog from "./Blog";

const BlogDetails = () => {
  
  const { id } = useParams();
  const [ blogs, loading, error, setBlogs] = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="w-full py-20 flex flex-col items-start justify-start space-y-6">
      { loading && <p>loading...</p> }
      { error && <p className="text-red-500 italic">error while fetching data!</p> }
      { blogs && <Blog title={blogs.title} body={blogs.body} author={blogs.author} /> }
    </div>
  );
}
 
export default BlogDetails;