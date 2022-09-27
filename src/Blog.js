const Blog = ({ title, body, author }) => {
  return (
    <>
      <h2 className="text-black text-2xl font-semibold">{title}</h2>
      <p className="italic">Written by {author} .</p>
      <p>{body}</p>
    </>
  );
}
 
export default Blog;