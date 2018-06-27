// Actions

export default {
  setUser: function(value) {
    this.setState({user: value});
  },

  // Price Estimate
  priceEstimateButtons: function(value1, value2, value3, value4, value5) {

    if (value3 === null || value4 === null || value5 === null) {
      this.setState({errorPrint: "Fill All The Data"});
    } else {
      this.setState({showResults: value1, showBikeDetails: value2, errorPrint: ""});
    }
  },

  onBikeDetails: function(value1, value2, value3, value4, value5) {
    if (value3 !== null || value4 !== null || value5 !== null)
      this.setState({showResults: value1, showBikeDetails: value2, errorPrint: ""});
    }
  ,

  // Parcel Details
  handleChangeFrom: function(value) {
    this.setState({fromPlace: value});
  },
  handleChangeTo: function(value) {
    this.setState({toPlace: value});
  },
  handleChangeParcelDate: function(date, dateString) {

    this.setState({parcelDate: dateString, parcelDateActual: date});
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
    if (value === null) {
      this.setState({errorPrint: "Enter OTP"})
    } else {
      this.setState({verified: true, contactNumber: value2, rorPrint: ""});
    }

  },
  onChangeOTP: function(e) {
    this.setState({OTP: e.target.value});
  },

  openOTPModal: function(value1, value2, value3) {

    var mob = /^[1-9]{1}[0-9]{9}$/;
    value1 = Number(value1); // bikeCC
    value2 = Number(value2); // bikeValue

    console.log(value1, value2, value3);

    if (value1 === null || value2 === null || value3 === null)
      this.setState({errorPrint: "Enter Data"});
    else if (mob.test(value3) === false)
      this.setState({errorPrint: "Enter Valid Mobile"});

    else if ( (value1=>0 && value1<=50) && value2 < 10000)
      this.setState({errorPrint: "BikeCC should be more than 10000"});

    else if ( (value1>50 && value1<=150) && value2 < 10000)
            this.setState({errorPrint: "BikeCC should be more than 10000"});

    else if( (value1>150 && value1<=350) && value2 < 50000)
            this.setState({errorPrint: "BikeCC should be more than 50000"});

    else if ( (value1>350 && value1<= 500) && value2 < 75000)
      this.setState({errorPrint: "BikeCC should be more than 75000"});

     else if ((value1>500 && value1<=750) && value2 < 100000)
      this.setState({errorPrint: "BikeCC should be more than 100000"});
    else
      this.setState({otpModal: true, errorPrint: "", displayNone: "none"});
    },

  closeOTPModal: function() {
    this.setState({otpModal: false, displayNone: "flex", showBikeDetails: false});
  },

  openBookModal: function(value) {
    if (value === false) {
      this.setState({showResults: true});
    } else {
      this.setState({otpModal: false, bookNowState: true});
    }

  },

  closeBookModal: function() {
    this.setState({bookNowState: false});
  },

  // BookingForm
  pickupDetailsChange: function(value, str) {
    switch (str) {
      case 'sendername':
        this.setState({senderName: value});
        break;
      case 'contactnumber':
        this.setState({contactNumber: value});
        break;
      case 'emailid':
        this.setState({emailID: value});
        break;
      case 'pickupdate':
        this.setState({pickupDate: value});
        break;
      case 'pickupslot':
        this.setState({pickupSlot: value});
        break;
      case 'addressline':
        this.setState({addressLine: value});
        break;
      case 'towncity':
        this.setState({townCity: value});
        break;
      case 'addressstate':
        this.setState({addressState: value});
        break;
      default:
        console.log("Erorr Form Change");
    }
  },
  pickupDetailsChangePickUpdate: function(date, dateString, today) {
    /*var d = new Date();

    console.log(d.getFullYear()+d.getMonth()+d.getDate());
    console.log(dateString);
    console.log(d < dateString); */
    this.setState({pickupDate: dateString});
  },
  destinationDetailsChangePickUpdate: function(date, dateString) {
    this.setState({receiverpickupDate: dateString});
  },

  destinationDetailsChange: function(value, str) {
    switch (str) {
      case 'receivername':
        this.setState({receiverName: value});
        break;
      case 'receivercontactnumber':
        this.setState({receivercontactNumber: value});
        break;
      case 'receiveremailid':
        this.setState({receiveremailID: value});
        break;
      case 'receiverpickupdate':
        this.setState({receiverpickupDate: value});
        break;
      case 'receiverpickupslot':
        this.setState({receiverpickupSlot: value});
        break;
      case 'receiveraddressline':
        this.setState({receiveraddressLine: value});
        break;
      case 'receivertowncity':
        this.setState({receivertownCity: value});
        break;
      case 'receiveraddressstate':
        this.setState({receiveraddressState: value});
        break;
      default:
        console.log("Erorr Form Change");
    }
  },

  handleDoneClick: function() {
    this.setState({ redirect: true });
  },

  handleRatingChange: function(value) {
    this.setState({ ratingValue: value});
  },

  handleRatingName: function(value) {
    this.setState({ ratingName: value });
  },

  handleRatingData: function(value) {
    this.setState({ ratingData: value });
  },
  onReviewModal: function(value) {
    this.setState({reviewModal: value});
  },
  handleNewReview: function(value1, value2, value3 ) {
    if( value1 === 0 || value2 === null || value3 === null ) {
      this.setState({errorReview: "Incomplete Review"});
    }
    else
    {
      this.setState({ errorReview: "", reviewModal: false});
      alert("Your Review is Submitted");
    }

  }

}
