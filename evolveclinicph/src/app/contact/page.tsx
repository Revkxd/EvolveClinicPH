import ContactComponent from "../components/homepage/ContactComponent";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ContactComponent isHomePage={true} />
    </div>
  );
}