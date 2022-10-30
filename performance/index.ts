import testHashMap from './HashContainerTest/HashMap.performance';
import testHashSet from './HashContainerTest/HashSet.performance';
import testPriorityQueue from './OtherContainerTest/PriorityQueue.performance';
import testQueue from './OtherContainerTest/Queue.performance';
import testStack from './OtherContainerTest/Stack.performance';
import testDeque from './SequentialContainerTest/Deque.performance';
import testLinkList from './SequentialContainerTest/LinkList.performance';
import testOrderedMap from './TreeContainerTest/OrderedMap.performance';
import testOrderedSet from './TreeContainerTest/OrderedSet.performance';
import path from 'path';
import env from './utils/env';
import { writeFileSync } from 'fs';

export type testReportFormat = {
  containerName: string,
  reportList: {
    testFunc: string,
    containerSize: number,
    testNum: number,
    runTime: number
  }[];
}

type testFunc = (arr: number[], testNum: number) => testReportFormat['reportList'];

const testNum = 1000000;
const arr: number[] = [];
for (let i = 0; i < testNum; ++i) arr.push(Math.random() * testNum * 2);

const testFuncMap: Record<string, testFunc> = {
  Stack: testStack,
  Queue: testQueue,
  PriorityQueue: testPriorityQueue,
  LinkList: testLinkList,
  Deque: testDeque,
  OrderedSet: testOrderedSet,
  OrderedMap: testOrderedMap,
  HashSet: testHashSet,
  HashMap: testHashMap
};

const testNumMap: Record<string, number> = {
  HashSet: testNum / 10,
  HashMap: testNum / 10
};

function testContainer(containerName: string) {
  return {
    containerName,
    reportList: testFuncMap[containerName]([...arr], testNumMap[containerName] ?? testNum)
  };
}

function main(taskQueue: string[]) {
  const testReport: testReportFormat[] = [];
  console.log('Container performance test start...');

  for (const containerName in testFuncMap) {
    if (taskQueue.length === 0 || taskQueue.includes(containerName)) {
      console.log(`${containerName} performance test start...`);
      testReport.push(testContainer(containerName));
      console.log(`${containerName} performance test end.`);
    }
  }

  console.log('All container performance test end.');
  // eslint-disable-next-line compat/compat
  console.clear();

  console.log('='.repeat(35), 'Report', '='.repeat(35));
  testReport.forEach(report => {
    console.log('='.repeat(35), report.containerName, '='.repeat(35));
    // eslint-disable-next-line compat/compat
    console.table(report.reportList);
  });
  console.log('='.repeat(35), 'Report', '='.repeat(35));

  console.log('saving result...');
  let content = env();
  content += '\n## Result\n\n';
  const savePath = path.resolve(__dirname, '../performance.md');
  content += testReport.map(report => {
    const { containerName, reportList } = report;
    let str = `### ${containerName}

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
`;
    for (const json of reportList) {
      str += `  <tr>
    <td>${json.testFunc}</td>
    <td>${json.testNum}</td>
    <td>${json.containerSize}</td>
    <td>${json.runTime}</td>
  </tr>
`;
    }
    str += '</table>\n';
    return str;
  }).join('\n');
  writeFileSync(savePath, content);
  console.log('saved!');
}

main(process.argv.slice(2));
