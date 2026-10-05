import "./Alert.css";

function Alert({ title, children, variant = "info" }) {
  return (
    <div className={`alert alert--${variant}`}>
      {title && <h4 className="alert__title">{title}</h4>}
      {children && <p className="alert__text">{children}</p>}
    </div>
  );
}

export default Alert;
