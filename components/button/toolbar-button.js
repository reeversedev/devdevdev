const ToolbarButton = ({ className }) => {
  return (
    <button className={`toolbar-button ${className}`}>
      <span className="icon"></span>{' '}
      <span className="content">
        {className.charAt(0).toUpperCase() + className.slice(1)}
      </span>
    </button>
  );
};

export default ToolbarButton;
