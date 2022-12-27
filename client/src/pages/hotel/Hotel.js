import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./Hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faHotel,
  faLocation,
  faLocationArrow,
  faLocationPin,
  faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation,useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { parseWithOptions } from "date-fns/fp";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays+1;
  }
  const days = dayDifference(dates[0].endDate,dates[0].startDate);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  // const photos = [
  //   {
  //     src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881660.jpg?k=c141cb0cf6b609db58337db0882fc28ab5c9e340e4392c0c6ca4c56515f1e636&o=&hp=1"
  //   },
  //   {
  //     src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881662.jpg?k=757fec0d23c67491eda63a4bce2be431a4d18e36bf9cc8c40c1bb4f789d56195&o=&hp=1"
  //   },
  //   {
  //     src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881664.jpg?k=c8cfdaaea6a5bc048be0c0b2e3534a2e228efa6f31fe694936521af20ce7ce48&o=&hp=1"
  //   },
  //   {
  //     src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881676.jpg?k=45e2b44957c151f67b222635e30ddba4e1103c7994eb9b4737bc142496a766ee&o=&hp=1"
  //   },
  //   {
  //     src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881679.jpg?k=0158c1b5b7bba1e508446de4be7e1715c53019109bba189e985fc3060cf82263&o=&hp=1"
  //   },
  //   {
  //     src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881719.jpg?k=1dd1798cb301ced75cf7af16c6e0d5afb08c44adcf567c9f667e42ad9ddf7f03&o=&hp=1"
  //   },
  // ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const handleClick = ()=>{
  if(user){
    setOpenModel(true);
  }else{
    navigate("/login");
  }
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                  onClick={() => handleMove("left")}
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("right")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow"> Reserve or Book Now!</button>

            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent Location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay ove ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.description}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of karkow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id}/> }
    </div>
  );
};

export default Hotel;
