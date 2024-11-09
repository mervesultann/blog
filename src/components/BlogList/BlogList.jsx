import BlogItem from "./BlogItem";
import { blogData } from "../../data/blogData";
import "./BlogList.scss";
import AddNewBlog from "./AddNewBlog";
import { useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState("");

  
  const handleDelete = (id) => { 

    const newBlogs = blogs.filter((item) => item.id !== id);
     setBlogs(newBlogs);




   }

  function filteredAuthor() {
    const sortedByAuthor = [...blogs].sort((a, b) =>
      a.author.localeCompare(b.author)
    );
    setBlogs(sortedByAuthor);
  }

  function filteredDate() {
    const sortedByDate = [...blogs].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setBlogs(sortedByDate);
  }


  const filteredBlogs = searchTerm
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogs;

  return (
    <div className="bloglist" style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: 1 }}>
        <AddNewBlog setBlogs={setBlogs} blogs={blogs} />
      </div>

      <div style={{ flex: 3 }}>
        <div>
          
          <div className="search">
            <input
              type="text"
              placeholder="Blog yazısı arayınız..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ padding: "10px", width: "100%", textAlign: "center" }}
            />
          </div>

          <div className="filter">
            <button onClick={filteredAuthor}>Yazara Göre Sırala</button>
            <button onClick={filteredDate}>Tarihe Göre Sırala</button>
          </div>

          <div className="bloglist-wrap">
           

            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <BlogItem
                key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  image={blog.image}
                  date={blog.date}
                  desc={blog.description}
                  content={blog.content}
                  author={blog.author}
                  handleDelete={handleDelete}
                  blog={blog}
                />
              ))
            ) : (
              <p> Maalesef aradığınız sonuç bulunamadı...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
