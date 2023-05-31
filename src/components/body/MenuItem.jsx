import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap"

export const MenuItem = ({ dish }) => {
    return (
        <>
            <Card inverse style={
                {
                    padding: '10px',
                    margin: '10px',
                }
            }>
                <CardImg
                    alt=""
                    src={dish.image}
                    style={
                        {
                            height: 270,
                            width: '100%',
                            opacity: '0.5'
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