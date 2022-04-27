const Header = () => {
  return (
    <section className="header">
      <div>
        <h3>Hi, I am</h3>
        <h1>Petter Blåsmo</h1>
        <div>
          {["Student", "Freelancer", "Developer"].map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
