export default {
  // For context API store data...
  user: "Hello From API Store",
  auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlZTYxODQyYmUwNmM5MWRhMjY0ZjZmMDY3NzE1YTY0ZTk5NDRlMmIyY2M2OWJjNjQ3MGY2NDA4ZTFkMjI3OGIzNDNmODNlMzRjOTVjNjQwIn0.eyJhdWQiOiIxIiwianRpIjoiY2VlNjE4NDJiZTA2YzkxZGEyNjRmNmYwNjc3MTVhNjRlOTk0NGUyYjJjYzY5YmM2NDcwZjY0MDhlMWQyMjc4YjM0M2Y4M2UzNGM5NWM2NDAiLCJpYXQiOjE1MzE2Nzk1NDUsIm5iZiI6MTUzMTY3OTU0NSwiZXhwIjoxNTYzMjE1NTQ1LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.pK9IzZedIv7x8m2eb8drmcf0oH5QBQgpsAFU1GTM-wQlWOnwdY_lRxuqiaUBHSxHBZLSz6VCi77JQWB8_ewnU-vIBXdwFEfIW72z3P0wctXjiRcNZZShJA_yYvCyUvZbqMayunGj84cViFLZ12cjjecffofQsl_92RRdmDiaics_yH3GHr_lF9LjGhOArui7mT2ukU6qpmAlYtVk2H6VYDzAJ26mhAFlpuhCdCNxTxBhZjQrIAoajFgkfQTHXexHP81FvN2HluzJI52p9Q-jyipqguq5yO9xg6LDq4zrJVlPwmebTkz8q9YZYF9e6UW-BYiU547yrKLJWsY2yP5L7xB54u3ibJDnXSXtYCYN0ikWT5bJYCcf5ESInj_Qe0SY-GVbmPEGVteqXUAC-NrwISKkeRsT6oFMrqXXHhA0V86cbmqmJINuuczcTnjfhylgU9x8_M3fX3glpQnXu3ytlVKttjoHbjpFZ4vY5CZXMhafLHv6u682GVjxUvjkk-B_VyDizFeIhhOKlyG5GU0bVatpzxkdyUPhIn_yvAo8qzGK5ZHxFy_Sg9AfUfJTzqDT0BNz5AocdwMcxC3X-gUL2vAs4bsp6JaaJFTS15-GGWVE9m9ai6FYtyHyZck3N2Rt2NaR3ALDyXfVreamAMCJ3L-GT3Op_jecc1lLXNSTsYU",

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
  townCity: "bangalore",
  addressState: "karnataka",
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
  cancelOrderMsg: ""
}
