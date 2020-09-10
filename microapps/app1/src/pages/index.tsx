import React, { useState } from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Link to="/about">About</Link>
      <h1 className={styles.title}>Page index</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>set count</button>
    </div>
  );
};
