import React, { useContext, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommunityContext } from "../context/ComunityContext";
import { AuthContext } from "../context/AuthContext";
import { axiosInstance } from "../utils/axios";
import JoditEditor from "jodit-react";
import { convertISOToDateTime } from "../utils/helper";

const Community = () => {
  const { posts, handleLike, handleShare, handleComment } =
    useContext(CommunityContext);
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [commentOpen, setCommentOpen] = useState({});
  const [commentMsg, setCommentMsg] = useState({});
  const navigate = useNavigate();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  const handlePost = async (e) => {
    try {
      e.preventDefault();
      if (!user) return navigate("/login");
      const { data } = await axiosInstance.post("/newpost", {
        title,
        content,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleComments = (postId) => {
    setCommentOpen((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));

    if (!commentMsg[postId]) {
      setCommentMsg((prev) => ({
        ...prev,
        [postId]: "",
      }));
    }
  };

  return (
    <>
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3>Community</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="blog section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form onSubmit={handlePost}>
                <fieldset className="p-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-12 py-2">
                        <input
                          type="text"
                          placeholder="Title *"
                          className="form-control"
                          required
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) => {}}
                  />

                  <div className="btn-group">
                    <button
                      type="submit"
                      className="btn add-button mt-2 float-right"
                    >
                      Post
                    </button>
                  </div>
                </fieldset>
              </form>

              {posts?.map((post, i) => (
                <article key={i}>
                  <h3 style={{ textDecoration: "underline" }}>
                    <Link to={`/community/${post._id}`}>{post.title}</Link>
                  </h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      by <a href="user-profile.html">{post?.user?.name}</a>
                    </li>
                    <li className="list-inline-item">
                      {convertISOToDateTime(post.createdAt)}
                    </li>
                  </ul>

                  <div
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                  ></div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <button
                        className={`btn px-2 mb-0 py-0 ${
                          post?.likes.includes(user?._id) && "text-danger"
                        }`}
                        onClick={() => handleLike(post._id)}
                      >
                        {post?.likes.includes(user?._id) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                          </svg>
                        )}
                      </button>

                      <small>
                        {post?.likes?.length}{" "}
                        {post?.likes?.length > 1 ? "Likes" : "Like"}
                      </small>
                    </div>
                    <button
                      className="btn py-0 mb-0"
                      onClick={() => toggleComments(post._id)}
                    >
                      Comment ({post?.comments?.length})
                    </button>
                    <button className="btn py-0 mb-0" onClick={handleShare}>
                      <span className="d-none d-md-block">Share</span>
                      <span className="d-block d-md-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-share-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {commentOpen[post._id] && (
                    <div
                      className="comments-section mt-3 pt-3"
                      style={{ borderTop: "1px solid lightgray" }}
                    >
                      <ul className="list-unstyled">
                        {post?.comments?.map((item, i) => (
                          <li className="media mb-3">
                            <div className="media-body">
                              <h5 className="mt-0 mb-1">{item?.user?.name}</h5>
                              {item?.content}
                            </div>
                          </li>
                        ))}
                      </ul>

                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleComment(post._id, commentMsg[post._id]);
                          setCommentMsg((prev) => ({
                            ...prev,
                            [post._id]: "",
                          }));
                        }}
                      >
                        <div
                          className="form-group mb-3 pt-3"
                          style={{ borderTop: "1px solid lightgray" }}
                        >
                          <label htmlFor="message">Message</label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows="3"
                            required
                            onChange={(e) => {
                              const { value } = e.target;
                              setCommentMsg((prev) => ({
                                ...prev,
                                [post._id]: value,
                              }));
                            }}
                            value={commentMsg[post._id]}
                          ></textarea>
                        </div>
                        <button className="btn add-button">
                          Leave Comment
                        </button>
                      </form>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
