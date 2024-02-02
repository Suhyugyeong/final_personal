//전역 상태 관리
//하위 컴포넌트에 전달하기 위한 userProvider 컴포넌트와 이를 사용하기 위해 userContext를 정의

import React, { useState, useEffect } from "react";
// import { produce } from 'immer'
import PropTypes from "prop-types";

// contextAPI 사용해서 전역 상태를 관리하기 위한 context 객체 생성
const UserContext = React.createContext(null);

// 전역 상태 및 상태 변경 함수 제공
//props.children에 UserProvider로 감싸진 모든 하위 컴포넌트가 포함
export const UserProvider = (props) => {
  const [userData, setUserData] = useState({ email: "", user_name: "" });

  //세션 스토리지 초기화
  //이전에 저장된 사용자 정보 가져와서 초기 상태 설정
  useEffect(() => {
    const sessionEmail = sessionStorage.getItem("email");
    const sessionUserName = sessionStorage.getItem("user_name");
    if (sessionEmail && sessionUserName) {
      setUserData({ email: sessionEmail, user_name: sessionUserName });
    }
  }, []);

  const loginUser = (user) => {
    setUserData({ email: user.email, user_name: user.user_name });
  };

  //로그아웃시 전역 상태를 초기화
  const logoutUser = () => {
    setUserData({ email: "", user_name: "" });
  };

  // 자신들이 가지고 있는 상태 데이터,상태변경함수 등을 하위에 공개하기 위해서 context에 추가할 정보??
  const values = {
    state: { userData },
    action: { loginUser, logoutUser },
  };

  //userProvider 컴포넌트가 userContext.Provider로 감싸져 있음
  //이를 통해 하위 컴포넌트가 userContext값을 사용할 수 있음
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

//propTypes를 사용한 자식 노드 확인하고 userProvider 컴포넌에 children이라는 속성이 필요(노드형태로 전달해야)
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
