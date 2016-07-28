//the homepage. Rendered from __dirname + '/'
var Home = (props) => (
  <div className="homepage">
    <Header />
    <div><img className="center-block" style={{width: window.innerWidth}} src="imgs/bgsh.jpg"></img></div>
    <div className="homebox">
      <div className="homeIntro center-block">
        <p>Welcome to FoodFairy.com! Just tell the Fairy what ingredients you have lying around your house and she'll whip you up a recipe in no time!</p>
      </div>
      <SearchBox searchAPI={props.searchAPI}/>
    </div>
  </div>
)

window.Home = Home;
