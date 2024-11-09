//import { useState } from "react"
//import AddNewBlog from "./components/BlogList/AddNewBlog"
import BlogList from "./components/BlogList/BlogList"
//import {blogData} from "./data/blogData"

function App() {


  //  const [blogs, setBlogs]=useState(blogData)

  return (
    <>
   <div className="app-jsx" style={{display:"flex", flexWrap:"wrap" }}>
   
   {/* <div style={{flex:1}}>
   <AddNewBlog blogData={blogData} setBlogs={setBlogs} blogs={blogs}/>
   </div> */}
   <div style={{flex:4}}>
   <BlogList/>
   </div>
   


   </div>
   </>
  )
}

export default App
