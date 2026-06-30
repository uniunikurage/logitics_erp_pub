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
              <div className={s.titleTextWrapper}>
                <p>근태등록</p>
                <div className={s.textBox}>
                  <span className={s.date}>7월 1일</span>
                </div>
              </div>
            </div>
          </div>
          <div className={s.empSelect}>
            <label htmlFor="">사원 선택</label>
            <span className={s.red}>*</span>
            <div className={s.empBox}>
              <div className={s.iconBox}>
                <span>박</span>
              </div>
              <span className={s.empName}>박민준 ・ 개발팀</span>
            </div>
          </div>{" "}
          <div className={s.leaveTimeContainer}>
            <label className={s.leaveType}>근태 유형</label>
            <span className={s.red}>*</span>
          </div>
          <div className={s.leaveTypeBox}>
            <ul>
              <li>출근</li>
              <li>지각</li>
              <li>조퇴</li>
              <li>결근</li>
              <li>연차</li>
              <li>반차</li>
              <li>출장</li>
              <li>교육</li>
              <li>공가</li>
            </ul>
          </div>
          <div className={s.느낌표상자}>
            <div className={s.느낌표}>
              <span>지각 시간이 자동으로 계산됩니다.</span>
            </div>
          </div>
          <div className={s.timeWrapper}>
            <div className={s.timeContainer}>
              <div className={s.labelGroup}>
                <label>출근시간</label>
                <div className={s.late}>지각</div>
              </div>
              <div className={s.timeBox}>
                <span>10:30</span>
              </div>
            </div>
            <div className={s.timeContainer}>
              <div className={s.labelGroup}>
                <label>퇴근시간</label>
              </div>
              <div className={s.clockOut}>
                <span>18:00</span>
              </div>
            </div>
          </div>
          <div className={s.reason}>
            <span className={s.mainText}>지각 사유</span>
            <select name="lateReason" className={s.reasonSelect}>
              <option value="">지각 사유를 선택해 주세요</option>
              <option value="transit">
                대중교통 지연 (Public Transit Delay)
              </option>
              <option value="personal">개인 사정 </option>
              <option value="medical">병원 진료</option>
              <option value="traffic">교통 체증 </option>
              <option value="other">기타</option>
            </select>
          </div>
          <div className={s.remarks}>
            <label className={s.remarkText}>비고</label>
            <div className={s.mainText}>
              <textarea
                className={s.remarksBox}
                placeholder="기타 특이사항을 입력해 주세요."
                rows={2}
              />
            </div>
          </div>
          <div className={s.buttonWrapper}>
            <div className={s.buttonBox}>
              <button className={s.reset}>초기화</button>
              <button className={s.save}>저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
