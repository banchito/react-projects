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
      {/* when our Book() takes props, we can pass in any value through the props */}
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/* 'children' prop is created by creating a tag
        in between the opening and closing tag */}
        <p>lorem ipsum</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>
      <Book author="Amelia H"></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const firstBook = {
  img: "",
  title: "I love you to the moon",
  author: "Amelia H",
};

const secondBook = {
  img: "",
  title: "Harry Potter",
  author: "Harry's Author",
};

// we can call props whatever we want, but 'props' is the convention
// props is just another parameter
function Book(props) {
  // destructured object which is the same as passing props like
  // props.img, props.title...
  const { img, title, author, children } = props;
  // even easier is to simply destructure in parameters of method
  // function Book({ img, title, author })
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
}

// an implicit return
const Image = () => <img src="images/preloader.gif" alt=""></img>;

const Title = () => {
  return <h1>I love you to the moon</h1>;
};

const Author = () => {
  // first {} we enter into the JS world and the nested {}
  // mean that we are creating a JS object
  // in our case we set a bunch of JS properties using a JS object
  // which has a property: "value" notation
  // this is inline css
  return <h4>Amelia H</h4>;
};

export default App;
