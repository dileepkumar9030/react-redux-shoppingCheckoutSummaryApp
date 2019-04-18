import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item Details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div className="item-row">
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://rukminim1.flixcart.com/image/832/832/office-study-chair/n/s/w/mika-leatherette-urban-ladder-original-imaep2z5b5kgfscw.jpeg?q=70"
                alt="Generic placeholder"
              />
              <Media.Body>
                <p>Essentials by user, rubber type chair Gaming leather, Red</p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`$${
                      this.props.price
                    }`}</strong>
                  </Col>
                  <Col md={6}> Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
