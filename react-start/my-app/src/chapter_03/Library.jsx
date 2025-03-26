import React from "react";
import Book from "./Book";

console.log("Book import 확인:", Book);

function Library(props) {
  return (
    <div>
      <Book name="역행자" numOfPage={300} />
      <Book name="타이탄의 도구들" numOfPage={400} />
      <Book name="빠르게 실패하기" numOfPage={500} />
    </div>
  );
}

export default Library;
