import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Fix iOS scroll & viewport offset issues
document.addEventListener('DOMContentLoaded', () => {
    // Ensure correct viewport usage on iPhone X and newer
    const metaViewport = document.querySelector('meta[name=viewport]');
    if (!metaViewport) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
        document.head.appendChild(meta);
    }
    // iOS Framer Motion fix
    document.body.style.position = 'relative';
    // Prevent auto scroll restoration (especially on Safari)
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
});
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
