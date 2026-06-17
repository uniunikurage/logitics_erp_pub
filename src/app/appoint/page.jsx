"use client";

import { useEffect, useState } from "react";
import s from "./test2.module.css";
import baseApi from "@/baseApi";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [employees, setEmployees] = useState([]);
  const [keyword, setKeyword] = useState("");

  const 직원조회하기 = () => {
    console.log(keyword);
  };

  const getEmployees = async () => {
    const res = await baseApi;
  };

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
              titleInfo: { iconPath: "", titleName: " 인사정보" },
              submenuList: ["인사정보등록", "사원명수"],
            },
            {
              titleInfo: { iconPath: "", titleName: " 인사정보" },
              submenuList: ["인사정보등록", "사원명수"],
            },
          ]}
        />

        <div className={s.mainContent}>
          <div className={s.mainHeader}>
            <div className={s.mainTitle}>
              <span>인사발령등록</span>
              <p>
                사원의 부서·직급·직책 발령 정보를 등록하고 이력을 관리합니다.
              </p>
            </div>
            <div className={s.mainBtn}>
              <button type="button" className={s.downloadBtn}>
                <img src="/images/Download.png" alt="" />
                PDF 다운로드
              </button>
              <button type="button" className={s.newloadBtn}>
                <img src="/images/Plus.png" alt="" />
                신규등록
              </button>
            </div>
          </div>

          <div className={s.searchBar}>
            <div className={s.searchTitle}>
              <img src="/images/Search.png" alt="" />
              <span>검색조건</span>
            </div>
            <div className={s.searchFilter}>
              <div className={s.filterGroup}>
                <label htmlFor="epNum">사원검색</label>
                <input
                  type="text"
                  placeholder="사원번호 또는 성명"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <div className={s.searchBtn}>
                  <img src="images/Search_w.png" alt="" />
                </div>
              </div>
              <div className={s.filterGroup}>
                <label htmlFor="dept">발령유형</label>
                <select id="dept" className={s.selectOption}>
                  <option value="">전체</option>
                  <option value="hr">인사팀</option>
                  <option value="dev">개발팀</option>
                </select>
              </div>
              <div className={s.filterGroup}>
                <label htmlFor="rank">발령일</label>
                <select id="rank" className={s.selectOption}>
                  <option value="">전체</option>
                  <option value="staff">사원</option>
                  <option value="assistantManager">대리</option>
                  <option value="Manager">과장</option>
                </select>
              </div>
              <div className={s.mainBtn}>
                <button
                  type="button"
                  className={s.loadBtn}
                  onClick={() => 직원조회하기()}
                >
                  <img src="/images/Search_w.png" alt="" />
                  <span>조회</span>
                </button>
                <button type="button" className={s.resetBtn}>
                  <img src="/images/Rotate Ccw.png" alt="" />
                  <span>초기화</span>
                </button>
              </div>
            </div>
          </div>

          <div className={s.mainContainer}>
            <div className={s.form}>
              <img src="images/File Pen.png" alt="" />
              <span>발령 입력 폼</span>
            </div>

            <div className={s.formContainer}>
              <div className={s.singleRowArea}>
                <div className={s.inputGroup}>
                  <label htmlFor="appointType">발령 유형</label>
                  <span className={s.red}>*</span>
                  <ul>
                    <li>승진</li>
                    <li>전보</li>
                    <li>겸직</li>
                    <li>기타</li>
                  </ul>
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="applyDate">
                    발령일 <span className={s.red}>*</span>
                  </label>
                  <input type="date" id="applyDate" className={s.dateInput} />
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="appointNum">발령번호</label>
                  <input
                    type="text"
                    id="appointNum"
                    placeholder="자동생성"
                    readOnly
                  />
                </div>
                <div className={s.inputGroup}>
                  <label htmlFor="appointmentReason">발령 사유</label>
                  <input
                    type="text"
                    id="appointmentReason"
                    className={s.reasonInput}
                    placeholder="발령 사유를 입력하세요"
                  />
                </div>
              </div>

              <div className={s.assignmentSection}>
                <div className={s.containerBox}>
                  <div className={s.preAssignment}>
                    <div className={s.titleRow}>
                      <span>발령전</span>
                      <div className={s.line}></div>
                    </div>
                    <div className={s.filterRow}>
                      <div className={s.filter}>
                        <label htmlFor="deptBefore">부서</label>
                        <select id="deptBefore" className={s.selectOption}>
                          <option value="">전체</option>
                          <option value="hr">인사팀</option>
                          <option value="dev">개발팀</option>
                        </select>
                      </div>
                      <div className={s.filter}>
                        <label htmlFor="rankBefore">직급</label>
                        <select id="rankBefore" className={s.selectOption}>
                          <option value="">전체</option>
                          <option value="staff">사원</option>
                          <option value="assistantManager">대리</option>
                        </select>
                      </div>
                      <div className={s.filter}>
                        <label htmlFor="posBefore">직책</label>
                        <select id="posBefore" className={s.selectOption}>
                          <option value="">전체</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={s.arrow}>
                  <img src="images/Arrow Right.png" alt="화살표" />
                </div>

                <div className={`${s.containerBox} ${s.afterBox}`}>
                  <div className={s.postAssignment}>
                    <div className={s.titleRow}>
                      <span>발령후</span>
                      <div className={s.line}></div>
                    </div>
                    <div className={s.filterRow}>
                      <div className={s.filter}>
                        <label htmlFor="deptAfter">부서</label>
                        <select id="deptAfter" className={s.selectOption}>
                          <option value="">전체</option>
                          <option value="hr">인사팀</option>
                          <option value="dev">개발팀</option>
                        </select>
                      </div>
                      <div className={s.filter}>
                        <label htmlFor="rankAfter">직급</label>
                        <select id="rankAfter" className={s.selectOption}>
                          <option value="">전체</option>
                          <option value="staff">사원</option>
                          <option value="assistantManager">대리</option>
                        </select>
                      </div>
                      <div className={s.filter}>
                        <label htmlFor="posAfter">직책</label>
                        <select id="posAfter" className={s.selectOption}>
                          <option value="">전체</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.noteArea}>
                <span>비고</span>
                <textarea
                  className={s.note}
                  placeholder="발령 관련 추가 사항을 입력하세요."
                />
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

                <ul className={s.row}>
                  <li>1</li>
                  <li>APT-2025-003</li>
                  <li>EMP-002</li>
                  <li>
                    <strong>이영희</strong>
                  </li>
                  <li className={s.romotion}>승진</li>
                  <li>
                    <span className={s.dept}>경영지원팀</span>
                    <span className={s.rank}>과장</span>
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
    </div>
  );
}
