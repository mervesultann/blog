import Button from "../../UI/Button";
import PropTypes from "prop-types";
import "./BlogItem.scss"


function BlogItem(props) {






    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) {
          return text;
        }
        return words.slice(0, wordLimit).join(' ') + '...';
      };

  
     



  return (
    <div >
   
   <div  className="blog-item">

  <div >
    <div >
      <img src={props.image}  alt={props.title}/>
    </div>
    <div className="blog-item-body">
      <div >
        <h2 > {props.title}</h2>
    <p>{truncateText(props.content, 10)}</p>
    <div className="blog-information">
        <p ><small >{props.author}</small></p>
        <p ><small >{props.date}</small></p>

        </div>
      </div>
    </div>
  </div>

<div className="blog-button">
  {/* <Button color="primary" > Devmını Oku</Button> */}

<div className="delete-blog">
<Button color="danger"  onClick={()=>props.handleDelete(props.id)}>Sil</Button>

</div>

<div className="update-blog">
<Button color="success" onClick={()=>props.handleUpdate(props.id)}>Düzenle</Button>

</div>

  </div>
</div>



  </div>
  );
}



BlogItem.propTypes = {
    id:PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    handleDelete:PropTypes.func.isRequired,
    handleUpdate:PropTypes.func.isRequired,
    blog:PropTypes.object.isRequired
  };

export default BlogItem;



