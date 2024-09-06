import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.EXPO_DATABASE_URL}`);
    // Extract data from the request body
    const { doctor_id, availabilityScheduleDate, availabilityScheduleTime } =
      await request.json();

    // Validate required fields
    if (!doctor_id || !availabilityScheduleDate || !availabilityScheduleTime) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert data into the Schedules table
    const response = await sql`
      INSERT INTO Schedules (
        doctor_id, 
        availabilityScheduleDate, 
        availabilityScheduleTime,
      ) 
      VALUES (
        ${doctor_id}, 
        ${availabilityScheduleDate},
        ${availabilityScheduleTime},
      )
      RETURNING *;`; // Return the inserted row

    // Return a successful response with the inserted data
    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating schedule:", error);
    // Return an error response if something goes wrong
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
