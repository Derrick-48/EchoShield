// Update status endpoint (e.g., in `api/schedules/update-status.js`)

import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.EXPO_DATABASE_URL}`);

    await sql`
      UPDATE Schedules
      SET schedule_status = 'Completed'
      WHERE schedule_date < CURRENT_DATE
        AND schedule_status = 'Upcoming';
    `;

    return new Response(
      JSON.stringify({ message: "Statuses updated successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating schedule statuses:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
