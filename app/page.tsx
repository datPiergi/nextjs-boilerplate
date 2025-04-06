import GuestForm from "@/components/GuestForm";
import Hero from "@/components/Hero";
import CustomNavbar from "@/components/CustomNavbar";
import ContactInfo from "@/components/ContactInfo";
import GiftBox from "@/components/GiftBox";
import SectionTitle from "@/components/SectionTitle";
import EventInfoCard from "@/components/EventInfoCard";
import WeddingTimeline from "@/components/WeddingTimeline";
import SectionDivider from "@/components/SectionDivider";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <div className="relative">
        <Hero />
        <EventInfoCard /> {/* Place it immediately after Hero */}
      </div>
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 lg:px-12 py-16 pt-40 sm:pt-46 text-[#8b8585]">

        <SectionTitle id="program" className="col-span-full text-5xl">WEDDING DAY</SectionTitle>
        <SectionTitle className="col-span-full text-3xl">14 giugno 2025</SectionTitle>
        <WeddingTimeline className="col-span-full" />
        <GuestForm
          id="rsvp"
          className="col-span-full"
        />
        <SectionDivider className="col-span-full" />
        <GiftBox
          iban="IT55E0200801767000105704751"
          name="Erika Mazzeo e Piergiorgio Pietra"
          id="donation"
          className="col-span-full"
        />
        <ContactInfo id="contacts" className="col-span-full" />
        <PhotoCarousel
          id="story"
          className="col-span-full"
          images={[
            "/photo1.JPG",
            "/photo2.JPG",
            "/photo3.JPG",
            "/photo4.JPG",
            "/photo5.JPG",
            "/photo6.JPG",
            "/photo7.JPG",
            "/photo8.JPG",
            "/photo9.JPG",
            "/photo10.JPG",
            "/photo11.JPG",
            "/photo12.JPG",
            "/photo13.JPG",
            "/photo14.JPG",
            "/photo15.JPG",
            "/photo16.JPG",
            "/photo17.JPG",
            "/photo18.JPG",
          ]}
        />
      </div>
    </>
  );
}
