import ToolbarButton from './button/toolbar-button';

const Toolbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center toolbar">
      {['female', 'male', 'sort', 'filter'].map((className) => (
        <ToolbarButton className={className} />
      ))}
    </div>
  );
};

export default Toolbar;
