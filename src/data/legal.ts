// Legal page content supplied by the client.
export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  listIntro?: string;
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
}

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "19 September 2026",
  intro: [
    "Mavuno Maize Flour respects your privacy and is committed to protecting your personal information.",
    "This Privacy Policy explains how we collect, use, store and protect personal information when you visit our website, contact us, make an enquiry, request our products or otherwise interact with us online.",
    "This policy is intended to comply with applicable Kenyan data-protection requirements, including the Data Protection Act, 2019 and applicable regulations.",
  ],
  sections: [
    {
      heading: "1. Who We Are",
      paragraphs: [
        'For purposes of this Privacy Policy, "Mavuno", "we", "us" and "our" refers to Mavuno Maize Flour and its relevant business entity.',
        "Mavuno Maize Flour, Makama Road, Njiru, off Kagundo Road, Nairobi. Phone: 0726 995 059. WhatsApp: 0719 833 064. Email: info@mavunomaizeflour.co.ke. Website: www.mavunomaizeflour.co.ke",
      ],
    },
    {
      heading: "2. Personal Information We May Collect",
      listIntro:
        "Depending on how you interact with our website and business, we may collect information such as:",
      list: [
        "Your name.",
        "Telephone or mobile number.",
        "Email address.",
        "Delivery or physical location.",
        "Information about products you enquire about or order.",
        "Messages or information you submit through our contact forms.",
        "Information you provide when requesting a quotation or customer support.",
        "Information contained in communications between you and Mavuno.",
      ],
      paragraphs: [
        "We only seek to collect information that is relevant to the purpose for which it is required.",
      ],
    },
    {
      heading: "3. How We Collect Information",
      listIntro: "We may collect personal information when you:",
      list: [
        "Complete a contact or enquiry form.",
        "Contact us by telephone, email or messaging services.",
        "Request information about our products.",
        "Make an order or product enquiry.",
        "Request delivery or other services.",
        "Communicate with our customer-support team.",
        "Interact with our website or digital services.",
      ],
      paragraphs: [
        "We may also receive limited technical information automatically when you visit our website, depending on the technologies and analytics services installed on the website.",
      ],
    },
    {
      heading: "4. How We Use Your Information",
      listIntro: "We may use personal information for purposes including:",
      list: [
        "Responding to your enquiries.",
        "Processing and managing orders.",
        "Providing quotations.",
        "Arranging deliveries.",
        "Providing customer support.",
        "Communicating with you about products or services you have requested.",
        "Improving our products, services and website.",
        "Maintaining website security.",
        "Preventing fraud, misuse or unlawful activity.",
        "Complying with applicable legal and regulatory obligations.",
        "Sending marketing communications where permitted and where the appropriate consent or lawful basis exists.",
      ],
      paragraphs: [
        "We will not use your personal information for purposes that are incompatible with the purpose for which it was collected unless permitted by law or otherwise appropriately authorised.",
      ],
    },
    {
      heading: "5. Legal Basis for Processing",
      listIntro: "Depending on the circumstances, we may process personal information where:",
      list: [
        "You have provided consent.",
        "Processing is necessary to provide a product or service you have requested.",
        "Processing is necessary to respond to an enquiry or take steps at your request.",
        "Processing is necessary to comply with a legal obligation.",
        "Processing is necessary for another lawful purpose recognised under applicable Kenyan data-protection law.",
      ],
      paragraphs: [
        "The Data Protection Act provides several lawful bases for processing personal information, including consent, contractual necessity, legal obligations and certain legitimate interests.",
      ],
    },
    {
      heading: "6. Marketing Communications",
      paragraphs: [
        "Where we send promotional or marketing communications, we will do so in accordance with applicable law.",
        "You may request that we stop sending you marketing communications.",
        "If you no longer wish to receive promotional messages, you can contact us using the details provided in this Privacy Policy or use an available unsubscribe mechanism.",
      ],
    },
    {
      heading: "7. Sharing Your Information",
      paragraphs: [
        "We do not sell your personal information.",
        "We may share relevant information with trusted third parties where reasonably necessary to operate our business or provide requested services.",
      ],
      listIntro: "These may include:",
      list: [
        "Delivery or logistics providers.",
        "Website hosting providers.",
        "Website maintenance or technology providers.",
        "Communication or email service providers.",
        "Payment service providers where applicable.",
        "Professional advisers.",
        "Government authorities or law-enforcement agencies where disclosure is required or permitted by law.",
      ],
    },
    {
      heading: "8. International Data Transfers",
      paragraphs: [
        "Some technology, hosting, analytics, communication or other service providers used by a website may process information outside Kenya.",
        "Where personal information is transferred outside Kenya, we will take steps required by applicable Kenyan data-protection law concerning such transfers and appropriate safeguards.",
      ],
    },
    {
      heading: "9. Data Security",
      paragraphs: [
        "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
        "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
        "Customers should also take reasonable steps to protect their own devices, accounts and communications.",
      ],
    },
    {
      heading: "10. How Long We Keep Personal Information",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including fulfilling business, contractual, legal, accounting, dispute-resolution and regulatory requirements.",
        "When personal information is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it, subject to applicable legal requirements.",
      ],
    },
    {
      heading: "11. Cookies and Similar Technologies",
      paragraphs: ["Our website may use cookies or similar technologies."],
      listIntro: "Cookies may be used to:",
      list: [
        "Help the website function correctly.",
        "Remember certain preferences.",
        "Understand how visitors use the website.",
        "Improve website performance and user experience.",
        "Support analytics or other website functionality.",
      ],
    },
    {
      heading: "12. Your Data Protection Rights",
      listIntro:
        "Subject to applicable law, you may have rights relating to your personal information, including the right to:",
      list: [
        "Be informed about how your personal information is being used.",
        "Request access to personal information we hold about you.",
        "Request correction of inaccurate or misleading personal information.",
        "Request deletion of personal information where legally applicable.",
        "Object to certain processing of your personal information.",
        "Request restriction of processing in circumstances provided by law.",
        "Request data portability where applicable.",
        "Withdraw consent where processing is based on consent.",
      ],
      paragraphs: [
        "The Office of the Data Protection Commissioner identifies these rights under Kenya's data-protection framework.",
      ],
    },
    {
      heading: "13. How to Exercise Your Rights",
      paragraphs: [
        "If you wish to exercise a data-protection right or ask a question about how we process your information, contact us by email at info@mavunomaizeflour.co.ke, by phone on 0726 995 059, or at Makama Road, Njiru, off Kagundo Road, Nairobi.",
        "We may need to verify your identity before processing certain requests in order to protect your information from unauthorised disclosure.",
      ],
    },
    {
      heading: "14. Complaints",
      paragraphs: [
        "If you have a concern about how we have handled your personal information, we encourage you to contact us first so that we can investigate and address the matter.",
        "You may also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya. The ODPC provides a formal mechanism for data subjects to lodge complaints concerning the handling of their personal information.",
      ],
    },
    {
      heading: "15. Children's Privacy",
      paragraphs: [
        "Our website is intended for general use and is not specifically directed at children.",
        "We do not knowingly request or collect children's personal information unnecessarily.",
        "Where applicable, we will handle children's personal information in accordance with the requirements of Kenyan data-protection law.",
      ],
    },
    {
      heading: "16. Third-Party Websites",
      paragraphs: [
        "Our website may contain links to third-party websites, social-media platforms or other services.",
        "This Privacy Policy does not apply to those third-party websites.",
        "We encourage you to review the privacy policies of third-party services before providing them with personal information.",
      ],
    },
    {
      heading: "17. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our business, website, technology, services or applicable laws.",
        'When we make changes, we will update the "Last Updated" date at the top of this page.',
        "We encourage you to review this page periodically.",
      ],
    },
    {
      heading: "18. Contact Us",
      paragraphs: [
        "For questions, requests or concerns regarding this Privacy Policy or the handling of your personal information, contact Mavuno Maize Flour at Makama Road, Njiru, off Kagundo Road, Nairobi. Phone: 0726 995 059. WhatsApp: 0719 833 064. Email: info@mavunomaizeflour.co.ke. Website: www.mavunomaizeflour.co.ke",
      ],
    },
  ],
};

