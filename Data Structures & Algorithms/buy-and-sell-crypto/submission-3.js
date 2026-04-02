class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let buy = 0;
        let sell = 1;
        let max = 0;
        let profit = 0;

        while (sell < prices.length) {
            if (prices[sell] < prices[buy]) {
            buy = sell;
            sell++;
            } else {
            profit = prices[sell] - prices[buy];
            if (profit > max) {
                max = profit;
            }
            sell++;
            }
            
        }
        return max;
    }
}
