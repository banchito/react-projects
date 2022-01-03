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
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

function Book() {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
}

// an implicit return
const Image = () => <img src="images/preloader.gif" alt=""></img>;

const Title = () => {
  return <h1>I love you to the moon</h1>;
};

const Author = () => {
  return <h4>Amelia H</h4>;
};

export default App;
