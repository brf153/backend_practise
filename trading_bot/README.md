## Finance Jargons:
- OrderBook
- Limit Order/ Market Order
- Market Depth
- Liquidity
- Maker vs Taker

## Liquidity / market depth:
- How many orders (price/qty) does the book have
- Can it handle big orders without crashing
- More liquidity = Better exchange
- Market makers provide liquidity.

## What is the Market Order?
- Buying a qty off the orderbook.
- Usually used by retail.
- Usually preceeded by a getQuote req.
- Usually higher fee than limit order.

## Maker vs Taker:
- The person whose orders exist on the book is called a maker (hence market maker).
- The person who gets their order filled is called taker.
- Taker fee is usually higher than maker fee because they take away liquidity from the book.

## Where does latency matter?

### Exchange
- Order placement time
- Time to fetch the orderbook
- Realtime updates on the orderbook

### Trader
- Order acknowledgement time
- Order cancel time
- Their order priority

## How is latency made better for the exchange?
- Using faster programming language
- Faster serialization/deserialization of data
- In memory orderbooks(many times the orderbooks are stored in memory i.e. variables and not in databases.)

## How is latency made better for the a Trader/MM?
- Being closer to the trading server.
- Having multiple connections open.
- Faster serialization/deserialization.
- Faster oracles/prediction models.

## Assignment
Building an Exchange OrderBook:
- Lets write an orderbook in nodejs
- Users can <br>
a) Place limit orders. <br>
b) If an order can be executed (partially or completely) it is filled.<br>
c) Users can query the depth chart.<br>
d) Users can get back their balance.
- Assignment<br>
a) Allow users to fetch quotes for market orders.<br>
b) Send a market order using the endpoint above.
