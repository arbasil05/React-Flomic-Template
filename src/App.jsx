import './App.css'

function App() {

  return (
    <>

      {/* Mini header */}
      <header className="header-1">
        <div className="header-1-links">
          <ul>
            <li>LINK 1</li>
            <li>|</li>
            <li>LINK 2</li>
            <li>|</li>
            <li>LINK 3</li>
            <li>|</li>
            <li>LINK 4</li>
            <li>|</li>
            <li>LINK 5</li>
          </ul>
        </div>

        <div className="header-1-phone-email">
          <p>&#9742; +00 (123) 456 7890</p>
          <p>&#9993; INFO@DOMAIN.COM</p>

        </div>

      </header>

      <header className="header-2">
        <div className="header-2-logo">
          <img src="/mainLogo.png" alt="Main Logo" />
          <div className="header-2-logo-text">
            <h1>FLOMIC</h1>
            <h5>LOGISTICS PVT. LTD</h5>
          </div>
        </div>
        <div className="header-2-nav-links">
          <ul>
            <li id='nav-links-home'>HOME</li>
            <li>▼ PAGES</li>
            <li>▼ DROPDOWN</li>
            <li>LINK TEXT</li>
            <li>LINK TEXT</li>
          </ul>
        </div>
      </header>

      <section className='display-card-section'>
        <div className="card-items">
          <div className="card-header">
            <p>QUISQUE VEHICULA <br /> URNA AMET</p>
          </div>
          <div className="card-body">
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
          </div>
          <div className="card-expand">
            <p>READ MORE &#187;</p>
          </div>
        </div>

        <div className="card-items">
          <div className="card-header">
            <p>QUISQUE VEHICULA <br /> URNA AMET</p>
          </div>
          <div className="card-body">
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
          </div>
          <div className="card-expand">
            <p>READ MORE &#187;</p>
          </div>
        </div>

        <div className="card-items">
          <div className="card-header">
            <p>QUISQUE VEHICULA <br /> URNA AMET</p>
          </div>
          <div className="card-body">
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
            <p>ullamcorper mauris sit amet</p>
          </div>
          <div className="card-expand">
            <p>READ MORE &#187;</p>
          </div>
        </div>

      </section>

      <section className="product-section">
        <div className="product-left-display">
          <h1>MAECENAS LIBERO NUNC EU ERAT</h1>

          <div className="product-left-display-box">
            <div className="top-half"></div>
            <div className="bottom-half">
              <h1>URNA SIT AMET PULVINAR</h1>
              <p>Aenan semper elementum tellus, ut placerat leo. Quisque <br /> Vechlcula, urna sit amet...</p>
              <button>READ MORE &#187; </button>
            </div>
          </div>

        </div>
        <div className="product-right-display"></div>

        <div className="product-right-display">
          <h1>ETIAM EROS NULLA POSUERE</h1>
          <div className="product-right-display-box">
            <div className="rows">
              <div className="image"></div>
              <div className="text-content">
                <h1>PHALLEUS MASSA FELIS IN</h1>
                <p>By <span>A Name</span> Friday, 6 April 2045</p>
                <p>Aenan semper elementum tellus, ut placerat <br /> leo. Quisque Vechlcula, urna sit amet...</p>
                <button>READ MORE &#187; </button>
              </div>
            </div>

            <div className="rows">
              <div className="image"></div>
              <div className="text-content">
                <h1>PHALLEUS MASSA FELIS IN</h1>
                <p>By <span>A Name</span> Friday, 6 April 2045</p>
                <p>Aenan semper elementum tellus, ut placerat <br /> leo. Quisque Vechlcula, urna sit amet...</p>
                <button>READ MORE &#187; </button>
              </div>
            </div>

            <div className="rows">
              <div className="image"></div>
              <div className="text-content">
                <h1>PHALLEUS MASSA FELIS IN</h1>
                <p>By <span>A Name</span> Friday, 6 April 2045</p>
                <p>Aenan semper elementum tellus, ut placerat <br /> leo. Quisque Vechlcula, urna sit amet...</p>
                <button>READ MORE &#187; </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="information-section">
        <div className="information-section-title">
          <h1>DONEC FACILISIS VOLUTPAT LIGULA EGESTAST.</h1>
          <p>Integer varius enim id augue faucivus mattis. Pellentesque sceletisque nibh eu mi convallis, ac feugiat nulla tincidunt.</p>
        </div>

        <div className="information-section-card-wrap">
          <div className="information-section-card">
            <div className="card-partitions-left">
              <img src="https://placehold.co/250x150/png" alt="" />

            </div>
            <div className="card-partitions-right">
              <p>QUISQUE VEHICULA <br /> URNA SIT AMET <br />PULVINAR DAPIBUS</p>
              <button>READ MORE &#187; </button>
            </div>
          </div>
          <div className="information-section-card">
            <div className="information-section-card">
              <div className="card-partitions-left">
                <img src="https://placehold.co/250x150/png" alt="" />

              </div>
              <div className="card-partitions-right">
                <p>QUISQUE VEHICULA <br /> URNA SIT AMET <br />PULVINAR DAPIBUS</p>
                <button>READ MORE &#187; </button>
              </div>
            </div>

          </div>
        </div>


      </section>

      <section className="contact-information-section">
        <div className="personal-information">
          <h2>LOREM IPUSUM DOLOR</h2>
          <p>Donec sed ultrices eros. Nulla facilisi. Aliquam purus urna, porta <br />non faucibus nec,lucutus vitae antae. Suspendisse potenti. Morbi <br />sollicitudin viverra urna, vel auctor purus volutpat vel.</p>
          <p>&#128204; Street Name & Number, Town, Postcode/Zip</p>
          <p>&#9742; +00 (123) 456 7890</p>
          <p>&#9742; info@domain.com</p>
        </div>

        <div className="quick-links">
          <h2>QUICK LINKS</h2>
          <ul>
            <li>Home Page</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="keep-in-touch">
          <h2>KEEP IN TOUCH</h2>
          <input type="text" placeholder='Email' />
          <button>SUBMIT</button>
          <div className="keep-in-touch-icons">

          </div>
        </div>



      </section>

      <footer className='footer-section'>
        <p>Copyright &copy; 2025 - All Rights Reserved - Flomic</p>

      </footer>





    </>
  )
}

export default App
