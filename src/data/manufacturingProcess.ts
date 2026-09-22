// Manufacturing process content for the Manufacturing page. Descriptions
// reflect a general, industry-standard maize milling sequence. Specific
// machinery, certifications, laboratory results and production figures are
// intentionally not included until they are confirmed by Mavuno.
export const manufacturingIntro =
  "From carefully selected maize to quality-assured flour, every stage of our production process is carefully controlled. We source quality maize, inspect and clean the grain, mill and sift it to achieve the desired consistency, fortify where applicable, conduct quality checks, and carefully package, store and distribute the finished product.";

export const manufacturingClosing = {
  title: "Quality at Every Stage",
  text: "Every stage of the process plays an important role in delivering consistent, quality maize flour. From selecting the raw material to packaging and distribution, careful handling and quality controls help protect the integrity of the finished product.",
};

export type StageIcon =
  | "sourcing"
  | "inspection"
  | "cleaning"
  | "milling"
  | "sifting"
  | "fortification"
  | "qualityControl"
  | "packaging"
  | "storage"
  | "distribution";

export interface ManufacturingStage {
  step: number;
  icon: StageIcon;
  title: string;
  description: string;
}

export const manufacturingStages: ManufacturingStage[] = [
  {
    step: 1,
    icon: "sourcing",
    title: "Maize Sourcing",
    description:
      "The process begins with carefully selected, mature and properly dried maize grain sourced from approved suppliers. The maize is selected to meet the required quality specifications for flour production.",
  },
  {
    step: 2,
    icon: "inspection",
    title: "Quality Inspection",
    description:
      "Incoming maize is inspected before production. Quality checks may include moisture, foreign matter, insect damage, mould, grain condition and other relevant food-safety requirements.",
  },
  {
    step: 3,
    icon: "cleaning",
    title: "Cleaning",
    description:
      "The maize passes through cleaning operations to remove unwanted materials such as dust, stones, dirt, metal particles, husks, insects and other foreign matter before milling.",
  },
  {
    step: 4,
    icon: "milling",
    title: "Milling",
    description:
      "Clean maize is processed through the milling system where the grain is broken and ground into flour. Milling parameters are controlled to achieve the required texture, particle size and product consistency.",
  },
  {
    step: 5,
    icon: "sifting",
    title: "Sifting",
    description:
      "After milling, the flour passes through sifters that separate particles according to size. This helps achieve a consistent flour texture while coarse particles may be returned for further milling where applicable.",
  },
  {
    step: 6,
    icon: "fortification",
    title: "Fortification",
    description:
      "Where applicable, approved micronutrients are added to the flour in controlled quantities and thoroughly mixed to achieve uniform distribution throughout the product.",
  },
  {
    step: 7,
    icon: "qualityControl",
    title: "Quality Control",
    description:
      "Finished flour undergoes quality checks before packaging and release. Checks may include moisture, particle size, appearance, food-safety requirements and other applicable product specifications.",
  },
  {
    step: 8,
    icon: "packaging",
    title: "Packaging",
    description:
      "Approved maize flour is accurately weighed and packed into suitable food-grade packaging. Each package is properly sealed and labelled with the required product and traceability information.",
  },
  {
    step: 9,
    icon: "storage",
    title: "Storage",
    description:
      "Packaged flour is stored in a clean, dry and hygienic environment. Products are protected from moisture, pests, contamination and physical damage while proper stock rotation and batch traceability are maintained.",
  },
  {
    step: 10,
    icon: "distribution",
    title: "Distribution",
    description:
      "Finished products are prepared for delivery to distributors, retailers, institutions and customers. Products are transported appropriately to help maintain their quality and integrity throughout distribution.",
  },
];
