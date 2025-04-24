import React, { useContext, useState } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";

const categoryList = [
  {
    name: "Fashion",
  },
  {
    name: "Shirt",
  },
  {
    name: "Jacket",
  },
  {
    name: "Mobile",
  },
  {
    name: "Laptop",
  },
  {
    name: "Shoes",
  },
  {
    name: "Home",
  },
  {
    name: "Books",
  },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProductSubmit = async () => {
    if (product.title === "" || product.price === "" || product.productImageUrl === "" || product.category === "" || product.description === "") {
        return toast.error("All fields are required",{position:"top-right"})
    }

    setLoading(true);
    try {
        const productRef = collection(fireDB, 'products');
        await addDoc(productRef, product)
        toast.success("Add product successfully");
        navigate('/admin-dashboard')
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
        toast.error("Add product failed");
    }

}

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-pink-50 px-1 lg:px-8 py-3 lg:py-6 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500 ">
              Add Product
            </h2>
          </div>
          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-80 lg:w-96 rounded-md outline-none placeholder-pink-400"
            />
          </div>
          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-80 lg:w-96 rounded-md outline-none placeholder-pink-400"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-80 lg:w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-80 lg:w-96 px-1 py-2 text-pink-400 bg-pink-50 border border-pink-200 rounded-md outline-none  "
            >
              <option value="">Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=""
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              name="description"
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              placeholder="Product Description"
              rows="5"
              className="w-80 lg:w-96 px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-400 "
            ></textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={addProductSubmit}
              type="button"
              className="bg-pink-500 hover:bg-pink-600 w-80 lg:w-96 text-white text-center py-2 font-bold rounded-md "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
