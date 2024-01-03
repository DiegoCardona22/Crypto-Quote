// @packages
import { useState, useEffect } from "react";

// @scripts
import CryptoImage from "./img/crypto-image.png";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import { ICoins } from "./data/currency";

// @interfaces
interface ICurrency {
  coins: ICoins;
  crypto: ICoins;
  currency: ICoins;
}

// @interfaces
interface IResultProps {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGEPCT24HOUR: string;
  IMAGEURL: string;
  LASTUPDATE: string;
}

const App = () => {
  const [currency, setCurrency] = useState({} as ICurrency);
  const [cryptoResult, setCryptoResult] = useState({} as IResultProps);
  const [loading, setLoading] = useState(false);

  const getQuoteCryptocurrency = async () => {
    setLoading(true);
    const { currency: coins, crypto } = currency;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coins}`

    const response = await fetch(url);
    const result = await response.json();
    setCryptoResult(result.DISPLAY[crypto.toString()][coins.toString()]);
    setLoading(false);
  };

  useEffect(() => {
    if (Object.keys(currency).length > 0) {
      getQuoteCryptocurrency();
    }
  }, [currency]);

  return (
    <div className="max-w-6xl mx-auto w-11/12 md:grid md:grid-cols-2 md:gap-8">
      <img
        className="max-w-xl w-5/6 mx-auto md:mx-0 md:ml-auto md:mr-0 mt-16 md:mt-0"
        src={CryptoImage}
        alt="Crypto Image"
      />

      <div className="md:ml-8 mt-8 md:mt-0">
        <h1 className="font-lato text-white text-center font-bold text-2xl md:text-4xl mt-8 mb-10 relative">
          Crypto Quote
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-28 bg-blue-500"></span>
        </h1>

        <Form setCurrency={setCurrency} />

        {loading && <Spinner />}
        {!loading && cryptoResult && cryptoResult.PRICE && <Result result={cryptoResult} />}
      </div>
    </div>
  );
};

export default App;
