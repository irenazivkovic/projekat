import React from 'react';
import './Statistics.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
import Chart from 'react-google-charts';
import { IProduct } from '../../interfaces/IProduct';
import { IManufacturer } from '../../interfaces/IManufacturer';

const randomColor = require('randomcolor');

export const Statistics = () => {
  const productsJSON = localStorage.getItem('productsData');
  const productsData = (productsJSON ? JSON.parse(productsJSON) : []) as IProduct[];

  const manufacturersJSON = localStorage.getItem('manufacturersData');
  const manufacturersData = (manufacturersJSON ? JSON.parse(manufacturersJSON) : []) as IManufacturer[];

  const pieChartData = () => {
    const data: { value: number, title: string, color: string }[] = [];
    const manufacturerMap: { [propName: string]: number } = {};
    manufacturersData.forEach((item, index) => {
      data.push({ title: item.name, value: 0, color: randomColor() });
      manufacturerMap[item.id] = index;
    });

    productsData.forEach((product) => {
      const count = data[manufacturerMap[product.manufacturer.id]];
      count.value += 1;
    });

    return data;
  };

  const getProductsCost = () => {
    if (productsData.length <= 10) {
      return productsData;
    }

    const expensive = productsData.sort((x, y) => y.price - x.price).slice(0, 5);
    const cheap = productsData.sort((x, y) => x.price - y.price).slice(0, 5);

    return [...expensive, ...cheap];
  };

  const prepareBarChartData = () => {
    const data = getProductsCost();
    const preparedData = [];
    preparedData.push(['Product', 'Price', { role: 'style' }]);
    data.forEach((item) => {
      preparedData.push([item.name, item.price, randomColor()]);
    });

    return preparedData;
  };

  return (
    <Stack direction="row" spacing={10} justifyContent="center">
      <Card sx={{
        maxWidth: 400, display: 'flex', alignItems: 'center', textAlign: 'center'}}
      >
        <CardContent>
          <PieChart
            label={({ dataEntry }) => dataEntry.value}
            data={pieChartData()}
          />
          <Typography variant="body2" color="text.secondary" sx={{ p: 3 }}>
            Pie chart represending how many items each Manufacturer holds in our store.
            Currently we have
            {' '}
            {` ${productsData.length} `}
            {' '}
            products, split between
            {` ${manufacturersData.length} `}
            {' '}
            manufacturers.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{
        maxWidth: 400, display: 'flex', alignItems: 'center', textAlign: 'center',
      }}
      >
        <CardContent>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={prepareBarChartData()}
          />
          <Typography variant="body2" color="text.secondary" sx={{ p: 3 }}>
            Bar chart represending the cost of our products.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};
