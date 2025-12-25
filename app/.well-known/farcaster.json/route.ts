import { NextRequest, NextResponse } from 'next/server';

   export async function GET(req: NextRequest) {
     const manifest = {
       "accountAssociation": {
        "header": "eyJmaWQiOjE4NDk4MzIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhGNzRkOTIyNDZCMDFkQTRDMWFEYTEzRTU0MEE4RTFhNzk2ODRBNWFlIn0",
        "payload": "eyJkb21haW4iOiJld2FwLW1hcmdpbi52ZXJjZWwuYXBwIn0",
        "signature": "VXMxJOwWeZzhrcEB+Tsld/QP4odivsK+b1lP0Z5K7V5jiliJxOrFhIBDbPITM8wWrikdwluNzSnUKo0NMVI1Xxw="
       },
       "miniapp": {
         "version": "1",
         "name": "Eswap Margin",
         "homeUrl": "https://ewap-margin.vercel.app/",
         "iconUrl": "https://ewap-margin.vercel.app/icons/eswap-logo.png",
         "splashImageUrl": "https://ewap-margin.vercel.app/icons/eswap-logo.png",
         "splashBackgroundColor": "#000000",
         "subtitle": "Decentralized Trading",
         "description": "The Next Generation of Decentralized Trading, Built on Top of Deep Liquidity.",
         "screenshotUrls": [],
         "primaryCategory": "finance",
         "tags": ["trading", "dex", "base"],
         "heroImageUrl": "https://ewap-margin.vercel.app/icons/eswap-logo.png",
         "tagline": "Trade with leverage.",
         "ogTitle": "Eswap Margin",
         "ogDescription": "The Next Generation of Decentralized Trading.",
         "ogImageUrl": "https://ewap-margin.vercel.app/icons/eswap-logo.png",
         "noindex": true
       }
     };

     return NextResponse.json(manifest);
   }
