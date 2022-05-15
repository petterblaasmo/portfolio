import "./Pagination.scss";
import { Items } from "../../config";

const Pagination = ({ active }) => {
  const RenderDots = () => {
    return Items.map((currentItem, index) => {
      const item = currentItem.toLowerCase();
      return (
        <li
          onClick={() => (window.location.href = `#${item}`)}
          key={item + index}
          className={active === item ? "active" : ""}
        ></li>
      );
    });
  };

  return (
    <ul className="pagination">
      <RenderDots />
    </ul>
  );
};

export default Pagination;
