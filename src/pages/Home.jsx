import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import saveImg from '../images/save.webp';
import graduationImg from '../images/graduation.png';
import plantingImg from '../images/planting.png';
import lightingImg from '../images/lighting.png';
import trashImg from '../images/trash.png';
import studentImg from '../images/student.webp';

function App() {
  return (
    <div>
      <Navbar />
      <section className="landingmainsection">
        <div className="heading">
          <p className="firstheading">Why Choose Us</p>
          <p className="secondaryheading">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            id molestiae nemo amet qui ad nesciunt cumque illum! Delectus
            laudantium eius fuga ad similique deserunt sit, atque soluta!
            Reiciendis, doloribus.
          </p>
          <button className="btn-circle">READ MORE</button>
        </div>
        <div className="headingimage">
          <img className="mainimage" src={saveImg} />
        </div>
      </section>

      <section className="servicessection">
        <div className="card">
          <img className="graduation" src={graduationImg} alt="" />
          <p className="title">
            {' '}
            <a
              style={{ color: 'white', fontSize: '22px' }}
              href="education.html"
            >
              {' '}
              Education
            </a>
          </p>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur quos sed exce
          </p>
        </div>
        <div className="card">
          <img className="sprout" src={plantingImg} alt="" />
          <p className="title">
            {' '}
            <a
              style={{ color: 'white', fontSize: '22px' }}
              href="education.html"
            >
              AgriTech
            </a>
          </p>
          <p className="subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            quaerat.
          </p>
        </div>
        <div className="card">
          <img className="lighting" src={lightingImg} alt="" />
          <p className="title">
            {' '}
            <a
              style={{ color: 'white', fontSize: '22px' }}
              href="education.html"
            >
              Energy
            </a>
          </p>
          <p className="subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            quaerat.
          </p>
        </div>
        <div className="card">
          <img className="trash" src={trashImg} alt="" />
          <p className="title">
            {' '}
            <a
              style={{ color: 'white', fontSize: '22px' }}
              href="education.html"
            >
              Waste Management
            </a>
          </p>
          <p className="subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            quaerat.
          </p>
        </div>
      </section>

      <section className="aboutus">
        <div className="firstabout">
          <img className="student" src={studentImg} alt="" />
        </div>
        <div className="secondabout">
          <h1 className="contacthead">About Us</h1>
          <h2 className="contacthead">Our Company is Here to Help You.</h2>
          <h3 className="contacthead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            enim eos vero beatae repellat quasi! Quibusdam minus est
            perferendis, id ipsa impedit numquam magnam dolorem?
          </h3>
          <button className="btn-circle">READ MORE</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
