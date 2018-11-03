import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h3>012 Integer to Roman</h3>
    <ol>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://leetcode.com/problems/roman-to-integer/description/"
        >
          Problem Description
        </a>
      </li>
      <li>
        Edit <code>solution.js</code>
      </li>
      <li>
        Check out <strong>Tests</strong> Tab below for results.{' '}
        <a href="https://codesandbox.io/docs/tests#how-to-use-jest-in-codesandbox">
          More about Jest Test
        </a>
      </li>
    </ol>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
