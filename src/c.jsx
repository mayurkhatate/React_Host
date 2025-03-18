import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './Post';
import ShowPost from './ShowPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/Post/show/:id" element={<ShowPost />} />
      </Routes>
    </Router>
  );
};

export default App;
