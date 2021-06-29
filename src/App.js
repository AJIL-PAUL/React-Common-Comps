import TabContainer from "./Components.js/TabContainer";
import Button from "./Components.js/Commom/Button";

function App() {
  return (
    <div className="w-full flex py-10 px-10 flex-col">
      <h1>Tabs</h1>
      <div className="mr-auto">
        <TabContainer />
      </div>
      <Button className="bg-blue-600 px-8 py-2 text-white mt-10 mr-auto">
        Ripple Button
      </Button>
    </div>
  );
}

export default App;
