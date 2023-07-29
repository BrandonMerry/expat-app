import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p.id === productId)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Home Screen
      </Link>
      <Row>
        <Col md={5}>
          <Image src='{prduct.image}' alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} />
            </ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col> Price: </Col>
                  <Col> THB{product.price}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className='btn-block' tpye='button '>
                  Add to invoice
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
