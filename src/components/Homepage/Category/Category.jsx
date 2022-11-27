import "./Category.css";
import { Container } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import CategoryData from "../../../json-api/Category.json";


const Cat_card = (data) => {
    return (
        <>
            <Col md className="px-4 mt-4 mt-md-0">
                <Card>
                    <Card.Body className="text-center py-3 px-1">
                        <div className="cat-icon d-flex justify-content-center align-items-center">
                            <i className={data.catInfo.icon}></i>
                        </div>
                        <Card.Title>{data.catInfo.title}</Card.Title>
                        <Card.Text>{data.catInfo.desc}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

const Category = () => {
    return (
        <>
            <Container style={{ marginTop: "-60px" }}>
                <Row>
                    {
                        CategoryData.map((data) => {
                            return <Cat_card catInfo={data} key={data.id} />
                        })
                    }
                </Row>
            </Container>
        </>
    );
}


export default Category;