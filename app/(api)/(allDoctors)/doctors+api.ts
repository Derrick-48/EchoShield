import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  try {
    const sql = neon(`${process.env.EXPO_DATABASE_URL}`);
    const response = await sql`
      SELECT
        doctors.id,
        doctors.name,
        doctors.specialization,
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
          ) FILTER (WHERE reviews.id IS NOT NULL),
          '{}'
        ) AS reviews,
        COALESCE(
          json_agg(
            json_build_object(
              'schedule_date', schedules.schedule_date,
              'schedule_time', schedules.schedule_time,
              'schedule_status', schedules.schedule_status
            )
          ) FILTER (WHERE schedules.id IS NOT NULL),
          '{}'
        ) AS schedules,
        COALESCE(
          json_agg(
            json_build_object(
              'availabilityScheduleDate', AvailabilitySchedules.availabilityScheduleDate,
              'availabilityScheduleTime', AvailabilitySchedules.availabilityScheduleTime
            )
          ) FILTER (WHERE AvailabilitySchedules.id IS NOT NULL),
          '[]'
        ) AS availabilitySchedules,
        COALESCE(
          json_build_object(
            'place', location.place,
            'Country_State', location.Country_State,
            'Clinic_Hospital', location.Clinic_Hospital
          ),
          '{}'
        ) AS location
      FROM 
        doctors
      LEFT JOIN 
        reviews ON doctors.id = reviews.doctor_id
      LEFT JOIN 
        location ON doctors.id = location.doctor_id
      LEFT JOIN 
        schedules ON doctors.id = schedules.doctor_id
      LEFT JOIN 
        AvailabilitySchedules ON doctors.id = AvailabilitySchedules.doctor_id
      GROUP BY 
        doctors.id, 
        location.place, 
        location.Country_State, 
        location.Clinic_Hospital;
    `;

    return new Response(JSON.stringify({ data: response }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching all doctors:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
