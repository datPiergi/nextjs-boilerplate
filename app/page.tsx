import GuestForm from "@/components/GuestForm";
import Hero from "@/components/Hero";
import CustomNavbar from "@/components/CustomNavbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-14">
        <CustomNavbar />
      </div>
      <Hero />
      <div>
        <img src="partecipazione.png" alt="Partecipazione del matrimonio"></img>
      </div>
      <GuestForm />
    </div>
  );
}
