import React, { ReactNode } from 'react';
import { FaChartBar, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { SiPython, SiGooglesheets, SiPlotly, SiSap } from 'react-icons/si';

export const techIcons: Record<string, ReactNode> = {
  'Power BI': React.createElement(FaChartBar, { className: 'text-yellow-600' }),
  'Python': React.createElement(SiPython, { className: 'text-green-600' }),
  'SQL': React.createElement(FaDatabase, { className: 'text-red-600' }),
  'Google Sheets': React.createElement(SiGooglesheets, { className: 'text-green-700' }),
  'Excel': React.createElement(FaMicrosoft, { className: 'text-green-500' }),
  'Plotly': React.createElement(SiPlotly, { className: 'text-blue-600' }),
  'Power Automate': React.createElement(FaMicrosoft, { className: 'text-blue-600' }),
  'SAP': React.createElement(SiSap, { className: 'text-indigo-600' })
};

