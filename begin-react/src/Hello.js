import React from 'react'; // react를 불러와야 리액트 컴포넌트를 만들 수 있다.

// 리액트 컴포넌트는 함수 or 클래스로 작성 가능, 여기서는 함수로 작성
function Hello() {
  return <div>안녕하세요</div>
}

// 리액트 컴포넌트는 JSX라는.. XML 형식의 값을 반환할 수 있다.

// Hello 라는 컴포넌트를 내보내겠다는 뜻, 다른 컴포넌트에서 Hello 컴포넌트 사용 가능
export default Hello;
