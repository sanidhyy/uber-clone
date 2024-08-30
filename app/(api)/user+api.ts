import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  const sql = neon(process.env.DATABASE_URL!);
  const { name, email, clerkId } = await req.json();

  if (!name || !email || !clerkId) {
    return Response.json(
      {
        error: "Missing required fields!",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const response = await sql`
        INSERT INTO users (
            name,
            email,
            clerk_id
        )
        VALUES (
            ${name},
            ${email},
            ${clerkId}
        )
    `;

    return new Response(JSON.stringify({ data: response }));
  } catch (error) {
    console.log(error);

    return Response.json({ error });
  }
}
