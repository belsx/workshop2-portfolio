import PropTypes from "prop-types";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  const handleClick = (e) => {
    const name = e.target.name;
    onSelectFilter(name);
  };

  return (
    <div className="toolbar">
      {filters.map((btn, index) => (
        <button
          key={index}
          className={`custom-button ${selected===btn ? "selected" : ""}`}
          name={btn}
          onClick={handleClick}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf({}).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func,
};