export const termsConditions: LegalDocument = {
  title: "Terms & Conditions",
  lastUpdated: "19 September 2026",
  intro: [
    "Welcome to the Mavuno Maize Flour website. These Terms & Conditions govern your use of our website, products, services and any information provided through this website.",
    "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please do not use the website.",
  ],
  sections: [
    {
      heading: "1. About Mavuno Maize Flour",
      paragraphs: [
        "Mavuno Maize Flour is a maize flour and food-products business operating in Kenya.",
        'Throughout these Terms & Conditions, "Mavuno", "we", "us" or "our" refers to Mavuno Maize Flour and its relevant business entity.',
        '"Customer", "you" or "your" refers to any person accessing our website, contacting us, requesting information, or purchasing our products.',
      ],
    },
    {
      heading: "2. Use of Our Website",
      listIntro: "You may use this website for lawful purposes, including:",
      list: [
        "Learning about our products and services.",
        "Viewing product and company information.",
        "Contacting us.",
        "Making product enquiries.",
        "Requesting quotations or placing orders where such functionality is available.",
        "Accessing information about our company, manufacturing processes, recipes, news and events.",
      ],
      paragraphs: [
        "You must not use the website for unlawful purposes, attempt to gain unauthorised access to our systems, introduce viruses, malware or other harmful material, copy, reproduce or redistribute our website content without permission, misuse our contact forms or communication channels, or submit false, misleading or fraudulent information.",
      ],
    },
    {
      heading: "3. Product Information",
      paragraphs: [
        "We make reasonable efforts to ensure that information displayed on the website is accurate and up to date.",
        "However, product images, packaging, colours, descriptions, availability and other visual information may vary from the actual product.",
        "Product availability may change without prior notice.",
        "Where nutritional, preparation or other product information is provided, customers should refer to the product packaging for the most current information.",
      ],
    },
    {
      heading: "4. Prices and Availability",
      paragraphs: [
        "Where prices are displayed on the website, they are subject to change without notice unless otherwise stated.",
        "A displayed price does not necessarily constitute a binding offer to sell.",
        "Product availability may vary depending on location, stock levels and other operational circumstances.",
        "Where an order is submitted through the website or another communication channel, Mavuno may confirm the availability, price, quantity and delivery arrangements before accepting the order.",
      ],
    },
    {
      heading: "5. Orders and Enquiries",
      paragraphs: [
        "Submitting an enquiry or order request through our website does not automatically guarantee acceptance of the order.",
      ],
      listIntro: "We may contact you to confirm:",
      list: [
        "The products requested.",
        "Quantity.",
        "Price.",
        "Delivery location.",
        "Delivery charges, where applicable.",
        "Payment arrangements.",
        "Expected delivery time.",
      ],
    },
    {
      heading: "6. Payments",
      paragraphs: [
        "Where payment is required, customers will be informed of the applicable payment method and amount.",
        "Customers should only make payments through payment channels officially communicated by Mavuno.",
        "Mavuno will not be responsible for payments made to unauthorised individuals, accounts, telephone numbers or payment channels.",
      ],
    },
    {
      heading: "7. Delivery",
      paragraphs: [
        "Delivery availability, delivery areas, delivery charges and delivery times may vary.",
        "Where delivery is offered, the customer is responsible for providing accurate contact and delivery information.",
        "Delivery times may be affected by circumstances outside our reasonable control, including weather, traffic, logistical difficulties, public events or other unforeseen circumstances.",
        "Where a delivery delay occurs, we will make reasonable efforts to communicate relevant information to the customer.",
      ],
    },
    {
      heading: "8. Cancellations, Returns and Complaints",
      paragraphs: [
        "Customers should contact Mavuno as soon as possible if they have a concern regarding a product or order.",
        "Where applicable, returns, replacements, refunds or other remedies will be handled in accordance with the applicable laws of Kenya and the circumstances of the particular transaction.",
        "For product-quality complaints, customers may be asked to provide relevant information such as the product name, batch information, purchase details, photographs or other evidence that may help us investigate the matter.",
        "Nothing in these Terms & Conditions is intended to remove or limit any consumer rights that cannot legally be excluded under Kenyan law.",
      ],
    },
    {
      heading: "9. Intellectual Property",
      paragraphs: [
        "Unless otherwise stated, the content on this website belongs to Mavuno or is used with appropriate permission.",
      ],
      listIntro: "This includes, but is not limited to:",
      list: [
        "Logos.",
        "Brand names.",
        "Product photographs.",
        "Text.",
        "Graphics.",
        "Videos.",
        "Website designs.",
        "Recipes and other original materials.",
        "Marketing materials.",
      ],
    },
    {
      heading: "10. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites, social media platforms or other online services.",
        "These links are provided for convenience or additional information.",
        "Mavuno does not necessarily control or endorse the content, security, privacy practices or availability of third-party websites.",
        "Your use of third-party websites is subject to their own terms and policies.",
      ],
    },
    {
      heading: "11. Website Availability",
      paragraphs: [
        "We aim to keep our website available and functional, but we do not guarantee that the website will always be available, uninterrupted or free from errors.",
        "We may temporarily suspend, modify or discontinue parts of the website for maintenance, improvements, security reasons or other operational requirements.",
      ],
    },
    {
      heading: "12. Limitation of Liability",
      listIntro:
        "To the extent permitted by applicable law, Mavuno will not be responsible for losses arising from:",
      list: [
        "Temporary website unavailability.",
        "Technical interruptions beyond our reasonable control.",
        "Unauthorised access caused by circumstances outside our reasonable control.",
        "Reliance on outdated information where the information has subsequently been changed.",
        "Third-party websites or services.",
      ],
      paragraphs: [
        "Nothing in these Terms & Conditions excludes liability that cannot legally be excluded or limited under Kenyan law.",
      ],
    },
    {
      heading: "13. Changes to These Terms",
      paragraphs: [
        "We may update these Terms & Conditions from time to time to reflect changes to our business, services, website or applicable legal requirements.",
        'The updated version will be published on this page with a revised "Last Updated" date.',
        "Your continued use of the website after changes are published constitutes acceptance of the updated terms, to the extent permitted by law.",
      ],
    },
    {
      heading: "14. Governing Law",
      paragraphs: [
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the Republic of Kenya.",
        "Any dispute relating to these Terms & Conditions shall be handled in accordance with applicable Kenyan law and the appropriate dispute-resolution mechanisms.",
      ],
    },
    {
      heading: "15. Contact Us",
      paragraphs: [
        "If you have questions about these Terms & Conditions, our products or our services, please contact Mavuno Maize Flour at Makama Road, Njiru, off Kagundo Road, Nairobi. Phone: 0726 995 059. WhatsApp: 0719 833 064. Email: info@mavunomaizeflour.co.ke. Website: www.mavunomaizeflour.co.ke",
      ],
    },
  ],
};
