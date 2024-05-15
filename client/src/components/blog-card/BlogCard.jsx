import { useRef } from "react";

const BlogCard = (props) => {
  const { data } = props;
  const { title, description } = data;
  const commentRef = useRef(null);

  const onCommentSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="card">
      <img
        src="..."
        className="card-img-top"
        alt="..."
        style={{ width: "18rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
        <form className="d-flex mt-3" role="search" onSubmit={onCommentSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Add Comment"
            aria-label="Search"
            name="comment"
            ref={commentRef}
          />
          <button className="btn btn-outline-success" type="submit">
            Sent
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCard;
