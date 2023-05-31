import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap"

export const MenuItem = ({ dish, onSelectDish }) => {
    return (
        <>
            <Card inverse style={
                {
                    padding: '10px',
                    margin: '10px',
                    cursor: 'pointer'
                }
            }
            onClick = {() => onSelectDish(dish)}
            >
                <CardImg
                    alt=""
                    src={dish.image}
                    style={
                        {
                            height: 270,
                            width: '100%',
                            opacity: '0.7'
                        }
                    }
                    />
                    <CardImgOverlay>
                        <CardTitle 
                        tag='h5'
                        style={
                            {
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: '#000'
                            }
                        }>
                            {dish.name}
                            </CardTitle>
                    </CardImgOverlay>
            </Card>
        </>

    )
}