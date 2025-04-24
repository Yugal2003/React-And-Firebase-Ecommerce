import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProductInfo = () => {
  const { id } = useParams();
  console.log(id);

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState([]);

  const getSingleProduct = async () => {
    setLoading(true);

    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      console.log("productData", productTemp);
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart",{position:"top-right"});
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart",{position:"top-right"});
  };

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <Layout>
      <div className="w-full flex flex-col lg:flex-row items-center p-8 gap-8 lg:gap-4">
        {loading ? (
          <div className="flex justify-center w-full">
            <Loader />
          </div>
        ) : (
          <>
            {/* image */}
            <div className="w-full flex justify-center items-center">
              <img
                className="object-contain w-[50%] rounded-md"
                src={product.productImageUrl}
                alt="img"
              />
            </div>

            {/* text section */}
            <div className="w-full flex flex-col justify-center gap-10">
              <div className="font-bold text-xl text-gray-700 uppercase">
                <h1>{product.title}</h1>
              </div>

              <div className="flex items-center gap-1">
                <h1 className="text-xl font-bold text-gray-700">Rating :</h1>
                <FaStar className="text-yellow-500" size={20} />
                <FaStar className="text-yellow-500" size={20} />
                <FaStar className="text-yellow-500" size={20} />
                <FaStar className="text-yellow-500" size={20} />
              </div>

              <div className="font-bold text-xl text-gray-700">
                RS. {product.price}
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl text-gray-700">
                  Description :{" "}
                </h1>
                <p className="font-semibold">{product.description}</p>
              </div>

              <div>
                {cartItems.some((p) => p.id === product.id) ? (
                  <button
                    onClick={() => deleteCart(product)}
                    className="w-full px-4 py-3 text-center text-black font-bold hover:bg-pink-600 bg-pink-500 duration-500 rounded-xl"
                  >Delete to cart</button>
                ) : (
                  <button
                    onClick={() => addCart(product)}
                    className="w-full px-4 py-3 text-center text-black font-bold hover:bg-pink-600 bg-pink-500 duration-500 rounded-xl"
                  >Add to cart</button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProductInfo;
