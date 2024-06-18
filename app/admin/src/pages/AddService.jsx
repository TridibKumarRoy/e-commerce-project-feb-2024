import React, { useRef, useState, useEffect } from "react";
import { ArrowIcon, HomeIcon } from "../assets/SVG/Icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../utils/axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import JoditEditor from "jodit-react";

const SERVICE_CATEGORY = [
  { label: "Home Service" },
  { label: "Road Side Assistance" },
]

const AddService = () => {
  const editor = useRef(null);
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [initialValues, setInitialValues] = useState({
    serviceName: "",
    category: "",
    price: "",
    image: null,
    description: "",
  });

  useEffect(() => {
    if (id) {
      axiosInstance.get(`/admin/service/${id}`).then((response) => {
        const service = response.data?.service;
        setInitialValues({
          serviceName: service.serviceName,
          category: service.category,
          price: service.price,
          image: null,
          description: service.description,
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
        serviceName: values.serviceName,
        category: values.category,
        price: values.price,
        description: values.description,
      };

      if (imageDetails) {
        payload.images = imageDetails;
      }

      if (id) {
        // Update existing product
        const { data } = await axiosInstance.put(
          `/admin/service/${id}`,
          payload
        );
        console.log("Product updated:", data);
        
        alert('Updated')
      } else {
        // Create new product
        const { data } = await axiosInstance.post("/admin/service/new", payload);
        console.log("Product created:", data);
        
        navigate('/dashboard/services')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    serviceName: Yup.string().required("Product Name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">
            {id ? "Edit Service" : "Add Service"}
          </h3>
         
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
                          <label htmlFor="name">Service Name</label>
                          <Field
                            type="text"
                            className="form-control"
                            id="name"
                            name="serviceName"
                            placeholder="Enter product name"
                          />
                          <ErrorMessage
                            name="serviceName"
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
                            {SERVICE_CATEGORY.map((item, i) => (
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

export default AddService;
