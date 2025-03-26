import React from "react";
import all_products from "../assets/all_products";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Item from  "../Components/Item";

const Category = ({ category, banner }) => {
  return (
    <section className="mt-16 py-12 xl:py-10">
      <div>
        <div>
          <img src={banner} alt="Category Banner" className="block my-7 mx-auto" />
        </div>
        <div>
          <h5>
            <span className="font-bold"> Showing 1-12</span> Out of 36 Products
          </h5>
          <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15">
            Sort by <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        {/* Products Container */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {all_products
            .filter((item) => (category ? item.category === category : true)) // ✅ Filter before map
            .map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            ))}
        </div>
        <div className="mt-16 text-center">
          <button className="block mx-auto mt-8 px-8 py-3 rounded-full bg-amber-500 text-white">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;

