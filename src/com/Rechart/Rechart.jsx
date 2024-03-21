import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './Rechat.css'

const Rechart = () => {
   const data = [
    {
        name: "sakib",
        mark : 100,
        phy : 97,
    },
    {
        name: "rahim",
        mark : 80,
        phy : 27,
    },
    {
        name: "karim",
        mark : 10,
        phy : 70,
    },
    {
        name: "hridoy",
        mark : 70,
        phy : 90,
    },
    {
        name: "rejaul",
        mark : 78,
        phy : 50,
    },
    {
        name: "sawon",
        mark : 18,
        phy : 59,
    },
   ]
    return (
        <div>

            <LineChart width={600} height={250} data={data} margin={{top: 5,
            right: 30,
            left: 20,
            bottom: 5,}}>

                <Line  dataKey="mark" stroke="#82ca9d"></Line>
                <Line  dataKey="phy" stroke="red"></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </LineChart>
            <h1>bar</h1>
            <BarChart  width={600} height={250} data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <Bar dataKey={"phy"} fill="#8884d8"></Bar>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>


            </BarChart>


            <h1>another</h1>
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="phy" stackId="a" fill="#8884d8" />
          <Bar dataKey="mark" stackId="a" fill="#82ca9d" />
          
        </BarChart>

        <AwesomeButton   className="aws-btn" >Button</AwesomeButton>;
            
        </div>
    );
};

export default Rechart;