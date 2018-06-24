// Actions

export default {
  setUser: function(value) {
    this.setState({user: value});
  },

  // Price Estimate
  priceEstimateButtons: function(value1, value2) {
    this.setState({showResults: value1, showBikeDetails: value2});
  },

  // Parcel Details
  handleChangeFrom: function(value) {
    this.setState({fromPlace: value});
  },
  handleChangeTo: function(value) {
    this.setState({toPlace: value});
  },
  handleChangeParcelDate: function(date, dateString) {
    console.log(dateString);
    this.setState({parcelDate: dateString});
  },

  // Bike Details
  bikeContactChange: function(e) {
    this.setState({tempContact: e.target.value});
  },
  bikeCCChange: function(e) {
    this.setState({bikeCC: e.target.value});
  },
  bikeValueChange: function(e) {
    this.setState({bikeValue: e.target.value});
  },
  onChangeVerifyContact: function(value) {
    this.setState({verified: value});
  }

}
