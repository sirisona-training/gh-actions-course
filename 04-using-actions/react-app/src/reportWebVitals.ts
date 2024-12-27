import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Define the Metric interface based on the structure of the web vitals metrics
interface Metric {
  name: string;   // The name of the metric (e.g., 'CLS', 'FID', etc.)
  value: number;  // The value of the metric
  delta: number;  // The change in the metric (for example, for CLS, it indicates the shift)
  id: string;     // Unique identifier for the metric event
}

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry); // Sends CLS metric
    getFID(onPerfEntry); // Sends FID metric
    getFCP(onPerfEntry); // Sends FCP metric
    getLCP(onPerfEntry); // Sends LCP metric
    getTTFB(onPerfEntry); // Sends TTFB metric
  }
};

export default reportWebVitals;

// import { ReportHandler } from 'web-vitals';

// const reportWebVitals = (onPerfEntry?: ReportHandler) => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
    
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;
