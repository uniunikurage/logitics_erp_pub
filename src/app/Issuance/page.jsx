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
          <div className={s.mainContainer}>
            <div className={s.mainBar}>
              <div className={s.homeIconWrapper}>
                <img src="/images/House.png" alt="홈 아이콘" />
                <img src="/images/Chevron Right.png" alt="오른쪽" />
                <span>인사관리</span>
                <img src="/images/Chevron Right.png" alt="오른쪽" />
                <span>증명서관리</span>
                <img src="/images/Chevron Right.png" alt="오른쪽" />
                <span className={s.Now}>증명서발급</span>
              </div>
            </div>

            <div className={s.mainHeader}>
              <div className={s.mainTitle}>
                <img src="" alt="" />
                <span>증명서발급</span>
                <p>필요한 증명서를 선택하고 발급 정보를 입력하여 출력하세요.</p>
              </div>
            </div>
            <div className={s.titleWrapper}>
              <div className={s.secondTitle}>
                <img src="/images/File Check.png" alt="" />
                <span className={s.Enter}>증명서 종류 선택</span>
                <div className={s.subText}>
                  <span className={s.red}>*</span>
                  <span>필수 선택</span>
                </div>
              </div>
            </div>

            <div className={s.boxWrapper}>
              <div className={s.selectContainer}>
                <div className={s.selectBox}>
                  <div className={s.imgBox}>
                    <img src="/images/Briefcase.png" alt="" />
                  </div>
                  <span className={s.optionTitle}>재직증명서</span>
                  <span className={s.optionSub}>
                    현재 재직 중임을 증명합니다
                  </span>
                  <button className={s.check}>
                    <p>선택됨</p>
                  </button>
                </div>

                <div className={s.secondBox}>
                  <div className={s.imgBox2}>
                    <img src="/images/Award.png" alt="" />
                  </div>
                  <span className={s.optionTwo}>경력증명서</span>
                  <span className={s.subTwo}>경력 사항을 증명합니다</span>
                  <button className={s.checking}>
                    <p>선택하기</p>
                  </button>
                </div>
                <div className={s.secondBox}>
                  <div className={s.imgBox2}>
                    <img src="/images/Banknote.png" alt="" />
                  </div>
                  <span className={s.optionTwo}>급여확인서</span>
                  <span className={s.subTwo}>급여 내역을 확인합니다</span>
                  <button className={s.checking}>
                    <p>선택하기</p>
                  </button>
                </div>
                <div className={s.secondBox}>
                  <div className={s.imgBox2}>
                    <img src="/images/Receipt.png" alt="" />
                  </div>
                  <span className={s.optionTwo}>근로소득원천징수</span>
                  <span className={s.subTwo}>원천징수 내역 확인서</span>
                  <button className={s.checking}>
                    <p>선택하기</p>
                  </button>
                </div>
              </div>
            </div>
            <div className={s.titleWrapper}>
              <div className={s.secondTitle}>
                <img src="/images/Pen.png" alt="" />
                <span className={s.Enter}>발급 정보 입력</span>
                <span className={s.InProgress}>재직증명서 발급 중</span>
              </div>
            </div>
            <div className={s.secondboxWrapper}>
              <div className={s.imformationBox}>
                <div className={s.infoTitle}>
                  <span className={s.info}>신청자 정보</span>
                </div>
              </div>
              <form>
                <div>
                  <label>사원번호</label>
                  <input type="text" placeholder="사원번호를 입력하세요" />
                </div>

                <div>
                  <label>성명</label>
                  <input type="text" placeholder="이름을 입력하세요" />
                </div>

                <div>
                  <label>부서</label>
                  <select>
                    <option value="">부서 선택</option>
                    <option value="hr">인사팀</option>
                    <option value="dev">개발팀</option>
                    <option value="sales">영업팀</option>
                  </select>
                </div>

                <div>
                  <label>직급</label>
                  <select>
                    <option value="">직급 선택</option>
                    <option value="staff">사원</option>
                    <option value="manager">대리</option>
                    <option value="senior">과장</option>
                  </select>
                </div>

                <div>
                  <label>입사일</label>
                  <input type="date" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
