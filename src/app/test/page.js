export default function page() {
    return(
        <div className={style.container}>
            <div className={style.wrapper}>

                <div className={style.left}>
                    <img src=""></img>
                    <span>인사관리시스템</span>
                </div>

                <div className={style.left2}>
                    <ul className={style.navigate}>
                        <li>인사관리</li>
                        <li>근태관리</li>
                        <li>급여관리</li>
                        <li>일용직관리</li>
                    </ul>
                </div>
            </div>

            <div className={style.right}>
            
                <img src="" className={`${style.imgIcon}` `${style.bellIcon}`}></img>
                <div className={style.}>
                    <span className={style.name}>홍</span>
                    <span className={style.fullname}>홍길동</span>
                </div>
                <div className={style.position}>
                    <span>인사팀</span>
                    <img src="" className={style.imgIcon}></img>
                </div>

            </div>
        </div>
    )
}