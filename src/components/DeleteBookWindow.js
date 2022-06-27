import "../styles/components/delete-book-window.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/actions";

const DeleteBookWindow = ({ currentBook }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteBook(currentBook));
  };
  return (
    <div className="deleteItem">
      <div className="modal fade" id="myDeleteModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>Delete the Book ?</div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  handleDeleteClick();
                }}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookWindow;
