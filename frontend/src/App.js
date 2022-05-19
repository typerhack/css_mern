import Header from "./components/header";
import Grid from "./components/grid";
import AboutUs from "./components/aboutUs";
import Features from "./components/features";

function App() {
  return (
    <>
      <Header />
      {/* <Grid /> */}
      <main>
        <AboutUs />
        <Features />
      </main>
    </>
  );
}

export default App;
