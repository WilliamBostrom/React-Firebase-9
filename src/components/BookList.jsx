import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    const docRef = doc(db, "books", id);
    deleteDoc(docRef);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
