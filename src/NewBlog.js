import { useState } from "react";

const NewBlog = () => {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

    setLoading(true);

    const data = {
      title : title,
      body : content,
      author : author
    }
    
    fetch('http://localhost:8000/blogs', {
      method : 'POST',
      body : JSON.stringify(data),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.ok){
        setSuccess(true);
        setFailure(false);
      }else{
        setSuccess(false);
        setFailure(true);
      }
      setLoading(false);
    });
  };

  return (
    <div className="w-2/3 py-8 flex flex-col items-start justify-start space-y-2">
      { success && <p className="mt-4 text-green-500 italic">*your blog has been successfully added!</p> }
      { failure && <p className="mt-4 text-red-500 italic">*failed to add your blog!</p> }
      { loading && <p className="mt-4 italic">loading...</p> }
      <h2 className="py-10 text-xl font-semibold">Add a new blog :</h2>
      <div className="w-full py-2 flex flex-row items-center justify-start">
        <label className="w-1/5" htmlFor="">Author :</label>
        <input
          value={author}
          onChange={(e) => {setAuthor(e.target.value)}}
          className="w-4/5 px-1 py-2 border-gray-600 border-[1px] outline-none" 
          type="text" 
          name="" 
          id=""
        />
      </div>
      <div className="w-full py-2 flex flex-row items-center justify-start">
        <label className="w-1/5" htmlFor="">title :</label>
        <input
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
          className="w-4/5 px-1 py-2 border-gray-600 border-[1px] outline-none" 
          type="text" 
          name="" 
          id=""
        />
      </div>
      <div className="w-full py-2 flex flex-row items-start justify-start">
        <label className="w-1/5" htmlFor="">Content :</label>
        <textarea
          value={content}
          onChange={(e) => {setContent(e.target.value)}}
          className="w-4/5 px-1 py-2 border-gray-600 border-[1px] outline-none" 
          name="" 
          id="" 
          cols="30" 
          rows="10"
        ></textarea>
      </div>
      <div className="w-full py-4 flex flex-row items-center justify-center">
        <button
          onClick={handleSubmit} 
          className="px-4 py-2 text-white bg-[#f1356d] hover:bg-[#e0245c] rounded-md transition-colors duration-150">Submit new post</button>
      </div>
    </div>
  );
}
 
export default NewBlog;