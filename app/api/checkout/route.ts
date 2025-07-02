import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

// Stripe initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27", // Compatible with older Node versions
} as any); // TypeScript fix for old API version

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const cartItems = body.cartItems;

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Map cart items to Stripe format
    const line_items = cartItems.map((item: any) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: item.price * 100, // convert ₹ to paise
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/checkout`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error.message);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
