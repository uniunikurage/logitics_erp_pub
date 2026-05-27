"use client";

import { useEffect, useState } from "react";
import s from "./test2.module.css";
import baseApi from "@/baseApi";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await baseApi.get("/api/v1/employees");
        console.log(response.data.data);
        setEmployees(response.data.data);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    };

    getEmployee();
  }, []);

  return (
    <div className={s.container}>
      <Nav />

      <div className={s.contentContainer}>
        <Aside
          dummy={[
            {
              titleInfo: { iconPath: "", titleName: " 인사정보" },
              submenuList: [
                "인사정보등록",
                "사원명수/인사기록카드",
                "인사발령등록",
              ],
            },
            {
              titleInfo: { iconPath: "", titleName: " 경조비관리" },
              submenuList: ["경조비신청", "경조비신청현황"],
            },
            {
              titleInfo: { iconPath: "", titleName: "증명서관리" },
              submenuList: ["증명서발급"],
            },
          ]}
        />

        <div className={s.mainContainer}>
          <div className={s.mainBar}>
            <div className={s.homeIconWrapper}>
              <img src="/images/House.png" alt="홈 아이콘" />
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span>인사관리</span>
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span>경조비관리</span>
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span className={s.Now}>경조비신청</span>
            </div>

            <div className={s.mainHeader}>
              <div className={s.mainTitle}>
                <span>경조비신청</span>
                <p>경조사 발생 시 경조비를 신청하고 지급 현황을 관리합니다.</p>
              </div>

              <div className={s.mainBtn}>
                <button type="button" className={s.downloadBtn}>
                  <img src="/images/Download.png" alt="" />
                  PDF 다운로드
                </button>

                <button type="button" className={s.newloadBtn}>
                  <img src="/images/Plus.png" alt="" />
                  신규신청
                </button>
              </div>
            </div>

            <div className={s.secondTitle}>
              <img src="/images/Heart Handshake.png" alt="" />
              <span>경조비신청 입력</span>
            </div>

            {/* 1. 신청자 정보 영역 태그 닫힘 수정 */}
            <div className={s.applyPerson}>
              <div className={s.bar}></div>
              <p>신청자 정보</p>
            </div>

            {/* 2. s.searchContainer로 수정 및 독립된 div로 배치 */}
            <div className={s.searchContainer}>
              <div className={s.searchFilter}>
                <label htmlFor="epNum">사원번호</label>
                <input type="text" id="epNum" placeholder="전체" />
              </div>

              <div className={s.searchFilter}>
                <label htmlFor="epName">성명</label>
                <input type="text" id="epName" placeholder="성명" />
              </div>

              <div className={s.filterGroup}>
                <label htmlFor="dept">부서</label>
                <select id="dept" className={s.selectOption}>
                  <option value="">전체</option>
                  <option value="hr">인사팀</option>
                  <option value="dev">개발팀</option>
                </select>
              </div>

              <div className={s.filterGroup}>
                <label htmlFor="rank">직급</label>
                <select id="rank" className={s.selectOption}>
                  <option value="">전체</option>
                  <option value="staff">사원</option>
                  <option value="assistantManager">대리</option>
                  <option value="Manager">과장</option>
                </select>
              </div>

              {/* 3. 중복 아이디(rank -> applyDate) 수정 */}
              <div className={s.filterGroup}>
                <label htmlFor="applyDate">신청일</label>
                <select id="applyDate" className={s.selectOption}>
                  <option value="">전체</option>
                  <option value="today">오늘</option>
                  <option value="week">1주일</option>
                  <option value="month">1개월</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
