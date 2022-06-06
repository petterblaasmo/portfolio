import "./Alertbox.scss";

const AlertBox = ({ status, message }) => {
  const handleClick = (e) => e.target.parentNode.remove();

  return (
    <div
      className="alert"
      style={{
        backgroundColor:
          status === "success" ? "rgb(56, 142, 60)" : "rgb(211, 47, 47)",
      }}
    >
      <i
        className={`fas fa-${status === "success" ? "check" : "exlamation"}`}
      />
      <p>{message}</p>
      <i className="fas fa-xmark close" onClick={handleClick} />
    </div>
  );
};

export default AlertBox;
