export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://eswap-margin-kappa.vercel.app';
  return Response.json({
    // TODO: Generate these fields on Base Build and paste them here.
    // https://build.base.org/tools/account-association
    "accountAssociation": {
      "header": "",
      "payload": "",
      "signature": ""
    },
    "miniapp": {
      "version": "1",
      "name": "Eswap Margin",
      "homeUrl": URL,
      "iconUrl": "https://eswap.pro/favicon.ico",
      "splashImageUrl": "https://eswap-margin-kappa.vercel.app/mini-app-splash.png",
      "splashBackgroundColor": "#000",
      "webhookUrl": `${URL}/api/webhook`,
      "subtitle": "The Next Generation of Decentralized Trading",
      "description": "Eswap Margin is a decentralized margin trading protocol.",
      "screenshotUrls": [
        "https://eswap.pro/s1.png",
        "https://eswap.pro/s2.png",
        "https://eswap.pro/s3.png"
      ],
      "primaryCategory": "finance",
      "tags": ["trading", "margin", "dex", "finance"],
      "heroImageUrl": "https://eswap.pro/og.png",
      "tagline": "Trade with leverage on a decentralized exchange.",
      "ogTitle": "Eswap Margin",
      "ogDescription": "Decentralized margin trading built on top of deep liquidity.",
      "ogImageUrl": "https://eswap.pro/og.png",
      "noindex": true
    }
  });
}
