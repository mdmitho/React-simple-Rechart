import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Hero A',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Hero B',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'Hero C',
          price: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'Hero D',
          price: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'Hero E',
          price: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'Hero F',
          price: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'Hero G',
          price: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <LineChart  width={400} height={400} data={data}>
                <Line dataKey={'price'}></Line>
                <Line dataKey={'sales'}></Line>
                <YAxis ></YAxis>
                <XAxis dataKey={"name"}></XAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default MyLineChart;