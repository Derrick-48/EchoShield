import images from "./images";

export const photos = [
  images.photo1,
  images.photo2,
  images.photo3,
  images.photo4,
  images.photo5,
  images.photo6,
];

// doctorData.js

export const doctors = [
  {
    name: "Dr. Imran Syahir",
    role: "General Doctor",
    imageUrl: "https://via.placeholder.com/50",
    schedules: [
      {
        scheduleDate: "2024-09-08", // Future date (Upcoming)
        scheduleTime: "11:00 - 12:00 AM",
      },
      {
        scheduleDate: "2023-05-10", // Past date (Completed)
        scheduleTime: "02:00 - 03:00 PM",
      },
      {
        scheduleDate: "2024-10-08", // Future date (Upcoming)
        scheduleTime: "11:00 - 12:00 AM",
      },
    ],
  },
  {
    name: "Dr. Alice Johnson",
    role: "Cardiologist",
    imageUrl: "https://via.placeholder.com/50",
    schedules: [
      {
        scheduleDate: "2023-06-13", // Past date (Completed)
        scheduleTime: "09:00 - 10:00 AM",
      },
      {
        scheduleDate: "2024-10-05", // Future date (Upcoming)
        scheduleTime: "01:00 - 02:00 PM",
      },
    ],
  },
  {
    name: "Dr. Bob Brown",
    role: "Neurologist",
    imageUrl: "https://via.placeholder.com/50",
    schedules: [
      {
        scheduleDate: "2023-06-14", // Past date (Completed)
        scheduleTime: "02:00 - 03:00 PM",
      },
      {
        scheduleDate: "2024-12-01", // Future date (Upcoming)
        scheduleTime: "10:00 - 11:00 AM",
      },
    ],
  },
  // Add more doctor objects as needed
];

// data/nearbyData.js

export const nearbyDoctorsData = [
  {
    imageUrl: "https://via.placeholder.com/50?text=Doctor1",
    name: "Dr. Joseph Brostito",
    role: "Dental Specialist",
    location: "1.2 Km",
    distance: "1.2 Km",
    LocationIconName: "location-on",
    LeftDownIconName: "star",
    rating: "4.8",
    reviews: "120",
    availability: "Open at 17:00",
  },
  {
    imageUrl: "https://via.placeholder.com/50?text=Doctor2",
    name: "Dr. Emma Johnson",
    role: "Cardiologist",
    location: "3.5 Km",
    distance: "3.5 Km",
    LocationIconName: "location-on",
    LeftDownIconName: "star",
    rating: "4.9",
    reviews: "150",
    availability: "Open at 09:00",
  },
];

// data/nearbyPoliceData.js

export const nearbyPoliceData = [
  {
    imageUrl: "https://via.placeholder.com/50?text=Police1",
    name: "Prestea Police Station",
    role: "Near Urban Council",
    location: "1.2 Km",
    distance: "1.2 Km",
    LocationIconName: "location-on",
    LeftDownIconName: "police-badge",
    rating: "4.8",
    reviews: "120",
    availability: "Opens 24/7",
  },
  {
    imageUrl: "https://via.placeholder.com/50?text=Police2",
    name: "Central Police Station",
    role: "Downtown Area",
    location: "2.3 Km",
    distance: "2.3 Km",
    LocationIconName: "location-on",
    LeftDownIconName: "police-badge",
    rating: "4.7",
    reviews: "80",
    availability: "Opens 24/7",
  },
];

// data/nearbyHospitalsData.js

export const nearbyHospitalsData = [
  {
    imageUrl: "https://via.placeholder.com/50?text=Hospital1",
    name: "Prestea Medical Hospital",
    role: "Near The Fuel Station",
    location: "1.2 Km",
    distance: "1.2 Km",
    LocationIconName: "location-on",
    LeftDownIconName: "hospital-building",
    rating: "4.8",
    reviews: "120",
    availability: "Opens 24/7",
  },
  {
    imageUrl: "https://via.placeholder.com/50?text=Hospital2",
    name: "Greenfield Hospital",
    role: "Near Main Street",
    location: "2.5 Km",
    distance: "2.5 Km",
    LocationIconName: "location-on",
    LeftDownIconName: "hospital-building",
    rating: "4.9",
    reviews: "100",
    availability: "Opens 24/7",
  },
];
