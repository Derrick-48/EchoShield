import { useFetch } from "@/lib/fetch"; // Adjust the path according to your project structure

// Function to remove duplicate items based on a key
const removeDuplicates = (items, key) => {
  const seen = new Set();
  return items.filter((item) => {
    const keyValue = item[key];
    const isDuplicate = seen.has(keyValue);
    seen.add(keyValue);
    return !isDuplicate;
  });
};

// Function to deduplicate data for each doctor
const deduplicateData = (doctors) => {
  return doctors.map((doctor) => ({
    ...doctor,
    reviews: doctor.reviews ? removeDuplicates(doctor.reviews, "reviewer") : [],
    schedules: doctor.schedules
      ? removeDuplicates(doctor.schedules, "schedule_date")
      : [],
    availabilityschedules: doctor.availabilityschedules
      ? removeDuplicates(
          doctor.availabilityschedules,
          "availabilityscheduledate"
        )
      : [],
  }));
};

// Custom hook to fetch and clean doctors data
export const useAllDoctorsData = () => {
  const {
    data: doctorsData,
    loading,
    error,
  } = useFetch(`/(api)/(allDoctors)/doctors`);

  // Deduplicate data if available
  const cleanedDoctorsData = doctorsData ? deduplicateData(doctorsData) : [];

  return { cleanedDoctorsData, loading, error };
};
