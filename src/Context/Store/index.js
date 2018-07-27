export default {
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
  addressLine: "",
  townCity: "Bangalore",
  addressState: "Karnataka",
  dateError: "",

  //BookingForm - Destination Details
  receiverName: "",
  receivercontactNumber: "",
  receiveremailID: "email@email.com",
  receiverpickupDate: "xxx",
  receiverpickupSlot: "xxx",
  receiveraddressLine: "",
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
  orderid: "",

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
}
