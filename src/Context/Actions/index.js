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
  },
  onChangeOTP: function(e) {
    this.setState({OTP: e.target.value});
  },

  openOTPModal: function() {
    this.setState({otpModal: true});
  },

  closeOTPModal: function() {
    this.setState({otpModal: false});
  },

  openBookModal: function() {
    this.setState({bookNowState: true});
  },

  closeBookModal: function() {
    this.setState({bookNowState: false});
  },

  // BookingForm
  pickupDetailsChange: function(value, str) {
    switch(str)
    {
      case 'sendername': this.setState({senderName: value}); break;
      case 'contactnumber': this.setState({contactNumber: value}); break;
      case 'emailid': this.setState({emailID: value}); break ;
      case 'pickupdate': this.setState({pickupDate: value}); break ;
      case 'pickupslot': this.setState({pickupSlot: value}); break ;
      case 'addressline': this.setState({addressLine: value}); break ;
      case 'towncity': this.setState({townCity: value}); break ;
      case 'addressstate': this.setState({addressState: value}); break ;
      default: console.log("Erorr Form Change");
    }
  }
}
