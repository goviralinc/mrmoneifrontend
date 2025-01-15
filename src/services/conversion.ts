import axios from "axios";

export const fetchConversionRates = async (selectedCurrency: string) => {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/NGN");
        const data = await response.json();

        const moneiToUsd = data.rates.USD;
        let rates: { [key: string]: number } = {};

        console.log(selectedCurrency);

        // Handle fiat currencies (NGN, USD, EUR)
        if (selectedCurrency === 'NGN' || selectedCurrency === 'USD' || selectedCurrency === 'EUR') {
            rates = {
                NGN: 1,
                USD: 1 / (data.rates.USD || (1 / 0.000645)),
                EUR: 1 / (data.rates.EUR || (1 / 0.00063)),
            };
        }
  
        // Handle cryptocurrency (USDT, BNB)
        if (selectedCurrency === 'USDT' || selectedCurrency === 'BNB') {
            const cryptoCurrency = selectedCurrency === 'USDT' ? 'tether' : 'binancecoin'; // Adjust API query
            console.log(`Fetching price for ${cryptoCurrency} in USD`); // Debug log
            const cryptoResponse = await axios.get(
                `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoCurrency}&vs_currencies=usd`
            );
        
            const priceInUSD = cryptoResponse.data[cryptoCurrency]?.usd;
    
            if (!priceInUSD) {
                throw new Error(`Failed to fetch price for ${cryptoCurrency}`);
            }
    
            const moneiToCurrency = 1/(moneiToUsd/priceInUSD);
            // Convert Monei to USDT or BNB
            if (selectedCurrency === 'USDT') {
                
                rates = { USDT: moneiToCurrency }; // 1 Monei = moneiToUsd / USDT price
            } else if (selectedCurrency === 'BNB') {
                rates = { BNB: moneiToCurrency }; // 1 Monei = moneiToUsd / BNB price
            }
        }

        return rates;
    } catch (error) {
        console.error("Error fetching conversion rates:", error);
        throw new Error("Unable to fetch conversion rates");
    }
  };
  