import React, { useState } from "react";
import img1 from "../../../src/assets/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.avif";

const SearchBar = () => {
  const searchData = [
    {
      name: "Fashion",
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    },
    {
      name: "Shirt",
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    },
    {
      name: "Jacket",
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    },
    {
      name: "Mobile",
      image:
        "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    },
    {
      name: "Laptop",
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    },
    {
      name: "Home",
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    },
    {
      name: "book",
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    }
  ];

  const [inputValue, setInputValue] = useState("");

  const searchFilterData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(inputValue))
    .slice(0,6);

  return (
    <div>
      <div className="flex flex-col mt-1 lg:mt-0">
        <div className="flex justify-center items-center">
          <input
            className="p-1 w-80 rounded-md"
            placeholder="Search An Item..."
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        {inputValue && (
          <div className="lg:absolute mt-4 lg:mt-10 lg:w-80">
            {searchFilterData.length > 0 ? (
              <>
                {searchFilterData.map((ele, id) => (
                  <div
                    key={id}
                    className="bg-gray-100 rounded-md flex justify-evenly items-center"
                  >
                    <img src={ele.image} className="w-20" alt="imag" />
                    <p>{ele.name}</p>
                  </div>
                ))}
              </>
            ) : (
              <div>
                <img src={img1} className="w-80 h-64 rounded-md mt-2 justify-center flex" alt="no_data_found_img" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;