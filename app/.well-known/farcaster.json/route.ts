import { NextRequest, NextResponse } from 'next/server';

   export async function GET(req: NextRequest) {
     const manifest = {
       "accountAssociation": {
         "header": "",
         "payload": "",
         "signature": ""
       },
       "miniapp": {
         "version": "1",
         "name": "Eswap Margin",
         "homeUrl": "https://ewap-margin.vercel.app/",
         "iconUrl": "https://ewap-margin.vercel.app/favicon.ico",
         "splashImageUrl": "https://ewap-margin.vercel.app/splash.png",
         "splashBackgroundColor": "#000000",
         "webhookUrl": "",
         "subtitle": "A Decentralized Trading Platform",
         "description": "The Next Generation of Decentralized Trading, Built on Top of Deep Liquidity.",
         "screenshotUrls": [],
         "primaryCategory": "finance",
         "tags": ["trading", "dex", "base"],
         "heroImageUrl": "https://ewap-margin.vercel.app/hero.png",
         "tagline": "Trade with leverage on a decentralized platform.",
         "ogTitle": "Eswap Margin",
         "ogDescription": "The Next Generation of Decentralized Trading.",
         "ogImageUrl": "https://ewap-margin.vercel.app/og.png",
         "noindex": true
       }
     };

     return NextResponse.json(manifest);
   }
