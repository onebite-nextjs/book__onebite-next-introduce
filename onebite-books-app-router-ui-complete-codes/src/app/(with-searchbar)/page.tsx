import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";

export default function Page() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={`reco-${book.id}`} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={`all-${book.id}`} {...book} />
        ))}
      </section>
    </div>
  );
}
