# perftest

Quick basic tool to measure memory footprint of a collection and find operations.

Output on a MacBook Pro (Retina, 15-inch, Late 2013):

```
-------------------------------------------------
Handling 30 items: 2088 BYTES
find one: 0.214ms
find index and return next 20 items: 0.211ms
-------------------------------------------------
Handling 300 items: 21522 BYTES
find one: 0.030ms
find index and return next 20 items: 0.052ms
-------------------------------------------------
Handling 30000 items: 2272364 BYTES
find one: 1.407ms
find index and return next 20 items: 1.300ms
-------------------------------------------------
Handling 300000 items: 23321176 BYTES
find one: 6.369ms
find index and return next 20 items: 4.879ms
-------------------------------------------------
Handling 3000000 items: 239222088 BYTES
find one: 66.311ms
find index and return next 20 items: 37.263ms
```
