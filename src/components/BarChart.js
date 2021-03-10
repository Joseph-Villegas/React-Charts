import React from 'react'

import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return <div>
        <Bar
            data={{
                labels: ['Register a User', 'Login a User', 'Search for a Product', 'Add Product to Cart', 'Checkout', 'Logout User'],
                datasets: [{
                    label: 'Pass',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 1
                },
                {
                    label: 'Quantity',
                    data: [6, 17, 12, 9, 10, 4],
                    backgroundColor: 'red',
                    borderColor: 'red'
                }],
            }}
            height={400}
            width={600}
            options={{
                title: {
                    display: true,
                    text:'Aggregate Pass Fail Ratio of Tests For Application: Webstore'
                },
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
        />
    </div>
}

export default BarChart