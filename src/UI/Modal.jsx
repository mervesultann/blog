import { useState, useEffect } from "react";
import "./Modal.css";
import Button from "./Button";
import PropTypes from "prop-types";

const Modal = ({ setShowModal, currentBlog, onSave }) => {
  const [updatedBlog, setUpdatedBlog] = useState(currentBlog || {});

 
  useEffect(() => {
    setUpdatedBlog(currentBlog);
  }, [currentBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(updatedBlog); 
    setShowModal(false);
  };

  return (
    <div className="modal-overlay" >
        <div className="modal-bg" onClick={() => setShowModal(false)}></div>
      <div className="modal-container"  >
        <div className="modal-header">
          <h2>Blog Güncelle</h2>
          <button className="close-button" onClick={() => setShowModal(false)}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <input
            type="text"
            name="title"
            value={updatedBlog?.title || ""}
            onChange={handleChange}
            placeholder="Title"
          />
          
          <textarea
            name="content"
            value={updatedBlog?.content || ""}
            onChange={handleChange}
            placeholder="Content"
          />

         
       
          <input
            type="text"
            name="image"
            value={updatedBlog?.image || ""}
            onChange={handleChange}
            placeholder="Img Url"
          />
          
          <input
            type="date"
            name="date"
            value={updatedBlog?.date || ""}
            onChange={handleChange}
            placeholder="Date"
          />
          <input
            type="text"
            name="author"
            value={updatedBlog?.author || ""}
            onChange={handleChange}
            placeholder="Author"
          />
          
        </div>
        <div className="modal-footer">
          <Button color={"danger"} onClick={() => setShowModal(false)}>İptal</Button>
          <Button color={"success"} onClick={handleSave}>Güncelle</Button>
        </div>
      </div>
      
    </div>
  );
};


Modal.propTypes = {
    setShowModal: PropTypes.func.isRequired,
    onSave:PropTypes.func,
    currentBlog:PropTypes,

  
  };

export default Modal;
