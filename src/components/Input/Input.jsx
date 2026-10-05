import "./Input.css";

function Input({
  label,
  hint,
  error = false,
  type = "text",
  placeholder = "",
}) {
  const fieldClass = error
    ? "input__field input__field--error"
    : "input__field";

  const hintClass = error ? "input__hint input__hint--error" : "input__hint";

  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}
      <input type={type} className={fieldClass} placeholder={placeholder} />
      {hint && <span className={hintClass}>{hint}</span>}
    </div>
  );
}

export default Input;
