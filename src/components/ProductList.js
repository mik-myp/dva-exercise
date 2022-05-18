import React, { useState } from "react";

export default function ProductList({ products, handleDelete, handleAdd }) {
  const [value, setValue] = useState();
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          handleAdd({
            id: Math.random(),
            name: value,
            price: Math.random() * 100,
          });
        }}
      >
        添加
      </button>
      <ul>
        {products.map((d) => (
          <div key={d.id}>
            <li>
              {d.name}---{d.price}
            </li>
            <button onClick={() => handleDelete(d.id)}>删除</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
