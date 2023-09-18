import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 1, name: 'alice', math: 85 },
        { id: 2, name: 'Bob', math: 78 },
        { id: 3, name: 'Charlie', math: 92 },
        { id: 4, name: 'David', math: 56 },
        { id: 5, name: 'Emma', math: 95 },
        { id: 6, name: 'Frank', math: 72 },
        { id: 7, name: 'Grace', math: 89 },
        { id: 8, name: 'Ian', math: 81 },
        { id: 9, name: 'Jack', math: 90 },
        { id: 10, name: 'Hannah', math: 86 },
      ];
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;