import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["FR"],
        },
        allow_promotion_codes: true,

        shipping_options: [
          { shipping_rate: "shr_1LlBsQCVQrxK13iywmlaBEts" },
          { shipping_rate: "shr_1LiavyCVQrxK13iyf2eWiRCz" },
          { shipping_rate: "shr_1Lib7GCVQrxK13iyMAyEFcFQ" },
        ],
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "eur",
              product_data: {
                name: item.title,
                images: [item.image.data[0].attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        //Go to success or failed page
        success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
