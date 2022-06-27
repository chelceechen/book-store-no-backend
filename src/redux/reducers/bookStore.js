import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "../constants/actionTypes";

const INIT_STATE = {
  bookList: [
    {
      id: 207603852,
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464570795l/77197._SY475_.jpg",
      title: "Assassin's Apprentice",
      author: "Robin Hobb",
      price: 32,
      category: "Fantasy",
      description:
        "In a faraway land where members of the royal family are named for the virtues they embody, one young boy will become a walking enigma.",
    },
    {
      id: 323430200,
      coverImg:
        "https://static01.nyt.com/images/2020/05/04/arts/04marvel-item/merlin_171454440_6136d614-7b89-4b28-83a5-cf18d9c14a36-mobileMasterAt3x.jpg",
      title: "The Amazing Spider Man",
      author: "Stan Lee",
      price: 812,
      category: "Comic Book",
      description:
        "American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider.",
    },
    {
      id: 824538835,
      coverImg:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg/220px-Harry_Potter_and_the_Chamber_of_Secrets.jpg",
      title: "Harry Potter",
      author: "J. K. Rowling",
      price: 45,
      category: "Action and Adventure",
      description:
        "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley.",
    },
  ],
};

const bookStoreReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookList: [...state.bookList, action.payload],
      };

    case EDIT_BOOK:
      return {
        ...state,
        bookList: state.bookList.map((e) => {
          if (action.payload.id === e.id) {
            e = action.payload;
          }
          return e;
        }),
      };

    case DELETE_BOOK:
      return {
        ...state,
        bookList: state.bookList.filter((e) => {
          return e.id !== action.payload.id;
        }),
      };

    default: {
      return state;
    }
  }
};

export default bookStoreReducer;
