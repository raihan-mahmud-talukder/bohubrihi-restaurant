import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap"
import { LoadComments } from "./LoadComments"

export const DishDetail = ({ dish }) => {
    return (
        <>
            <Card className="my-2">
                <CardImg
                    alt=""
                    src={dish.image}
                    style = {
                        {
                            height: 400
                        }
                    }
                    top
                    width = '100%'
                />
                <CardBody style={{}}>
                    <CardTitle tag='h5'>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}<br /><br />
                        {dish.price}/-
                    </CardText>
                    <hr />
                    <LoadComments comments={dish.comments} />
                </CardBody>
            </Card>
        </>
    )
}