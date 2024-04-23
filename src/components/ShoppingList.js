/* datas */
import { plantList } from '../datas/plantList';

/* components */
import PlantItem from "./PlantItem";

/* Styles */
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <PlantItem
                                key={plant.id}
                               name={plant.name}
                               cover={plant.cover}
                               id={plant.id}
                               isSpecialOffer={plant.isSpecialOffer || false}
                               light={plant.light || null}
                               water={plant.water || null}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList