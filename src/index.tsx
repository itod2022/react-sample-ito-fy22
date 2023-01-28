import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Howto from './pages/Howto/index'
import Sample from './pages/Howto/sample/index'
import Todo from './pages/Todo/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './pages/Components/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="howto" element={<Howto />} />
        <Route path="howto/sample" element={<Sample />} />
        <Route path="todo" element={<Todo />} />
        <Route path="Components" element={<Components />} />
        <Route path="*" element={
          <main>
            <p>404 error</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
