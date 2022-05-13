import "./Pagination.scss";

const Pagination = () => {
  const RenderDots = () => {
    return <li></li>;
  };

  return (
    <ul className="pagination">
      <RenderDots />
    </ul>
  );
};

export default Pagination;
