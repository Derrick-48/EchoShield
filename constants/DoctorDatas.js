import { imageDataURL } from "./ImageData";

export const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    rating: 4.8,
    imageUrl: imageDataURL[0],
    experience: "12 years",
    contact: "+1-800-123-4567",
    bio: "Dr. Sarah Johnson is a highly skilled cardiologist with over a decade of experience in treating heart diseases. Passionate about cardiac health and patient care.",
    reviews: [
      {
        reviewer: "John Doe",
        rating: 5,
        comment: "Exceptional care and expertise.",
        days: "2 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Jane Smith",
        rating: 4.5,
        comment: "Very knowledgeable and compassionate.",
        days: "6 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "123 Heart Lane, Cardio City, TX",
      Country_State: "USA, Texas",
      Clinic_Hospital: "Heart Health Center",
    },
    consultantPrice: "$200",
    schedules: [
      {
        scheduleDate: "2024-09-08", // Future date (Upcoming)
        scheduleTime: "11:00 - 12:00 AM",
        status: "Upcoming", // Added status
      },
      {
        scheduleDate: "2023-05-10", // Past date (Completed)
        scheduleTime: "02:00 - 03:00 PM",
        status: "Completed", // Added status
      },
      {
        scheduleDate: "2024-10-08", // Future date (Upcoming)
        scheduleTime: "11:00 - 12:00 AM",
        status: "Upcoming", // Added status
      },
      {
        scheduleDate: "2024-07-15", // Canceled schedule example
        scheduleTime: "01:00 - 02:00 PM",
        status: "Canceled", // Added status
      },
    ],
  },
  {
    name: "Dr. Michael Smith",
    specialization: "Dermatologist",
    rating: 4.6,
    imageUrl: "https://example.com/images/dr-michael-smith.jpg",
    experience: "8 years",
    contact: "+1-800-234-5678",
    bio: "Dr. Michael Smith specializes in treating skin conditions and cosmetic procedures. Known for his precision and patient-focused approach.",
    reviews: [
      {
        reviewer: "Emily Davis",
        rating: 4.7,
        comment: "Great dermatologist, helped with my skin issues.",
        days: "15 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Michael Brown",
        rating: 4.5,
        comment: "Professional and effective treatments.",
        days: "36 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "456 Skin St, Derma Town, CA",
      Country_State: "USA, California",
      Clinic_Hospital: "Clear Skin Dermatology Clinic",
    },
    consultantPrice: "$180",
    schedules: [
      {
        scheduleDate: "2023-06-13", // Past date (Completed)
        scheduleTime: "09:00 - 10:00 AM",
        status: "Completed", // Added status
      },
      {
        scheduleDate: "2024-10-05", // Future date (Upcoming)
        scheduleTime: "01:00 - 02:00 PM",
        status: "Upcoming", // Added status
      },
      {
        scheduleDate: "2024-08-15", // Canceled schedule example
        scheduleTime: "11:00 - 12:00 AM",
        status: "Canceled", // Added status
      },
    ],
  },
  {
    name: "Dr. Emily Brown",
    specialization: "Pediatrician",
    rating: 4.9,
    imageUrl: "https://example.com/images/dr-emily-brown.jpg",
    experience: "10 years",
    contact: "+1-800-345-6789",
    bio: "Dr. Emily Brown is dedicated to providing exceptional care to children. With extensive experience in pediatrics, she ensures a comfortable environment for young patients.",
    reviews: [
      {
        reviewer: "Sarah Lee",
        rating: 5,
        comment: "Wonderful with kids and very knowledgeable.",
        days: "60 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "David Smith",
        rating: 4.8,
        comment: "Caring and attentive pediatrician.",
        days: "36 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "789 Childcare Blvd, Pediatric City, NY",
      Country_State: "USA, New York",
      Clinic_Hospital: "Kids Care Pediatric Clinic",
    },
    consultantPrice: "$160",
    schedules: [],
  },
  {
    name: "Dr. James Lee",
    specialization: "Orthopedic Surgeon",
    rating: 4.7,
    imageUrl: "https://example.com/images/dr-james-lee.jpg",
    experience: "15 years",
    contact: "+1-800-456-7890",
    bio: "Dr. James Lee is a renowned orthopedic surgeon with expertise in treating musculoskeletal injuries and conditions. Known for his advanced surgical techniques.",
    reviews: [
      {
        reviewer: "Linda Adams",
        rating: 4.9,
        comment: "Excellent surgery and recovery experience.",
        days: "36 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Tom Harris",
        rating: 4.6,
        comment: "Highly skilled and professional.",
        days: "36 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "101 Bone Ave, Ortho City, IL",
      Country_State: "USA, Illinois",
      Clinic_Hospital: "Advanced Orthopedics Center",
    },
    consultantPrice: "$250",
    schedules: [],
  },
  {
    name: "Dr. Olivia Davis",
    specialization: "Neurologist",
    rating: 4.5,
    imageUrl: "https://example.com/images/dr-olivia-davis.jpg",
    experience: "9 years",
    contact: "+1-800-567-8901",
    bio: "Dr. Olivia Davis specializes in diagnosing and treating neurological disorders. She combines expertise with a compassionate approach to patient care.",
    reviews: [
      {
        reviewer: "Kevin White",
        rating: 4.4,
        comment: "Knowledgeable and caring neurologist.",
        days: "30 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Laura Johnson",
        rating: 4.6,
        comment: "Helped me understand my condition better.",
        days: "24 days ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "202 Neuro Rd, Brain Town, FL",
      Country_State: "USA, Florida",
      Clinic_Hospital: "Neurology Specialists of Florida",
    },
    consultantPrice: "$220",
    schedules: [],
  },
  {
    name: "Dr. William Wilson",
    specialization: "General Practitioner",
    rating: 4.3,
    imageUrl: "https://example.com/images/dr-william-wilson.jpg",
    experience: "7 years",
    contact: "+1-800-678-9012",
    bio: "Dr. William Wilson provides comprehensive healthcare services for patients of all ages. He is committed to general wellness and preventive care.",
    reviews: [
      {
        reviewer: "Nancy Green",
        rating: 4.2,
        comment: "Good general practice, thorough consultations.",
        days: "4 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Robert Hall",
        rating: 4.4,
        comment: "Reliable and attentive doctor.",
        days: "3 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "303 Health St, Wellness City, WA",
      Country_State: "USA, Washington",
      Clinic_Hospital: "Wellness Family Clinic",
    },
    consultantPrice: "$150",
    schedules: [
      {
        scheduleDate: "2023-06-14", // Past date (Completed)
        scheduleTime: "02:00 - 03:00 PM",
        status: "Completed", // Added status
      },
      {
        scheduleDate: "2024-12-01", // Future date (Upcoming)
        scheduleTime: "10:00 - 11:00 AM",
        status: "Upcoming", // Added status
      },
      {
        scheduleDate: "2024-09-25", // Canceled schedule example
        scheduleTime: "03:00 - 04:00 PM",
        status: "Canceled", // Added status
      },
    ],
    availabilitySchedules: [
      {
        availabilityScheduleDate: "2024-09-10",
        availabilityScheduleTime: "10:00 - 11:00 AM",
      },
      {
        availabilityScheduleDate: "2024-09-12",
        availabilityScheduleTime: "01:00 - 02:00 PM",
      },
      {
        availabilityScheduleDate: "2024-09-15",
        availabilityScheduleTime: "03:00 - 04:00 PM",
      },
    ],
    availabilitySchedules: [
      {
        availabilityScheduleDate: "2024-09-11",
        availabilityScheduleTime: "09:00 - 10:00 AM",
      },
      {
        availabilityScheduleDate: "2024-09-14",
        availabilityScheduleTime: "12:00 - 01:00 PM",
      },
      {
        availabilityScheduleDate: "2024-09-18",
        availabilityScheduleTime: "03:00 - 04:00 PM",
      },
    ],
  },
  {
    name: "Dr. Sophia Martinez",
    specialization: "Endocrinologist",
    rating: 4.4,
    imageUrl: "https://example.com/images/dr-sophia-martinez.jpg",
    experience: "11 years",
    contact: "+1-800-789-0123",
    bio: "Dr. Sophia Martinez specializes in treating hormonal and metabolic disorders. She offers personalized treatment plans for endocrine health.",
    reviews: [
      {
        reviewer: "Chris King",
        rating: 4.5,
        comment: "Expert in endocrine disorders, very helpful.",
        days: "7 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Emma Scott",
        rating: 4.3,
        comment: "Understanding and professional.",
        days: "5 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "404 Endo Blvd, Hormone City, TX",
      Country_State: "USA, Texas",
      Clinic_Hospital: "Endocrine Health Institute",
    },
    consultantPrice: "$190",
    schedules: [],
  },
  {
    name: "Dr. Benjamin Clark",
    specialization: "Ophthalmologist",
    rating: 4.6,
    imageUrl: "https://example.com/images/dr-benjamin-clark.jpg",
    experience: "14 years",
    contact: "+1-800-890-1234",
    bio: "Dr. Benjamin Clark is an experienced ophthalmologist specializing in eye care and vision correction. He uses the latest technology to ensure the best outcomes.",
    reviews: [
      {
        reviewer: "Ava Lee",
        rating: 4.7,
        comment: "Top-notch eye care, very skilled.",
        days: "6 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "James Lewis",
        rating: 4.5,
        comment: "Effective treatment and professional care.",
        days: "1 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "505 Eye St, Vision City, CA",
      Country_State: "USA, California",
      Clinic_Hospital: "Vision Care Center",
    },
    consultantPrice: "$210",
    schedules: [],
    availabilitySchedules: [
      {
        availabilityScheduleDate: "2024-09-11",
        availabilityScheduleTime: "09:00 - 10:00 AM",
      },
      {
        availabilityScheduleDate: "2024-09-14",
        availabilityScheduleTime: "12:00 - 01:00 PM",
      },
      {
        availabilityScheduleDate: "2024-09-18",
        availabilityScheduleTime: "03:00 - 04:00 PM",
      },
    ],
  },
  {
    name: "Dr. Mia Thomas",
    specialization: "Psychiatrist",
    rating: 4.9,
    imageUrl: "https://example.com/images/dr-mia-thomas.jpg",
    experience: "13 years",
    contact: "+1-800-901-2345",
    bio: "Dr. Mia Thomas offers expert psychiatric care, focusing on mental health and emotional well-being. Known for her empathetic approach and effective treatments.",
    reviews: [
      {
        reviewer: "Oliver Walker",
        rating: 5,
        comment: "Incredible psychiatrist, truly cares.",
        days: "1 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Sophia Martinez",
        rating: 4.8,
        comment: "Supportive and understanding.",
        days: "1 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "606 Mind Ave, Wellness Town, NY",
      Country_State: "USA, New York",
      Clinic_Hospital: "Mind and Wellness Psychiatric Services",
    },
    consultantPrice: "$230",
    schedules: [],
    availabilitySchedules: [
      {
        availabilityScheduleDate: "2024-09-09",
        availabilityScheduleTime: "09:00 - 10:00 AM",
      },
      {
        availabilityScheduleDate: "2024-09-13",
        availabilityScheduleTime: "01:00 - 02:00 PM",
      },
      {
        availabilityScheduleDate: "2024-09-17",
        availabilityScheduleTime: "02:00 - 03:00 PM",
      },
    ],
  },
  {
    name: "Dr. Daniel Rodriguez",
    specialization: "Gastroenterologist",
    rating: 4.5,
    imageUrl: "https://example.com/images/dr-daniel-rodriguez.jpg",
    experience: "9 years",
    contact: "+1-800-234-5678",
    bio: "Dr. Daniel Rodriguez specializes in digestive health and gastrointestinal disorders. He provides comprehensive care and advanced treatment options.",
    reviews: [
      {
        reviewer: "Lucas White",
        rating: 4.6,
        comment: "Excellent care for digestive issues.",
        days: "1 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        reviewer: "Emma Davis",
        rating: 4.4,
        comment: "Knowledgeable and professional.",
        days: "1 day ago",
        reviewer_image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ],
    location: {
      place: "707 Gastro St, Digestive City, TX",
      Country_State: "USA, Texas",
      Clinic_Hospital: "Digestive Health Associates",
    },
    consultantPrice: "$200",
    schedules: [],
    availabilitySchedules: [
      {
        availabilityScheduleDate: "2024-09-08",
        availabilityScheduleTime: "10:00 - 11:00 AM",
      },
      {
        availabilityScheduleDate: "2024-09-15",
        availabilityScheduleTime: "02:00 - 03:00 PM",
      },
      {
        availabilityScheduleDate: "2024-09-20",
        availabilityScheduleTime: "04:00 - 05:00 PM",
      },
    ],
  },
];
