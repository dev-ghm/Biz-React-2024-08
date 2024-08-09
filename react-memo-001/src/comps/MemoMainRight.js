import css from "../css/MemoMainRight.module.css";

const MemoMainRight = ({ memoList }) => {
  const listView = memoList.map((memo) => <li>{memo.subject}</li>);
  return <ul className={css.main}>{listView}</ul>;
};

export default MemoMainRight;
