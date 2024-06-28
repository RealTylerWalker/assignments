import { inventory } from "../inventory";
import { useParams } from "react-router-dom";

function InventoryDetails() {

  const { id } = useParams()

  const foundItem = inventory.find(item => item.id === id)
  console.log(foundItem)


  return (
    <div>
      <h1>Category: {foundItem.category}</h1>
      <h2>Product: {foundItem.name}</h2>
      <p> Price: {foundItem.price}</p>
      <p>Quantity: {foundItem.quantity}</p>
      <p>Id: {id}</p>

    </div>
  );
}

export default InventoryDetails;