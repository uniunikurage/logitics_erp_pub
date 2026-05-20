import Aside from "@/component/common/Aside";

export default function page() {
    return(
        <div>
            <Nav/>
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
            
        </div>

    )
}