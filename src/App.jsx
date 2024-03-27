import './App.css';
import logo from './assets/nav-logo.svg'
import PhoneImg from './assets/IMGphone.svg'

function App() {

  return (
    <>

      <div className="container">
        <div className="navbar">
          <img src={logo} alt="" />

          <div className="nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <button className='btn'>Get Started</button>

        </div>

        <div className="hero">
          <div className="text">
            <h1>Connecting all <br /> your banking <br /> needs</h1>
            <p>A smart mobile application you can control your <br /> business needs</p>

            <button className='btn1'>Download App</button>
            <button className='btn2'>Download App</button>

          </div>

          <div className="foto">
            <img src={PhoneImg} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
