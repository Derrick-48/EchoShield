import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.EXPO_DATABASE_URL}`);
    const {
      name,
      specialization,
      rating,
      imageUrl,
      experience,
      contact,
      bio,
      consultantPrice,
    } = await request.json();

    if (
      !name ||
      !specialization ||
      !rating ||
      !imageUrl ||
      !experience ||
      !contact ||
      !bio ||
      !consultantPrice
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await sql`
      INSERT INTO Doctors (
        name, 
        specialization, 
        rating, 
        imageUrl, 
        experience, 
        contact, 
        bio, 
        consultantPrice
      ) 
      VALUES (
        ${name}, 
        ${specialization},
        ${rating},
        ${imageUrl},
        ${experience},
        ${contact},
        ${bio},
        ${consultantPrice}
      ) RETURNING id;`;

    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating doctor:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
