const router = require("express").Router();

const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = "sslco654e18d87915b";
const store_passwd = "sslco654e18d87915b@ssl";
const is_live = false;

//sslcommerz init
router.post("/order", (req, res) => {
  const body = req.body;
  console.log(body);

  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123", // use unique tran_id for each api call
    success_url: "http://localhost:3000/payment/success",
    fail_url: "http://localhost:3000/payment/fail",
    cancel_url: "http://localhost:3000/payment/cancel",
    ipn_url: "http://localhost:3000/payment/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    // res.redirect(GatewayPageURL);
    res.json(GatewayPageURL);
  });
});

router.post("/success", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:5173/");
});
router.post("/fail", (req, res) => {
  res.json({body: req.body});
});
router.post("/cancel", (req, res) => {
  res.json({body: req.body});
});
router.post("/ipn", (req, res) => {
  res.json({body: req.body});
});
module.exports = router;
