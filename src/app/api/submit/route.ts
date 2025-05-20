import { NextResponse } from 'next/server';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    const { username, email } = await request.json();
    const timestamp = new Date().toISOString();

    // Read service account credentials
    const credentials = JSON.parse(
      fs.readFileSync('/Users/hemanthgirimath/Downloads/assistant.json', 'utf8')
    );

    // Create JWT token for authentication
    const jwtHeader = {
      alg: 'RS256',
      typ: 'JWT',
      kid: credentials.private_key_id
    };

    const now = Math.floor(Date.now() / 1000);
    const jwtClaimSet = {
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    };

    // Get access token
    const jwt = await createJWT(jwtHeader, jwtClaimSet, credentials.private_key);
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
    });

    const { access_token } = await tokenResponse.json();

    // Use access token to append data to sheet
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/17N6SH60QCxIIpjj-6Lja9IeD1h7Ee1a4oNgXugDVi2U/values/Monarch!A:C:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [[timestamp, username, email]]
        })
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}

async function createJWT(header: any, claimSet: any, key: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = `${btoa(JSON.stringify(header))}.${btoa(JSON.stringify(claimSet))}`;
  
  const importedKey = await crypto.subtle.importKey(
    'pkcs8',
    convertPemToArrayBuffer(key),
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    importedKey,
    encoder.encode(data)
  );

  return `${data}.${btoa(String.fromCharCode(...Array.from(new Uint8Array(signature))))}`;
}

function convertPemToArrayBuffer(pem: string): ArrayBuffer {
  const pemContents = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  
  const binary = atob(pemContents);
  const buffer = new ArrayBuffer(binary.length);
  const bytes = new Uint8Array(buffer);
  
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  
  return buffer;
}
