
import ItemList from '../../components/ItemList/ItemList';
import products from '../../components/Products/Products';




const ItemListContainer = () => {

  return (
      <div>
          
          <ItemList products={products} />
          </div>
      );
  };

export default ItemListContainer;