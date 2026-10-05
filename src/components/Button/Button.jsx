import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "",
  icon = null,
  type = "button",
  disabled = false,
}) {
  const sizeClass = size ? ` button--${size}` : "";
  const className = `button button--${variant}${sizeClass}`;

  return (
    <button type={type} className={className} disabled={disabled}>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__text">{children}</span>
    </button>
  );
}

export default Button;
