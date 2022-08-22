import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "./blog.css";
import { getAllBlogs } from "../../redux/apiCalls";
import { getBlogsFailure } from "../../redux/blogReducer";
const Blog = () => {
  const [show, setShow] = useState(null);
  const [title, setTitle] = useState("Show More");
  const showMore = () => {
    if (show) {
      setShow(null);
      setTitle("Show More");
    } else {
      setShow(1);
      setTitle("Show Less");
    }
  };

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  //get all blogs
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getAllBlogs(dispatch);
    setLoading(false);
  }, [dispatch]);

  //we start with an empty list of items
  // const [currentItems, setCurrentItems] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemPerPage = 8;

  // useEffect(() => {
  //   //fetch items from another resouces
  //   const endOffSet = itemOffset + itemPerPage;
  //   setCurrentItems(blogs.slice(itemOffset, endOffSet));
  //   setPageCount(Math.ceil(blogs.length / itemPerPage));
  // }, [itemOffset, blogs]);
  return (
    <div>
      <Navbar />
      <div className="blogContainer">
        <div className="blogTop">
          <h1>BLOG</h1>
          {/* <h5>Get a job and not be jobless</h5> */}
        </div>
        <div className="mainBlogInfo">
          {blogs.map((item, id) => (
            <div className="blogInfo">
              <img src={item.img} />
              <div>
                <h5>{item.title}</h5>
                <h1>{item.desc}</h1>
                <div className="blogBtn">
                  <button>
                    <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                  </button>
                  <button>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                  </button>
                  <button>
                    <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                  </button>
                </div>

                <small>12 min read</small>
                <h5>Read More</h5>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mainBlogInfo">
          <div className="blogInfo">
            <img src="https://img.freepik.com/free-vector/colorful-creepy-creatures-illustration-background_516247-10.jpg?w=2000" />
            <div>
              <h5>Designer</h5>
              <h1>Work with us to find what you like</h1>
              <div className="blogBtn">
                <button>
                  <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                </button>
                <button>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                </button>
                <button>
                  <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                </button>
              </div>
              <small>12 min read</small>
              <h5>Read More</h5>
            </div>
          </div>
          <div className="blogInfo">
            <div>
              <h5>Designer</h5>
              <h1>Work with us to find what you like</h1>
              <div className="blogBtn">
                <button>
                  <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                </button>
                <button>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                </button>
                <button>
                  <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                </button>
              </div>
              <small>12 min read</small>
              <h5>Read More</h5>
            </div>
            <img src="https://preview.colorlib.com/theme/readit/images/ximage_1.jpg.pagespeed.ic.ndb4JOHu-q.webp" />
          </div>
          <div className="blogInfo">
            <img src="https://static.vecteezy.com/system/resources/previews/000/247/824/original/vector-beautiful-landscape-illustration.jpg" />
            <div>
              <h5>Designer</h5>
              <h1>Work with us to find what you like</h1>
              <div className="blogBtn">
                <button>
                  <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                </button>
                <button>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                </button>
                <button>
                  <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                </button>
              </div>
              <small>12 min read</small>
              <h5>Read More</h5>
            </div>
          </div>
          <div className="blogInfo">
            <div>
              <h5>Designer</h5>
              <h1>Work with us to find what you like</h1>
              <div className="blogBtn">
                <button>
                  <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                </button>
                <button>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                </button>
                <button>
                  <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                </button>
              </div>
              <small>12 min read</small>
              <h5>Read More</h5>
            </div>
            <img src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/communication-whirlpool-illustration.png" />
          </div>
          {show && (
            <>
              <div className="blogInfo">
                <img src="https://helpx.adobe.com/content/dam/help/en/illustrator/how-to/drawing-basics/jcr_content/main-pars/image/drawing-basics-intro_900x506.jpg" />
                <div>
                  <h5>Designer</h5>
                  <h1>Work with us to find what you like</h1>
                  <div className="blogBtn">
                    <button>
                      <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                    </button>
                    <button>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                    </button>
                    <button>
                      <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                    </button>
                  </div>
                  <small>12 min read</small>
                  <h5>Read More</h5>
                </div>
              </div>
              <div className="blogInfo">
                <div>
                  <h5>Designer</h5>
                  <h1>Work with us to find what you like</h1>
                  <div className="blogBtn">
                    <button>
                      <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                    </button>
                    <button>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                    </button>
                    <button>
                      <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                    </button>
                  </div>
                  <small>12 min read</small>
                  <h5>Read More</h5>
                </div>
                <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-landscape_23-2149140193.jpg" />
              </div>
              <div className="blogInfo">
                <img src="https://img.freepik.com/free-vector/vector-cartoon-pirate-ship-water-sand-beach-bay_33099-1299.jpg?w=2000" />
                <div>
                  <h5>Designer</h5>
                  <h1>Work with us to find what you like</h1>
                  <div className="blogBtn">
                    <button>
                      <img src="http://richardreina.com/wp-content/uploads/2015/05/twitter-logo-black-and-white-2.jpg" />
                    </button>
                    <button>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" />
                    </button>
                    <button>
                      <img src="https://www.nicepng.com/png/detail/393-3936850_instagram-pure-comments-instagram-logo-black-jpg.png" />
                    </button>
                  </div>
                  <small>12 min read</small>
                  <h5>Read More</h5>
                </div>
              </div>
            </>
          )}
          <div className="showMoreBtnBlog">
            <button onClick={showMore}>{title}</button>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
