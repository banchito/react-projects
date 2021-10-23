import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
    <main>
      <section className='container'>
        <h3>0 birthdays today</h3>
        <List></List>
        <button onClick={() => console.log('clicked')}>clear all</button>
      </section>
    </main>
  )
}

export default App;
