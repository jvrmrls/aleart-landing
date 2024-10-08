import WelcomeContainer from "#/components/domain/WelcomeContainer";
import ServicesContainer from "#/components/domain/ServicesContainer";
import HistoryContainer from "#/components/domain/HistoryContainer";
import ProductsContaier from "#/components/domain/ProductsContainer";
import TopBar from "#/components/shared/TopBar";
import ContactContainer from "#/components/domain/ContactContainer";
import EventsContainer from "#/components/domain/EventsContainer";
import BottomContainer from "#/components/domain/BottomContainer";

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
        <EventsContainer />
        <ProductsContaier />
        {/* <ContactContainer /> */}
        <BottomContainer />
      </main>
    </>
  );
}

export default App;
