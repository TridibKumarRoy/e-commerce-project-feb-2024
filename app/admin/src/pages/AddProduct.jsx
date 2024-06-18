import React, { useRef, useState, useEffect } from "react";
import { ArrowIcon, HomeIcon } from "../assets/SVG/Icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../utils/axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import JoditEditor from "jodit-react";

const PRODUCT_CATEGORY = [
  { label: "Parts & Accessories" },
  { label: "Outfit" },
  { label: "Wheels and Tyres" },
  { label: "Comfort and Convenience" },
  { label: "Performance Upgrades" },
];

const AddProduct = () => {
  const editor = useRef(null);
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [initialValues, setInitialValues] = useState({
    name: "",
    category: "",
    price: "",
    Stock: "",
    image: null,
    description: "",
  });

  useEffect(() => {
    if (id) {
      axiosInstance.get(`/admin/products/${id}`).then((response) => {
        const product = response.data?.product;
        setInitialValues({
          name: product.name,
          category: product.category,
          price: product.price,
          Stock: product.Stock,
          image: null,
          description: product.description,
        });

        console.log("object");
        setDescription(product.description);
      });
    }
  }, [id]);

  const navigate = useNavigate()

  const handleAddOrUpdate = async (values, { setSubmitting }) => {
    try {
      let imageDetails = null;
      if (values.image) {
        const formData = new FormData();
        formData.append("file", values.image);
        formData.append("upload_preset", "fhsuyvig");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dljm2aypb/image/upload",
          formData
        );
        imageDetails = {
          public_id: response?.data?.public_id,
          url: response?.data?.url,
        };
      }

      const payload = {
        type: "profile",

        name: values.name,
        category: values.category,
        price: values.price,
        Stock: values.Stock,
        description: values.description,
      };

      if (imageDetails) {
        payload.images = imageDetails;
      }

      if (id) {
        // Update existing product
        const { data } = await axiosInstance.put(
          `/admin/products/${id}`,
          payload
        );
        console.log("Product updated:", data);
        
        alert('Updated')
      } else {
        // Create new product
        const { data } = await axiosInstance.post("/products/new", payload);
        console.log("Product created:", data);
        
        navigate('/dashboard/products')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product Name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    Stock: Yup.number()
      .required("Stock is required")
      .integer("Stock must be an integer")
      .min(0, "Stock cannot be negative"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">
            {id ? "Edit Product" : "Add Product"}
          </h3>
          <ul className="breadcrumbs mb-3 d-flex align-items-center">
            <li className="nav-home">
              <Link to="/dashboard">
                <HomeIcon />
              </Link>
            </li>
            <li className="separator">
              <ArrowIcon />
            </li>
            <li className="nav-item">
              <Link to="/dashboard/products">Products</Link>
            </li>
            <li className="separator">
              <ArrowIcon />
            </li>
            <li className="nav-item">
              <a href="#">{id ? "Edit Product" : "Add Product"}</a>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleAddOrUpdate}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="card">
                  <div className="card-header">
                    <div className="card-title"></div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Product Name</label>
                          <Field
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter product name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="category">Category</label>
                          <Field
                            as="select"
                            className="form-control"
                            name="category"
                          >
                            <option disabled={true} value="">
                              Select Category
                            </option>
                            {PRODUCT_CATEGORY.map((item, i) => (
                              <option value={item.label} key={i}>
                                {item.label}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="category"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="price">Price</label>
                          <Field
                            type="text"
                            className="form-control"
                            id="price"
                            name="price"
                            placeholder="Enter Price"
                          />
                          <ErrorMessage
                            name="price"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="Stock">Stock</label>
                          <Field
                            type="text"
                            className="form-control"
                            id="Stock"
                            name="Stock"
                            placeholder="Enter Stock"
                          />
                          <ErrorMessage
                            name="Stock"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="image">Product Image</label>
                          <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            onChange={(event) =>
                              setFieldValue(
                                "image",
                                event.currentTarget.files[0]
                              )
                            }
                          />
                          <ErrorMessage
                            name="image"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <JoditEditor
                            ref={editor}
                            value={description}
                            tabIndex={1}
                            onBlur={(newContent) =>
                              setFieldValue("description", newContent)
                            }
                            onChange={(newContent) =>
                              setDescription(newContent)
                            }
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-action d-flex gap-3">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
