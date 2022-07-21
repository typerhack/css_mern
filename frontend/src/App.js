import Header from "./components/header";
import Grid from "./components/grid";
import AboutUs from "./components/aboutUs";
import Features from "./components/features";
import Tours from "./components/tours";
import Stories from "./components/stories";
import Booking from "./components/booking"
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      {/* <Grid /> */}
      <main>
        <AboutUs />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
    <Footer />
    </>
  );
}

export default App;
