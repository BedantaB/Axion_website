import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/Hero";
import { EditorialMarquee } from "@/components/EditorialMarquee";
import { Portfolio } from "@/components/Portfolio";
import { Fincorp } from "@/components/Fincorp";
import { EnquiryForm } from "@/components/EnquiryForm";

function App() {
  return (
    <PageLayout title="Axion Space LLP Group — The V" home>
      <Hero />
      <EditorialMarquee />
      <Portfolio />
      <Fincorp />
      <EnquiryForm />
    </PageLayout>
  );
}

export default App;
