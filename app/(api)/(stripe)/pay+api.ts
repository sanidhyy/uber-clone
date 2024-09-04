import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const { payment_method_id, payment_intent_id, customer_id } = body;

  if (!payment_method_id || !payment_intent_id || !customer_id)
    return new Response(
      JSON.stringify({ error: "Missing required payment information." }),
      { status: 404 },
    );

  try {
    const paymentMethod = await stripe.paymentMethods.attach(
      payment_method_id,
      {
        customer: customer_id,
      },
    );

    const result = await stripe.paymentIntents.confirm(payment_intent_id, {
      payment_method: paymentMethod.id,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Payment completed successfully.",
        result,
      }),
    );
  } catch (err) {
    console.log("[PAYMENT_PAY]: ", err);

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
      }),
      { status: 500 },
    );
  }
}
