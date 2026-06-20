# Company Brain Harness Site

Customer-facing Next.js documentation site for Company Brain Harness.

## Run Locally

```bash
npm install
npm run dev -- --port 7301
```

Open `http://localhost:7301`.

## Verify

```bash
npm run typecheck
npm run build
npm audit --audit-level=moderate
```

## Deploy

The repo includes a Cloud Run-ready `Dockerfile` and a GitHub Actions workflow at
`.github/workflows/deploy-cloudrun.yml`.

Default deployment target:

- Project: `deleg8-dev`
- Region: `us-central1`
- Service: `company-brain-harness-site`
- URL: `https://company-brain-harness-site-j6cr4ur6gq-uc.a.run.app`

Required GitHub secrets for the workflow:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

Recommended GitHub repository variable:

- `NEXT_PUBLIC_SITE_URL`

Local deploy example:

```bash
gcloud run deploy company-brain-harness-site \
  --project deleg8-dev \
  --region us-central1 \
  --source . \
  --allow-unauthenticated \
  --set-env-vars NEXT_PUBLIC_SITE_URL=https://company-brain-harness-site-j6cr4ur6gq-uc.a.run.app
```

## Content Scope

The site explains:

- what Company Brain Harness is
- who uses it: Brain Owner, Brain Operator, Team Member
- the install and setup experience for Claude Code and Codex
- source governance and privacy boundaries
- recommended brain folder structure
- operating rhythm and automation posture
- bundled scripts and skills
- service positioning for selling setup and operations

The meeting link is intentionally a placeholder until a scheduling URL is provided.

## Discovery

The site includes:

- structured application metadata
- OpenGraph and Twitter card metadata
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `ai.txt`
- `site.webmanifest`
