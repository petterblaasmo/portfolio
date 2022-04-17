const Navbar = (props) => {
  const element = props.element;

  return (
    <nav>
      <h1>Petter</h1>
      <ul className="middle">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="right">{element}</div>
    </nav>
  );
};

export default Navbar;
