import { Hero } from "@/components/modules/Hero";
import { PatientReviews } from "@/components/modules/PatientReview";
import { TopDoctors } from "@/components/modules/TopDoctors";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopDoctors />
      <PatientReviews />
    </main>
  );
}
