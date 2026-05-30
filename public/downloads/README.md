# Gated download assets

Files here are served only through `/api/download/[token]` after a valid
signed token, never linked directly. Filenames in this directory must
exactly match the `filename` field for an entry in
`src/content/downloadable-assets.ts`.

## Current state

The asset registry is empty. No PDFs are gated.

## To publish a new asset

1. Add an entry to `src/content/downloadable-assets.ts`:

   ```ts
   {
     id: "taiyoml-methodology-brief",
     title: "TaiyoML — How we structure US to India/SEA technology partnerships",
     filename: "taiyoml-methodology-brief.pdf",
     blurb: "Sanitized overview of...",
     pages: 16,
     ready: true,
   }
   ```

2. Drop the PDF into this directory with the matching filename.

3. Render the gated component wherever the lead-gen surface should live, e.g.
   on `/practice`:

   ```tsx
   import { GatedDownload } from "@/components/marketing/gated-download";
   import { getAsset } from "@/content/downloadable-assets";
   const asset = getAsset("taiyoml-methodology-brief")!;
   <GatedDownload asset={asset} />
   ```

4. Deploy. Form submissions hit `/api/download-request`, which emails the
   requester a 7-day signed link via Resend.
