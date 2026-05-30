export type Vignette = {
  slug: string;
  shortTitle: string;
  title: string;
  blurb: string;
  motions: string[];
  outcome: string;
  status: "active" | "completed";
  sectors: string[];
  regions: string[];
};

// NOTE TO MAINTAINER: Each vignette must be anonymized enough that a confidential
// engagement cannot be identified by the combination of sector + geography + tech
// archetype. Sign-off required before /work is added to the primary nav.
export const VIGNETTES: Vignette[] = [
  {
    slug: "thin-films-india-americas",
    shortTitle: "Thin-films IP — India + Americas in parallel",
    title:
      "A specialty-materials company taking thin-films IP to Indian manufacturing while channel build runs across the Americas.",
    blurb:
      "Process IP with substitution economics at industrial scale, looking for greenfield Asian capacity to integrate at line commissioning. North-American manufacturing already in place, with the corridor wide open for near-market channel build.",
    motions: [
      "Sourced a PLI-licensed Indian manufacturing partner with line-commissioning capacity and integration appetite",
      "Structured a licensing + technical-services agreement bridging the technology in",
      "Built the Americas channel directly — US and Mexican industrial distributors and integration partners",
      "Recruited the technical lead embedded with the Indian counterparty",
    ],
    outcome: "Parallel motion active.",
    status: "active",
    sectors: ["Materials & manufacturing IP", "Clean energy"],
    regions: ["India", "United States", "Mexico"],
  },
  {
    slug: "tactical-power-india",
    shortTitle: "Tactical-power hardware — India JV",
    title:
      "A US tactical-power platform brought into India through a registered JV with a defense-licensed counterparty.",
    blurb:
      "Field-proven tactical microgrid and hybrid-power hardware with dual-use civilian and tactical applications. India indigenization framework opens sovereign-preference procurement when the entity is domiciled correctly.",
    motions: [
      "Sourced an Indian defense-licensed counterparty with the registration pathway already cleared",
      "Structured the joint venture — equity, IP, manufacturing terms, governance",
      "Sequenced the regulatory work so domiciliation landed when the entity was ready to move",
      "Recruited the JV leadership: managing director, technical lead, regulatory officer",
    ],
    outcome: "JV stood up; addressable for sovereign-preference procurement.",
    status: "active",
    sectors: ["Defense-adjacent hardware"],
    regions: ["India", "United States"],
  },
  {
    slug: "power-electronics-sea-americas",
    shortTitle: "Power-electronics platform — SEA distribution + Americas channel",
    title:
      "A US power-electronics platform routed through SEA distribution while Americas channel builds in parallel.",
    blurb:
      "Inverter and conversion hardware with efficiency advantages that read across telecom-tower replacement, EV charging, and industrial automation. Cross-border GTM rather than a single-geography JV.",
    motions: [
      "Sourced distribution and integration partners across Vietnam, Thailand, and Indonesia through investor-network channels",
      "Structured master-distribution and technical-services agreements per geography",
      "Stood up Americas channel directly — US and Mexico, regional sales-engineering coverage",
      "Coordinated parallel motions so revenue and brand recognition move concurrently across hemispheres",
    ],
    outcome: "Multi-region channel active.",
    status: "active",
    sectors: ["Industrial & automation", "Clean energy"],
    regions: ["United States", "Mexico", "Vietnam", "Thailand", "Indonesia"],
  },
  {
    slug: "specialty-chemistry-india",
    shortTitle: "Specialty chemistry — India process-IP licensing",
    title:
      "A US specialty chemistry license routed into Indian process manufacturing through structured technical services.",
    blurb:
      "Chemistry with substitution economics that hold at production scale, paired with a process-engineering partner running multiple lines in India's specialty-chemicals belt.",
    motions: [
      "Sourced an Indian process-engineering counterparty with the right line generation and integration appetite",
      "Structured licensing + technical-services bridging the IP into commissioned capacity",
      "Built ongoing technical-services and continuity bench between the US lab and Indian operations",
    ],
    outcome: "License operating; technical-services bridge active.",
    status: "active",
    sectors: ["Materials & manufacturing IP"],
    regions: ["India", "United States"],
  },
];
