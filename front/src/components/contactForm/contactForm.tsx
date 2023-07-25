'use client';

/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { ContactData, sendContactEmail } from '@/service/contact';
import { ContactFormWraper } from './style';

export const ContactForm = () => {
  const [contact, setContact] = useState<ContactData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setContact((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement) {
      let sanitizedValue = value.replace(/-/g, '');

      // If it's intended to be a number, remove non-numeric characters
      if (e.target.getAttribute('data-type') === 'number') {
        sanitizedValue = sanitizedValue.replace(/[^0-9]/g, '');
      }

      setContact((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
    } else {
      setContact((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(contact)
      .then((data) => {
        if (data.code === 1) {
          // eslint-disable-next-line no-alert
          alert('입주문의가 정상적으로 등록되었습니다. 조금만 기달려주시면 검토 후 연락드리겠습니다. :)');
        }
      })
      .then(() => {
        setContact({ name: '', phone: '', email: '', message: '' });
      });
  };

  return (
    <ContactFormWraper id="emailContact">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="성함 또는 회사명을 입력해주세요*"
          required
          onChange={onChange}
          value={contact.name}
        />
        <input
          type="text"
          pattern="[0-9]*"
          id="phone"
          name="phone"
          placeholder="휴대전화를 입력해주세요*"
          required
          onChange={onChange}
          value={contact.phone}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요*"
          required
          onChange={onChange}
          value={contact.email}
        />
        <textarea
          id="message"
          name="message"
          placeholder="문의내용을 입력해주시면 연락드리겠습니다."
          required
          onChange={onChange}
          value={contact.message}
        />
        <div className="checkBoxWraper">
          <input type="checkbox" className="chekBox" required />
          <div>
            <div className="checkBoxTitelText">
              스페이스 모아봄 입주 상담을 <br />
              위한 필수 개인정보 이용 및 수집 동의(필수)
            </div>
            <Link href="./personalinfo" className="checkBoxSmallText" target="_blank">
              필수 개인정보 수집 및 동의 내용 확인 보기
            </Link>
          </div>
        </div>
        <button>문의하기</button>
      </form>
    </ContactFormWraper>
  );
};
