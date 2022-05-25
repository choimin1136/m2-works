import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name : "Jan", Total: 5, choi: 5, anything:0},
    { name : "Feb", Total: 20 , choi: 10, anything:10},
    { name : "Mar", Total: 30, choi: 20, anything:10},
    { name : "Apr", Total: 20, choi: 20, anything:0},
    { name : "May", Total: 50, choi: 30, anything:20},
    { name : "Jun", Total: 5, choi: 5, anything:0},
    { name : "Jul", Total: 5, choi: 5, anything:0},
    { name : "Aug", Total: 5, choi: 5, anything:0},
    { name : "Sep", Total: 5, choi: 5, anything:0},
    { name : "Oct", Total: 5, choi: 5, anything:0},
    { name : "Nov", Total: 5, choi: 5, anything:0},
    { name : "Dec", Total: 5, choi: 5, anything:0},
];


export const Chart = () => {
  return (
    <div className='chart'>
        <div className="title">Monthly Working Hours</div>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="choi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d " stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d " stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="anything" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#CAF0F8 " stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#CAF0F8 " stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                <Area type="monotone" dataKey="choi" stroke="#82ca9d" fillOpacity={1} fill="url(#choi)" />
                <Area type="monotone" dataKey="anything" stroke="#000" fillOpacity={1} fill="url(#anything)" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}
