// @interfaces
interface IResultProps {
  result: {
    PRICE: string;
    HIGHDAY: string;
    LOWDAY: string;
    CHANGEPCT24HOUR: string;
    IMAGEURL: string;
    LASTUPDATE: string;
  };
}

const Result = ({ result }: IResultProps) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <div className="flex items-center gap-4 mt-8 text-white font-lato">
      <img
        className="block w-32"
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="crypto image"
      />
      <div>
        <p className="text-3xl">
          The price is:{" "}
          <span className="font-bold">{PRICE}</span>
        </p>
        <p>
          Highest price of the day:{" "}
          <span className="font-bold">{HIGHDAY}</span>
        </p>
        <p>
          Lowest price of the day:{" "}
          <span className="font-bold">{LOWDAY}</span>
        </p>
        <p>
          Variation last 24 hours:{" "}
          <span className="font-bold">{CHANGEPCT24HOUR}</span>
        </p>
        <p>
          Last update:{" "}
          <span className="font-bold">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
