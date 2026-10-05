import './App.css';

function App() {
  return (
    <div className="container">
      <h1>UI Kit</h1>

      {/* Кнопки */}
      <section className="section">
        <h2>Кнопки</h2>
        <div className="row">
          <button className="btn btn-primary">Обычная</button>
          <button className="btn btn-primary btn-sm">Маленькая</button>
          <button className="btn btn-primary btn-lg">Большая</button>
          
          <button className="btn btn-success">
             <span className="icon">💾</span> Сохранить
          </button>
          
          <button className="btn btn-danger">
             <span className="icon">🗑</span> Удалить
          </button>
          
          <button className="btn btn-ghost">
             <span className="icon">✕</span> Отмена
          </button>
          
          <button className="btn btn-primary" disabled>
             <span className="icon">🔒</span> Недоступно
          </button>
        </div>
      </section>

      {/* Бейджи */}
      <section className="section">
        <h2>Бейджи</h2>
        <div className="row">
          <span className="badge badge-green">Активен</span>
          <span className="badge badge-yellow">Ожидание</span>
          <span className="badge badge-red">Ошибка</span>
          <span className="badge badge-gray">Черновик</span>
        </div>
      </section>

      {/* Карточки */}
      <section className="section">
        <h2>Карточки</h2>
        <div className="row row-cards">
          
          <div className="card">
            <div className="card-image-placeholder">
              <div className="circle"></div>
              <span>Фото товара</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Кофеварка</h3>
              <p className="card-price">4 990 ₽</p>
              <div className="card-actions">
                <span className="badge badge-green">В наличии</span>
                <button className="btn btn-primary btn-sm">В корзину</button>
              </div>
            </div>
          </div>

          <div className="card card-small">
            <div className="card-image-placeholder small">
               <div className="circle"></div>
            </div>
            <div className="card-content center">
              <h3 className="card-title small">Чайник</h3>
              <p className="card-price">1 990 ₽</p>
              <button className="btn btn-secondary btn-full">Подробнее</button>
            </div>
          </div>

        </div>
      </section>

      {/* Алерты */}
      <section className="section">
        <h2>Алерты</h2>
        <div className="alerts-grid">
          
          <div className="alert alert-info">
            <h4>Информация</h4>
            <p>Это информационное сообщение.</p>
          </div>
          
          <div className="alert alert-success">
            <h4>Успех</h4>
            <p>Данные успешно сохранены.</p>
          </div>
          
          <div className="alert alert-warning">
            <h4>Внимание</h4>
            <p>Проверьте введенные данные.</p>
          </div>
          
          <div className="alert alert-error">
            <h4>Ошибка</h4>
            <p>Не удалось подключиться к серверу.</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;