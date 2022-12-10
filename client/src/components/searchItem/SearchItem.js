import "./SearchItem.css"

function SearchItem() {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/339976428.jpg?k=03aaa4412aa15910a63c7689fb024e0b8b2a15e5357769911e5de03005424d85&o=&hp=1" 
        alt=""
        className="siImg"
         />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio . 1 bathroom . 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this is great price today!
            </span>
        </div>
        <div className="siDetails">
        <div className="siRating">
        <span >Excellent</span>
        <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
        <span className="siPrice">$123</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">See availavility</button>
        </div>
        </div>
    </div>
  )
}

export default SearchItem