import React, {useEffect, useState} from 'react';
import { Col, Row, Card } from 'antd';

export function RestaurantList(){
    const [restaurants, setRestaurants] = useState()
    useEffect( () => {
    // fetch teh api
    fetch('https://my-first-firestore-rh.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(err => console.error(err))
    // data --> restaurants
    },[])
    return (
        <section>
            <Row gutter={16}>
                {!restaurants
                    ? <h2>Loading...</h2>
                    :restaurants.map( restaurant => (
                        <Col style={{ width: '300px' }} key={restaurant.id}>
                            <Card 
                                title={restaurant.name}
                                hoverable
                            >
                                <p>{restaurant.address}</p>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </section>
    )
}