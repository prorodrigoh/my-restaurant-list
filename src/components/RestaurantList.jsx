import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import RestaurantCard from './RestaurantCard';

export default function RestaurantList(){
    const [restaurants, setRestaurants] = useState()
    useEffect( () => {
    // fetch the api
    fetch('https://my-first-firestore-bc.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(err => console.error(err))
    // data --> restaurants
    },[])
    return (
        <section style={{ marginTop: '60px' }}>
            <Row>
                {!restaurants
                    ? <h2>Loading...</h2>
                    :restaurants.map( restaurant => 
                        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                        )
                }
            </Row>
        </section>
    )
}