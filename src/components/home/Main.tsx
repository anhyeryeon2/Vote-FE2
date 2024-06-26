import React from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col mt-20 mx-12 items-center">
        <div className="text-4xl font-bold mb-4">너는 뭐가 좋아?</div>
        <div className="w-auto border border-4 border-blue-700 p-2 rounded-lg text-2xl font-bold mb-2">
          발표 빼고 다 하기 vs. 발표만 하기
        </div>
        <div className="text-md text-gray-500 font-semibold">
          로그인하고 더 많은 설문을 선택하세요
        </div>
        <img src="/Boo.jpeg" />
      </div>
      <Link to="/signup">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black mb-24">
          회원가입하고 설문 작성하러 가기
        </button>
      </Link>
    </div>
  );
};

export default Main;
