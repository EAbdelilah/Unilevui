export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://eswap.pro';
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
      "homeUrl": `${URL}`,
      "iconUrl": `${URL}/favicon.ico`,
      "splashImageUrl": `${URL}/splash.png`,
      "splashBackgroundColor": "#000000",
      "webhookUrl": `${URL}/api/webhook`,
      "subtitle": "Decentralized Margin Trading",
      "description": "Eswap Margin is The Next Generation of Decentralized Trading.",
      "screenshotUrls": [
        `${URL}/s1.png`,
        `${URL}/s2.png`,
        `${URL}/s3.png`
      ],
      "primaryCategory": "finance",
      "tags": ["trading", "margin", "dex", "finance"],
      "heroImageUrl": `${URL}/og.png`,
      "tagline": "Trade with leverage on a decentralized exchange.",
      "ogTitle": "Eswap Margin",
      "ogDescription": "Decentralized margin trading built on top of deep liquidity.",
      "ogImageUrl": `${URL}/og.png`,
      "noindex": true
    }
  });
}
