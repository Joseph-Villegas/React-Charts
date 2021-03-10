import React from 'react'

import { Line } from 'react-chartjs-2'

const LineChart2 = () => {
    return <div>
        <Line
            data={{
                labels: ['2020-03-03', '2020-03-04', '2020-03-05', '2020-03-06', '2020-03-07', '2020-03-08'],
                datasets: [{
                    label: '% of Passes',
                    data: [65, 38, 47, 55, 76, 86],
                    backgroundColor: 'rgba(66, 245, 111, 0.2)',
                    pointBorderColor: 'black',
                    pointBackgroundColor: 'black'
                },
                {
                    label: '% of Fails',
                    data: [35, 62, 53, 45, 24, 14],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    pointBorderColor: 'black',
                    pointBackgroundColor: 'black'
                }],
            }}
            height={400}
            width={600}
            options={{
                onClick: (event, elements) => {
                    // console.log(`Event: ${event}\nElements: ${Object.entries(elements)}`)
                    // elements.forEach((element) =>{
                    //     console.log(`Element Info: ${Object.entries(element)}`)
                    // })
                    if (!elements[0]) return
                    const chart = elements[0]._chart ? elements[0]._chart : null;
                    const element = chart.getElementAtEvent(event)[0];
                    const dataset = chart.data.datasets[element._datasetIndex];
                    const xLabel = chart.data.labels[element._index];
                    const value = dataset.data[element._index];
                    console.log(dataset.label + " at " + xLabel + ": " + value);
                },
                title: {
                    display: true,
                    text:'Aggregate Pass Rate Pecentage Accross All Tests'
                },
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            stepSize: 10
                        }
                    }]
                }
            }}
        />
    </div>
}

export default LineChart2