"use strict";

let test = require('tape');
let sinon = require("sinon");

/**
 * @param {number} n
 * @param {number[][]} routes
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 const findCheapestPrice = function(n, routes, src, dst, k) {
    let prices = Array(n).fill(Number.MAX_SAFE_INTEGER)
    prices[src] = 0
    
    for (let i = 0; i < k + 1; i++) {
        const tmp = prices.slice()
        for (let [s, d, p] of routes) {
            if (prices[s] === Number.MAX_SAFE_INTEGER) continue // we need to start from 0
            
            tmp[d] = Math.min(tmp[d], prices[s] + p) // calculate cost from src to dst, update if it is smaller
        }
        prices = tmp
    }
    return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst] 
    // return -1 if there is no route to dst
};

test('runs base case', t => {
    let n = 4;
    let flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]];
    let src = 0;
    let dst = 3;
    let k = 1;
    let cheapest = findCheapestPrice(n,flights,src,dst,k);
    t.equal(cheapest, 700);
    t.end();
})


test('runs subsequent n plus one case', t => {
    let n = 8;
    let trains = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200],[3,4,255],[4,0,255],[3,5,10],[5,6,20],[6,7,30],[7,0,40]];
    let src = 3;
    let dst = 0;
    let cheapest = findCheapestPrice(n,trains,src,dst,2);
    t.equal(cheapest, 510);
    let secondCheapest = findCheapestPrice(n,trains,src,dst,3);
    t.equal(secondCheapest, 100);
    t.end();
})


module.exports = findCheapestPrice

