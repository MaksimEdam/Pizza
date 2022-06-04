import React, { useState } from "react";

export default function Categories() {
  const [activeIndex, setActivIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетфрифнская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => setActivIndex(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
