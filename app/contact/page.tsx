import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Puertas blindadas",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pagina de contacto"
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
