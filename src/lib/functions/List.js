const List = (props) => {
  const { array } = props;

  return (
    <ol className="fa-ul list">
      {array.map((obj) => {
        return (
          <li key={obj}>
            <span className="fa-li point">
              <i className="fa-solid fa-caret-right"></i>
            </span>
            {obj}
          </li>
        );
      })}
    </ol>
  );
};

export default List;
