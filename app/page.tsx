import GuestForm from "@/components/GuestForm";
import Hero from "@/components/Hero";
import CustomNavbar from "@/components/CustomNavbar";
import Location from "@/components/Location";
import GiftBox from "@/components/GiftBox";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-14">
        <CustomNavbar />
      </div>
      <Hero />
      <Location
        title="Chiesa di San Matteo Erika"
        address="📍 Via Dei Perroni, 29 - Lecce"
        mapLink="https://www.google.com/maps/place/Chiesa+di+San+Matteo/@40.3505379,18.1691488,16z/"
        imageSrc="/maps-church.jpg"
        id="church"
      />
      <Location
        imageLeft
        title="Tenuta Lucagiovanni"
        address="📍 S.P. 361, km 4200 - Scorrano (LE)"
        mapLink="https://www.google.it/maps/place/Tenuta+Lucagiovanni+Eventi/@40.0936915,18.2537423,17z/data=!4m15!1m8!3m7!1s0x1344177662b73915:0xe10e5b13ec4f0a2e!2sTenuta+Lucagiovanni+Eventi!8m2!3d40.0936713!4d18.2536879!10e5!16s%2Fg%2F1pxwpqqgz!3m5!1s0x1344177662b73915:0xe10e5b13ec4f0a2e!8m2!3d40.0936713!4d18.2536879!16s%2Fg%2F1pxwpqqgz?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
        imageSrc="/maps-reception.jpg"
        id="location"
      />
      <GuestForm
        id="rsvp"
      />
      <GiftBox
        iban="IT60X0542811101000000123456"
        name="Erika & Piergiorgio"
        id="donation"
      />
    </div>
  );
}
