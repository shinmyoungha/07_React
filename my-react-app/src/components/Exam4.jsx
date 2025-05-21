// 상태 끌어올리기(State lifting up ) : 자식 컴포넌트의 상태를 부모에게 끌어올려
//                                     부모가 이용 가능하도록 해주는 것

import { useState } from "react";

// 부모 컴포넌트
const Exam4 = () => {
  // 상태
  // 자식 컴포넌트의 상태 id, pw를 부모로 끌어올려 작성
  const [id, setId] = useState(""); // 초기값 빈문자열
  const [pw, setPw] = useState("");

  // 자식 컴포넌트의 상태 변경 함수도 부모로 끌어올려 작성
  // ID 상태를 업데이트 해주는 함수
  const onchangeId = (e) => {
    setId(e.target.value);
  };

  // PW 상태를 업데이트 해주는 함수
  const onchangePw = (e) => {
    setPw(e.target.value);
  };
  return (
    <div>
      {/* 자식 컴포넌트에서 사용중인 함수를 props를 통해 전달  */}
      <Id onChangeId={onchangeId} />
      <Pw onChangePw={onchangePw} />
      <div>
        {/* 자식이 가진 id, pw 라는 상태값을 부모 컴포넌트가 알 방법이 없음!
        -> 부모 컴포넌트로 자식의 상태, 함수를 끌어올려 사용
         */}
        <button disabled={id.length === 0 || pw.length === 0}>Login</button>
      </div>
    </div>
  );
};

// 자식 컴포넌트 ID
const Id = (props) => {
  return (
    <div>
      <label> ID : </label>
      {/* props에 담긴 onChangeId 라는 key에 매핑된 value값(함수)사용 */}
      <input onChange={props.onChangeId} />
    </div>
  );
};

// 자식 컴포넌트 PW
const Pw = ({ onChangePw }) => {
  return (
    <div>
      <label>PW : </label>
      <input type="password" onChange={onChangePw} />
    </div>
  );
};

export default Exam4;
