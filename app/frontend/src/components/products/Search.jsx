import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <section class="page-search">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="advance-search nice-select-white">
              <form onSubmit={handleSearch}>
                <div class="form-row align-items-center">
                  <div class="form-group col-xl-10 col-lg-9 col-md-6">
                    <input
                      type="text"
                      class="form-control my-2 my-lg-0"
                      id="inputtext4"
                      placeholder="What are you looking for"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
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
