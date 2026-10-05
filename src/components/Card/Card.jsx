import "./Card.css";

function Card({ image, title, price, children, layout = "vertical" }) {
  return (
    <div className={`card card--${layout}`}>
      <img className="card__image" src={image} alt={title} />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">{price}</p>
        {children && <div className="card__actions">{children}</div>}
      </div>
    </div>
  );
}

export default Card;
