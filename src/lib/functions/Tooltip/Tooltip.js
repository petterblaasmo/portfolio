import "./Tooltip.scss";

const Tooltip = (props) => {
  const { text, code, align } = props;

  return (
    <>
      <div
        className="tooltip"
        style={{
          positin: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="outside">{code}</div>
        <p
          className="social"
          style={{ left: align === "left" ? "-50px" : "50px" }}
        >
          {text}
        </p>
      </div>
    </>
  );
};

export default Tooltip;
