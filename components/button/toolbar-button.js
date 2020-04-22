const ToolbarButton = ({ className }) => {
  return (
    <div className="toolbar-button">
      <button className={className}>
        <span className="icon"></span>{' '}
        <span className="content">
          {className.charAt(0).toUpperCase() + className.slice(1)}
        </span>
      </button>
      <div className="popup-menu">
        <h4>Choose Gender</h4>
        <div className="d-flex flex-column">
          <label htmlFor="female">
            <input type="checkbox" name="female" />
            Female
          </label>
          <label htmlFor="male">
            <input type="checkbox" name="male" />
            Male
          </label>
        </div>
      </div>
    </div>
  );
};

export default ToolbarButton;
