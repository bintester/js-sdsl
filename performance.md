This is Js-sdsl performance test.

Automatically generated by [github action](https://github.com/js-sdsl/js-sdsl/actions/workflows/build.yml).

To get source code you can go to [github](https://github.com/js-sdsl/js-sdsl/tree/main/performance).

## Environment

```bash
Linux 6.5.0-1023-azure x64
Node.JS 16.20.2
V8 9.4.146.26-node.26
AMD EPYC 7763 64-Core Processor × 4
```

## Result

### Stack

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| push                    | 1000000                 | 2000000                 | 21                      |
| clear                   | 1                       | 2000000                 | 0                       |

### Queue

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| push                    | 1000000                 | 2000000                 | 12                      |
| clear                   | 1                       | 2000000                 | 1                       |

### PriorityQueue

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| constructor             | 1                       | 1000000                 | 16                      |
| push                    | 1000000                 | 2000000                 | 30                      |
| pop all                 | 1                       | 2000000                 | 367                     |

### LinkList

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| pushBack                | 1000000                 | 2000000                 | 50                      |
| popBack                 | 1000000                 | 2000000                 | 11                      |
| getElementByPos         | 1000                    | 2000000                 | 2                       |
| setElementByPos         | 1000                    | 2000000                 | 2                       |
| eraseElementByPos       | 50                      | 2000000                 | 178                     |
| insert                  | 50                      | 2000050                 | 224                     |
| eraseElementByValue     | 1                       | 2000050                 | 11                      |
| reverse                 | 1                       | 1999950                 | 9                       |
| unique                  | 1                       | 2000050                 | 18                      |
| sort                    | 1                       | 3000000                 | 1806                    |
| clear                   | 1                       | 3000000                 | 0                       |
| pushFront               | 1000000                 | 1000000                 | 15                      |
| popFront                | 1000000                 | 1000000                 | 10                      |
| merge                   | 1                       | 1000000                 | 54                      |

### Deque

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| pushBack                | 1000000                 | 2000000                 | 37                      |
| popBack                 | 1000000                 | 2000000                 | 54                      |
| getElementByPos         | 1000000                 | 2000000                 | 30                      |
| setElementByPos         | 1000000                 | 2000000                 | 20                      |
| eraseElementByPos       | 50                      | 2000000                 | 208                     |
| insert                  | 50                      | 2000050                 | 1357                    |
| eraseElementByValue     | 1                       | 2000050                 | 30                      |
| reverse                 | 1                       | 1999950                 | 92                      |
| unique                  | 1                       | 2000050                 | 31                      |
| sort                    | 1                       | 2999950                 | 981                     |
| clear                   | 1                       | 2999950                 | 0                       |
| pushFront               | 2000000                 | 2000000                 | 23                      |
| popFront                | 1000000                 | 2000000                 | 9                       |
| shrinkToFit             | 1                       | 1000000                 | 0                       |

### OrderedSet

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| constructor             | 1                       | 1000000                 | 966                     |
| insert                  | 1000000                 | 2000000                 | 1577                    |
| eraseElementByKey       | 1000000                 | 3000000                 | 244                     |
| eraseElementByPos       | 10                      | 3000000                 | 944                     |
| union                   | 1                       | 2999990                 | 666                     |
| lowerBound              | 1000000                 | 2999990                 | 744                     |
| upperBound              | 1000000                 | 2999990                 | 677                     |
| reverseLowerBound       | 1000000                 | 2999990                 | 694                     |
| reverseUpperBound       | 1000000                 | 2999990                 | 1069                    |

### OrderedMap

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| constructor             | 1                       | 1000000                 | 1507                    |
| setElement              | 1000000                 | 2000000                 | 1999                    |
| eraseElementByKey       | 1000000                 | 2000000                 | 331                     |
| eraseElementByPos       | 10                      | 2000000                 | 1088                    |
| union                   | 1                       | 2999990                 | 482                     |
| lowerBound              | 1000000                 | 2999990                 | 759                     |
| upperBound              | 1000000                 | 2999990                 | 702                     |
| reverseLowerBound       | 1000000                 | 2999990                 | 725                     |
| reverseUpperBound       | 1000000                 | 2999990                 | 717                     |

### HashSet

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| constructor             | 1                       | 1000000                 | 1049                    |
| insert                  | 1000000                 | 2000000                 | 1290                    |
| find                    | 2000000                 | 2000000                 | 1208                    |
| eraseElementByKey       | 2000000                 | 2000000                 | 1568                    |

### HashMap

| testFunc                | testNum                 | containerSize           | runTime / ms            |
|-------------------------|-------------------------|-------------------------|-------------------------|
| constructor             | 1                       | 1000000                 | 912                     |
| setElement              | 1000000                 | 2000000                 | 1287                    |
| getElementByKey         | 2000000                 | 2000000                 | 1011                    |
| eraseElementByKey       | 2000000                 | 2000000                 | 1838                    |
