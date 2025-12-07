import css from "./Background.module.scss";

export default function Background() {
  return <div className={css.bg}></div>;
}
// window.addEventListener("scroll", () => {
//   const offset = window.scrollY * 0.2;
//   document.querySelector(".bg").style.transform = `translateY(${offset}px)`;
// });
