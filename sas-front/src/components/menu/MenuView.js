import { Link, Route, Routes, useParams } from "react-router-dom";
import "./menuview.css";
import { Map } from "react-kakao-maps-sdk";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { PiArrowFatLeft, PiStarFill, PiStarLight } from "react-icons/pi";
import axios from "axios";

const MenuView = () => {
  const [store, setStore] = useState({ storeNo: 73 });
  const backServer = process.env.REACT_APP_BACK_SERVER;
  useEffect(() => {
    axios
      .get(`${backServer}/user/storeNo/${store.storeNo}`)
      .then((res) => {
        setStore(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="menuview-bigwrap">
      <div className="menuview-wrap">
        <section className="section-menu">
          <div className="menu-image">
            <img src="/image/s&s로고.png" alt="가게 로고" />
          </div>
          <div className="menuview-info">
            <p>{store.storeName}</p>
            <div className="schedule">
              <span className="material-icons">place</span>
              <p>{store.storeAddr}</p>
            </div>
            <p>{store.storeIntroduce}</p>
            <div className="schedule">
              <span className="material-icons">schedule</span>
              <p>{store.storeTime}</p>
            </div>
          </div>
        </section>
      </div>
      <hr></hr>
      <section className="section-menu">
        <ul className="menu-nav">
          <Link to="menuview">
            <li>홈</li>
          </Link>
          <Link to="menunews">
            <li>소식</li>
          </Link>
          <Link to="menu">
            <li>메뉴</li>
          </Link>
          <Link to="photo">
            <li>사진</li>
          </Link>
          <Link to="review">
            <li>리뷰</li>
          </Link>
          <Link to="info">
            <li>매장정보</li>
          </Link>
        </ul>
        <hr></hr>
      </section>
      {
        <Routes>
          <Route path="menuview" element={<MenuMain />}></Route>
          <Route path="menunews" element={<Menunews />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="photo" element={<MenuPhoto />}></Route>
          <Route path="review" element={<MenuReview />}></Route>
          <Route path="info" element={<Menuinfo />}></Route>
        </Routes>
      }
      <div className="reservation-button">
        <span className="material-icons page-item">bookmark_border</span>
        <span className="material-icons page-item">share</span>
        <button className="reservation-btn">예약하기</button>
      </div>
    </div>
  );
};

const MenuMain = () => {
  return (
    <main className="main-menu">
      <h2>예약</h2>
      <section className="reservation-info">
        <span className="material-icons page-item">
          <span className="material-icons">calendar_today</span>날짜 - 인원 -
          시간
        </span>
        <div className="res-time">
          <div>오후 12:00</div>
        </div>
        <Link to="#" className="find-date btn-sub round">
          예약가능날짜찾기
        </Link>
      </section>
      <div className="facilities">
        <h2>편의시설</h2>
        <div className="amenities">편의시설 이미지</div>
      </div>
    </main>
  );
};

const Menunews = () => {
  const [store, setStore] = useState({ storeNo: 73 });
  const backServer = process.env.REACT_APP_BACK_SERVER;
  useEffect(() => {
    axios
      .get(`${backServer}/user/storeNo/${store.storeNo}`)
      .then((res) => {
        console.log(res);
        setStore(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="news">
      <p>{store.storeIntroduce}</p>
    </div>
  );
};

const Menu = () => {
  const [store, setStore] = useState({ storeNo: 73 });
  const [menu, setMenu] = useState([]);
  const backServer = process.env.REACT_APP_BACK_SERVER;
  useEffect(() => {
    axios
      .get(`${backServer}/user/storeNo/${store.storeNo}/menu`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="menuview-menu">
      <div className="menu-board">
        <h2>메뉴판</h2>
        <div className="menu-board-items">
          {menu.map((menuItem, index) => {
            console.log(index, menuItem);
            return (
              <div className="menu-item">
                <img
                  src="/image/youtube.png"
                  alt="메뉴"
                  style={{ width: "200px", height: "auto" }}
                />
                <p>{menuItem.menuName}</p>
                <p className="price">{menuItem.menuPrice + "원"}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <h2>메뉴</h2>
      <div className="menu-board-items2">
        {menu.map((menuItem, index) => {
          return (
            <div className="menu-item">
              <img
                src="/image/youtube.png"
                alt="메뉴"
                style={{ width: "200px", height: "auto" }}
              />
              <p>{menuItem.menuName}</p>
              <p className="price">{menuItem.menuPrice + "원"}</p>
              <p>{menuItem.menuInfo}</p>
            </div>
          );
        })}
      </div>
      <img
        src="/image/youtube.png"
        alt="메뉴"
        style={{ width: "200px", height: "auto" }}
      />
      <p>불고기 비빔밥 </p>
      <p> 가격: 10,500원 </p>
      <p>
        달콤한 불고기와 신선한 야채, 고소한 참기름이 조화를 이루는 인기
        메뉴입니다.
      </p>
      <img
        src="/image/youtube.png"
        alt="메뉴"
        style={{ width: "200px", height: "auto" }}
      />
      <p>치킨너겟</p>
      <p>가격: 8,000원 </p>
      <p>
        바삭하게 튀긴 치킨너겟과 함께 제공되는 다양한 소스가 매력적인
        메뉴입니다.
      </p>
    </div>
  );
};

const MenuPhoto = () => {
  return (
    <div className="menu-photo">
      <h2>사진</h2>
      <div className="menu-image2">
        <img src="/image/youtube.png" alt="가게 로고" />
        <img src="/image/youtube.png" alt="가게 로고" />
        <img src="/image/youtube.png" alt="가게 로고" />
        <img src="/image/youtube.png" alt="가게 로고" />
        <img src="/image/youtube.png" alt="가게 로고" />
      </div>
    </div>
  );
};

const MenuReview = () => {
  const commentText =
    "으아아악으아아악으아아악으아아악으아아악으아아악으아아악으아아악으아으아아악으아아악으아악으아아악으아아악으아아악으아아악으아아악으아악으아아악으아아악으아아악으";
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const displayText =
    isExpanded || commentText.length <= 100
      ? commentText
      : `${commentText.slice(0, 100)}`;

  return (
    <div className="menu-review">
      <h2>리뷰</h2>
      <p>닉네임</p>
      <p>이미지파일</p>
      <p>댓글자리</p>
      <p>
        {displayText}
        {commentText.length > 100 && (
          <span className="toggle-button" onClick={handleToggle}>
            {isExpanded ? "접기" : "더보기"}
          </span>
        )}
      </p>
    </div>
  );
};

const Menuinfo = () => {
  return (
    <div className="menu-info">
      <div className="menu-intro">
        <h2>매장소개</h2>
        <p>
          맛있는 정원은 신선한 재료와 정성으로 만든 요리를 제공하는 아늑한
          식당입니다. 현대적인 감각으로 재해석한 전통 한식 메뉴를 다양하게 즐길
          수 있으며, 특히 제철 재료를 활용한 특선 요리는 고객님들께 큰 인기를
          얻고 있습니다. 우리 매장은 편안한 분위기를 자랑하며, 친구, 가족,
          연인과 함께 오기 좋은 공간입니다. 각 테이블마다 아기자기한 인테리어
          소품이 배치되어 있어 소중한 순간을 더욱 특별하게 만들어 줍니다. 또한,
          친절한 직원들이 여러분의 방문을 기다리고 있으며, 고객님의 만족을 위해
          항상 최선을 다하겠습니다. 맛있는 정원에서 특별한 한 끼를 즐겨보세요.
          여러분의 방문을 기다립니다!
        </p>
        <hr></hr>
      </div>
      <h2>매장정보</h2>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "400px", height: "232px" }}
        level={3}
      />
      <p>서울특별시 송파구 백제고분로41길 42-19 더블유123빌딩 1층</p>
      <h2>편의시설</h2>
      <div className="facilities">
        <div className="amenities">
          <p>편의시설이미지</p>
        </div>
        <h2>전화번호</h2>
        <p>02-442-5597</p>
      </div>
    </div>
  );
};

export default MenuView;
