"use client";

import { useEffect, useState } from "react";
import s from "./signup.module.css";
import baseApi from "@/baseApi";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import { Input } from "@/components/ui/input";

export default function Page() {
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
    const res = await baseApi;
  };

  return (
    <div className={s.container}>
      <Nav />

      <div className={s.pageWrapper}>
        <div className={s.HrContainer}>
          <div className={s.logoContainer}>
            <span className={s.logo}>Enterprise HR Solution</span>
          </div>
          <span className={s.main}>HRMaster와 함께</span>
          <span className={s.sub}>인사관리를 혁신하세요</span>
          <span className={s.intro}>
            지금 가입하고 강력한 <br /> 인사관리 도구를 경험해보세요.
          </span>

          <div className={s.boxContainer}>
            <div className={s.textGroup}>
              <span className={s.HrBigtext}>무제한 직원 등록 및 관리</span>
            </div>
          </div>

          <div className={s.boxContainer}>
            <div className={s.textGroup}>
              <span className={s.HrBigtext}>자동화된 급여 계산 및 신고</span>
            </div>
          </div>

          <div className={s.boxContainer}>
            <div className={s.textGroup}>
              <span className={s.HrBigtext}>실시간 근태 현황 모니터링</span>
            </div>
          </div>

          <div className={s.boxContainer}>
            <div className={s.textGroup}>
              <span className={s.HrBigtext}>강력한 보안 및 권한 관리</span>
            </div>
          </div>

          <div className={s.freeContainer}>
            <span>30일 무료 체험 제공</span>
          </div>
        </div>

        <div className={s.loginContainer}>
          <span className={s.log}>회원가입</span>
          <span className={s.logSmall}>
            계정을 만들어 인사관리를 시작하세요
          </span>

          <div className={s.signWrapper}>
            <div className={s.loginInputGroup}>
              <label htmlFor="lastName">성</label>
              <input type="text" id="lastname" placeholder="성" />
            </div>

            <div className={s.loginInputGroup}>
              <label htmlFor="firstName">이름</label>
              <input type="text" id="firstName" placeholder="이름" />
            </div>
          </div>

          <div className={s.signWrapper}>
            <div className={s.loginInputGroup}>
              <label htmlFor="empNumber">사번</label>
              <input type="text" id="empNumber" placeholder="EMP-0001" />
            </div>

            <div className={s.loginInputGroup}>
              <label htmlFor="dept">부서</label>
              <select id="dept" className={s.selectOption}>
                <option value="">소속 부서 선택</option>
                <option value="hr">인사팀</option>
                <option value="dev">개발팀</option>
              </select>
            </div>
          </div>

          <div className={s.signWrapper}>
            <div className={s.filterGroup}>
              <label htmlFor="rank">직급</label>
              <select id="rank" className={s.selectOption}>
                <option value="">전체</option>
                <option value="staff">사원</option>
                <option value="assistantManager">대리</option>
                <option value="Manager">과장</option>
              </select>
            </div>

            <div className={s.loginInputGroup}>
              <label htmlFor="email">회사 이메일</label>
              <input
                type="text"
                id="email"
                placeholder="이메일 주소를 입력하세요"
              />
            </div>
          </div>

          <div className={s.signWrapper}>
            <div className={s.loginInputGroup}>
              <label htmlFor="pw">비밀번호</label>
              <input
                type="password"
                id="pw"
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            <div className={s.loginInputGroup}>
              <label htmlFor="pwcheck">비밀번호 확인</label>
              <input
                type="password"
                id="pwcheck"
                placeholder="비밀번호 재입력"
              />
            </div>
          </div>

          <div className={s.주의사항}>
            <span>영문,숫자,특수문자 포함 8자리 이상</span>
          </div>

          <div className={s.ToS}>
            <span className={s.agree}>
              이용약관 및 개인정보처리방침에 동의합니다
            </span>
            <span className={s.more}>내용 보기</span>
          </div>

          <div className={s.loginOp}>
            <button className={s.loginBtn}>회원가입</button>
          </div>
          <div className={s.sign}>
            <span className={s.noAccount}>이미 계정이 있으신가요?</span>
            <span className={s.signUp}>로그인하기</span>
          </div>
        </div>
      </div>
    </div>
  );
}
