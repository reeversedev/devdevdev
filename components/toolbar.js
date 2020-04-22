import ToolbarButton from './button/toolbar-button';

const Toolbar = ({ buttons }) => {
  return (
    <div className="d-flex justify-content-between align-items-center toolbar">
      {buttons.map((className) => (
        <ToolbarButton className={className} />
      ))}
    </div>
  );
};

export default Toolbar;
