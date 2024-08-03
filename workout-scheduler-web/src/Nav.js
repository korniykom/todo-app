export default function Nav({ day, handleBurgerMenu }) {
  return (
    <div className={`nav `}>
      <svg
        onClick={handleBurgerMenu}
        className="icon"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 35V32.3333H39V35H15ZM15 28.3333V25.6667H39V28.3333H15ZM15 21.6667V19H39V21.6667H15Z"
          fill="#B69DF7"
        />
      </svg>
      <h3 className="nav-title">{day}</h3>
      <div className="icon"></div>
    </div>
  );
}
