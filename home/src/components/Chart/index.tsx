import { useTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import Title from "../Title";

const createData = (month, total) => {
  return { month, total };
};

const data = [
  createData("Jan", 12000.25),
  createData("Feb", 15670.77),
  createData("Mar", 21670.5),
  createData("Apr", 10009.15),
  createData("May", 18001.23),
  createData("Jun", 34560.1),
  createData("Jul", 11056.09),
];

const Chart = () => {
  const theme = useTheme();

  return (
    <>
      <Title>Sales</Title>
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="month" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill={green[400]} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
