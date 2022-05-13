import "./Navbar.scss";

const Navbar = () => {
  const ListItems = () => {
    return ["Home", "About", "Work", "Skills", "Contact"].map((item, i) => {
      return (
        <li>
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      );
    });
  };

  return (
    <nav>
      <div className="first">
        <h1>Petter</h1>
      </div>
      <ul>
        <ListItems />
      </ul>
      <div className="last">
        <p>Placeholder</p>
      </div>
    </nav>
  );
};

export default Navbar;
