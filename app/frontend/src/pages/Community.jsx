import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <>
      <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
              <h3>Community</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="blog section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <form>
                <fieldset class="p-4">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-12 py-2">
                        <input
                          type="text"
                          placeholder="Title *"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="col-lg-12 py-2">
                        <input type="file" class="form-control" required />
                      </div>
                    </div>
                  </div>

                  <textarea
                    name="message"
                    id=""
                    placeholder="Descriptin"
                    class="border w-100 p-3 mt-2"
                  ></textarea>
                  <div class="btn-grounp">
                    <button
                      type="submit"
                      class="btn btn-primary mt-2 float-right"
                    >
                      Post
                    </button>
                  </div>
                </fieldset>
              </form>

              <article>
                <div class="image">
                  <img
                    class="img-fluid"
                    src="images/blog/post-1.jpg"
                    alt="article-01"
                  />
                </div>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li class="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>

                <Link to="/community/details" class="btn btn-transparent">
                  Read More
                </Link>
              </article>

              <article>
                <div class="video overly">
                  <img src="images/blog/post-3.jpg" alt="video-thumbnail" />
                  <div
                    class="video-button video-box"
                    data-video-url="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
                  >
                    <span>
                      <img src="images/blog/video-icon.png" alt="video-icon" />
                    </span>
                  </div>
                </div>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li class="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>
                <Link to="/community/details" class="btn btn-transparent">
                  Read More
                </Link>
              </article>
              <article>
                <div class="image">
                  <img
                    class="img-fluid"
                    src="images/blog/post-4.jpg"
                    alt="article-01"
                  />
                </div>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li class="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>
                <Link to="/community/details" class="btn btn-transparent">
                  Read More
                </Link>
              </article>
              <article>
                <div class="image">
                  <img
                    class="img-fluid"
                    src="images/blog/post-5.jpg"
                    alt="article-01"
                  />
                </div>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li class="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>
                <Link to="/community/details" class="btn btn-transparent">
                  Read More
                </Link>
              </article>
              <article>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li class="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>
                <Link to="/community/details" class="btn btn-transparent">
                  Read More
                </Link>
              </article>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i class="fa fa-angle-right"></i>
                      </span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="widget search p-0">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="expire"
                      placeholder="Type &amp; hit enter to search"
                    />
                    <span class="input-group-addon">
                      <i class="fa fa-search px-3"></i>
                    </span>
                  </div>
                </div>
                <div class="widget category">
                  <h5 class="widget-header">Categories</h5>
                  <ul class="category-list">
                    <li>
                      <a href="category.html">
                        Appearel <span class="float-right">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Accesories <span class="float-right">(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Business<span class="float-right">(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Entertaiment<span class="float-right">(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Education<span class="float-right">(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="widget archive">
                  <h5 class="widget-header">Archives</h5>
                  <ul class="archive-list">
                    <li>
                      <a href="ad-list-view.html">January 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">February 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">March 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">April 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">May 2017</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
