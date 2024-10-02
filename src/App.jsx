import WelcomeContainer from "#/components/domain/WelcomeContainer";
import ServicesContainer from "#/components/domain/ServicesContainer";
import HistoryContainer from "#/components/domain/HistoryContainer";
import ProductsContaier from "#/components/domain/ProductsContainer";
import TopBar from "#/components/shared/TopBar";
import ContactContainer from "#/components/domain/ContactContainer";

function App() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <WelcomeContainer />
        <ServicesContainer />
        <HistoryContainer />
        <ProductsContaier />
        <ContactContainer />
      </main>
    </>
  );
}

export default App;
