import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/features/blogSlice";
import BlogCard from "../../components/blog-card/BlogCard";
import "./home.css";

const Home = () => {
  const { blogs, isBlogLoading } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <section className="blog">
      <div className="container mt-4">
        {isBlogLoading ? (
          <div>...loading</div>
        ) : (
          <div className="row justify-content-around">
            {blogs.map((blog) => {
              return (
                <div key={blog.id} className="col-12 col-md-4">
                  <BlogCard data={blog} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
