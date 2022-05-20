import Header from "./components/header";
import Grid from "./components/grid";
import AboutUs from "./components/aboutUs";
import Features from "./components/features";
import Tours from "./components/tours";
import Stories from "./components/stories";

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
      </main>
    </>
  );
}

export default App;
