import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card } from 'antd';
const { Meta } = Card;

export default function RestaurantCard({restaurant}) {
    let navigate = useNavigate();
    return(
        <>
            <Col style={{ width: '300px', margin: '1em' }} key={restaurant?.id}>
                <Card
                    loading={!restaurant}
                    hoverable
                    onClick={()=> navigate(`/restaurants/${restaurant?.id}`)}
                    cover={restaurant && <img alt={`Typical meal at ${restaurant?.name}`} src={restaurant?.image} />}
                    >
                    <Meta title={restaurant?.name} description={restaurant?.address} />
                </Card>
            </Col>
        </>
    )
}
