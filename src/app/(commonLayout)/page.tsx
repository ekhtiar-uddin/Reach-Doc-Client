import { Hero } from "@/components/modules/Hero";
import { PatientReviews } from "@/components/modules/PatientReview";
import { TopDoctors } from "@/components/modules/TopDoctors";
import Head from "next/head";
export default function Home() {
  return (
    <main>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <TopDoctors />
      <PatientReviews />
    </main>
  );
}
