import { AirtableCreateRequest, AirtableCreateResponse, AirtableError, LeadData } from './airtable-types';

const AIRTABLE_API_URL = 'https://api.airtable.com/v0';

export async function createAirtableLead(data: LeadData) {
  const PAT = process.env.AIRTABLE_PAT;
  const BASE_ID = process.env.AIRTABLE_BASE_ID;
  const TABLE_ID = process.env.AIRTABLE_TABLE_ID;

  // בדיקת תצורה
  if (!PAT || !BASE_ID || !TABLE_ID) {
    console.warn('⚠️ Airtable configuration missing:');
    console.warn('  - PAT:', PAT ? '✅ Present' : '❌ Missing');
    console.warn('  - BASE_ID:', BASE_ID ? '✅ Present' : '❌ Missing');
    console.warn('  - TABLE_ID:', TABLE_ID ? '✅ Present' : '❌ Missing');
    return null;
  }

  const url = `${AIRTABLE_API_URL}/${BASE_ID}/${TABLE_ID}`;

  const payload: AirtableCreateRequest = {
    records: [
      {
        fields: data,
      },
    ],
    typecast: true,
  };

  // Debug logging
  console.log('📤 Sending to Airtable:');
  console.log('  URL:', url);
  console.log('  Data:', JSON.stringify(data, null, 2));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // קריאת התגובה כטקסט תחילה כדי לראות מה קיבלנו
    const responseText = await response.text();
    
    console.log('📥 Airtable response:');
    console.log('  Status:', response.status);
    console.log('  Body:', responseText);

    // ניסיון לפרסר את התגובה
    let responseData: AirtableCreateResponse | AirtableError;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error(`Failed to parse Airtable response: ${responseText}`);
    }

    if (!response.ok) {
      const error = responseData as AirtableError;
      const errorMessage = error.error?.message || 'Unknown error';
      
      console.error('❌ Airtable API Error:');
      console.error('  Status:', response.status);
      console.error('  Type:', error.error?.type);
      console.error('  Message:', errorMessage);
      
      throw new Error(`Airtable API Error (${response.status}): ${errorMessage}`);
    }

    console.log('✅ Successfully saved to Airtable');
    return responseData as AirtableCreateResponse;
    
  } catch (error: any) {
    console.error('❌ Airtable save error:', {
      message: error.message,
      stack: error.stack,
    });
    throw error;
  }
}