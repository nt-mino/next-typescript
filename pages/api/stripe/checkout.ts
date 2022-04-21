import type { NextApiRequest as Req, NextApiResponse as Res } from "next";

/**
 * @description Stripeを使った決済
 * @reference https://zenn.dev/sti320a/articles/bd94b70757f6bb
 */

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function sessionApi(req: Req, res: Res) {
  try {
    if (req.method !== "POST") throw new Error("Unauthorized request");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: process.env.STRIPE_PRODUCT_API_KEY,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });

    res.redirect(303, session.url);
    // res.status(200).send(JSON.stringify({ status: "success" }));
  } catch (error) {
    res.status(500).send(JSON.stringify({ status: "failed", error }));
  }
}
