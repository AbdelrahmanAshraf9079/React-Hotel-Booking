import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
             alt="" 
             className="featuredImg"/>
            <div className= "featuredTitles">
                <h1>Dublin</h1>
                <h1>Propertoes</h1>
            </div>
        </div>

        <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/402112672.jpg?k=fae8fbd8661617a7ea36abf6ae11e21be2fc7c307972f037d272a8d123b9fd73&o=&hp=1" 
                alt="" 
                className="featuredImg"/>
                <div className= "featuredTitles">
                <h1>Austin</h1>
                <h1>Propertoes</h1>
            </div>
        </div>   

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/282043682.jpg?k=f6f210654230d1a67b7bc4dfa85434b07c8edb4aa7887f433614e868642528c4&o=&hp=1" 
            alt="" 
            className="featuredImg"/>
            <div className= "featuredTitles">
                <h1>Mahalya</h1>
                <h1>Propertoes</h1>
            </div>
        </div> 

    </div>
  )
}

export default Featured



