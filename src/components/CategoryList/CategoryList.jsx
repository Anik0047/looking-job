import React, { useEffect, useState } from "react";


const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-5">Job Category List</h1>
        <p className="text-slate-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-14 drop-shadow-lg mx-6">
          {
            categories.map(category => <div 
              key={category.id}
              className="grid justify-items-center content-center p-10 shadow-2xl">
                <img src={category.logo} alt=""  className="mb-5 w-10"/>
                <p className="font-bold">{category.category_name}</p>
                <p className="text-slate-500"><small>{category.availability}</small></p>
              </div>)
          }
      </div>
    </div>
  );
};

export default CategoryList;

