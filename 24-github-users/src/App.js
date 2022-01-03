import React from "react";
import "./index.css";

// JSX Rules
//1. always needs to return a single element like a <div>
//legal
// const App = () => {
//   return <h1>my arrow component</h1>;
// };
//illegal
// const App = () => {
//   return <h1>my arrow component</h1>
//   <h1>2 elements returned</h1>;
// };

// Tip: don't place everything into a <div> as a div soup,
// enclose stuff into appropriate elements

//2. use camelCase for html attribute
//3. use className instead of class
//4. close every element

//stateless functional component
// function App() {
//   // this is JSX
//   return <h1>my first component</h1>;
// }

// An arrow component works the same as a
// function component
// const App = () => {
//   return <h1>my arrow component</h1>;
// };

/**
 * Nested Components
 */

// We can create a component that looks like this
// const App = () => {
//   return (
//     <div>
//       <h2>Nikolay</h2>
//       <p>is a React guru</p>
//     </div>
//   );
// };

// And then wrap the JSX into new components and nest the components
// and it will look exactly the same, see App below
// const Person = () => {
//   return <h2>Nikolay</h2>;
// };

// const Message = () => {
//   return <p>is a React guru</p>;
// };

// const App = () => {
//   return (
//     <div>
//       <Person></Person>
//       <Message></Message>
//     </div>
//   );
// };

const App = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        // React wants to keep track of all the items that we're adding
        // instead of passing in book={book}, we can use the spread operator
        // to get all of the properties off of a book
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const books = [
  {
    id: 1,
    img: "",
    title: "I love you to the moon",
    author: "Amelia H",
  },
  {
    id: 2,
    img: "",
    title: "Harry Potter",
    author: "Harry's Author",
  },
];

// used the {...book} operator to get all the properties of the book
// then destructured in the parameters of the Book()
function Book({ img, title, author }) {
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

export default App;
