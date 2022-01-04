import React from "react";

// rafce shortcut
function Book({ img, title, author }) {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      {/* we're using an inline function to perform an onClick() */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      {/* we were able to pass a varable to our function */}
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
}

// we can have only one default export. When importing, we can call it whatever we want
export default Book;
