import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const handleDelete = (id) => {
    fetch('http://localhost:8000/blogs/' + id, {
      method : 'DELETE',
    }).then( res => {
      res.ok ? setBlogs(blogs.filter(blog => {return blog.id !== id})) : console.log('error while deleting the blog!')
    });
  };

  const [blogs, loading, error, setBlogs] = useFetch('http://localhost:8000/blogs');

  return (
    <div className="w-full py-8 flex flex-col items-start justify-start space-y-3">
      { error && <p className="text-red-500 italic">error while fetching data from server!</p> }
      { loading && <p>loading...</p> }
      { blogs && <BlogList blogs={blogs} title="*All blogs" handleDelete={handleDelete} />}
    </div>
  );
}
 
export default Home;
