export interface ContactData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function sendContactEmail(contactData: ContactData) {
  const response = await fetch('https://server.spacemoaabom.com/contact/sendmail', {
    method: 'POST',
    body: JSON.stringify(contactData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }
  return data;
}
