import CustomImage from "./CustomImage"

function HeroSection() {

    const images=[
        
    ]

  return (
    <div className="section hero">
        <div className="col">
            <h1 className="title">What Are We <br></br>About</h1>
            <p className="info">FoodiesCorner is a place where you can please your soul and tummy with delicious food recepies of all cuisine And our service is absolutely free.So start exploring now.</p>
            <button className="btn">explore now</button>
        </div>
        <div className="col gallery">
            <CustomImage pt={"85%"}/>
        </div>
    </div>
  )
}

export default HeroSection