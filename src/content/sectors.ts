export type Sector = {
  slug: string;
  number: string;
  name: string;
  summary: string;
  regions: string;
  why: string;
  fit: string[];
  programs: { name: string; note: string }[];
  archetypes: string[];
  partnerShape: string;
  engagementShapes: string[];
};

export const SECTORS: Sector[] = [
  {
    slug: "clean-energy",
    number: "01",
    name: "Clean energy",
    summary:
      "Solar manufacturing, energy storage, grid-edge hardware, hybrid microgrid systems.",
    regions: "India · Vietnam · Indonesia · Thailand",
    why: "India's PLI scheme is anchoring the largest non-China solar manufacturing build-out in the world. Vietnam and Indonesia are running parallel EV and renewables programs with sovereign incentive backing. US technology — front-side metallization, advanced cell architectures, storage chemistry, inverter control — slots into capacity that doesn't exist yet and is being built to spec.",
    fit: [
      "Clean-energy materials or hardware looking for Indian PLI-aligned manufacturing",
      "Storage chemistry or BMS technology routing to SEA EV programs",
      "Grid-edge or microgrid hardware with applications in India's tactical and telecom segments",
    ],
    programs: [
      {
        name: "India PLI (Solar PV)",
        note: "~$3B+ outlay anchoring integrated module-to-cell capacity. Production tied to localization milestones; partner-validated technology integrates at line commissioning.",
      },
      {
        name: "Vietnam EV / renewables programs",
        note: "Sovereign incentive backing for storage chemistry, BMS, and inverter platforms supplying ASEAN EV and rooftop solar programs.",
      },
      {
        name: "Indonesia battery + EV chain",
        note: "Nickel-to-cathode integration program with state offtake commitments; routes for upstream chemistry and process IP that improves yield or sustainability.",
      },
    ],
    archetypes: [
      "Front-side metallization, paste chemistry, and cell-architecture IP from US labs and growth-stage startups",
      "Storage chemistry (cathode, anode, electrolyte, additive) with substitution economics that hold at production scale",
      "Inverter and power-conversion platforms suited to hybrid solar-storage and telecom-tower replacement",
      "Microgrid and tactical-power hardware addressable through dual-use channels",
    ],
    partnerShape:
      "Asian-side counterparts in this sector are typically PLI-licensed manufacturers, integrated energy conglomerates, or family offices with operating arms in renewables. We look for partners with line-commissioning capacity, integration appetite, and the regulatory pathway already opened.",
    engagementShapes: [
      "JV stand-up with an Indian PLI-licensed manufacturer for a US cell or materials IP holder",
      "Distribution + technical-services build for a US BMS or inverter platform across SEA EV programs",
      "Parallel motion: JV in India for manufacturing while Americas-side channel build keeps revenue moving",
    ],
  },
  {
    slug: "materials",
    number: "02",
    name: "Materials & manufacturing IP",
    summary:
      "Specialty chemistry, advanced materials, process IP, precision-manufacturing techniques.",
    regions: "India · Thailand · Malaysia · Vietnam",
    why: "Asia is the world's manufacturing belt — and the highest-leverage place to introduce a materials improvement or process IP is in greenfield capacity, where the lock-in choices are still open. US labs and materials startups have IP that India and SEA capacity holders want and would integrate at line commissioning if a partner brought it in.",
    fit: [
      "Materials with substitution economics that hold at production scale",
      "Process IP that improves yield or throughput on existing equipment classes",
      "Specialty chemistry with a clear cost-down or environmental story",
    ],
    programs: [
      {
        name: "India Make in India + sector-specific PLIs",
        note: "Chemicals, specialty steel, electronics components — sectoral programs creating greenfield capacity actively shopping for inbound process and materials IP.",
      },
      {
        name: "Thailand EEC (Eastern Economic Corridor)",
        note: "Industrial-grade incentives and tax holidays for precision-manufacturing and advanced-materials investment.",
      },
      {
        name: "Malaysia + Vietnam component clusters",
        note: "Established electronics and packaging manufacturing belts with the integration sophistication to absorb US process IP at low friction.",
      },
    ],
    archetypes: [
      "Specialty chemistries (coatings, adhesives, additives) with substitution economics at industrial scale",
      "Process IP that improves yield, throughput, or energy intensity on existing equipment classes",
      "Precision-manufacturing techniques licensed to greenfield Asian capacity at line commissioning",
      "Advanced materials with defined cost-down or environmental advantage versus incumbent supply",
    ],
    partnerShape:
      "Counterparts are typically operating manufacturers mid-modernization, sector conglomerates standing up new lines, or process-engineering houses with downstream capacity relationships. We look for technical sophistication, integration appetite, and capital readiness to commit at line-commissioning timing.",
    engagementShapes: [
      "Licensing + technical-services structure for a US materials IP holder into Indian or Thai capacity",
      "Joint venture with a manufacturing partner where the IP is core to the next line generation",
      "Channel + distribution build for a specialty chemistry across SEA component clusters",
    ],
  },
  {
    slug: "defense-adjacent",
    number: "03",
    name: "Defense-adjacent hardware",
    summary:
      "Tactical microgrid, secure communications, sensor systems, dual-use hardware.",
    regions: "India primary; SEA selectively",
    why: "India's defense indigenization push under ADITI and related programs has created a sovereign-preference market for partner-validated US technology. Defense, paramilitary, border infrastructure, and the 600,000+ telecom diesel-tower fleet are all addressable through structured JVs with the right Indian counterparties and the right registration pathway.",
    fit: [
      "Dual-use hardware with civilian and tactical applications",
      "Power, comms, or sensor systems with defense-grade reliability requirements",
      "Technology that can be domiciled through a registered Indian JV entity",
    ],
    programs: [
      {
        name: "ADITI (Acing Development of Innovative Technologies with iDEX)",
        note: "Indian MoD initiative funding deep-tech defense innovation with explicit pathways for partner-validated foreign technology routed through Indian JV entities.",
      },
      {
        name: "Make in India — Defense Production",
        note: "Sovereign-preference procurement framework rewarding domestically-domiciled JV manufacturing of dual-use and tactical hardware.",
      },
      {
        name: "Telecom tower modernization",
        note: "600,000+ diesel-genset towers under active replacement pressure; tactical microgrid and hybrid-power systems addressable via structured commercial JVs.",
      },
    ],
    archetypes: [
      "Tactical microgrid and hybrid-power systems with field-deployment heritage",
      "Secure communications hardware and waveform IP",
      "Sensor and detection systems with dual-use civilian and tactical applications",
      "Hardware compliant with defense-grade reliability requirements and exportable under bilateral frameworks",
    ],
    partnerShape:
      "Asian-side counterparts are Indian defense-licensed conglomerates, paramilitary suppliers, telecom operators with security mandates, and registered JV entities with the cleared pathway for sovereign-preference procurement. Registration and domiciliation are gating; partner readiness on this dimension is non-negotiable.",
    engagementShapes: [
      "JV with a defense-licensed Indian manufacturer, structured for sovereign-preference procurement",
      "Distribution + integration partnership routing US hardware into Indian telecom-tower modernization",
      "Bilateral-framework licensing for waveform or sensor IP with downstream commercial Asian operator",
    ],
  },
  {
    slug: "industrial",
    number: "04",
    name: "Industrial & automation",
    summary:
      "Power electronics, automation hardware, robotics, compaction and forming, factory IT.",
    regions: "India · SEA manufacturing belt",
    why: "The industrial base across India and SEA is mid-modernization — millions of factories upgrading from legacy equipment, with capital availability and a real appetite for partner-grade hardware. US technology in power electronics, automation, robotics, and factory IT is being actively pulled in by manufacturers building for the next generation of capacity.",
    fit: [
      "Power electronics (inverters, drives, conversion) with parallelism or efficiency advantages",
      "Robotics or automation that earns its place inside existing manufacturing workflows",
      "Factory IT, MES, or industrial-IoT that improves throughput on existing equipment",
    ],
    programs: [
      {
        name: "India PLI (electronics, white goods, auto components)",
        note: "Sectoral incentives drawing greenfield capacity that absorbs imported automation and power-electronics platforms at commissioning.",
      },
      {
        name: "ASEAN industrial corridors",
        note: "Thailand, Malaysia, Vietnam, Indonesia industrial belts mid-modernization, with steady capex on automation, robotics, and factory IT.",
      },
      {
        name: "Tower + telecom modernization (Industrial+)",
        note: "Power-electronics demand from telecom-tower replacement programs overlaps with broader industrial-grade conversion equipment.",
      },
    ],
    archetypes: [
      "Inverters, drives, and power-conversion platforms with parallelism or efficiency advantages",
      "Robotics and automation cells that fit existing workflows without forcing a full line rebuild",
      "MES, industrial-IoT, and factory-IT layers improving throughput on installed equipment",
      "Compaction, forming, and precision-process hardware suited to mid-modernization industrial belts",
    ],
    partnerShape:
      "Asian-side counterparts are operating manufacturers, regional conglomerates with automation budgets, and distribution houses with integration capacity. We look for technical breadth on the operating side, capex readiness, and a partner who treats the equipment as platform rather than spot purchase.",
    engagementShapes: [
      "Distribution + integration build for a US automation or power-electronics platform across Indian and ASEAN industrial belts",
      "JV with a conglomerate standing up greenfield capacity that absorbs the US technology at commissioning",
      "Parallel motion: Americas channel build for a US-manufactured platform while SEA distribution stands up under partner",
    ],
  },
];

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
