import React from 'react'
import styles from './Overview.module.css'
import Image from 'next/image';
const Overview = () => {
  return (
    <div className={styles.main}>
      <div className={styles.weDo}>
        <h2>Publish your passions, your way</h2>
        <h4>
          Create a unique and beautiful blog easily.
          </h4> 
        <button>CREATE YOUR BLOG</button>
        <Image
          
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Overview