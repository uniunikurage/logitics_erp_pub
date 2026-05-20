'use client';

import { useEffect, useState } from "react"
import s from "./test2.module.css"
import baseApi from "@/baseApi";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";


export default function page() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        //1. api를 요청해서 받는다.
        const getEmployee = async () => {
           const response = await baseApi.get("/api/v1/employees");
           console.log(response.data.data);
      

        //2. useState 넣는다.
        setEmployees(response.data.data);

        //3. useState에 있는 데이터를 렌더링 시킨다.
   
         }

         getEmployee();

        }, []);

    return(
        <div className={s.container}>


            <Nav/>

        
            <div className={s.contentContainer}>

                
            <Aside
                    dummy={[
            {
                titleInfo:{iconPath: '',titleName:' 인사정보'},
                submenuList: ['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
            },
            {
                titleInfo:{iconPath: '',titleName:' 인사정보'},
                submenuList: ['인사정보등록', '사원명수']
            },
            {
                titleInfo:{iconPath: '',titleName:' 인사정보'},
                submenuList: ['인사정보등록', '사원명수']
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
                        <span>인사정보</span>     
                        <img src="/images/Chevron Right.png" alt="오른쪽" />
                        <span>인사정보등록</span>
                    </div>
                    
                    <div className={s.mainHeader}>
                        <div className={s.mainTitle}>
                            <span>인사정보등록</span>
                            <p>직원의 인사정보를 등록하고 관리합니다</p>
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
                        <span><img/>
                        검색조건</span>
                        
                        <div className={s.searchFilter}>

                            <div className={s.filterGroup}>
                                <label htmlFor="epNum">사원번호</label>
                                <input type="text" placeholder="전체" />
                            </div>

                            <div className={s.filterGroup}>
                                <label htmlFor="dept">부서</label>
                                    <select id="dept">
                                        <option value="">전체</option>
                                        <option value="hr">인사팀</option>
                                        <option value="dev">개발팀</option>
                                    </select>
                            </div>
                            <div className={s.filterGroup}>
                                <label htmlFor="rank">직급</label>
                                    <select id="rank">
                                        <option value="">전체</option>
                                        <option value="staff">사원</option>
                                        <option value="assistantManager">대리</option>
                                        <option value="Manager">과장</option>
                                    </select>
                                </div>
                        </div>


                    </div>


                    </div>
                </div>
            </div>
      
    </div>
    )
}