import s from "./Aside.module.css"

export default function Aside({dummy}){

//const dummy = [
//        {
//            titleInfo:{iconPath: '',titleName:' 인사정보'},
//            submenuList: ['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
//        },
//        {
//            titleInfo:{iconPath: '',titleName:' 인사정보'},
//            submenuList: ['인사정보등록', '사원명수']
//        },
//        {
//            titleInfo:{iconPath: '',titleName:' 인사정보'},
//            submenuList: ['인사정보등록', '사원명수']
//        },
//    ]

    return(

        <div className={s.sideBar}>

            {dummy.map((item, idx) => (
                <div className={s.sideContainer}>
                    <span className={s.sideTitle}>
                        {item.titleInfo.titleName}
                    </span>
                    
                    <ul className={s.hrInfo}>
                        {item.submenuList.map((subItem, subIdx) => (
                            <li>{subItem}</li>
                        ))}
                    </ul>



                </div>    
            ))}
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


            {/* <div className={s.sideContainer}>
                <span className={s.sideTitle}>
                    인사정보
                </span>
                
                <ul className={s.hrInfo}>
                    <li>인사정보등록</li>
                    <li>사원명수/인사기록카드</li>
                    <li>인사발령등록</li>
                </ul>
            </div> */}


{/* 
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
            </div> */}


        </div>


    )
}
