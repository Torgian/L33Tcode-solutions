/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Create two pointers for buy and sell
    let buy = 0
    let sell = 1

    let maxProfit = 0

    while (sell < prices.length) {
        if (prices[sell] > prices[buy]) {
            // Check the sum against the maxprofit so far, and update if sum is more than maxProfit
            const sum = prices[sell] - prices[buy]
            if (sum > maxProfit) {
                maxProfit = sum
            }
            // In this case, only increment `sell` by one
            sell += 1
        } else {
            // Buy could be higher than sell, so in this case we 
            // make the `buy` pointer the index of the `sell` pointer.
            // Then we increment the sell pointer and restart the loop.
            buy = sell
            sell += 1
        }
    }

    return maxProfit
};

// Another method, just as fast, with a for loop but probably slightly harder to understand

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let price = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (currentPrice < price) {
            price = currentPrice;
            continue;
        }

        if (currentPrice - price > maxProfit) {
            maxProfit = currentPrice - price;
        }
    }

    return maxProfit;
};