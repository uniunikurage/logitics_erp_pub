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
              <span>근태관리</span>
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span className={s.Now}>월근태현황</span>
            </div>

            <div className={s.mainHeader}>
              <div className={s.mainTitle}>
                <img src="" alt="" />
                <span>월근태현황</span>
                <p>부서별・직원별 월간 근태 현황을 조회하고 관리합니다.</p>
              </div>

              <div className={s.mainBtn}>
                <button type="button" className={s.downloadBtn}>
                  <img src="/images/Download.png" alt="" />
                  PDF 다운로드
                </button>

                <button type="button" className={s.newloadBtn}>
                  <img src="/images/Save.png" alt="" />
                  일괄저장
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
                    month: "long",
                    day: "numeric",
                  })} (${new Date().toLocaleDateString("ko-KR", { weekday: "short" })})`}
                </p>
              </div>
              <button className={s.rightBtn}>
                <img src="/images/Chevron Right (1).png" alt="" />
              </button>
              <div className={s.inputGroup}>
                <label htmlFor="department">부서</label>
                <select
                  id="department"
                  className={s.selectInput}
                  onChange={(e) => {
                    console.log("선택된 부서:", e.target.value);
                    // setDepartment(e.target.value); // 상태 저장 필요 시 사용
                  }}
                >
                  <option value="">전체 부서</option>
                  <option value="hr">인사팀</option>
                  <option value="development">개발팀</option>
                  <option value="design">디자인팀</option>
                  <option value="marketing">마케팅팀</option>
                </select>
                <div className={s.inputGroup}>
                  <label htmlFor="searchKeyword"></label>
                  <button className={s.inquiry}>
                    <img src="/images/Search_w.png" alt="" />
                    조회
                  </button>

                  <div className={s.categoryBox}>
                    <ul className={s.filterBox}>
                      <div className={s.categoryBox}>
                        <ul className={s.filterBox}>
                          <li className={s.present}>출근</li>
                          <li className={s.late}>지각</li>
                          <li className={s.annual}>연차</li>
                          <li className={s.half}>반차</li>
                          <li className={s.trip}>출장</li>
                          <li className={s.absent}>결근</li>
                          <li className={s.holiday}>휴일</li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.attendanceBox}>
              <img src="/images/Table.png" alt="" />
              <p>2026년 6월 근태현황</p>
            </div>
            <div className={s.attendanceList}>
              <ul>
                <li>성명</li>
                <li>부서</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>출근</li>
                <li>지각</li>
                <li>연차</li>
                <li>결근</li>
              </ul>
            </div>
            <div className={s.employeeList}>
              <ul>
                <li>김철수</li>
                <li>인사팀</li>
                <li>출</li>
                <li>출</li>
                <li className={s.lateText}>지</li>
                <li>출</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li>출</li>
                <li className={s.annualText}>연</li>
                <li>출</li>
                <li>출</li>
                <li className={s.tripText}>장</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li>출</li>
                <li className={s.halfText}>반</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li>20</li>
                <li>1</li>
                <li>1</li>
                <li>0</li>
              </ul>
            </div>
            <div className={s.employeeList}>
              <ul>
                <li>이영희</li>
                <li>경영지원팀</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li className={s.annualText}>연</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.annualText}>연</li>
                <li>출</li>
                <li>출</li>
                <li className={s.lateText}>지</li>
                <li>출</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li>출</li>
                <li>출</li>
                <li className={s.halfText}>반</li>
                <li>출</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li>출</li>
                <li className={s.tripText}>장</li>
                <li className={s.tripText}>장</li>
                <li>출</li>
                <li>출</li>
                <li className={s.holidayText}>휴</li>
                <li className={s.holidayText}>휴</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li>출</li>
                <li>19</li>
                <li>1</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
