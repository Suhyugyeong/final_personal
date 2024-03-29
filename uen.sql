CREATE TABLE IF NOT EXISTS users ( -- 유저 보드
	email VARCHAR(50) NOT NULL, -- 이메일(PK)
    user_name VARCHAR(50) NOT NULL, -- 이름
    pwd VARCHAR(200) NOT NULL, -- 비밀번호
    address VARCHAR(400) NOT NULL, -- 주소
    phone VARCHAR(12) NOT NULL, -- 휴대폰 번호
    isadmin CHAR(1) NOT NULL DEFAULT 'N', -- 관리자 권한
    createAt DATETIME NULL DEFAULT now(), -- 가입 시간
    PRIMARY KEY (email) -- 인식방법
);

CREATE TABLE IF NOT EXISTS faqboard ( -- 자주묻는 질문 (고객센터)
    faq_id INT NOT NULL AUTO_INCREMENT, -- 글 번호 자동 생성(PK)
    title VARCHAR(100) NOT NULL, -- 글 제목
	picture VARCHAR(2048) NULL, -- 사진
    content VARCHAR(1024) NOT NULL, -- 내용
    cnt INT NULL DEFAULT 0, -- 조회수 
    createAt DATETIME NULL DEFAULT now(), -- 작성시간
    PRIMARY KEY (faq_id) -- 인식방법
);

CREATE TABLE IF NOT EXISTS product ( -- 상품 보드
    product_id INT NOT NULL AUTO_INCREMENT, -- 글 번호 자동 생성(PK)
    title VARCHAR(100) NOT NULL, -- 제목
    email VARCHAR(50) NOT NULL,  -- 사용자 아이디(Foreign Key)
    picture VARCHAR(2048) NULL, -- 사진
    master_price INT NOT NULL, -- 즉시 구매가
    --이게 후에 detail페이지 즉시구매가에 바로 적용이 돼야함
    auction_id INT NULL, -- 낙찰 아이디
    endtime DATETIME NOT NULL, -- 경매 종료시간 
    --buy페이지에서 넣어야되는데 yyyy-mm-dd hh:mm:ss 형식으로, 이게 나중에 Timer 카운트다운에 들어가야함
	auction_status CHAR(1) NOT NULL, -- 경매 상태 추후 입력 임시값
    --이거를 정해야할 것 같음 (상중하를 abc로 대입?)
    isbn VARCHAR(100) NULL, -- 국제책번호
    content VARCHAR(4096) NOT NULL, -- 내용
    cnt INT NULL DEFAULT 0, -- 조회수
	createAt DATETIME NULL DEFAULT now(), -- 작성시간
    PRIMARY KEY (product_id), -- 인식 방법
    FOREIGN KEY (email) REFERENCES users(email) -- FK
);

-- SELECT product_id, title, auction_price from product left join acution on product.id = auction.id; 

CREATE TABLE IF NOT EXISTS auction ( -- 입찰 보드
	auction_id INT NOT NULL AUTO_INCREMENT, -- 글번호
    product_id INT NOT NULL, -- 상품 ID
    email VARCHAR(50) NOT NULL, -- 입찰자 이메일
    auction_price INT NOT NULL, -- 입찰가
    picture VARCHAR(2048) NULL, -- 사진
    product_status CHAR(1) NOT NULL, -- 책 상태 
    --추후 정의 필요 (ex: a = 상태 좋음, f = 상태 나쁨) 임시값
    createAt DATETIME NULL DEFAULT now(), -- 입찰시간
    PRIMARY KEY (auction_id), -- 인식 방법
    FOREIGN KEY (email) REFERENCES users(email), -- FK
    FOREIGN KEY (product_id) REFERENCES product(product_id) -- FK 
);

CREATE TABLE IF NOT EXISTS q_board ( -- 구매자가 입찰자에게 질문 보드
    q_id INT NOT NULL AUTO_INCREMENT, -- 글 번호 자동 생성(PK)
    auction_id INT NOT NULL, -- 입찰글 ID (FK)
    email VARCHAR(50) NOT NULL,  -- 사용자 아이디(Foreign Key)
    content VARCHAR(1024) NOT NULL, -- 내용
    createAt DATETIME NULL DEFAULT now(), -- 작성시간
    PRIMARY KEY (q_id), -- 인식방법
    FOREIGN KEY (email) REFERENCES users(email),
    FOREIGN KEY (auction_id) REFERENCES auction(auction_id)
);

CREATE TABLE IF NOT EXISTS notice_board ( -- 고객센터 
    notice_id INT NOT NULL AUTO_INCREMENT, -- 글 번호 자동 생성(PK)
    email VARCHAR(50) NOT NULL,  -- 사용자 아이디(Foreign Key)
    title VARCHAR(100) NOT NULL, -- 글 제목
    content VARCHAR(1024) NOT NULL, -- 내용
    cnt INT NULL DEFAULT 0, -- 조회수 
    createAt DATETIME NULL DEFAULT now(), -- 작성시간
    PRIMARY KEY (notice_id), -- 인식방법
    FOREIGN KEY (email) REFERENCES users(email)
);



insert into product (title, author, isbn, auction_price, picture, product_status, createAt) 
values ('콜레라시대의사랑','마르케스','1645123456785',40000,'public/upload/이미지파일.jpg','a',now())

INSERT INTO auction (auction_id, product_id, email, auction_price, product_status, createAt) 
VALUES (?, 1, "c@c.c", 40000, 'a', now())