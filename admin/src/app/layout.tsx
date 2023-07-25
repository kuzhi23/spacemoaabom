import './globals.css';
import { StyledComponentsRegistry } from '@/lib/registry';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ContactBtn } from '@/components/contactBtn/contactBtn';
import { PopUp } from '@/components/popUp/popUp';
// import localFont from 'next/font/local';

export const metadata = {
  title: '스페이스 모아봄',
  description: '새로운 시작의 새싹들이 모여 꿈을 이루는 공간 스페이스 모아봄',
};

// const nanumFont = localFont({
//   src: './fonts/NanumSquare_acR.ttf',
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <PopUp />
          <ContactBtn />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
