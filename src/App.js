import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Promocode from "./components/Promocode/Promocode";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends React.Component {
  state = {
    total: 100,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disabledPromoButton: false
  };

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disabledPromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <Promocode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromoButton}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
