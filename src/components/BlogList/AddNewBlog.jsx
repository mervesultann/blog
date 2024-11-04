import { useState } from "react"
import Spacer from "../Spacer/Spacer"
import "./AddNewBlog.scss"
import Button from "../../UI/Button";
import PropTypes from "prop-types";

function AddNewBlog({setBlogs, blogs}) {




const [blog, setBlog] = useState({
  title: "",
  content: "",
  image: "",
  author: "",
  date: "",
  });



function handleChange(e){
  const {name, value} = e.target;
  setBlog({...blog, [name]:value})

}

function handleSubmit(e){
  e.preventDefault();

  const newBlog = {
    id:Math.random(),
    ...blog,
  }
  setBlogs([newBlog,...blogs ]);
 console.log(blog)


  
}

  return (

<>
<Spacer height={50}/>


    <div className="form-blog">

<form onSubmit={handleSubmit}>

<div>
    
  <label>Title:</label>
  <input type="text" name="title"  onChange={handleChange} />
</div>

<div>
    
  <label>Content:</label>
  <textarea name="content"  onChange={handleChange}></textarea>
</div>


<div>
    
  <label>Image Url:</label>
  <input type="text" name="image"  onChange={handleChange} />
</div>



<div>
    
  <label>Author:</label>
  <input type="text" name="author"  onChange={handleChange} />
</div>


<div>
    
  <label>Date:</label>
  <input type="date" name="date"   onChange={handleChange}/>
</div>


<Button color="success">Yeni Yazı Ekle</Button>
</form>



    </div>
    </>
  )
}

export default AddNewBlog;


AddNewBlog.propTypes = {
  blogs:PropTypes.array,

  setBlogs: PropTypes.func,
 
};