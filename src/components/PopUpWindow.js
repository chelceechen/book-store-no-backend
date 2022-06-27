import "../styles/components/pop-up-window.scss";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../redux/actions";

const PopUpWindow = ({ currentBook, type }) => {
  const BOOK_CATEGORY = [
    "Action and Adventure",
    "Classics",
    "Comic Book",
    "Detective and Mystery",
    "Fantasy",
    "Historical Fiction",
    "Horror",
    "Literary Fiction",
    "Romance",
    "Science Fiction (Sci-Fi)",
    "Biographies and Autobiographies",
  ];
  const dispatch = useDispatch();

  const [titleErrShow, setTitleErrShow] = useState(false);
  const [authorErrShow, setAuthorErrShow] = useState(false);
  const [priceErrShow, setPriceErrShow] = useState(false);
  const [descriptionErrShow, setDescriptionErrShow] = useState(false);
  const [bookData, setBookData] = useState({
    id: Math.floor(100000000 + Math.random() * 900000000),
    coverImg: "",
    title: "",
    author: "",
    price: 0,
    category: "Action and Adventure",
    description: "",
  });

  useEffect(() => {
    if (type === "Edit") {
      setBookData({
        id: currentBook.id,
        coverImg: currentBook.coverImg,
        title: currentBook.title,
        author: currentBook.author,
        price: currentBook.price,
        category: currentBook.category,
        description: currentBook.description,
      });
    } else {
      setBookData({
        id: Math.floor(100000000 + Math.random() * 900000000),
        coverImg: "",
        title: "",
        author: "",
        price: 0,
        category: "Action and Adventure",
        description: "",
      });
    }
  }, [currentBook, type]);

  const handleInputChange = (value, name) => {
    if (name === "title") {
      if (value.trim().length === 0) {
        setTitleErrShow(true);
      } else {
        setTitleErrShow(false);
        setBookData((prev) => ({
          ...prev,
          title: value,
        }));
      }
    } else if (name === "author") {
      if (value.trim().length === 0) {
        setAuthorErrShow(true);
      } else {
        setAuthorErrShow(false);
        setBookData((prev) => ({
          ...prev,
          author: value,
        }));
      }
    } else if (name === "price") {
      if (!value) {
        setPriceErrShow(true);
      } else {
        if (value > 1000) {
          setPriceErrShow(true);
        } else if (Number(value).toString() !== value) {
          setPriceErrShow(true);
        } else {
          setPriceErrShow(false);
        }
      }
      setBookData((prev) => ({
        ...prev,
        price: value,
      }));
    } else if (name === "category") {
      if (value.length !== 0) {
        setBookData((prev) => ({
          ...prev,
          category: value,
        }));
      }
    } else if (name === "description") {
      if (value.trim().length === 0) {
        setDescriptionErrShow(true);
      } else {
        setDescriptionErrShow(false);
        setBookData((prev) => ({
          ...prev,
          description: value,
        }));
      }
    }
  };

  const handleSubmitClick = () => {
    if (type === "Edit") {
      dispatch(editBook(bookData));
    } else {
      dispatch(addBook(bookData));
      setBookData({
        id: 0,
        coverImg: "",
        title: "",
        author: "",
        price: 0,
        category: "Action and Adventure",
        description: "",
      });
    }
  };

  return (
    <div className="modal fade pop-up-window p-0" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{type}</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div className="modal-body">
            <form>
              {/* title */}
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  maxLength={30}
                  value={bookData.title}
                  onChange={(e) => {
                    handleInputChange(e.target.value, "title");
                  }}
                />
                {titleErrShow === true ? (
                  <div className="form-text">Please enter the Title</div>
                ) : (
                  ""
                )}
              </div>
              {/* author */}
              <div className="mb-3">
                <label className="form-label">Author</label>
                <input
                  className="form-control"
                  maxLength={30}
                  value={bookData.author}
                  onChange={(e) => {
                    handleInputChange(e.target.value, "author");
                  }}
                />
                {authorErrShow === true ? (
                  <div className="form-text">Please enter the Author name</div>
                ) : (
                  ""
                )}
              </div>
              {/* price */}
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  min={0}
                  max={1000}
                  value={bookData.price}
                  onChange={(e) => {
                    handleInputChange(e.target.value, "price");
                  }}
                />
                {priceErrShow === true ? (
                  <div className="form-text">
                    Please enter a valid Price, the max amount is $1000
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* category */}
              <div className="mb-3">
                <label className="form-label mr-3">Category</label>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  value={bookData.category}
                  onChange={(e) => {
                    handleInputChange(e.target.value, "category");
                  }}
                >
                  {BOOK_CATEGORY.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </div>
              {/* description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  maxLength={135}
                  value={bookData.description}
                  onChange={(e) => {
                    handleInputChange(e.target.value, "description");
                  }}
                />
                {descriptionErrShow === true ? (
                  <div className="form-text">Please enter the Description</div>
                ) : (
                  ""
                )}
              </div>
              {/* img upLoad */}
              <div className="mb-3 img-upload d-flex flex-column">
                <label className="form-label">Book Cover </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    setBookData((prev) => ({
                      ...prev,
                      coverImg: URL.createObjectURL(event.target.files[0]),
                    }));
                  }}
                />
                {bookData.coverImg && (
                  <div>
                    <img
                      className="cover-img"
                      src={bookData.coverImg}
                      alt="bookCoverImage"
                    />
                  </div>
                )}
                {!bookData.coverImg ? (
                  <div className="form-text">Please upload a Book Cover</div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>

          <div className="modal-footer">
            {!bookData.coverImg ||
            titleErrShow ||
            authorErrShow ||
            priceErrShow ||
            descriptionErrShow ? (
              <button disabled type="button" className="btn btn-secondary">
                Submit
              </button>
            ) : (
              <button
                onClick={() => handleSubmitClick()}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Submit
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpWindow;
