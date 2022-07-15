import { useState } from "react";
import { AddCategory, GifGrid } from "../";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    //Way to check if an input exists
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, "Valorant"])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        key={223}
        onNewCategory={onAddCategory}
        // onNewCategory = {value=> onAddCategory(value)}
      />

      {/* Gif List */}
      {categories &&
        categories.map((category) => (
          <>
            <GifGrid key={category} category={category} />
          </>
        ))}
    </>
  );
};

