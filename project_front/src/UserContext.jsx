//contextAPI로 전역 상태 관리
//하위 컴포넌트에 전달하기 위한 userProvider 컴포넌트와 이를 사용하기 위해 userContext를 정의

import React, { useState, useEffect } from "react";
// import { produce } from 'immer'
import PropTypes from "prop-types";

// contextAPI 사용해서 전역 상태를 관리하기 위한 context 객체 생성
const UserContext = React.createContext(null);

// userProvider가 useContext를 사용해서 전역 상태 관리하기 위한 context객체 생성
//userProvider가 props.children을 통해 감싸진 하위 컴포넌트에 전역 상태 제공
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

  //사용자 정보 받아서
  const loginUser = (user) => {
    setUserData({ email: user.email, user_name: user.user_name });
  };

  //로그아웃시 전역 상태를 초기화
  const logoutUser = () => {
    setUserData({ email: "", user_name: "" });
  };

  const values = {
    state: { userData },
    action: { loginUser, logoutUser },
  };

  //userProvider 컴포넌트가 userContext.Provider로 감싸져 있음
  //이를 통해 하위 컴포넌트가 userContext값을 사용할 수 있음
  // userProvider의 value 속성에 현재 전역 상태와 상태 변경 함수가 포함된 values 객체가 설정
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

//propTypes를 사용한 자식 노드 확인하고 userProvider 컴포넌에 children이라는 속성이 필요(노드형태로 전달해야)
//useProvider사용할 때 children이 반드시 전달되어야 함
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
