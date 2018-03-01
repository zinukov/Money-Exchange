module.exports = function makeExchange(currency) {
   if (currency > 10000) {
       return {error: " You are rich, my friend! We don't have so much coins for exchange");
   }
   var currencies = {
       "H":0,
       "Q":25,
       "D":10,
       "N":5,
       "p":1
   };
   var currentCurrency = currencyl
   var result = {};
   
   for (var key in currencies) {
       if (currentCurrency >= currencies [Key]) {
           var value = Math.floor(currentCurrency) / currencies[key]);
           result[key] = value;
           currentCurrency -= value * currencies[key];
       }
   }
   return result;
}
