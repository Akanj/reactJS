/* components */
import CareScale from "./CareScale";

/* styles */
import '../styles/PlantItem.css'

function PlantItem({name, cover, id, isSpecialOffer, light, water}) {

    function handleClick(plantName) {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
    }

    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                {isSpecialOffer && <span className='lmj-sales'>Soldes</span>}
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}


export default PlantItem;