"use client";

import { useEffect, useRef, useState } from "react";
import s from "./test2.module.css";

export default function Page() {
  const fileUploaderRef = useRef(null);

  const [employees, setEmployees] = useState([]);
  const [applyInfo, setApplyInfo] = useState(null);
  const [eventType, setEventType] = useState("");
  const [eventUserName, setEventUserName] = useState("");
  const [relationType, setRelationType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankNumber, setBankNumber] = useState("");
  const [bankHolder, setBankHolder] = useState("");
  const [eventAppliedList, setEventAppliedList] = useState([]);

  // const 경조비신청리스트조회 = async () => {
  //   try {
  //     const token = localStorage.getItem("accessToken");
  //     const res = await baseApi.get("/api/v1/support", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setEventAppliedList(res?.data?.data || []);
  //   } catch (error) {
  //     console.error("리스트 조회 실패:", error);
  //   }
  // };

  // useEffect(() => {
  //   경조비신청리스트조회();
  // }, []);

  // useEffect(() => {
  //   const departmentName = localStorage.getItem("departmentName") || "";
  //   const name = localStorage.getItem("name") || "";
  //   const email = localStorage.getItem("email") || "";
  //   const employeeNo = localStorage.getItem("employeeNo") || "";
  //   const position = localStorage.getItem("position") || "";

  //   const 현재시간 = new Date();
  //   const 신청연도 = 현재시간.getFullYear();
  //   const 신청월 = String(현재시간.getMonth() + 1).padStart(2, "0");
  //   const 신청일 = String(현재시간.getDate()).padStart(2, "0");
  //   const 신청전체일자 = `${신청연도}.${신청월}.${신청일}`;

  //   setApplyInfo({
  //     departmentName,
  //     name,
  //     email,
  //     employeeNo,
  //     position,
  //     신청전체일자,
  //   });
  // }, []);

  // useEffect(() => {
  //   const getEmployee = async () => {
  //     try {
  //       const token = localStorage.getItem("accessToken");
  //       const response = await baseApi.get("/api/v1/employees", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setEmployees(response.data.data || []);
  //     } catch (error) {
  //       console.error("데이터 로딩 실패:", error);
  //     }
  //   };

  //   getEmployee();
  // }, []);

  // const fileUpload = async (fileList) => {
  //   if (!fileList || fileList.length === 0) return;

  //   try {
  //     const url = "http://localhost:33000/api/v1/files/upload";
  //     const token = localStorage.getItem("accessToken");
  //     const 파일 = fileList[0];

  //     const formData = new FormData();
  //     formData.append("file", 파일);
  //     formData.append("refType", "1");

  //     await axios.post(url, formData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     toast.success("파일이 성공적으로 업로드되었습니다.");
  //   } catch (error) {
  //     toast.error("파일 업로드에 실패했습니다.");
  //   }
  // };

  // const 경조사비신청하기 = async () => {
  //   try {
  //     const token = localStorage.getItem("accessToken");

  //     if (!eventUserName) return alert("신청자 성명이 없습니다.");
  //     if (!relationType) return alert("관계 유형을 선택해주세요.");
  //     if (!eventDate) return alert("경조일을 선택해주세요");
  //     if (!bankName) return alert("은행을 선택해주세요");
  //     if (!bankNumber || bankNumber.length < 10 || bankNumber.length > 12) {
  //       return alert("계좌번호를 올바르게 입력해주세요 (10~12자리)");
  //     }
  //     if (!bankHolder) return alert("예금주를 입력해주세요");

  //     const 오늘날짜 = new Date().toISOString().split("T")[0];

  //     await baseApi.post(
  //       "/api/v1/support",
  //       {
  //         eventType: eventType,
  //         relation: relationType,
  //         targetName: eventUserName,
  //         applicationDate: 오늘날짜,
  //         eventDate: eventDate,
  //         requestedAmount: 100000,
  //         eventLocation: location,
  //         bankName: bankName,
  //         accountNumber: bankNumber,
  //         accountHolder: bankHolder,
  //         approvalStatus: "대기",
  //         memo: "",
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     );

  //     toast.success("경조비 신청이 완료되었습니다.");
  //     경조비신청리스트조회();
  //   } catch (error) {
  //     toast.error("경조비 신청 중 오류가 발생했습니다.");
  //   }
  // };

  return (
    <div className={`${s.container} max-w-[520px]`}>
      <div className={s.contentContainer}>
        <div className={s.mainContainer}>
          <div className={s.mainHeader}>
            <div className={s.mainTitle}>
              <img src="/images/User Plus.png" alt="아이콘" />
              <div className={s.titleTextWrapper}>
                <p>인사정보등록</p>
              </div>
            </div>
            <div className={s.rightActions}>
              <div className={s.close}>
                <img src="/images/X.png" alt="닫기" />
              </div>
            </div>
          </div>
          <div className={s.mainPage}>
            <div className={s.optionTitle}>
              <span className={s.EventOption}>기본정보</span>

              <div className={s.row}>
                <div className={s.inputGroup}>
                  <label htmlFor="empNo">사원번호</label>
                  <input type="text" id="empNo" placeholder="사원번호 입력" />
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="empName">이름</label>
                  <input type="text" id="empName" placeholder="이름 입력" />
                </div>
              </div>

              <div className={s.row}>
                <div className={s.inputGroup}>
                  <label htmlFor="deptSelect">부서</label>
                  <select id="deptSelect" className={s.selectBox}>
                    <option value="">선택하세요</option>
                    <option value="dev">개발팀</option>
                  </select>
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="rankSelect">직급</label>
                  <select id="rankSelect" className={s.selectBox}>
                    <option value="">선택하세요</option>
                    <option value="staff">사원</option>
                  </select>
                </div>
              </div>
              <div className={s.row}>
                <div className={s.inputGroup}>
                  <label htmlFor="dateOfJoining">입사일</label>
                  <input
                    type="date"
                    id="dateOfJoining"
                    className={s.dateInput}
                  />
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="statusSelect">재직상태</label>
                  <select id="statusSelect" className={s.selectBox}>
                    <option value="active">재직</option>
                    <option value="leave">휴직</option>
                    <option value="retired">퇴직</option>
                  </select>
                </div>
              </div>

              <div className={s.row}>
                <div className={s.inputGroup}>
                  <label htmlFor="userPhone">휴대폰 번호</label>
                  <input
                    type="tel"
                    id="userPhone"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="userEmail">이메일</label>
                  <input
                    type="email"
                    id="userEmail"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
            </div>
            <span className={s.EventOption}>주소</span>
            <div className={s.inputGroup}>
              <label htmlFor="zipCode">우편번호</label>
              <div className={s.zipcodeField}>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="우편번호"
                  readOnly
                />
                <button type="button" className={s.searchZip}>
                  <span>주소검색</span>
                </button>
              </div>
            </div>
            <div className={s.inputGroup}>
              <label htmlFor="도로명주소">도로명주소</label>
              <input
                type="text"
                id="도로명주소"
                placeholder="주소검색 후 자동입력"
              />
            </div>
            <div className={s.inputGroup}>
              <label htmlFor="상세주소">상세주소</label>
              <input
                type="text"
                id="상세주소"
                placeholder="상세주소를 입력하세요"
              />
            </div>
            <span className={s.EventOption}>비상연락처</span>
          </div>
          <div className={s.lastBox}>
            <span className={s.lastUpdate}>
              <span className={s.red}>*</span>
              필수 입력 항목입니다.
            </span>
            <div className={s.btnBox}>
              <button className={s.cancel}>
                <p>취소</p>
              </button>
              <button className={s.closeBtn}>
                <p>저장</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
