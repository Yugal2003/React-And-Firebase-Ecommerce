import React, { useContext, useState } from "react";
import img1 from "../../../src/assets/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.avif";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const context = useContext(myContext);
  const { getAllProduct } = context

  const [search, setSearch] = useState("");

  const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col mt-1 lg:mt-0">
        <div className="flex justify-center items-center">
          <input
            className="p-1 w-80 rounded-md"
            type="text"
            placeholder='Search here'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {search && (
          <div className="lg:absolute mt-4 lg:mt-10 lg:w-80">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((ele, id) => (
                  <div
                  onClick={() => navigate(`/productinfo/${ele.id}`)}
                    key={id}
                    className="bg-gray-100 py-4 cursor-pointer border-2 border-gray-200 rounded-md flex justify-between px-8 items-center"
                  >
                    <img src={ele.productImageUrl} className="w-10" alt="img" />
                    <p className="text-sm">{ele.title}</p>
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