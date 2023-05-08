import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/* eslint-disable */
import $ from 'jquery';
import Popper from 'popper.js';
/* eslint-enable */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <App />,
);
