import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return <div>
    <Header />
    <main className={styles.main}>
      <div>
        <h2>O que vocÊ vai fazer?</h2>
        <p>formulário</p>
      </div>
      <div>
        <h2>Suas tarefas:</h2>
      </div>
    </main>
    <Footer />
  </div>
  
}

export default App;
