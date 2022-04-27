const Icon = (props) => {
  const { type, icon, style } = props;
  return (
    <i
      style={style ? style : null}
      className={`${type || "fas"} fa-${icon || "home"}`}
    ></i>
  );
};

export default Icon;
