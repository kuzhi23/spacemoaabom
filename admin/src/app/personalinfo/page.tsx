import { PersonalInfoPageStyle } from './style';

export default function PersonalInfoPage() {
  return (
    <PersonalInfoPageStyle>
      <div className="titleText">개인정보 처리방침</div>
      <div className="desText">
        스페이스모아봄은(이하 &quot;회사&quot;)는
        <span>『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『개인정보 보호법 등 관련 법률』</span> 에 따라
        이용자의 개인정보를 보호하고 있습니다. 개인정보처리방침은 법률 및 고시의 변경 또는 내부 운영방침 변경에 따라
        변경될 수 있습니다. 변경될 경우 변경 사항은 홈페이지를 통하여 공지합니다
      </div>
      <br />
      <div>제1조. 개인정보 수집에 대한 동의</div>
      <br />
      <div>
        이용자는 개인정보 수집, 이용과 관련 동의여부를 선택할 수 있습니다. 동의를 선택하면 개인 정보 수집에 대해
        동의하는 것으로 봅니다.
      </div>
      <br />
      <div>제2조 개인정보 수집 항목</div>
      <br />
      <div>- 필수항목 : 이름, 이메일, ID, 비밀번호, 생년월일, 휴대폰번호, 성별, 지점/룸넘버, 회사명.</div>
      <br />
      <div>제3조 개인정보 수집 목적</div>
      <br />
      <div className="textMargin">
        - 회원 가입, 각종 서비스 제공, 원활한 고객과의 커뮤니케이션을 위해 고객의 개인 정보를 수집, 이용합니다
      </div>
      <div>- 기타 설문조사 및 이벤트 및 프로모션을 위해 개인정보를 수집, 이용합니다.</div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>수집항목</th>
              <th>수집 • 이용 목적</th>
              <th>이용 • 보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>필수항목</td>
              <td>이름, 이메일, ID, 비밀번호, 생년월일, 휴대폰번호, 성별, 지점/룸넘버, 회사명 </td>
              <td>
                필수항목 이름, 이메일, ID, 비밀번호, 생년월일, 휴대폰번호, 성별, 지점/룸넘버, 회사명, 회원가입을 위한
                본인 확인 / 각종 정보 전달 / 통계분석 / 크레딧 결제 / 회원관리
              </td>
              <td>회원 탈퇴 시까지</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>제4조 개인정보 제공</div>
      <br />
      <div className="desText">
        수집한 정보는 <span>“제3조 개인정보 수집 목적”</span>에 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이
        외부에 공개하지 않습니다. 다만, 예외로 법령 규정, 수사에 의해서는 공개할 수 있습니다
      </div>
      <br />
      <div>제5조 개인정보 보유 및 이용기간</div>
      <br />
      <div className="textMargin desText">
        - 이용자의 개인정보는 이용자 동의 하에 회사의 웹사이트를 이용하는 동안 보유, 이용됩니다.
      </div>
      <div className="textMargin desText">
        - 단, 회사는 정보통신망법 제29조에 따라 ‘개인정보 유효기간제’를 적용하고 있습니다. 1년간 이용내역이 없는 회원의
        경우 개인 정보를 파기 혹은 별도로
        <br /> 분리해 보관합니다.
      </div>
      <div>- 회원 탈퇴 후에는 해당 정보를 즉시 파기합니다.</div>
      <br />
      <div>제6조 개인정보의 파기 절차 및 방법</div>
      <br />
      <div className="desText">
        회사는 이용자의 개인정보가 필요하지 않게 되었을 때 즉시 해당 개인정보를 파기합니다. 개인 정보는 기록을 복구 또는
        재생할 수 없는 방법을 사용하여 완전히 삭제합니다. 종이에 출력된 개인 정보는 분쇄나 소각을 통해 파기합니다
      </div>
      <br />
      <div>제7조 개인정보 위탁</div>
      <br />
      <div>
        회사는 보다 나은 서비스와 고객 편의를 위해 다음과 같이 개인정보 취급 업무를 위탁하여 운영할 수 있습니다.
      </div>
      <br />
      <div>제8조 개인정보 의견 수렴 및 불만처리</div>
      <br />
      <div className="desText">
        회사는 개인정보보호와 관련한 이용자들의 의견을 수렴하고 불만을 신속히 처리하기 위해 고객센터를 운영하고
        있습니다. 또한 개인정보 관리 책임자를 두어 이용자들의 문의에 신속하게 답변을 드리고 있습니다. 고객센터와
        개인정보 최고책임자의 연락처는 다음과 같습니다.
      </div>
      <br />
      <div className="text">[고객센터]</div>
      <div className="text">E-mail : spacemoaabom@naver.com</div>
      <div>전화번호 : 010-4384-2587 (평일 오전 9시~6시)</div>
      <br />
      <div className="text">[개인정보보호 최고책임자]</div>
      <div className="textMargin">성명 : 박종욱</div>
      <div>전화번호 : 010-4384-2587</div>
      <br />
      <div>- 기타 개인정보침해에 관한 상담, 신고가 필요한 경우에는 아래 기관에 문의하시길 바랍니다</div>
      <br />
      <div className="text">[경찰국 사이버안전국]</div>
      <div className="textMargin">전화번호 : 국번없이 182</div>
      <div>웹사이트 : http://cyberbureau.police.go.kr</div>
      <br />
      <div className="text">[대검찰청 사이버수사과]</div>
      <div className="textMargin">전화번호 : 국번없이 1301</div>
      <div>웹사이트 : http://www.spo.go.kr</div>
      <br />
      <div className="text">[개인정보침해신고센터]</div>
      <div className="textMargin">전화번호 : 국번없이 118</div>
      <div>웹사이트 : http://privacy.kisa.or.kr</div>
      <br />
      <div>제9조 개인의 의무</div>
      <br />
      <div className="desText">
        회원은 본인의 개인정보를 보호할 의무가 있으며, 본인의 부주의로 개인정보가 유출될 시 회사는 책임을 지지 않습니다
      </div>
      <br />
      <div>제10조 고지의 의무</div>
      <br />
      <div className="desText">
        개인정보처리방침은 정부의 정책, 보안기술 또는 회사 내부 운영 방침의 변경에 따라 내용이 변경될 수 있습니다. 내용
        변경 시에는 홈페이지를 통해 변경 이유 및 내용을 즉시 공지하겠습니다
      </div>
    </PersonalInfoPageStyle>
  );
}
