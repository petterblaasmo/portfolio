const List = (props) => {
  const { array } = props;

  return (
    <ol class="fa-ul list">
      {array.map((obj) => {
        return (
          <li>
            <span class="fa-li point">
              <i class="fa-solid fa-caret-right"></i>
            </span>
            {obj}
          </li>
        );
      })}
    </ol>
  );
};

export default List;
