import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantPage () {
    const  { restaurantId } = useParams()
    const [ restaurant, setRestaurant ] = useState();
    useEffect(() => {
        fetch(`https://my-first-firestore-rh.web.app/restaurants/${restaurantId}`)
            .then(response => response.json())
            .then(data => setRestaurant(data))
            .catch(console.error)
    },[restaurantId]) // every time restaurantId changes it will fetch the new restaurant based on the id
    return (
        <RestaurantCard restaurant={restaurant}/>
    )
}