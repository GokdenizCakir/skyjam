// import logo from './logo.svg';
import NavBar from "./components/NavBar";
import BannerA from "./components/BannerA";
import Speakers from "./components/speakers/Speakers";
import SpeakersBar from "./components/speakers/SpeakersBar";
import Sponsors from "./components/sponsors/Sponsors";
import SponsorsBar from "./components/sponsors/SponsorsBar";
import Reason from "./components/Reason";
import Footer from "./components/Footer";
import questions from "./faq.json";

// import MiddleNav from "./components/MiddleNav";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import './index.css'

import "./fonts/ARCADE_N.TTF"

import useWindowDimensions from "./components/customhook/useWindowDimension";
import Marque from "./components/Marque";
import MentorsBar from "./components/speakers/MentorsBar";
import Mentors from "./components/speakers/Mentors";
import StantBarı from "./components/speakers/StantBarı";
import Stants from "./components/speakers/Stants";
import Banner from "./Banner";
import Prize from "./components/Prize";





function App() {

  const { height, width } = useWindowDimensions();




  return (
    <div className="App">

      <NavBar />
      <BannerA />
      <Marque />
      <Banner>
        <Banner.Header>Sıkça Sorulan Sorular</Banner.Header>
        {questions.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answer}</Banner.Text>
          </Banner.Entity>
        ))}
        <h4>
          Soracak başka sorularınız için skylab.ytu@gmail.com mail adresine ulaşabilirsiniz.
        </h4>
      </Banner>
      <Reason />
      <Prize />
      <SpeakersBar />
      <Speakers />
      <StantBarı/>
      <Stants/>
      <MentorsBar/>
      <Mentors/>
      <SponsorsBar />
      <Sponsors />
      <Footer />
      
    </div>
  );
}

export default App;
