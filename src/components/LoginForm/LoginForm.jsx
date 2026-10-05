import Input from "../Input/Input";
import Button from "../Button/Button";
import "./LoginForm.css";

function LoginForm() {
  return (
    <form className="login-form">
      <h2 className="login-form__title">Вход</h2>

      <Input
        label="Электронная почта"
        type="email"
        placeholder="example@mail.ru"
      />

      <Input
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
      />

      <div className="login-form__actions">
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
