// @packages
import { useState, useEffect, Dispatch, SetStateAction, FormEvent } from "react";

// @scripts
import Error from "./Error";
import { ICoins, coins } from "../data/currency";
import { useSelectCryptoAndCurrency } from "../Hooks/useSelectCrypto";

// @interfaces
interface ICurrency {
  coins: ICoins;
  crypto: ICoins;
  currency: ICoins;
}

interface IFormProps {
  setCurrency: Dispatch<SetStateAction<ICurrency>>;
}

const Form = ({ setCurrency }: IFormProps) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [currency, SelectCoins] = useSelectCryptoAndCurrency("Choose Your Currency", coins);
  const [crypto, SelectCryptos] = useSelectCryptoAndCurrency("Choose Your Crypto", cryptos);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([currency, crypto].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setCurrency({
      currency,
      crypto
    } as unknown as ICurrency);
  }

  const getCryptoApi = async () => {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

    const response = await fetch(url);
    const result = await response.json();

    const arrayCryptos = result.Data.map(( crypto: { CoinInfo: { Name: string; FullName: string; }; } ) => {
      const objectCryptos = {
        id: crypto.CoinInfo.Name,
        name: crypto.CoinInfo.FullName
      }

      return objectCryptos;
    })
    
    setCryptos(arrayCryptos);
  };

  useEffect(() => {
    getCryptoApi();
  }, []);

  return (
    <>
      {error && <Error>All Fields Are Required</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCryptos />
        <input
          className="bg-blue-500 hover:bg-blue-700 border-none w-full py-2 px-4 text-white font-bold uppercase text-1xl rounded-md cursor-pointer"
          type="submit"
          value="quote"
        />
      </form>
    </>
  );
};

export default Form;
