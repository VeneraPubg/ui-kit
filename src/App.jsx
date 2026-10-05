import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Card from "./components/Card/Card";
import Alert from "./components/Alert/Alert";
import Input from "./components/Input/Input";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="180" viewBox="0 0 280 180">
      <rect width="280" height="180" fill="#dbeafe"/>
      <circle cx="140" cy="80" r="40" fill="#93c5fd"/>
      <rect x="90" y="130" width="100" height="14" rx="4" fill="#60a5fa"/>
      <text x="140" y="160" font-family="sans-serif" font-size="14" fill="#1e3a8a" text-anchor="middle">Фото товара</text>
    </svg>`
  );

function App() {
  return (
    <div className="app">
      <h1>UI Kit</h1>

      <section className="app__section">
        <h2>Кнопки</h2>
        <div className="app__row">
          <Button variant="primary">Обычная</Button>
          <Button variant="primary" size="small">Маленькая</Button>
          <Button variant="primary" size="large">Большая</Button>
          <Button variant="primary" icon="💾">Сохранить</Button>
          <Button variant="danger" icon="🗑">Удалить</Button>
          <Button variant="secondary" icon="✖">Отмена</Button>
          <Button variant="primary" disabled={true} icon="🔒">
            Недоступно
          </Button>
        </div>
      </section>

      <section className="app__section">
        <h2>Бейджи</h2>
        <div className="app__row">
          <Badge variant="success">Активен</Badge>
          <Badge variant="warning">Ожидание</Badge>
          <Badge variant="error">Ошибка</Badge>
          <Badge variant="neutral">Черновик</Badge>
        </div>
      </section>

      <section className="app__section">
        <h2>Карточки</h2>
        <div className="app__row">
          <Card
            image={PLACEHOLDER_IMAGE}
            title="Кофеварка"
            price="4 990 ₽"
          >
            <Badge variant="success">В наличии</Badge>
            <Button variant="primary">В корзину</Button>
          </Card>

          <Card
            image={PLACEHOLDER_IMAGE}
            title="Чайник"
            price="1 990 ₽"
            layout="compact"
          >
            <Button variant="secondary">Подробнее</Button>
          </Card>
        </div>
      </section>

      <section className="app__section">
        <h2>Алерты</h2>
        <div className="app__row">
          <Alert variant="info" title="Информация">
            Это информационное сообщение.
          </Alert>
          <Alert variant="success" title="Успех">
            Данные успешно сохранены.
          </Alert>
          <Alert variant="warning" title="Внимание">
            Проверьте введённые данные.
          </Alert>
          <Alert variant="error" title="Ошибка">
            Не удалось подключиться к серверу.
          </Alert>
        </div>
      </section>

      <section className="app__section">
        <h2>Поля ввода</h2>
        <div className="app__row">
          <Input
            label="Электронная почта"
            placeholder="example@mail.ru"
            hint="Мы не рассылаем спам"
          />
          <Input
            label="Пароль"
            type="password"
            placeholder="Введите пароль"
            hint="Пароль слишком короткий"
            error={true}
          />
        </div>
      </section>

      <section className="app__section">
        <h2>Форма входа</h2>
        <LoginForm />
      </section>
    </div>
  );
}

export default App;
