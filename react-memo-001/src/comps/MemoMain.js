// MemoMain.module.css 파일을 css 라는 이름으로 import 하라
import css from "../css/MemoMain.module.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";
import { useState } from "react";

const MemoMain = () => {
  const [memoList, setmemoList] = useState([
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
    { id: 1, date: "2024-08-08", time: "10:00:00", subject: "안녕" },
    { id: 2, date: "2024-08-08", time: "10:00:00", subject: "반가워" },
    { id: 3, date: "2024-08-08", time: "10:00:00", subject: "또 만나" },
  ]);
  return (
    <>
      <h1 className={css.header}>오늘은 내 생애의 가장 젊은 날</h1>
      <section className={css.main}>
        <article className={css.aside}>
          <MemoMainLeft />
        </article>
        <article className={css.aside}>
          <MemoMainRight memoList={memoList} />
        </article>
      </section>
      <footer className={css.footer}>
        <address>CopyRight &copy; gudals2917@naver.com</address>
      </footer>
    </>
  );
};

export default MemoMain;
