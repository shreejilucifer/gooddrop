import axios from 'axios';

// Actions

export default {

  helloWorld: function() {

    var form = new FormData();
    form.append("email", "akshata.akkanna-@gmail.com");
    form.append("password", "Akshata003");

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://18.206.137.13/api/login",
      "method": "POST",
      "headers": {},
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    axios(settings)
    .then((res)=>{
      var x = "Bearer ";
      var resx = x.concat(res.data.success.token);

      this.setState({auth: resx, loadingScreen: false });
    })
    .catch((err)=>{
      console.log(err);
    })
  },

  // Price Estimate
  priceEstimateButtons: function(value1, value2, value3, value4, value5) {

    if (value3 === null || value3 === "") {
      this.setState({errorPrint: "Please Select Parcel From"});
    } else if (value4 === null || value4 === "") {
      this.setState({errorPrint: "Please Select Parcel To"});
    } else if (value5 === null || value5 === "") {
      this.setState({errorPrint: "Please Select Parcel Date"});
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
    var cc = /^[0-9]*$/;
    if (cc.test(e.target.value) === true) {
      this.setState({tempContact: e.target.value});
    }
  },

  bikeCCChange: function(e) {
    var cc = /^[0-9]*$/;
    if (cc.test(e.target.value) === true) {
      this.setState({bikeCC: e.target.value, errorPrint: ""});
    }
  },

  bikeValueChange: function(e) {
    var cc = /^[0-9]*$/;
    if (cc.test(e.target.value) === true) {
      this.setState({bikeValue: e.target.value});
    }
  },

  onChangeVerifyContact: function(value, value2, auth, parcelFrom, toPlace, parcelDate, bikeCC, bikeValue, senderContact, msg) {
    if (value === null) {
      this.setState({errorPrint: "Enter OTP"})
    } else {

      this.setState({loadingMsg: "Calculating The Price..."});
      var mobilefinals = "91";
      mobilefinals = mobilefinals.concat(senderContact.toString());

      var form1 = new FormData();
      form1.append("mobile_number", mobilefinals.toString());
      form1.append("otp", value.toString());
      form1.append("message_id", msg.toString());

      var settings1 = {
        "async": true,
        "crossDomain": true,
        "url": "http://18.206.137.13/api/verify_otp",
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Authorization": auth.toString()
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form1
      }

      axios(settings1).then((res1) => {

        if (res1.data.type === "success" || res1.data.message === "otp_verified" || res1.data.message === "already_verified") {

          var form = new FormData();
          form.append("parcel_from", parcelFrom.toString());
          form.append("parcel_to", toPlace.toString());
          form.append("parcel_date", parcelDate.toString());
          form.append("sender_contact", senderContact.toString());
          form.append("bike_cc", bikeCC.toString());
          form.append("bike_value", bikeValue.toString());

          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://18.206.137.13/api/pick_up_details",
            "method": "POST",
            "headers": {
              "Accept": "application/json",
              "Authorization": auth.toString(),
              "Content-Type": "application/json"
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
          }

          axios(settings).then((res) => {

            this.setState({
              loadingMsg: "",
              verified: true,
              contactNumber: value2,
              errorPrint: "",
              orderCharge: res.data.Price,
              orderid: res.data.Order_id
            });
          }).catch((err) => {
            console.log(err);
            this.setState({loadingMsg: "Error! Try Again Later"});
          })

        } else {
          this.setState({loadingMsg: "Invalid OTP !"});
        }

      }).catch((err) => {
        this.setState({loadingMsg: "Error ! Try Again"});
      })
    }

  },
  onChangeOTP: function(e) {
    this.setState({OTP: e.target.value});
  },

  openOTPModal: function(value1, value2, value3, auth) {

    var mob = /^[6-9]\d{9}$/;
    var cc = /^\d{2,3}$/;
    var val = /^[0-9]*$/;
    value1 = Number(value1); // bikeCC
    value2 = Number(value2); // bikeValue

    if (value1 === null || value1 === 0)
      this.setState({errorPrint: "Please Enter Bike CC !"});
    else if (value2 === null || value2 === 0)
      this.setState({errorPrint: "Please Enter Bike Value !"});
    else if (value3 === null || value3 === "")
      this.setState({errorPrint: "Please Enter Contact Number !"});
    else if (cc.test(value1) === false)
      this.setState({errorPrint: "Please Enter Valid Bike CC !"});
    else if (val.test(value2) === false)
      this.setState({errorPrint: "Please Enter Valid Bike Value !"});
    else if (mob.test(value3) === false)
      this.setState({errorPrint: "Please Enter Valid Mobile !"});
    else if (value1 <= 70)
      this.setState({errorPrint: "Bike CC should be more than 70"});
    else if ((value1 > 70 && value1 <= 150) && value2 < 10000)
      this.setState({errorPrint: "Bike Value should be more than 10000"});
    else if ((value1 > 150 && value1 <= 350) && value2 < 50000)
      this.setState({errorPrint: "Bike Value should be more than 50000"});
    else if ((value1 > 350 && value1 <= 500) && value2 < 75000)
      this.setState({errorPrint: "Bike Value should be more than 75000"});
    else if ((value1 > 500 && value1 <= 750) && value2 < 100000)
      this.setState({errorPrint: "Bike Value should be more than 100000"});
    else if (value2 > 999999)
      this.setState({errorPrint: "Bike Value Not Allowed"});
    else {
      this.setState({errorPrint: "loading..."});

      var mobilefinal = "91";
      mobilefinal = mobilefinal.concat(value3.toString());

      var form = new FormData();
      form.append("mobile_number", mobilefinal.toString());

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://18.206.137.13/api/otp",
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Authorization": auth.toString()
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
      }

      axios(settings).then((res) => {
        console.log("OTP Sent To Mobile");
        this.setState({otpModal: true, errorPrint: "", displayNone: "none", otpmsgid: res.data.message});
      }).catch((err) => {
        console.log(err);
        this.setState({errorPrint: "Error! Try Again Later !"})
      });
      this.setState({otpModal: true, errorPrint: "", displayNone: "none", otpmsgid: null});

    }

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
    var sender = /^[a-zA-Z ]*$/;
    var cont = /^[0-9]*$/;

    switch (str) {
      case 'sendername':
        if (sender.test(value) === true)
          this.setState({senderName: value});
        break;
      case 'contactnumber':
        if (cont.test(value) === true)
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
      case 'addressline1':
        this.setState({addressLine1: value});
        break;
      case 'addressline2':
          this.setState({addressLine2: value});
          break;
      case 'towncity':
        this.setState({townCity: value});
        break;
      case 'addressstate':
        this.setState({addressState: value});
        break;
      default:
        console.log("Error Form Change");
    }
  },
  pickupDetailsChangePickUpdate: function(date, dateString, today) {
    this.setState({pickupDate: dateString, pickupDateActual: date});
  },
  destinationDetailsChangePickUpdate: function(date, dateString) {
    this.setState({receiverpickupDate: dateString});
  },

  destinationDetailsChange: function(value, str) {
    var sender = /^[a-zA-Z ]*$/;
    var cont = /^[0-9]*$/;

    switch (str) {
      case 'receivername':
        if (sender.test(value) === true)
          this.setState({receiverName: value});
        break;
      case 'receivercontactnumber':
        if (cont.test(value) === true)
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
      case 'receiveraddressline1':
        this.setState({receiveraddressLine1: value});
        break;
      case 'receiveraddressline2':
        this.setState({receiveraddressLine2: value});
        break;
      case 'receivertowncity':
        this.setState({receivertownCity: value});
        break;
      case 'receiveraddressstate':
        this.setState({receiveraddressState: value});
        break;
      default:
        console.log("Error Form Change");
    }
  },

  handleDoneClick: function() {
    this.setState({redirect: true});
  },

  handleRatingChange: function(value) {
    this.setState({ratingValue: value});
  },

  handleRatingName: function(value) {
    this.setState({ratingName: value});
  },

  handleRatingData: function(value) {
    this.setState({ratingData: value});
  },
  onReviewModal: function(value) {
    this.setState({reviewModal: value});
  },
  handleNewReview: function(value1, value2, value3) {
    if (value1 === 0 || value2 === null || value3 === null) {
      this.setState({errorReview: "Incomplete Review"});
    } else {
      this.setState({errorReview: "", reviewModal: false});
      alert("Your Review is Submitted");
    }

  },

  onChangeCheckBox: function(e) {
    this.setState({checkBox: e.target.checked});
  },

  openStationRequestModal: function(e) {
    this.setState({StationRequestModal: e, showResults: false});
  },

  stationRequestHandler: function(val1, val2) {
    var sender = /^[a-zA-Z ]*$/;
    var cont = /^[0-9]*$/;

    if (val2 === "sourcestation") {
      if (sender.test(val1) === true)
        this.setState({sourceStation: val1});
      }
    else if (val2 === "destinationstation") {
      if (sender.test(val1) === true)
        this.setState({destinationStation: val1});
      }
    else if (val2 === "stationname") {
      if (sender.test(val1) === true)
        this.setState({stationName: val1});
      }
    else if (val2 === "stationphone") {
      if (cont.test(val1) === true)
        this.setState({stationPhone: val1});
      }
    else if (val2 === "stationemail") {
      this.setState({stationEmail: val1});
    } else if (val2 === "stationbikesno") {
      if (cont.test(val1) === true)
        this.setState({stationBikeno: val1});
      }
    },

  onSubmitStationRequest: function(source, destination, name, phone, email, bikeno, auth) {
    var mob = /^[6-9]\d{9}$/;
    var mail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    var n = /^[a-z ,.'-]+$/i;

    if (source === "")
      this.setState({errorStation: "Please Enter the Source Station"});
    else if (destination === "")
      this.setState({errorStation: "Please Enter the Destination Station"});
    else if (name === "")
      this.setState({errorStation: "Please Enter The Name"});
    else if (n.test(name) === false)
      this.setState({errorStation: "Please Enter Valid Name"});
    else if (phone === "")
      this.setState({errorStation: "Please Enter the Phone Number"});
    else if (mob.test(phone) === false)
      this.setState({errorStation: "Please Enter Valid Phone Number"});
    else if (email === "")
      this.setState({errorStation: "Please Enter Email"});
    else if (mail.test(email) === false)
      this.setState({errorStation: "Please Enter Valid Email"});
    else if (bikeno === "")
      this.setState({errorStation: "Please Enter Number of Bikes"});
    else {
      this.setState({errorStation: "loading..."});
      var form = new FormData();
      form.append("name", name.toString());
      form.append("email", email.toString());
      form.append("parcel_from", source.toString());
      form.append("parcel_to", destination.toString());
      form.append("mobile_number", phone.toString());
      form.append("no_bikes", bikeno.toString());

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://18.206.137.13/api/not_listed",
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Authorization": auth.toString()
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
      }

      axios(settings).then((res) => {
        this.setState({errorStation: "Thanks for letting us know, we will get back to you shortly"});
        setTimeout(() => {
          this.setState({StationRequestModal: false})
        }, 10000);
      }).catch((err) => {
        this.setState({errorStation: "Cannot Process Request ! Try Later !"});
      })

    }
  },

  shippingDetailsToApi: function(curr,
    senderName, pickupDate, pickupSlot, addressLine1, addressLine2, cityState, senderEmail,
    receiverName, receiverAdd1, receiverAdd2, receiverTownCity, receiverNum, orderid, auth, checked) {
if( checked === true ) {
    this.setState({error: "Posting your Order..."});

    var form = new FormData();
    form.append("sender_name", senderName.toString());
    form.append("pick_up_date", pickupDate.toString());
    form.append("pickup_slot", pickupSlot.toString());
    form.append("pick_up_add1", addressLine1.toString());
    form.append("pick_up_add2", addressLine2.toString());
    form.append("sender_city_state", cityState.toString());
    form.append("sender_email", senderEmail.toString());

    form.append("receiver_name", receiverName.toString());
    form.append("receiver_add", receiverAdd1.toString());
    form.append("receiver_add2", receiverAdd2.toString());
    form.append("receiver_city_state", receiverTownCity.toString());
    form.append("receiver_num", receiverNum.toString());

    form.append("order_id", orderid.toString());
    form.append("mode_of_payment", "Cash on Pickup".toString());

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://18.206.137.13/api/shipping_details",
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Authorization": auth.toString()
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    axios(settings).then((res) => {

      console.log("Your Data Sent To Server !");

      const current = curr + 1;
      this.setState({sentDataToServer: true,current: current, error: ""});

    }).catch((err) => {
      console.log(err);
      this.setState({error: "Error Try Again Later !"});
    })
  } else {
    this.setState({error: "Please Accept The Terms & Conditions !"});
  }

  },

  changeinsource: function(e, res) {
    this.setState({loadingDest: true});

    var i;
    var destination = [];

    for (i = 0; i < res.length; i++) {
      if (res[i].SOURCE_STATION === e) {
        destination.push(res[i].DEST_STATION);
      }
    }

    this.setState({destinationPlace: destination, loadingDest: false});
  },

  bringDetails: function(auth) {

    this.setState({loading: true});

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://18.206.137.13/api/station_list",
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Authorization": auth.toString()
      }
    }

    axios(settings).then((res) => {

      let i;
      var uniqueNames = [];

      for (i = 0; i < res.data.length; i++) {
        if (uniqueNames.indexOf(res.data[i].SOURCE_STATION) === -1) {
          uniqueNames.push(res.data[i].SOURCE_STATION);
        }
      }

      this.setState({res: res.data, sourcePlace: uniqueNames, loading: false});

    }).catch((err) => {
      console.log(err);
    })

  },

  openCancelOrderModal: function() {
    this.setState({cancelOrderModal: true});
  },

  changeCancelOrderId: function(e) {
    this.setState({cancelOrderId: e});
  },

  submitCancelOrder: function(cancelOrderID, auth) {
    if (cancelOrderID === "" || cancelOrderID === null) {
      this.setState({cancelOrderMsg: "Please Enter the Order ID"})
    } else {
      this.setState({cancelOrderMsg: "Cancelling..."});

      var form = new FormData();
      form.append("order_id", cancelOrderID.toString());

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://18.206.137.13/api/cancel_order",
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Authorization": auth.toString()
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
      }

      axios(settings).then((res) => {
        this.setState({cancelOrderMsg: res.data.message});
        setTimeout(() => {
          this.setState({cancelOrderModal: false})
        }, 5000);
      }).catch((err) => {
        console.log(err);
        this.setState({cancelOrderMsg: "Error Try Again Later !"})
      })

    }
  },

  resetState: function() {
    this.setState({
      // For context API store data...
      user: "Hello From API Store",
      auth: "",
      loadingScreen: true,

      // Price Estimate
      showResults: false,
      showBikeDetails: false,

      // parceldetails
      fromPlace: null,
      toPlace: null,
      parcelDate: null,
      errorPrint: "",
      parcelDateActual: null,
      displayNone: "flex",

      // Bike Details
      tempContact: null,
      bikeCC: null,
      bikeValue: null,
      verified: false,
      OTP: null,

      otpModal: false,
      bookNowState: false,

      //BookingForm - Pickup Details
      orderCharge: null,
      senderName: "",
      contactNumber: null,
      emailID: "",
      pickupDate: "",
      pickupDateActual: null,
      pickupSlot: "",
      addressLine1: "",
      addressLine2: "",
      townCity: "Bangalore",
      addressState: "Karnataka",
      dateError: "",

      //BookingForm - Destination Details
      receiverName: "",
      receivercontactNumber: "",
      receiveremailID: "email@email.com",
      receiverpickupDate: "xxx",
      receiverpickupSlot: "xxx",
      receiveraddressLine1: "",
      receiveraddressLine2: "",
      receivertownCity: "",
      receiveraddressState: "",

      // Summary
      checkBox: false,

      //Done Payment
      redirect: true,

      // Customer Reviews
      ratingValue: 0,
      ratingName: null,
      ratingData: null,
      reviewModal: false,
      errorReview: "",

      // order

      // station Request
      StationRequestModal: false,
      sourceStation: "",
      destinationStation: "",
      stationName: "",
      stationPhone: "",
      errorStation: "",
      stationEmail: "",
      stationBikeno: "",

      // loading
      loadingMsg: "",
      otpmsgid: "",

      res: [],
      sourcePlace: [],
      destinationPlace: [],
      loading: true,
      loadingDest: true,

      //cancel orders
      cancelOrderModal: false,
      cancelOrderId: "",
      cancelOrderMsg: "",

      sentDataToServer: false,

      // Booking Form

      current: 0,
      error: ""
    });

  },

  next: function(curr, value1, value2, value3, value4, value5, value6, value10, value7, value8, value9) {

    var sender = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z ]*)*$/;
    var mob = /^[6-9]\d{9}$/;
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (value1 === "")
      this.setState({error: "Please Enter The Name !"});
    else if (value2 === "")
      this.setState({error: "Please Enter The Contact Number !"});
    else if (value3 === "")
      this.setState({error: "Please Enter The Email ID !"});
    else if (value4 === "")
      this.setState({error: "Please Choose The Pickup Date !"});
    else if (value5 === "")
      this.setState({error: "Please Choose The Pickup Slot !"});
    else if (value6 === "")
      this.setState({error: "Please Enter The Complete Address 1 !"});
    else if (value6.length >= 100)
      this.setState({error: "Maximum 100 Characters Allowed In Address Line 1"});
    else if (value10 === "")
      this.setState({error: "Please Enter The Complete Address 2 !"});
    else if (value10.length >= 45)
      this.setState({error: "Maximum 45 Characters Allowed In Address Line 2"});
    else if (value7 === "")
      this.setState({error: "Please Enter The Town / City !"});
    else if (value8 === "")
      this.setState({error: "Please Enter The State !"});
    else if (value9 === false)
      this.setState({error: "Please Accept The Terms & Conditions !"});

else if (mob.test(value2) === false)
      this.setState({error: "The Contact Number Is Invalid !"});

else if (re.test(value3) === false)
      this.setState({error: "The Email Is Not Valid !"});

else if (sender.test(value1) === false)
      this.setState({error: "The Name is Invalid !"});
    else {
      const current = curr + 1;
      this.setState({current: current, error: ""});
    }
  },

  prev: function(curr) {
    const current = curr - 1;
    this.setState({current: current, error: ""});
  }
}
