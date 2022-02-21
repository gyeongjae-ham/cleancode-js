function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickname) {
        return registerUser(user);
      } else {
        refreshToken();

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}
/**
 * 1. 로그인 여부 확인
 * 2. 토큰 확인
 * 3. 가입된 회원인지 확인
 */

// early return 적용해 보기

function loginService(isLogin, user) {
  // Early Return
  /**
   * 1. 함수를 종료시키기
   * 2. 시각적으로 편해지고 사고하기 편해짐
   */
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickname) {
    return registerUser(user);
  }

  login();
}

function login() {
  refreshToken();

  return "로그인 성공";
}
