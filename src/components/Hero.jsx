import './Hero.css';

const Hero=()=>{
    return(
        <>
        {/* Hero Section */}
      <main className="px-3  main-cover my-3">
      {/* <img src={logo_img} alt="" /> */}
      <h1 style={{ letterSpacing: "8px" }}>Welcome to BREWLINE </h1>
      <p className="lead ">
        At BREWLINE, we serve a variety of delicious coffee and recipes. You
        can even create your own custom cup, choosing the ingredients you like
        best. Plus, you can save your favorites for next time. Come in, relax,
        and enjoy the perfect coffee made just for you!
      </p>
    </main>
    </>
    )
}
export default Hero;