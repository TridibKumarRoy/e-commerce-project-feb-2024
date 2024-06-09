import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { useParams } from "react-router-dom";
import { convertISOToDateTime } from "../utils/helper";

const PostDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const getDetails = async () => {
    try {
      const { data } = await axiosInstance("/post/" + id);
      setDetails(data?.post)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);
  return (
    <section class="blog single-blog section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <article class="single-post">
              <h2>{details?.title}</h2>
              <ul class="list-inline">
                <li class="list-inline-item">
                  by <a href="user-profile.html">{details?.user?.name}</a>
                </li>
                <li class="list-inline-item">{convertISOToDateTime(details?.createdAt)}</li>
              </ul>

              <div dangerouslySetInnerHTML={{__html: details?.content || ''}}></div>
            </article>
            <div class="block comment">
              <h4>Leave A Comment</h4>
              <form action="#">
                <div class="form-group mb-30">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="8"
                    required
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div class="form-group mb-30">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="form-group mb-30">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button class="btn btn-transparent">Leave Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
