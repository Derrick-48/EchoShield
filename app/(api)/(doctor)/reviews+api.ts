import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.EXPO_DATABASE_URL}`);
    const { doctor_id, reviewer, rating, comment, days, reviewer_image } =
      await request.json();

    if (
      !doctor_id ||
      !reviewer ||
      !rating ||
      !comment ||
      !days ||
      !reviewer_image
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await sql`
      INSERT INTO Reviews (
        doctor_id, 
        reviewer, 
        rating, 
        comment, 
        days, 
        reviewer_image
      ) 
      VALUES (
        ${doctor_id}, 
        ${reviewer},
        ${rating},
        ${comment},
        ${days},
        ${reviewer_image}
      );`;

    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating review:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
