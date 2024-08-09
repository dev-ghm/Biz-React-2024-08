import Input from "./TodoInput";
import List from "./TodoList";
import { settitles } from "react";

const Main = () => {
  const titles = ["홍길동", "이몽룡", "성춘향", "임꺽정", "장녹수"];

  return (
    <>
      <Input names={titles} setNames={settitles} />
      <List names={titles} />
    </>
  );
};
export default Main;
