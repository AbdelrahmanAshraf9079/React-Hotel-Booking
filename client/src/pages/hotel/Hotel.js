import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./Hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faHotel } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  
  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);
  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881660.jpg?k=c141cb0cf6b609db58337db0882fc28ab5c9e340e4392c0c6ca4c56515f1e636&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881662.jpg?k=757fec0d23c67491eda63a4bce2be431a4d18e36bf9cc8c40c1bb4f789d56195&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881664.jpg?k=c8cfdaaea6a5bc048be0c0b2e3534a2e228efa6f31fe694936521af20ce7ce48&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881676.jpg?k=45e2b44957c151f67b222635e30ddba4e1103c7994eb9b4737bc142496a766ee&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881679.jpg?k=0158c1b5b7bba1e508446de4be7e1715c53019109bba189e985fc3060cf82263&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/344881719.jpg?k=1dd1798cb301ced75cf7af16c6e0d5afb08c44adcf567c9f667e42ad9ddf7f03&o=&hp=1"
    },
  ]


  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
    }
  const handleMove = (direction)=>{
    let newSlideNumber;
    if(direction==="left"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
    }
    setSlideNumber(newSlideNumber);
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon 
        icon={faCircleXmark} 
        className="close"
        onClick={()=>setOpen(false)}
        />
        <FontAwesomeIcon 
        icon={faCircleArrowLeft} 
        className="arrow"
        />
        <div className="sliderWrapper">
          <img 
          src={photos[slideNumber].src} 
          alt="" 
          className="sliderImg"
          onClick={()=>handleMove("left")}
          />
        </div>
        <FontAwesomeIcon 
        icon={faCircleArrowRight} 
        className="arrow" 
        onClick={()=>handleMove("right")}/>
        </div>}
        <div className="hotelWrapper">

          <button className="bookNow"> Reserve or Book Now!</button>

        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faHotel}/>
          <span>Elton st. 125 New York</span>
        </div>
        <span className="hotelDistance">
          Excellent Location - 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay ove $114 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
        {photos.map((photo,i)=>(
          <div className="hotelImgWrapper">
          <img 
          onClick={()=>handleOpen(i)} 
          src={photo.src} 
          alt="" 
          className="hotelImg"/>
          </div>
        ))}  
        </div>
        <div  className="hotelDetails">
          <div  className="hotelDetailsText">
            <h1 className="hotelTitle">Stay in the heart of krakow</h1>
            <p className="hotelDesc">
              In the North Myrtle Beach district of Myrtle Beach, close to North Myrtle Beach, Quiet Oasis has free WiFi and a washing machine. The property is 6.4 km from Barefoot Landing and 12.4 km from Carolina Opry Theater.

              The air-conditioned vacation home is composed of 3 separate bedrooms, a fully equipped kitchen with a microwave and a fridge, and 3 bathrooms. Towels and bed linen are available in this accommodation.

              Alabama Theater is 5.5 km from the vacation home, while Barefoot Resort Norman Golf Course is 6.3 km from the property. The nearest airport is Myrtle Beach International Airport, 30.6 km from Quiet Oasis.
              Quiet Oasis has been welcoming Booking.com guests since Mar 5, 2022
            </p>
          </div>
            <div  className="hotelDetailsPrice">
              <h1 >Top Location: Highly rated by recent guests 9.6 !</h1>
              <span>
                Located in the real heart of karkow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
        </div>
        </div>
        <MailList/>
        <Footer />
      </div>
    </div>
  )
}

export default Hotel