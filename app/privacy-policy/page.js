import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How The Nest Daycare collects, uses, stores and protects the personal information of families and children.",
};

const sections = [
  {
    heading: "Information We Collect",
    note: "To be supplied: what the centre collects at enquiry, tour booking and enrollment — child name and date of birth, parent contact details, medical, dietary and allergy information, authorised collection contacts, and any website analytics.",
  },
  {
    heading: "How We Use Information",
    note: "To be supplied: arranging tours and enrollment, delivering care, meeting duty-of-care and safeguarding obligations, emergency contact, and family communication. State clearly whether information is ever used for marketing, and how consent is obtained.",
  },
  {
    heading: "Photography & Children’s Images",
    note: "To be supplied: whether children are photographed, how consent is given and withdrawn, where images may appear (website, social media, learning journals), and how images are stored and deleted.",
  },
  {
    heading: "Data Security & Retention",
    note: "To be supplied: how records are stored and secured, who may access them, how long they are kept after a child leaves, and how CCTV footage is retained and disposed of.",
  },
  {
    heading: "Sharing With Third Parties",
    note: "To be supplied: any processors used (booking, messaging, cloud storage, analytics), and the circumstances in which information is disclosed to health or child-protection authorities.",
  },
  {
    heading: "Your Rights & Contact",
    note: "To be supplied: how a family can access, correct or request deletion of their information, how to raise a concern, and the response timeframe.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How we collect, use, store and protect the personal information you share with us — and the information we hold about your child."
      sections={sections}
    />
  );
}
