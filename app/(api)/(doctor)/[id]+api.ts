import { neon } from "@neondatabase/serverless";

export async function GET(request: Request, { id }: { id: string }) {
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    const sql = neon(`${process.env.EXPO_DATABASE_URL}`);
    const response = await sql`
      SELECT
        doctors.id,
        doctors.name,
        doctors.specialization,
        doctors.rating,
        doctors.imageUrl,
        doctors.experience,
        doctors.contact,
        doctors.bio,
        doctors.consultantPrice,
        COALESCE(
          json_agg(
            json_build_object(
              'reviewer', reviews.reviewer,
              'rating', reviews.rating,
              'comment', reviews.comment,
              'days', reviews.days,
              'reviewer_image', reviews.reviewer_image
            )
          ) FILTER (WHERE reviews.reviewer IS NOT NULL),
          '[]'
        ) AS reviews,
        COALESCE(
          json_build_object(
            'place', location.place,
            'Country_State', location.Country_State,
            'Clinic_Hospital', location.Clinic_Hospital
          ),
          '{}'
        ) AS location,
        COALESCE(
          json_agg(
            json_build_object(
              'schedule_date', schedules.schedule_date,
              'schedule_time', schedules.schedule_time
            )
          ) FILTER (WHERE schedules.schedule_date IS NOT NULL),
          '[]'
        ) AS schedules
      FROM 
        doctors
      LEFT JOIN 
        reviews ON doctors.id = reviews.doctor_id
      LEFT JOIN 
        location ON doctors.id = location.doctor_id
      LEFT JOIN 
        schedules ON doctors.id = schedules.doctor_id
      WHERE 
        doctors.id = ${id}
      GROUP BY 
        doctors.id, location.place, location.Country_State, location.Clinic_Hospital;
    `;

    return new Response(JSON.stringify({ data: response }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching doctor by ID:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
