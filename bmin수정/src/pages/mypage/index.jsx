import Link from 'next/link';

const Mypage = () => {
  return (
    <section className="breadcrumb breadcrumb_bg mypage_breadcrumb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcrumb_iner">
              <div className="breadcrumb_iner_item">
                <h2>Mypage</h2>
                <Link href={'/mypage'}>
                  <h4>| 도서 목록</h4>
                </Link>
                <Link href={'/mypage/myinfo'}>
                  <h4>| 회원 정보</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mypage;
