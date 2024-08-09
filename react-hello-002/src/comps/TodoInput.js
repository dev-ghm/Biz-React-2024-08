import { useState } from "react";
const Input = ({ titles, settitles }) => {
  const [userTitle, setUserTitle] = useState("");

  return (
    <>
      <h3>입력화면</h3>
      <input
        onChange={(e) => setUserTitle(e.target.value)}
        placeholder="TO DO..."
      />
      <button onClick={() => settitles([...titles, userTitle])}>추가</button>
      <div>
        <p>{userTitle}</p>
      </div>
    </>
  );
};
export default Input;
