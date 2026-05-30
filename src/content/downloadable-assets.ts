/**
 * Registry of gated downloadable assets.
 *
 * The gated-download flow (`/api/download-request` + `/api/download/[token]`)
 * only serves files registered here. To publish a new asset:
 *   1. Drop the PDF into `public/downloads/` with the `filename` below
 *   2. Set `ready: true`
 *   3. Render `<GatedDownload assetId="..." />` wherever the lead-gen surface should live
 *
 * Empty until the first sanitized TaiyoML methodology brief is ready for release.
 */

export type DownloadableAsset = {
  /** Stable id used in the API payload and the component prop. */
  id: string;
  /** Display title for the gated card. */
  title: string;
  /** Filename inside `public/downloads/` — served only via signed token. */
  filename: string;
  /** Short blurb describing what's inside. */
  blurb: string;
  /** Optional page count for visual weight. */
  pages?: number;
  /** False = render the "coming soon" UI; True = render the form. */
  ready: boolean;
};

export const downloadableAssets: DownloadableAsset[] = [
  // Placeholder example — flip ready:true and drop the PDF in public/downloads/ when ready.
  // {
  //   id: "taiyoml-methodology-brief",
  //   title: "TaiyoML — How cross-border go-to-market actually runs",
  //   filename: "taiyoml-methodology-brief.pdf",
  //   blurb:
  //     "Sanitized overview of how TaiyoML sources both sides, structures joint ventures and distribution, and stands up the team — across India, Southeast Asia, and the Americas.",
  //   pages: 16,
  //   ready: false,
  // },
];

export function getAsset(id: string): DownloadableAsset | undefined {
  return downloadableAssets.find((a) => a.id === id);
}

export function getAllowedFilenames(): Set<string> {
  return new Set(downloadableAssets.map((a) => a.filename));
}
