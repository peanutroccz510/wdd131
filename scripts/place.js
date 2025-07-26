 const selector = '#my-graph-container'; 

    // Define your graph data as a JavaScript object
    const myGraph = {
        nodes: [
            { id: 'node1', label: 'Node 1' },
            { id: 'node2', label: 'Node 2' }
        ],
        edges: [
            { source: 'node1', target: 'node2' }
        ]
    };

    reveal.innerHTML = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;
    reveal.HTMLvalue = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;
    reveal.text = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;reveal.textContent = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;
    reveal.textContent = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;

    const computeWindChill = function(windSpeed, temperature) {
  // Fahrenheit Only
  return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
};

const points = [100, 88, 94, 78, 84, 69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = "Excellent";
  } else if (pointTotal >= 70) {
    status = "Complete";
  }
  return status;
}

let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}