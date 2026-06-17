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
              <span>인사관리</span>
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span>경조비관리</span>
              <img src="/images/Chevron Right.png" alt="오른쪽" />
              <span className={s.Now}>경조비신청</span>
            </div>

            <div className={s.mainHeader}>
              <div className={s.mainTitle}>
                <img src="" alt="" />
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
              <img src="/images/HeartHandshake.png" alt="" />
              <span className={s.Enter}>경조비신청 입력</span>
            </div>

            <div className={s.applyPerson}>
              <div className={s.bar}></div>
              <span className={s.applyInfo}>신청자 정보</span>

              <div className={s.searchContainer}>
                <div className={s.searchGroup}>
                  <label htmlFor="epNum">사원번호</label>
                  <input
                    type="text"
                    id="epNum"
                    placeholder="전체"
                    readOnly
                    value={applyInfo?.employeeNo}
                  />
                </div>

                <div className={s.searchGroup}>
                  <label htmlFor="epName">성명</label>
                  <input
                    type="text"
                    id="epName"
                    placeholder="성명"
                    readOnly
                    value={applyInfo?.name}
                  />
                </div>

                <div className={s.searchGroup}>
                  <label htmlFor="dept">부서</label>
                  <input
                    type="text"
                    id="epName"
                    placeholder="부서"
                    readOnly
                    value={applyInfo?.departmentName}
                  />
                </div>

                <div className={s.searchGroup}>
                  <label htmlFor="rank">직급</label>
                  <input
                    type="text"
                    id="epName"
                    placeholder="직급"
                    readOnly
                    value={applyInfo?.position}
                  />
                </div>

                <div className={s.searchGroup}>
                  <label htmlFor="applyDate">신청일</label>
                  <input
                    type="text"
                    id="epName"
                    placeholder="신청일"
                    readOnly
                    value={applyInfo?.신청전체일자}
                  />
                </div>
              </div>
              <div className={s.checkOption}>
                <div className={s.optionTitle}>
                  <span className={s.EventOption}>경조 구분</span>
                  <span className={s.red}>*</span>
                </div>
                <ul className={s.EventType}>
                  <li
                    onClick={() => {
                      setEventType("본인결혼");
                    }}
                  >
                    본인결혼
                  </li>
                  <li
                    onClick={() => {
                      setEventType("자녀결혼");
                    }}
                  >
                    자녀결혼
                  </li>
                  <li
                    onClick={() => {
                      setEventType("출산");
                    }}
                  >
                    출산
                  </li>
                  <li
                    onClick={() => {
                      setEventType("부모사망");
                    }}
                  >
                    부모사망
                  </li>
                  <li
                    onClick={() => {
                      setEventType("배우자사망");
                    }}
                  >
                    배우자사망
                  </li>
                  <li
                    onClick={() => {
                      setEventType("부모회갑");
                    }}
                  >
                    부모회갑
                  </li>
                  <li
                    onClick={() => {
                      setEventType("기타");
                    }}
                  >
                    기타
                  </li>
                </ul>
              </div>

              <div className={s.Recipient}>
                <span className={s.RecipientInformation}>경조 대상자 정보</span>
              </div>

              <div className={s.InformationContainer}>
                <div className={s.다른이름}>
                  <label htmlFor="epName">
                    대상자 성명 <span className={s.red}>*</span>
                  </label>
                  <input
                    type="text"
                    id="epName"
                    placeholder="성명을 입력하세요"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setEventUserName(e.target.value);
                    }}
                  />
                </div>

                <div className={s.inputGroup}>
                  <label htmlFor="relation">관계</label>
                  <select
                    id="relation"
                    className={s.selectOption}
                    onChange={(e) => {
                      setRelationType(e.target.value);
                    }}
                  >
                    <option value="">전체</option>
                    <option value="self">본인</option>
                    <option value="parents">부모</option>
                    <option value="spouse">배우자</option>
                    <option value="child">자녀</option>
                    <option value="siblings">형제/자매</option>
                    <option value="grandparents">조부모</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="applyDate">
                    경조일 <span className={s.red}>*</span>
                  </label>
                  {/* <select
                    id="relation"
                    className={s.selectOption}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setEventDate(e.target.value);
                    }}
                  ></select> */}
                  <input
                    type="date"
                    id="applyDate"
                    className={s.dateInput}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setEventDate(e.target.value);
                    }}
                  />
                </div>

                <div className={s.place}>
                  <label htmlFor="place">경조 장소</label>
                  <input
                    type="text"
                    id="place"
                    placeholder="장소를 입력하세요(선택)"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setLocation(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className={s.accountContainer}>
                <div className={s.accountTitle}>
                  <span className={s.PayoutAccount}>지급 계좌</span>
                </div>

                <div className={s.accountFields}>
                  <div className={s.fieldGroup}>
                    <label htmlFor="bankType">은행</label>
                    <select
                      id="bankType"
                      className={s.selectOption}
                      onChange={(e) => setBankName(e.target.value)}
                    >
                      <option value="">은행 선택</option>
                      <option value="shinhan">신한은행</option>
                      <option value="kookmin">KB국민은행</option>
                      <option value="woori">우리은행</option>
                      <option value="hana">하나은행</option>
                    </select>
                  </div>

                  <div className={s.fieldGroup}>
                    <label htmlFor="accountNumber">계좌번호</label>
                    <input
                      type="text"
                      id="accountNumber"
                      placeholder="- 없이 숫자만 입력"
                      onChange={(e) => setBankNumber(e.target.value)}
                    />
                  </div>

                  <div className={s.fieldGroup}>
                    <label htmlFor="accountHolder">예금주</label>
                    <input
                      type="text"
                      id="accountHolder"
                      placeholder="예금주 성명"
                      onChange={(e) => setBankHolder(e.target.value)}
                    />
                  </div>
                  <button className={s.check}>계좌 확인</button>
                </div>
              </div>

              <div className={s.accountContainer}>
                <div className={s.accountTitle}>
                  <span className={s.uploadFile}>첨부 파일</span>
                </div>

                <div className={s.fileBox}>
                  <img src="images/Paperclip.png" alt="" />
                  <div className={s.textGroup}>
                    <span className={s.main}>
                      청첩장 출생증명서등 관련 서류를 첨부해 주세요
                    </span>

                    <span className={s.sub}>
                      PDF, JPG, PNG · 최대 10MB · 파일 3개까지
                    </span>
                  </div>

                  <div className={s.selectButton}>
                    <button className={s.fileBtn}>
                      <img src="/images/Upload.png" alt="" />
                      <span>파일 선택</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className={s.pdf}>
                <span className={s.pdfTitle}>청첩장_이영희.PDF</span>
                <p>238 KB · 업로드 완료</p>
              </div>
              <div className={s.comments}>
                <p>비고</p>
              </div>
              <div className={s.commentsBox}>
                <span className={s.Notes}>추가 사항을 입력하세요. (선택)</span>
              </div>

              <div className={s.mainBtn}>
                <button
                  type="button"
                  className={`${s.downloadBtn} ${s.flexHorizontalCenter}`}
                >
                  <X size={10} />
                  취소
                </button>

                <button
                  type="button"
                  className={s.newloadBtn}
                  onClick={async () => {
                    console.log(
                      eventUserName,
                      relationType,
                      eventDate,
                      location,
                      bankName,
                      bankNumber,
                      bankHolder,
                    );

                    await 경조사비신청하기();
                    await 경조비신청리스트조회();
                  }}
                >
                  <img src="/images/Plus.png" alt="" />
                  신청하기
                </button>
              </div>
            </div>
            <div className={s.empBox}>
              <ul className={s.rowList}>
                <li>NO</li>
                <li>발령번호</li>
                <li>사원번호</li>
                <li>성명</li>
                <li>발령유형</li>
                <li>발령전 부서/직급</li>
                <li>발령후 부서/직급</li>
                <li>발령일</li>
                <li>등록자</li>
                <li>관리</li>
              </ul>

              {eventAppliedList.map((item, idx) => (
                <ul className={s.row} key={idx}>
                  <li>{idx}</li>
                  <li>{item.applicationDate}</li>
                  <li>{item.eventType}</li>
                  <li>
                    <strong>{item.targetName}</strong>
                  </li>
                  <li className={item.eventDate}>경조일</li>
                  <li>
                    <span className={item.requestedAmount}>지급금액</span>
                    <span className={item.accountNumber}>지급계좌</span>
                  </li>
                  <li>
                    <span className={s.deptAfter}>인사팀</span>
                    <span className={s.rankAfter}>차장</span>
                  </li>
                  <li>2025.07.01</li>
                  <li>홍길동</li>
                  <li>
                    <button className={s.editBtn}>수정</button>
                    <button className={s.delateBtn}>삭제</button>
                  </li>
                </ul>
              ))}

              <div className={s.paginationWrap}>
                <ul className={s.total}>
                  <span>총 3건</span>
                </ul>

                <ul className={s.pageList}>
                  <li>
                    <img src="Chevron Left.png" alt="" />
                  </li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>
                    <img src="Chevron Right.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
