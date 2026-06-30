import s from "./EventSupportModal.module.css";

export default function EventSupportModal() {
  return (
    <div className={`${s.container}`}>
      <div className={s.contentContainer}>
        <div className={s.mainContainer}>
          <div className={s.mainHeader}>
            <div className={s.mainTitle}>
              <img src="/images/Gift.png" alt="아이콘" />
              <div className={s.titleTextWrapper}>
                <p>경조비신청 상세</p>
                <span className={s.small}>Welfare Benefit Detail</span>
              </div> 
            </div>
            <div className={s.rightActions}>
              <div className={s.mainBtn}>
                <button type="button">검토중</button>
              </div>
              <div className={s.close}>
                <img src="/images/X.png" alt="닫기" />
              </div>
            </div>
          </div>
          <div className={s.mainPage}>
            <div className={s.applyBox}>
              <div className={s.textBox}>
                {" "}
                <span className={s.applyNum}># 신청번호:WEL-2025-07-001</span>
                <span className={s.applyDay}>신청일: 2025.07.01</span>
              </div>
            </div>
            <div className={s.optionTitle}>
              <span className={s.EventOption}>경조 정보</span>
              <div className={s.applyPerson}>
                <div className={s.rowGridTable}>
                  <div className={s.gridLabel}>경조구분</div>
                  <div className={s.gridValue}>
                    <div className={s.optionBtn}>본인결혼</div>
                    <p className={s.rule}>경조비 지급 규정 3조 1항</p>
                  </div>

                  <div className={s.gridLabel}>대상자 / 관계</div>
                  <div className={s.gridValue}>
                    <div className={s.nameBtn}>
                      <span className={s.nameIcon}>이</span>
                    </div>
                    <span className={s.apName}>이영희</span>
                    <div className={s.gray}>본인</div>
                  </div>

                  <div className={s.gridLabel}>경조일</div>
                  <div className={s.gridValue}>
                    <img src="/images/Calendar (1).png" alt="" />
                    <span className={s.rule}>2025년 7월 20일 (일)</span>
                  </div>

                  <div className={s.gridLabel}>경조 장소</div>
                  <div className={s.gridValue}>
                    <img src="/images/Map Pin.png" alt="" />
                    <span className={s.rule}>더케이서울호텔 그랜드볼룸</span>
                  </div>
                </div>
              </div>
              <span className={s.EventOption}>지급 정보</span>
            </div>
            <div className={s.optionTitle}>
              <div className={s.applyPerson}>
                <div className={s.rowGridTable}>
                  <div className={s.gridLabel}>지급금액</div>
                  <div className={s.gridValue}>
                    <img src="/images/Banknote (1).png" alt="" />
                    <div className={s.money}>500,000원</div>
                    <p className={s.rule}>(오십만원정)</p>
                  </div>

                  <div className={s.gridLabel}>지급계좌</div>
                  <div className={s.gridValue}>
                    <img src="/images/Credit Card.png" alt="" />
                    <span className={s.rule}>국민은행 12****-34 (이영희)</span>
                  </div>

                  <div className={s.gridLabel}>예상 지급일</div>
                  <div className={s.gridValue}>
                    <img src="/images/Clock.png" alt="" />
                    <span className={s.rule}>승인 후 3영업일 이내</span>
                  </div>
                </div>
              </div>
              <span className={s.EventOption}>첨부 서류</span>
              <div className={s.fileBox}>
                <div className={s.imgBox}></div>

                <div className={s.textContainer}>
                  <span className={s.fileTitle}>
                    결혼확인서_이영희_20250701.pdf
                  </span>
                  <div className={s.fileSize}>
                    <span className={s.filesizeBox}>
                      PDF · 245 KB · 2025.07.01 업로드
                    </span>
                  </div>
                </div>
              </div>
              <div className={s.fileBox}>
                <div className={s.secondImgbox}></div>

                <div className={s.textContainer}>
                  <span className={s.fileTitle}>청첩장_스캔본.jpg</span>
                  <div className={s.fileSize}>
                    <span className={s.filesizeBox}>
                      JPG · 1.2MB · 2025.07.01 업로드
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className={s.feedback}>검토 의견</span>
            <div className={s.feedbackBox}>
              <span className={s.loading}>
                <img src="/images/Message Square Text.png" alt="" />
                서류 확인 중입니다. 추가 서류 제출이 필요할 수 있습니다.
              </span>
              <div className={s.provider}>
                검토자: 김인사 (인사팀장) · 2025.07.02
              </div>
            </div>
            <div className={s.lastBox}>
              <span className={s.lastUpdate}>
                최종 수정: 2025.07.02 · 인사팀
              </span>
              <div className={s.btnBox}>
                <button className={s.cancel}>
                  <p>신청취소</p>
                </button>
                <button className={s.closeBtn}>
                  <p>닫기</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
