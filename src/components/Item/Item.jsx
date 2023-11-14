import './Item.css';


const Item = ({title, description, price, img}) => {
  return (
    <div className="card-container">
        <h4 className="card-title">{title}</h4>
        <img src={img} alt={title}  />
        <p>{description}</p>
        <p>precio:${price}</p>
    </div>
  );
}

export default Item