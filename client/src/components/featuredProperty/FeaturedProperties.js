import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading"

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/308234590.jpg?k=dc579c52926784bc130462e0520fb0db3d546bd3e95636864239a2aaf54d998a&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/308234594.jpg?k=30cf3456a12e8cd77bbc50dd1548d5d9267e5407d8a4b6d9e5117766f88d1867&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/304789279.jpg?k=75629cb6254e9beb6eeda2e311ccd3cf5c124de6332ca2a150a8a780d7b75136&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312839984.jpg?k=d7b0ee5b19763baf0bc38c632ba46099f04342de65f4f554bb407891dd1d7d73&o=&hp=1",
];
return (
    <div className="fp">
    {loading ? (
        <Loading/>
    ) : (
        <>
        {data.map((item,i) => (
            <div className="fpItem" key={item._id}>
            <img src= {images[i]}
            alt=""
            className="fpImg" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating &&
            <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
            </div>
            }
            </div>
        ))}
        </>
    )}
    </div>
);
};

export default FeaturedProperties;
