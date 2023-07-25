'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '#/assets/web/logo.svg';
import textLog from '#/assets/web/textLogo.svg';
import hamburger from '#/assets/icons/hamburger.svg';
import cross from '#/assets/icons/cross.svg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HeaderStyle } from './style';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [privateHover, setPrivatehover] = useState<boolean>(false);
  const [isOpenHamburgerMenu, serIsOpenHamburgerMenu] = useState<boolean>(false);
  const [isOpenPrivateSubmenu, setIsOpenPrivateSubmenu] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (isOpenHamburgerMenu) {
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = 'auto'; // 스크롤 활성화
    }
  }, [isOpenHamburgerMenu]);

  useEffect(() => {
    serIsOpenHamburgerMenu(false);
    if (pathname === '/private') setIsOpenPrivateSubmenu(true);
    else setIsOpenPrivateSubmenu(false);
  }, [pathname]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderStyle pathname={pathname} param={params.get('type')}>
      <div className="header-wrapper">
        <div className="header">
          <Image
            className="header-logo"
            src={windowWidth > 900 ? logo : textLog}
            alt={logo}
            onClick={() => router.push('/')}
          />
          <div className="header-category">
            <div className="category-amenity" onClick={() => router.push('/amenity')}>
              편의시설
            </div>
            <div
              className="category-private"
              onClick={() => router.push('/private?type=1')}
              onMouseEnter={() => setPrivatehover(true)}
              onMouseLeave={() => setPrivatehover(false)}
            >
              프라이빗오피스
            </div>
            <div className="category-free" onClick={() => router.push('/free')}>
              자유석
            </div>
            <div className="category-non-resident" onClick={() => router.push('/non-resident')}>
              비상주서비스
            </div>
            <div className="category-faq" onClick={() => router.push('/faq')}>
              FAQ
            </div>
          </div>
          {/* <div className="header-auth">
          <div>로그인</div>
          <div>회원가입</div>
        </div> */}
          <div
            className="mobile-menu"
            onClick={() => {
              serIsOpenHamburgerMenu((pre) => !pre);
            }}
          >
            {isOpenHamburgerMenu ? (
              <Image className="header-menu" src={cross} alt="hamburger" style={{ marginLeft: '20px' }} />
            ) : (
              <Image className="header-menu" src={hamburger} alt="hamburger" style={{ marginLeft: '20px' }} />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
      <div
        className="private-submenu"
        style={{
          // eslint-disable-next-line no-nested-ternary
          transform: `translateY(${privateHover ? '1px' : pathname === '/private' ? '1px' : '-100%'})`,
          transitionDelay: privateHover ? '0ms' : '300ms',
        }}
        onMouseEnter={() => setPrivatehover(true)}
        onMouseLeave={() => setPrivatehover(false)}
      >
        <div className="submenu-1" onClick={() => router.push('/private?type=1')}>
          1인실
        </div>
        <div className="submenu-2" onClick={() => router.push('/private?type=2')}>
          2인실
        </div>
        <div className="submenu-more" onClick={() => router.push('/private?type=more')}>
          다인실
        </div>
        <span className="spacing" />
      </div>
      {isOpenHamburgerMenu && (
        <div className="hamburger-menu">
          {/* <div className="hamburger-menu-auth">
            <div>로그인</div>
            <div>회원가입</div>
          </div> */}
          <div className="divider" />
          <div className="hamburger-menu-box">
            <div className="hamburger-menu-category">
              <div
                className="category-amenity"
                onClick={() => {
                  router.push('/amenity');
                  serIsOpenHamburgerMenu(false);
                }}
              >
                편의시설
              </div>
              <div
                className="category-private"
                onClick={() => {
                  setIsOpenPrivateSubmenu(true);
                }}
              >
                프라이빗오피스
              </div>
              <div
                className="category-free"
                onClick={() => {
                  router.push('/free');
                  serIsOpenHamburgerMenu(false);
                }}
              >
                자유석
              </div>
              <div
                className="category-non-resident"
                onClick={() => {
                  router.push('/non-resident');
                  serIsOpenHamburgerMenu(false);
                }}
              >
                비상주서비스
              </div>
              <div
                className="category-faq"
                onClick={() => {
                  router.push('/faq');
                  serIsOpenHamburgerMenu(false);
                }}
              >
                FAQ
              </div>
            </div>
            <div className="hamburger-menu-private-submenu">
              {isOpenPrivateSubmenu && (
                <>
                  <div
                    className="submenu-1"
                    onClick={() => {
                      router.push('/private?type=1');
                      serIsOpenHamburgerMenu(false);
                    }}
                  >
                    1인실
                  </div>
                  <div
                    className="submenu-2"
                    onClick={() => {
                      router.push('/private?type=2');
                      serIsOpenHamburgerMenu(false);
                    }}
                  >
                    2인실
                  </div>
                  <div
                    className="submenu-more"
                    onClick={() => {
                      router.push('/private?type=more');
                      serIsOpenHamburgerMenu(false);
                    }}
                  >
                    다인실
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </HeaderStyle>
  );
};
