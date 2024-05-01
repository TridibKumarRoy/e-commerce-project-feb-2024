import React from "react";

const Search = () => {
  return (
    <section class="page-search">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="advance-search nice-select-white">
              <form>
                <div class="form-row align-items-center">
                  <div class="form-group col-xl-4 col-lg-3 col-md-6">
                    <input
                      type="text"
                      class="form-control my-2 my-lg-0"
                      id="inputtext4"
                      placeholder="What are you looking for"
                    />
                  </div>
                  <div class="form-group col-lg-3 col-md-6">
                    <select class="w-100 form-control my-2 my-lg-0">
                      <option>Category</option>
                      <option value="1">Top rated</option>
                      <option value="2">Lowest Price</option>
                      <option value="4">Highest Price</option>
                    </select>
                  </div>
                  <div class="form-group col-lg-3 col-md-6">
                    <input
                      type="text"
                      class="form-control my-2 my-lg-0"
                      id="inputLocation4"
                      placeholder="Location"
                    />
                  </div>
                  <div class="form-group col-xl-2 col-lg-3 col-md-6">
                    <button type="submit" class="btn btn-primary active w-100">
                      Search Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
