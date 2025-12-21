import css from "./SocLinks.module.scss";

export default function SocLinks({ className }) {
  return (
    <div className={className}>
      <ul className={css.soc}>
        <li>
          <a
            href="https://github.com/klyuchukviktoriya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={`${css.soc__icon} ${css.soc__github}`}>
              <use href="/sprite.svg#icon-github"></use>
            </svg>
          </a>
        </li>
        <li>
          <address>
            <a
              href="mailto:klyuchuk.viktoriya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={`${css.soc__icon} ${css.soc__gmail}`}>
                <use href="/sprite.svg#icon-gmail"></use>
              </svg>
            </a>
          </address>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/viktoriia-kliuchuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={`${css.soc__icon} ${css.soc__linkedin}`}>
              <use href="/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://t.me/vktr_klchk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={`${css.soc__icon} ${css.soc__telegram}`}>
              <use href="/sprite.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
