"use client";

import { useEffect, useState } from "react";
import s from "./test2.module.css";
import baseApi from "@/baseApi";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function Page() {
  const [employees, setEmployees] = useState();
  const [applyInfo, setApplyInfo] = useState();
  const [eventType, setEventType] = useState();
  const [eventUserName, setEventUserName] = useState();
  const [relationType, setRelationType] = useState();
  const [eventDate, setEventDate] = useState();
  const [location, setLocation] = useState();
  const [bankName, setBankName] = useState();
  const [bankNumber, setBankNumber] = useState();
  const [bankHolder, setBankHolder] = useState();
  // 경조비신청현황 리스트
  const [eventAppliedList, setEventAppliedList] = useState([]);

  //함수 -> 경조비신청현황 리스트 조회
  const 경조비신청리스트조회 = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setEventAppliedList(res?.data?.data || []);
  };

  useEffect(() => {
    //경조비신청현황조회
    경조비신청리스트조회();
  }, []);

  useEffect(() => {
    const departmentName = localStorage.getItem("departmentName");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const employeeNo = localStorage.getItem("employeeNo");
    const position = localStorage.getItem("position");

    const 신청연도 = new Date().getFullYear();
    const 신청월 = new Date().getMonth() + 1;
    const 신청일 = new Date().getDate();

    const 신청전체일자 = `${신청연도}.${신청월}.${신청일}`;

    setApplyInfo({
      departmentName,
      name,
      email,
      employeeNo,
      position,
      신청전체일자,
    });
  }, []);

  const 경조사비신청하기 = async () => {
    const token = localStorage.getItem("accessToken");

    if (!eventUserName) {
      alert("신청자 성명이 없습니다.");
      return;
    }

    if (!relationType) {
      alert("관계 유형을 선택해주세요.");
      return;
    }

    if (!eventDate) {
      alert("경조일을 선택해주세요");
      return;
    }

    if (!bankName) {
      alert("은행을 선택해주세요");
      return;
    }

    if (!(10 <= bankNumber.length && bankNumber.length <= 12)) {
      alert("계좌번호를 입력해주세요");
      return;
    }

    if (!bankHolder) {
      alert("예금주를 입력해주세요");
      return;
    }

    //

    //

    const res = await baseApi.post(
      "/api/v1/support",
      {
        eventType: eventType,
        relation: relationType,
        targetName: eventUserName,

        applicationDate: "2026-06-11",
        eventDate: "2026-06-11",
        requestedAmount: 100000,

        eventLocation: location,
        bankName: bankName,
        accountNumber: bankNumber,
        accountHolder: bankHolder,
        approvalStatus: "확인",
        memo: "졸렵다",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await baseApi.get("/api/v1/employees", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
              <span>근태관리</span>
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span>휴가관리</span>
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span className={s.Now}>휴가일수설정</span>
            </div>

            <div className={s.mainHeader}>
              <div className={s.mainTitle}>
                <img src="" alt="" />
                <span>휴가일수설정</span>
                <p>연도별 휴가 정책 및 직급별 기준 일수를 설정합니다.</p>
              </div>

              <div className={s.mainBtn}>
                <button type="button" className={s.newloadBtn}>
                  <img src="/images/Save.png" alt="" />
                  설정저장
                </button>
              </div>
            </div>
            <div className={s.AttendanceManager}>
              <button className={s.leftBtn}>
                <img src="/images/Chevron Left (1).png" alt="" />
              </button>
              <div className={s.calendar}>
                <img src="/images/Calendar.png" alt="" />
                <p>
                  {`${new Date().toLocaleDateString("ko-KR", {
                    year: "numeric",
                  })} `}
                </p>
              </div>
              <button className={s.rightBtn}>
                <img src="/images/Chevron Right (1).png" alt="" />
              </button>
              <div className={s.todayBox}>
                <img src="/images/Info.png" alt="" />
                <span>회계연도기준(1월~12월)</span>
              </div>
              <button className={s.copyBtn}>전년도 설정 복사</button>
            </div>
            <div className={s.attendanceBox}>
              <img src="/images/Layers.png" alt="" />
              <p>직급별 기준 휴가일수</p>
            </div>
            <div className={s.rankList}>
              {/* 하나의 큰 ul 구조로 합치고 가로 한 줄씩 li로 배치합니다 */}
              <ul className={s.listContainer}>
                {/* 1. 맨 위 제목 헤더 행 */}
                <li className={s.headerItem}>
                  <span>직급</span>
                  <span>기준 일수</span>
                  <span>최대 이월</span>
                  <span>반차 허용</span>
                  <span>비고</span>
                </li>

                {/* 2. 첫 번째 데이터 행 (인풋 상자 포함) */}
                <li className={s.listItem}>
                  <span>임원</span>
                  <span>
                    <input
                      type="number"
                      defaultValue={25}
                      className={s.rankInput}
                    />
                  </span>
                  <span>
                    <input
                      type="number"
                      defaultValue={10}
                      className={s.rankInput}
                    />
                  </span>
                  <span></span> {/* 반차 허용 빈칸 */}
                  <span>비고</span>
                </li>

                <li className={s.listItem}>
                  <span>임원</span>
                  <span>
                    <input
                      type="number"
                      defaultValue={25}
                      className={s.rankInput}
                    />
                  </span>
                  <span>
                    <input
                      type="number"
                      defaultValue={10}
                      className={s.rankInput}
                    />
                  </span>
                  <span></span> {/* 반차 허용 빈칸 */}
                  <span>비고</span>
                </li>

                <li className={s.listItem}>
                  <span>임원</span>
                  <span>
                    <input
                      type="number"
                      defaultValue={25}
                      className={s.rankInput}
                    />
                  </span>
                  <span>
                    <input
                      type="number"
                      defaultValue={10}
                      className={s.rankInput}
                    />
                  </span>
                  <span></span> {/* 반차 허용 빈칸 */}
                  <span>비고</span>
                </li>
                <li className={s.listItem}>
                  <span>임원</span>
                  <span>
                    <input
                      type="number"
                      defaultValue={25}
                      className={s.rankInput}
                    />
                  </span>
                  <span>
                    <input
                      type="number"
                      defaultValue={10}
                      className={s.rankInput}
                    />
                  </span>
                  <span></span>
                  <span>비고</span>
                </li>
              </ul>
            </div>
            <div className={s.attendanceBox}>
              <img src="/images/Layers.png" alt="" />
              <p>특별 휴가 정책</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
