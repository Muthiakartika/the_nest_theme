import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of the The Nest Daycare website, and the basis on which information published here is provided.",
};

const sections = [
  {
    heading: "Using This Website",
    note: "To be supplied: who the site is for, acceptable use, and any restriction on copying or reproducing content.",
  },
  {
    heading: "Accuracy of Information",
    note: "To be supplied: a statement that programs, ratios, hours and fees may change, that published figures are indicative until confirmed in writing, and where families should go for the current position.",
  },
  {
    heading: "Enquiries, Tours & Enrollment",
    note: "To be supplied: that submitting a form is an enquiry rather than a confirmed place, how a place is actually secured, and any deposit or waitlist terms.",
  },
  {
    heading: "Intellectual Property",
    note: "To be supplied: ownership of the name, logo, photography and written content on this site, and the terms on which it may be used.",
  },
  {
    heading: "Links to Other Sites",
    note: "To be supplied: the centre’s position on third-party links, including the booking calendar, maps and social media.",
  },
  {
    heading: "Governing Law & Contact",
    note: "To be supplied: the governing jurisdiction, and how to raise a question about these terms.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="The basis on which this website is provided, and what the information published here does and does not commit us to."
      sections={sections}
    />
  );
}
