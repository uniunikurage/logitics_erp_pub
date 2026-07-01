import s from "./Nav.module.css";

export default function Nav() {
  return (
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
    </div>
  );
}
