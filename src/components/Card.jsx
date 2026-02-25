//import react from 'react';
import React from 'react'

const Card = () => {
    // logic
    const username = "김햄찌";
    // div 태그에 card wrap 스타일 넣기
    const cardClass = "card-wrap" ;
    // view
  return (
    <div className={cardClass}>
      <p>반갑습니다. {username}님!!</p>
      <p>할인율 10%</p>
      <button type='button'>바로가기</button>
    </div>
  )
}

export default Card




