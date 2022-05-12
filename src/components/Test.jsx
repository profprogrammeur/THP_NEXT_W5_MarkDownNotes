import React from 'react';
import { useState } from 'react';
import MarkdownView from 'react-showdown';




const Test = () => {
  const [count, setCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const content = `
# Welcome to React Showdown :+1: 
love-
 * Welcome to React Showdown :+1:
* W elcome to React Showdown :+1:

To get started, edit the markdown in \`example/src/App.tsx\`.

| Column 1 | Column 2 |
|----------|----------|
| A1       | B1       |
| A2       | B2       |
`;


  return (
    <div>
      <button onClick={increment}>+++</button>
      <button onClick={decrement}>-</button>
      <p>Counting: {count}</p>
      <MarkdownView markdown={content} options={{ tables: true, emoji: true }} />

      <button onClick={toggleModal}>Toggle modal</button>
    
    </div>
  );
};

export default Test