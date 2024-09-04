import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, amount } = body;

  if (!name || !email || !amount)
    return new Response(
      JSON.stringify({ error: "Please enter a valid email address" }),
      { status: 404 },
    );

  try {
    let customer;

    const existingCustomer = await stripe.customers.list({ email });

    if (existingCustomer.data.length > 0) customer = existingCustomer.data[0];
    else {
      customer = await stripe.customers.create({
        name,
        email,
      });
    }

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2024-06-20" },
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(amount) * 100,
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });

    return new Response(
      JSON.stringify({
        paymentIntent: paymentIntent,
        ephemeralKey: ephemeralKey,
        customer: customer.id,
      }),
    );
  } catch (err) {
    console.log("[PAYMENT_CREATE]: ", err);

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
      }),
      { status: 500 },
    );
  }
}
