import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { useColorMode } from '../../contexts/ColorModeContext';
import { useLanguage } from '../../contexts/LanguageContext';


ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  order: 2;
  @media ${({ theme }) => theme.media.md} {
    order: 2;
    width: 400px;
  }
`;

export const RadarChart = () => {
  const { colorMode } = useColorMode();
  const { language } = useLanguage();
  const darkMode = colorMode === 'dark';

  const data = {
    labels: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Laravel', 'Next.js'],
    datasets: [
      {
        label: `${language === 'en' ? 'Habilidades' : 'Skills'}`,
        data: [8, 9, 8, 7, 7, 9, 8],
        backgroundColor: darkMode ? 'rgba(54, 162, 235, 0.2)' : 'rgba(54, 162, 235, 0.4)', // Azul mais forte para light mode
        borderColor: darkMode ? 'rgba(54, 162, 235, 1)' : 'rgba(30, 144, 255, 1)', // Azul mais forte para light mode
        borderWidth: 2,
        pointBackgroundColor: darkMode ? 'rgba(54, 162, 235, 1)' : 'rgba(30, 144, 255, 1)', // Azul mais forte para light mode
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
        pointLabels: {
          color: `${darkMode ? '#FFFFFF' : '#000000'}`,
          font: {
            size: 16,
            weight: 500,
          },
        },
        ticks: {
          display: false,
        },
        grid: {
          color: `${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: `${darkMode ? '#FFFFFF' : '#000000'}`,
          font : {
            size: 16,
            weight: 500,
          }
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return(
  <ChartWrapper>
    <Radar data={data} options={options} />
  </ChartWrapper>
  );
};



export default RadarChart;
