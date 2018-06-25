// Actions

export default {
  setUser: function(value) {
    this.setState({user: value});
  },

  // Price Estimate
  priceEstimateButtons: function(value1, value2, value3, value4, value5) {

    if( value3 === null || value4 === null || value5 === null )
    { this.setState({errorPrint: "Fill All The Data"}); }
    else
    {
      this.setState({showResults: value1, showBikeDetails: value2, errorPrint: ""});
    }
  },

  // Parcel Details
  handleChangeFrom: function(value) {
    this.setState({fromPlace: value});
  },
  handleChangeTo: function(value) {
    this.setState({toPlace: value});
  },
  handleChangeParcelDate: function(date, dateString) {

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
  onChangeVerifyContact: function(value, value2) {
    if( value === null ) {
      this.setState({errorPrint: "Enter OTP"})
    }
    else
    {
      this.setState({verified: true, contactNumber: value2, rorPrint: ""});
    }

  },
  onChangeOTP: function(e) {
    this.setState({OTP: e.target.value});
  },

  openOTPModal: function( value1, value2, value3) {
    if( value1 === null || value2 === null || value3 === null )
        this.setState({errorPrint: "Enter Data"});
    else
        this.setState({otpModal: true, errorPrint: ""});
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
  },

  destinationDetailsChange: function(value, str) {
    switch(str)
    {
      case 'receivername': this.setState({receiverName: value}); break;
      case 'receivercontactnumber': this.setState({receivercontactNumber: value}); break;
      case 'receiveremailid': this.setState({receiveremailID: value}); break ;
      case 'receiverpickupdate': this.setState({receiverpickupDate: value}); break ;
      case 'receiverpickupslot': this.setState({receiverpickupSlot: value}); break ;
      case 'receiveraddressline': this.setState({receiveraddressLine: value}); break ;
      case 'receivertowncity': this.setState({receivertownCity: value}); break ;
      case 'receiveraddressstate': this.setState({receiveraddressState: value}); break ;
      default: console.log("Erorr Form Change");
    }
  }

}
