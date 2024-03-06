import React from 'react';
import './Tab.css'
const ImageGallery = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ overflowX: 'auto' }}>
          <div className="ima-contain">
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 1" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 2" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 3" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 4" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 4" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 6" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 7" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 8" />
              <h1>ja khosi</h1>
            </div>
            <div>
              <img src="image.jpg" className="img-fluid" alt="Image 9" />
              <h1>ja khosi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
