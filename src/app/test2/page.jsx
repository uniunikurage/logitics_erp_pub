import s from "./test2.module.css"

export default function page() {
    return(
        <div className={s.container}>
        <div className={s.nav}>
            <div className={s.left}>
                <div className={s.logoWrapper}>
                    <span>인사관리시스템</span>
                </div>
                <ul className={s.menuWrapper}>
                    <li>인사관리</li>
                    <li>근태관리</li>                    
                    <li>급여관리</li>                    
                    <li>일용직관리</li>                    
                </ul>

            </div>

            <div className={s.right}>
                <span>홍길동</span>
                <span>인사팀</span>
            </div>
        </div>
            <div className={s.contentContainer}>

                <div className={s.sideBar}>
                    <div className={s.sideContainer}>
                        <span className={s.sideTitle}>
                            인사정보
                        </span>
                        
                        <ul className={s.hrInfo}>
                            <li>인사정보등록</li>
                            <li>사원명수/인사기록카드</li>
                            <li>인사발령등록</li>
                        </ul>
                    </div>

                    <div className={s.sideContainer}>
                        <span className={s.sideTitle}>
                        경조비관리
                        </span>
                        
                        <ul className={s.hrInfo}>
                            <li>경조비신청</li>
                            <li>경조비신청현황</li>
                        </ul>
                    </div>
                    <div className={s.sideContainer}>
                        <span className={s.sideTitle}>
                            증명서관리
                        </span>
                        
                        <ul className={s.hrInfo}>
                            <li>증명서발급</li>
                        </ul>
                    </div>
                </div>
                    
                <div className={s.mainBar}>
                    <div className={s.mainContainer}>
                    <div className={s.homeIconWrapper}>
                        <img src="/images/House.png" alt="홈 아이콘" />
                        <img src="/images/Chevron Right.png" alt="오른쪽" />
                        <span>인사관리</span>
                        <img src="/images/Chevron Right.png" alt="오른쪽" />  
                        <span>인사정보</span>     
                        <img src="/images/Chevron Right.png" alt="오른쪽" />
                        <span>인사정보등록</span>
                    </div>


                    </div>
                </div>
            </div>
      
    </div>
    )
}