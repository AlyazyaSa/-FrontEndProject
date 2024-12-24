import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // تأكد من صحة المسار
import './App.css'; // إذا كنت تستخدم ملف CSS

const container = document.getElementById('root'); // تأكد من أن العنصر "root" موجود في index.html
const root = createRoot(container);
root.render(<App />);
