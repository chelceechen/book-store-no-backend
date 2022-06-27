import React, { useState } from "react";
import "../styles/components/card-item.scss";

const CardItem = ({ type, setType, book, setCurrentBook }) => {
  const { coverImg, title, author, price, category, description } = book;

  return (
    <div className="card-item col-md-4 col-sm-12">
      <div className="outline">
        <div
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => {
            setType("Edit");
            setCurrentBook(book);
          }}
        >
          <img src={coverImg} alt="cover-img" />
        </div>

        <div
          type="button"
          className="delete btn btn-info"
          data-toggle="modal"
          data-target="#myDeleteModal"
          onClick={() => {
            setCurrentBook(book);
          }}
        >
          Delete
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div className="d-flex justify-content-between">
            <div className="author">By {author}</div>
            <div className="price">$ {price}</div>
          </div>
        </div>

        <ul className="tags d-flex p-0">
          <li className="tag">{category}</li>
        </ul>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default CardItem;
