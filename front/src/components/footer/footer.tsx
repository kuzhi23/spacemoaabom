import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '#/assets/web/footer_logo.svg';
import footer_blog from '#/assets/web/footer_blog.svg';
import footer_instagram from '#/assets/web/footer_instagram.svg';
import { FooterStyle } from './style';

export const Footer = () => (
  <FooterStyle>
    <div className="footer-wrapper">
      <div className="footer-left">
        <div className="footer-left-left">
          <Image src={footer_logo} alt="logo" />
          <div className="footer-call-number">010-4384-2587</div>
        </div>
        <div className="footer-left-right">
          <div className="footer-left-right-1">대표 박종욱 | 사업자번호 611-24-01576 | FAX: 02-400-8871</div>
          <div className="footer-left-right-1-mobile">
            대표 박종욱 | 사업자번호 611-24-01576
            <br />
            FAX: 02-400-8871
          </div>
          <div className="footer-left-right-2">
            Email: spacemoaabom@naver.com | 서울특별시 송파구 마천로 83, 6층(오금동, 제이에스빌딩)
          </div>
          <div className="footer-left-right-2-mobile">
            Email: spacemoaabom@naver.com
            <br />
            서울특별시 송파구 마천로 83, 6층(오금동, 제이에스빌딩)
          </div>
          <div className="footer-left-right-3">© Spacemoaabom Corp. All rights reserved</div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-top">
          <div>
            <Link href="./personalinfo" target="_blank" style={{ textDecoration: 'none' }}>
              개인정보 취급방침
            </Link>
          </div>
          <div>
            <Link href="./personalinfo" target="_blank" style={{ textDecoration: 'none' }}>
              이용약관
            </Link>
          </div>
        </div>
        <div className="footer-right-bottom">
          <Link href="https://blog.naver.com/spacemoaabom" target="_blank">
            <Image src={footer_blog} alt="blog" />
          </Link>
          <Image src={footer_instagram} alt="instagram" />
        </div>
      </div>
    </div>
  </FooterStyle>
);
