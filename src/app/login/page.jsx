"use client";

import { useEffect, useState } from "react";
import s from "./login.module.css";
import baseApi from "@/baseApi";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [employees, setEmployees] = useState([]);
  const [keyword, setKeyword] = useState();

  // useEffect(() => {
  //   //1. api를 요청해서 받는다.
  //   const getEmployee = async () => {
  //     const response = await baseApi.get("/api/v1/employees");
  //     console.log(response.data.data);

  //     //2. useState 넣는다.
  //     setEmployees(response.data.data);

  //     //3. useState에 있는 데이터를 렌더링 시킨다.
  //   };

  //   getEmployee();
  // }, []);

  const 직원조회하기 = () => {
    console.log(keyword);
  };

  const getEmployees = async () => {
    const res = await baseApi.get("/api/v1/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: keyword || "",
        page: 1,
      },
    });
    console.log(res.data.data);
  };

  const [loginInfo, setLoginInfo] = useState();

  const goLogin = async () => {
    try {
      const res = await baseApi.post("/api/v1/employees/login", loginInfo);
      const token = res.data.data.accessToken;

      if (token) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        router.push("/test2");
      } else {
        alert("로그인 실패");
      }
    } catch (e) {
      console.error("로그인 네트워크 실패 ", e);
    }
  };

  return (
    <div className={s.container}>
      <Nav />

      <div className={s.pageWrapper}>
        <div className={s.HrContainer}>
          <div className={s.logoContainer}>
            <span className={s.logo}>Enterprise HR Solution</span>
          </div>
          <span className={s.main}>스마트한 인사관리의</span>
          <span className={s.sub}>새로운 기준</span>
          <span className={s.intro}>
            직원 채용부터 급여, 근태까지 <br /> 하나의 플랫폼으로 관리하세요.
          </span>

          <div className={s.info}>
            <div className={s.item}>
              <span className={s.bigText}>2,400+</span>
              <span className={s.smallText}>기업도입</span>
            </div>

            <div className={s.item}>
              <span className={s.bigText}>98%</span>
              <span className={s.smallText}>고객 만족도</span>
            </div>

            <div className={s.item}>
              <span className={s.bigText}>15년</span>
              <span className={s.smallText}>서비스 운영</span>
            </div>
          </div>

          <div className={s.boxContainer}>
            <div className={s.textGroup}>
              <span className={s.HrBigtext}>인사관리</span>
              <span className={s.HrSmalltext}>
                조직도, 인사발령, 직원 정보 통합 관리
              </span>
            </div>
          </div>

          <div className={s.boxContainer}>
            <div className={s.textGroup}>
              <span className={s.HrBigtext}>급여관리</span>
              <span className={s.HrSmalltext}>
                자동 급여 계산,세금 신고,명세서 발송
              </span>
            </div>
          </div>

          <div className={s.boxContainer}>
            <div className={s.textGroup}>
              <span className={s.HrBigtext}>근태관리</span>
              <span className={s.HrSmalltext}>
                출퇴근 관리,휴가,초과근무 실시간 모니터링
              </span>
            </div>
          </div>
        </div>

        <div className={s.loginContainer}>
          <span className={s.log}>회원가입</span>
          <span className={s.logSmall}>
            계정에 로그인하여 업무를 시작하세요
          </span>

          <div className={s.loginInputGroup}>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              placeholder="이메일 주소를 입력하세요"
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className={s.loginInputGroup}>
            <label htmlFor="pw">비밀번호</label>
            <input
              type="password"
              id="pw"
              placeholder="비밀번호를 입력하세요"
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <div className={s.checkContainer}>
            <div className={s.checkBox}></div>
            <span className={s.keepLogin}>로그인 상태 유지</span>
            <span className={s.find}>비밀번호 찾기</span>
          </div>

          <div className={s.loginOp}>
            <button className={s.loginBtn} onClick={() => goLogin()}>
              로그인
            </button>
            <span className={s.or}>또는</span>
            <button className={s.loginKakao}>
<<<<<<< Updated upstream
              <img src="/images/kakao_login.png" alt="" />
=======
              <img src="/images/kakao_login..png" alt="" />
>>>>>>> Stashed changes
            </button>
          </div>
          <div className={s.sign}>
            <span className={s.noAccount}>계정이 없으신가요?</span>
            <span className={s.signUp}>회원가입 신청</span>
          </div>
        </div>
      </div>
    </div>
  );
}
