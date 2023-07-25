export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendMailConfig = ({ name, email, phone, message }: ContactData) => ({
  to: process.env.NODEMAILER_USER,
  subject: `[입주문의] ${name}`,
  from: email,
  html: `
    <h1>${name}</h1>
    <h1>${phone}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람: ${email}</p>`,
});
