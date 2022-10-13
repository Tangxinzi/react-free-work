import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router, Route, Link } from 'react-router';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
import CommentBox from './comment/CommentBox';

// var comments = [
//   { "author": "Jiangkun", "date": "5 分钟前", "text": "天气不错！" },
//   { "author": "Le", "date": "3 分钟前", "text": "出去玩耍" }
// ]

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <CommentBox
      // data={ comments }
      url="/comments.json"
    />
  </React.StrictMode>
);
