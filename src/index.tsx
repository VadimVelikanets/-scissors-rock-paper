import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BalanceProvider} from "./context/BalanceContext";
import {BetsProvider} from "./context/BetsContext";
import {WinsProvider} from "./context/WinsContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BalanceProvider>
        <BetsProvider>
            <WinsProvider>
                <App />
            </WinsProvider>
        </BetsProvider>
    </BalanceProvider>
);

