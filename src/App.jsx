import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="mt-10 md:mx-12">
        <Page />
      </section>
    </>
  );
}

export default App;
