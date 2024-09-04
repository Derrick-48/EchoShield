import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.EXPO_DATABASE_URL}`);
    const { doctor_id, place, Country_State, Clinic_Hospital } =
      await request.json();

    if (!doctor_id || !place || !Country_State || !Clinic_Hospital) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await sql`
      INSERT INTO Location (
        doctor_id, 
        place, 
        Country_State, 
        Clinic_Hospital
      ) 
      VALUES (
        ${doctor_id}, 
        ${place},
        ${Country_State},
        ${Clinic_Hospital}
      );`;

    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating location:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
