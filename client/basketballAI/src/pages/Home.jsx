const Home = () => {
  return (
    <div className="homePage">
      <h1 className="appName">BasketballAi</h1>
      <p className="desc">Select two NBA teams and predict who wins between them based on recent performance!</p>
      <button className="enter"><a href="/select">Get Started</a></button>
    </div>
  )
}

export default Home;