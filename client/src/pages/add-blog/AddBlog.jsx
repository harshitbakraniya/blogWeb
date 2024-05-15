import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, setBlog } from "../../redux/features/blogSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const { blog, isBlogLoading } = useSelector((state) => state.blogReducer);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      description: descRef.current.value,
      image: imageRef.current.files[0].name,
    };

    dispatch(addBlog(data));
  };

  useEffect(() => {
    if (blog.title) {
      const notify = () => toast.success("Blog Added Successfully");
      notify();
      navigate("/");
      dispatch(setBlog());
    }
  }, [isBlogLoading]);

  return (
    <div className="register-form mx-auto">
      <h4 className="title">Add New Blog</h4>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Blog Image
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="image"
            ref={imageRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle1"
            name="title"
            ref={titleRef}
            required
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputDes1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDes1"
            name="description"
            ref={descRef}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
