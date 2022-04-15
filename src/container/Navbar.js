const Navbar = (props) => {
  const element = props.element;

  return (
    <nav>
      <div className="left">
        <h1>Petter</h1>
      </div>
      <ul className="middle">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="right">{element}</div>
    </nav>
  );
};

export default Navbar;
