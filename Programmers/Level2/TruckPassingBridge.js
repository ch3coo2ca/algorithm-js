/**
 * [프로그래머스] Level2 - 다리를 지나는 트럭
 *  Created by jylee on 2021-01-16
 */


function solution2(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length - 1).fill(0); //trucks passing bridge
  let time = 1;

  const firstTruck = truck_weights.shift();
  let bridgeWeight = firstTruck; //sum of truck weights on bridge
  bridge.push(firstTruck);

  //if bridge weight is 0, all trucks have passed over the bridge.
  while (bridgeWeight) {
    const truck = bridge.shift(); //pop first truck from bridge

    bridgeWeight -= truck;

    const nextTruck = truck_weights[0];
    if (nextTruck + bridgeWeight <= weight) {
      //if bridge has enough weight to put next truck
      bridge.push(nextTruck);
      bridgeWeight = bridgeWeight + nextTruck; //push next truck on bridge
      truck_weights.shift();
    } else {
      bridge.push(0);
    }

    time++;
  }

  return time;
}

function solution(bridge_length, weight, truck_weights) {
  let passedTruckCount = 0;
  let truckCount = truck_weights.length;

  let bridge = [{ weight: truck_weights.shift(), time: bridge_length - 1 }];
  let time = 1;

  //while all trucks pass the bridge
  while (truckCount !== passedTruckCount) {
    //if first truck's left time is 0, pop it from queue.
    if (bridge[0].time === 0) {
      bridge.shift();
      passedTruckCount++;
    }

    let bridgeWeight = 0;
    //decrease time of trucks on the bridge
    bridge = bridge.map((truck) => {
      const { weight, time } = truck;
      bridgeWeight = bridgeWeight + weight;
      return { ...truck, time: time - 1 };
    });

    //current bridge weight + next truck weight <= maximum weight bridge can hold
    if (bridgeWeight + truck_weights[0] <= weight) {
      const truck = { weight: truck_weights.shift(), time: bridge_length - 1 };
      bridge.push(truck);
    }
    time++;
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); //8
// console.log(solution(100, 100, [10])); //101
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //110
