import { BottomTabNavigator } from '../../components/BottomTabNavigator';
import { SearchField } from '../../components/SearchField';
import { DiscoverCard } from '../../components/DiscoverCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import BookImgMock from '../../assets/mock-book2.svg';
import MarkedBookIcon from '../../assets/marked-book-icon.svg';
import ThumbReviewMock from '../../assets/mock-reviewThumb.svg';

import 'swiper/swiper.scss';
import '../../styles/pages/Home.scss';

export const Home = () => {

  return (
    <>
      <div className="pageHome-container">
        <SearchField />
        <div className="pageHome-welcomeContainer">
          <h1>Hi,<strong> Mehmed Al Fatih </strong> 👋</h1>
        </div>
        <div className="pageHome-discoverContainer">
          <div className="pageHome-discoverTitle">
            <h2>Discover new book</h2>
            <button>
              More
          </button>
          </div>
          <div className="pageHome-discoverCarousel">
            <Swiper
              spaceBetween={5}
              slidesPerView={1.2}
            >
              <SwiperSlide> <DiscoverCard /> </SwiperSlide>
              <SwiperSlide> <DiscoverCard /> </SwiperSlide>
              <SwiperSlide> <DiscoverCard /> </SwiperSlide>
              <SwiperSlide> <DiscoverCard /> </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="pageHome-currentlyReadingContainer">
          <div className="pageHome-currentlyReadingTitle">
            <h2>Currently Reading</h2>
            <button>
              All
          </button>
          </div>

          <div className="pageHome-currentlyReadingCard">
            <div className="pageHome-currentlyReadingCardBackground" />
            <img src={BookImgMock} />
            <div className="pageHome-currentlyReadingTitleBook">
              <h1>Originals</h1>
              <h2>by Adam Grant</h2>

              <div>
                <img src={MarkedBookIcon} />
                Chapter
                <strong>2</strong>
                From 9
              </div>
            </div>
          </div>
        </div>

        <div className="pageHome-reviewsOfTheDays">
          <div className="pageHome-reviewsOfTheDaysTitle">
            <h2>Reviews of The Days</h2>
            <button>
              All Video
            </button>
          </div>

          <div className="pageHome-reviewsOfTheDaysCard">
            <img src={ThumbReviewMock} />
            <div>
              <h2>Don't Make Me Think - Steve Krug</h2>
              <div className="pageHome-reviewsOfTheDaysCardInfoContainer">
                <p>Jesse Showalter</p>
                <ul>
                  <li>5.2K Views</li>
                  <li>1 Week ago</li>
                </ul>
              </div>
              <p>"Don't Make Me Think" by Steve Krug is one of the first books I read when I was getting into digital design. It helped me move from designing things that just "look nice" to designing things that are usable, useful, memorable and simple to learn and use. </p>
            </div>
          </div>
        </div>

      </div>
      <BottomTabNavigator page="home" />
    </>
  );
}