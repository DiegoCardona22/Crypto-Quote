// @packages
import { useState } from "react";

// @interfaces
import { ICoins } from "../data/currency";

export const useSelectCryptoAndCurrency = (
  coinsLabel: string,
  coinsOptions: ICoins[]
) => {
  const [state, setState] = useState("");

  const SelectCoins = () => (
    <>
      <label className="text-white block font-lato font-bold text-xl mb-4">
        {coinsLabel}
      </label>
      <select
        className="w-full text-black border border-gray-300 rounded-md p-2 mb-5"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Select</option>
        {coinsOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectCoins];
};
