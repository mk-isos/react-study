// index.js (React 18 방식, 강의 스타일 + 최신 방식 혼합)
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CommentList from "./chapter_05/CommentList"; // 강의처럼 직접 렌더링

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("🔍 CommentList:", CommentList);

root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

reportWebVitals();
