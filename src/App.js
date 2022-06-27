import "./styles/main.scss";
import React, { useState } from "react";
import PopUpWindow from "./components/PopUpWindow";
import DeleteBookWindow from "./components/DeleteBookWindow";
import CardItem from "./components/CardItem";
import { useSelector } from "react-redux";

function App() {
  const bookList = useSelector((state) => state.bookStore.bookList);

  const [type, setType] = useState("");
  const [currentBook, setCurrentBook] = useState({});

  return (
    <div className="App">
      <div className="base-header">
        <h1 className="text-center">Book Store</h1>
        <div
          type="button"
          className="btn btn-info"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => {
            setType("Add A Book");
          }}
        >
          Add A Book
        </div>
      </div>
      <div className="base-body">
        <div className="row">
          {bookList.map((book) => (
            <CardItem
              key={book.id}
              type={type}
              setType={setType}
              book={book}
              setCurrentBook={setCurrentBook}
            />
          ))}
        </div>
      </div>
      <PopUpWindow currentBook={currentBook} type={type} />
      <DeleteBookWindow currentBook={currentBook} />
    </div>
  );
}
export default App;
