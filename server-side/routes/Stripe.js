const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require('stripe')("sk_test_51M6znXSIEiAY5rzuDEGs4WjECZ28ISbQ2Q7nygBDieLnUTpyYEorFKr0EkytuuDQZzSzQKSZR3zjR7FToLivqxk400cEu7QQdC");
// const Stripe = require('stripe');
// const stripe = Stripe("sk_test_51M6znXSIEiAY5rzuDEGs4WjECZ28ISbQ2Q7nygBDieLnUTpyYEorFKr0EkytuuDQZzSzQKSZR3zjR7FToLivqxk400cEu7QQdC")

router.post("/payment", (req, resp) => {
  const {tokenId} = req.body
  stripe.paymentIntents.create(
    {
      source: tokenId.id,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        resp.status(500).json(stripeErr);
      } else {
        resp.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
