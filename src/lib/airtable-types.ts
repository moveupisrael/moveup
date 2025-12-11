// airtable-types.ts
export interface AirtableRecord {
  fields: Record<string, any>;
}

export interface AirtableCreateRequest {
  records: AirtableRecord[];
  typecast?: boolean;
}

export interface AirtableCreateResponse {
  records: Array<{
    id: string;
    createdTime: string;
    fields: Record<string, any>;
  }>;
}

export interface AirtableError {
  error: {
    type: string;
    message: string;
  };
}

// שדות שמתאימים בדיוק לטבלה ב-Airtable
export interface LeadData {
  "Sender Name": string;          // ✅ קיים
  "Sender Email": string;          // ✅ קיים
  "Sender Phone": string;          // ✅ קיים
  "Message Content": string;       // ✅ קיים
  "Message Time": string;          // ✅ קיים (ISO format)
  "Is New Lead Message"?: boolean; // ✅ קיים (checkbox)
}