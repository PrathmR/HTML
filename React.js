<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Job Portal</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\nnav {\n    /*max-width:55%;*/\n    margin-top: 5px;\n    background-color:#ffffff;\n    color: #fff;\n    border-radius: 5px;\n    margin: 0 2px;\n    display: flex;\n    justify-content:space-around;\n    align-items:end;\n   /* max-width: 55%;*/\n    /* Truncate 25% from each side */\n    margin: 0 auto;\n    /* Center the navbar horizontally */\n    overflow-x: auto;\n    /* Enable horizontal scrolling if needed */\n }\n\n nav a {\n     color: rgb(0, 0, 0);\n     font-weight: 600;\n     text-decoration: none;\n     padding: 30px 15px; \n }\n\n/* Hero Section */\n.hero {\n    height:600px;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n  /*  background: linear-gradient(135deg,#292e91, #292e91);*/\n    color: white;\n  background-image: url(May\\ Admin\\ Block.jpg);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.content {\n    text-align: center;\n    margin-bottom: 3%;\n    position: relative;\n    \n}\n\n.content h1 {\n    font-family: 'Bold';\n    font-size: 160px;\n    color: #fff;\n    font-weight: 600;\n    transition: 0.5s ;\n   \n\n}\n\n.content h3 {\n    font-size: 60px;\n    color: #fff;\n    font-weight: 400;\n    align-items:center;\n    justify-content: center;\n    animation: float 3s ease-in-out infinite;\n}\n"
    }}
  />
  <nav>
    <div className="logo">
      <img src="logo3.png" alt="logo" height="80px" />
    </div>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Portfolios</a>
    <a href="#">Contact</a>
  </nav>
  {/* Hero Section */}
  <section className="hero">
    <div className="hero-content">
      <div className="content">
        <h1>dhaRti</h1>
        <h3>Build your career with us!</h3>
      </div>
    </div>
  </section>
</>
