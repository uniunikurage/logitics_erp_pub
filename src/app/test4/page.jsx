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
                  <input type="text" id="epNum" placeholder="전체" />
                </div>

                <div className={s.searchGroup}>
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
              <div className={s.checkOption}>
                <div className={s.optionTitle}>
                  <span className={s.EventOption}>경조 구분</span>
                  <span className={s.red}>*</span>
                </div>
                <ul className={s.EventType}>
                  <li>본인결혼</li>
                  <li>자녀결혼</li>
                  <li>출산</li>
                  <li>부모사망</li>
                  <li>배우자사망</li>
                  <li>부모회갑</li>
                  <li>기타</li>
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
                  />
                </div>

                <div className={s.inputGroup}>
                  <label htmlFor="relation">관계</label>
                  <select id="relation" className={s.selectOption}>
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
                  <input type="date" id="applyDate" className={s.dateInput} />
                </div>

                <div className={s.place}>
                  <label htmlFor="place">경조 장소</label>
                  <input
                    type="text"
                    id="place"
                    placeholder="장소를 입력하세요(선택)"
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
                    <select id="bankType" className={s.selectOption}>
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
                    />
                  </div>

                  <div className={s.fieldGroup}>
                    <label htmlFor="accountHolder">예금주</label>
                    <input
                      type="text"
                      id="accountHolder"
                      placeholder="예금주 성명"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
