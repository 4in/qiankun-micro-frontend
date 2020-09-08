import React, { useState } from 'react';
import styles from './index.less';

export default () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>set count</button>
    </div>
  );
};
