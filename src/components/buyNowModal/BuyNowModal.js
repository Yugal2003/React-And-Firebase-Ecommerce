// import {
//     Button,
//     Dialog,
//     DialogBody,
// } from "@material-tailwind/react";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setAddressInfo({
      name: "",
      address: "",
      pincode: "",
      mobileNumber: "",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="flex justify-center w-full lg:w-[50%] rounded-md p-1.5 cursor-pointer hover:bg-pink-700 duration-300 bg-pink-600 text-white"
      >
        Buy now
      </button>
      {open && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              className="absolute top-0 right-2 m-0 text-2xl text-gray-600 hover:text-red-500"
              onClick={handleOpen}
            >
              &times;
            </button>

            {/* Form Inputs */}
            <div className="mb-3">
              <input
                autoComplete="off"
                type="text"
                name="name"
                value={addressInfo.name}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md mb-2"
              />
              <input
                autoComplete="off"
                type="text"
                name="address"
                value={addressInfo.address}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, address: e.target.value })
                }
                placeholder="Enter your address"
                className="w-full border border-gray-300 px-3 py-2 rounded-md mb-2"
              />
              <input
                autoComplete="off"
                type="number"
                name="pincode"
                value={addressInfo.pincode}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, pincode: e.target.value })
                }
                placeholder="Enter your pincode"
                className="w-full border border-gray-300 px-3 py-2 rounded-md mb-2"
              />
              <input
                autoComplete="off"
                type="number"
                name="mobileNumber"
                value={addressInfo.mobileNumber}
                onChange={(e) =>
                  setAddressInfo({
                    ...addressInfo,
                    mobileNumber: e.target.value,
                  })
                }
                placeholder="Enter your mobile number"
                className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={() => {
                buyNowFunction();
                handleOpen();
              }}
              className="w-full py-2 text-white bg-pink-600 rounded-md hover:bg-pink-700"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNowModal;
