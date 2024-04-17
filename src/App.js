import "./App.css";
import priceCardDetails from "./priceCardConfig";

function App() {
  return (
    <div className="pricing-table">
      {priceCardDetails.map((priceCard, index) => (
        <div
          className={`${
            priceCard?.isRecommended ? "price-card recommended" : "price-card"
          }`}
        >
          <h2>{priceCard?.planCategory}</h2>
          <p className="price">{priceCard?.planPrice}</p>
          <ul>
            {priceCard?.planFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>{priceCard?.buyNow}</button>
        </div>
      ))}
    </div>
  );
}

export default App;
