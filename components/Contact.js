import React, { useMemo } from "react";

// import react slick

import getScrollAnimation from "../utils/getScrollAnimation";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div
        className="mb-6 mt-14 px-10 sm:px-20 sm:mb-14 w-full flex flex-col"
        id="contact"
      >
        <div>
          <h3 className="text-3xl lg:text-4xl text-blue-500 text-center">
            Contact Us
          </h3>
          <p className="font-mono uppercase font-semibold leading-loose text-center">
            Get in touch
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="bg-orange-500 w-14 h-1" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center sm:mt-10 px-0 lg:px-20 2xl:px-32">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 2000 2000"
              viewBox="0 0 2000 2000"
              className="h-96 w-96 hidden lg:block"
            >
              <path
                fill="#d5f0ff"
                fill-rule="evenodd"
                d="M1691.6,491.5c-113.1-261.9-438.3-440-815.5-420.8C413.7,94.1,48,405.3,59.5,765.4    c5.6,175.9,100,330.9,248.9,440.7c113.1,261.9,438.3,440.1,815.6,421c462.4-23.6,828-334.6,816.6-694.9    C1935,756.5,1840.6,601.4,1691.6,491.5L1691.6,491.5z"
                clip-rule="evenodd"
                class="colord5f0ff svgShape"
              ></path>
              <path
                fill="#dfe6ff"
                fill-rule="evenodd"
                d="M1000.2,1930.7c479.2,0,870.2-25.1,870.2-55.3s-391-55.3-870.2-55.3c-479.5,0-870.6,25.1-870.6,55.3    S520.7,1930.7,1000.2,1930.7L1000.2,1930.7z"
                clip-rule="evenodd"
                class="colordfe6ff svgShape"
              ></path>
              <path
                fill="#ff9866"
                fill-rule="evenodd"
                d="M1565.3,1439.6l16.6,0.7l1-17.3c6.5-9.1,4.3-11,6.5-16.3c4.6-21.1-17.3-9.1-21.8,0.5     c-5.8,5.8-10.1,10.6-7.9,17.5l6,6.7L1565.3,1439.6z"
                clip-rule="evenodd"
                class="colorff9866 svgShape"
              ></path>
              <path
                fill="#8183f1"
                fill-rule="evenodd"
                d="M1562.9,1371.3l29,4.6c5.3,15.8-1.7,40.1-20.2,50.1c-10.1,6-28.3-0.2-21.8-5.8     C1565.3,1403.6,1577.8,1392.1,1562.9,1371.3L1562.9,1371.3z"
                clip-rule="evenodd"
                class="color8183f1 svgShape"
              ></path>
              <path
                fill="#6686f9"
                fill-rule="evenodd"
                d="M1605.6,1377.5l-3.6,11.5c-0.2,0.7,0.2,1.4,0.7,1.4l3.8,1.2c0.7,0.2,1.4,0,1.4-0.7l3.8-11.5     c0-0.5-0.2-1.2-0.7-1.4l-4.1-1.2C1606.6,1376.5,1605.9,1377,1605.6,1377.5L1605.6,1377.5z"
                clip-rule="evenodd"
                class="color6686f9 svgShape"
              ></path>
              <path
                fill="#2c7efe"
                fill-rule="evenodd"
                d="M1499.6,1357.3l2.6-6l1.4-6.7l1.2,0.5l14.6-35c21.4,18.5,41.7,36.5,82.8,51.1l0.7,21.6l0,0v0.2v0.2h-0.2     l-13,17.3c-42-11.5-68.9-8.4-96.9-5.8l7.9-37.2L1499.6,1357.3z"
                clip-rule="evenodd"
                class="color2c7efe svgShape"
              ></path>
              <path
                fill="#0643a3"
                fill-rule="evenodd"
                d="M1497.4,1349.7c-7.4,23.5-9.6,43.7-5,45.1s14.2-16.3,21.6-39.8c7.4-23.3,9.8-43.4,5.3-44.9     C1514.5,1308.6,1504.9,1326.4,1497.4,1349.7L1497.4,1349.7z"
                clip-rule="evenodd"
                class="color0643a3 svgShape"
              ></path>
              <path
                fill="#be96f8"
                fill-rule="evenodd"
                d="M1564.1,1396l16.3,5c10.8,3.6,23-4.1,26.9-16.6l0,0c4.1-12.7-1.4-25.7-12.5-29.3l-16.1-5L1564.1,1396z"
                clip-rule="evenodd"
                class="colorbe96f8 svgShape"
              ></path>
              <path
                fill="#84b2fe"
                fill-rule="evenodd"
                d="M1502.7,1351.3L1502.7,1351.3c-2.2,6.7,0.7,13.9,6.5,17.3c1.7-4.3,3.4-8.9,4.8-13.7     c1.7-4.8,2.9-9.4,3.8-13.9C1511.3,1340.6,1504.9,1344.6,1502.7,1351.3L1502.7,1351.3z"
                clip-rule="evenodd"
                class="color84b2fe svgShape"
              ></path>
              <path
                fill="#0643a3"
                fill-rule="evenodd"
                d="M1621.2,1860.9l-10.3,3.8c-12.7,7.9-43.9,5-38.4,23.5l60.2-1.7c0-7.4,0.5-15.4-3.6-22.3L1621.2,1860.9z"
                clip-rule="evenodd"
                class="color0643a3 svgShape"
              ></path>
              <path
                fill="#ff9866"
                fill-rule="evenodd"
                d="M1629.1,1853.9l-18.5,0.7l0.2,10.1c6.2,1.9,12.5,1.4,18.2-0.5V1853.9z"
                clip-rule="evenodd"
                class="colorff9866 svgShape"
              ></path>
              <path
                fill="#0643a3"
                fill-rule="evenodd"
                d="M1723.7,1856.3l-10.1,4.8c-12,9.1-43.2,9.4-35.7,27.1l59.7-7.4c-1-7.4-1.2-15.4-6-21.8L1723.7,1856.3z"
                clip-rule="evenodd"
                class="color0643a3 svgShape"
              ></path>
              <path
                fill="#ff9866"
                fill-rule="evenodd"
                d="M1730.8 1848.7l-18.2 2.4 1 10.1c6.2 1.2 12.7.2 18-2.2L1730.8 1848.7zM1722.9 1578.8l10.6 12.5-7.2 7.9c-4.8 11.3-7.4 42.5-14.9 34.3l-4.1-41.5 9.6-4.8L1722.9 1578.8z"
                clip-rule="evenodd"
                class="colorff9866 svgShape"
              ></path>
              <polygon
                fill="#0643a3"
                fill-rule="evenodd"
                points="1676.4 1567.3 1714.3 1601.8 1712.9 1728.7 1735.9 1849.1 1707.3 1852.3 1670.4 1732.3 1665.6 1670.7 1645.9 1738.1 1631.8 1859.2 1608 1858.7 1606.8 1740.2 1632.2 1599.6 1647.1 1581.4 1671.4 1591.7"
                clip-rule="evenodd"
                class="color0643a3 svgShape"
              ></polygon>
              <path
                fill="#ea718b"
                fill-rule="evenodd"
                d="M1713.8,1451.9c27.3,16.8,55.2,40.5,78.4,61.4c3.4,3.8,2.9,7.4,0.7,10.3l-61.9,73.4l-13-14.4l37.4-55.4     l-34.3-13.9l-7,88.5c-28.8,22.3-54-3.6-82-2.2l-5.3-105.1l-48.2,19.4c-5.3,2.6-22.6,0.5-22.6-7.9l7.9-73.6l19.7,1.7l-0.7,47.7     l54.5-31.4C1662,1444.4,1692.9,1440.6,1713.8,1451.9L1713.8,1451.9z"
                clip-rule="evenodd"
                class="colorea718b svgShape"
              ></path>
              <path
                fill="#ff9866"
                fill-rule="evenodd"
                d="M1658.4,1426.2l28.1,1.4l-0.2,25.4c-12.5,7.4-24,1.9-30.7-3.4L1658.4,1426.2z"
                clip-rule="evenodd"
                class="colorff9866 svgShape"
              ></path>
              <path
                fill="#ffaa81"
                fill-rule="evenodd"
                d="M1709.7,1374.6c-18-4.3-36-8.9-53.7-13.4c-7.4,9.8-13.9,55.2-6,67.9c9.8,15.8,33.6,9.8,41.7-2.4     C1699.7,1415.6,1711.4,1386.4,1709.7,1374.6L1709.7,1374.6z"
                clip-rule="evenodd"
                class="colorffaa81 svgShape"
              ></path>
              <path
                fill="#060352"
                fill-rule="evenodd"
                d="M1671.6,1373.2c-5.5-5.3-14.2,1.9-19.4-3.4c-7-15.1-6.5-29,15.8-32.6c-1,3.1,0.5,5,1.7,5.8     c3.4-1,6.7-3.8,12-2.2c-4.1,2.9-5,5-3.6,8.2c6.7,4.1,19-0.7,28.5,5c8.6,6.7,11,13,12.5,20.9c2.2,21.1-12.2,31.7-18.7,37.7     c-2.4,1.2-3.6,1.7-8.6-6.2c7.2-4.1,11.8-10.8,6.7-16.3c-7.2-8.2-7.2,5.5-13.9,6C1685.3,1390.2,1675.9,1376.3,1671.6,1373.2     L1671.6,1373.2z"
                clip-rule="evenodd"
                class="color060352 svgShape"
              ></path>
              <path
                fill="#ff9866"
                fill-rule="evenodd"
                d="M1575.4,1403.9c-1.4-3.6-2.6-3.6-4.8-5.3c-1.9-1.7-4.6-1-6.5,0.5c-3.1,3.8-6,7.2-9.4,11.3     c-2.6,3.8-1.7,7.7-1,9.4c1.4,3.8,4.8,6.2,8.2,4.8C1567.5,1421.2,1578,1410.6,1575.4,1403.9L1575.4,1403.9z"
                clip-rule="evenodd"
                class="colorff9866 svgShape"
              ></path>
              <path
                fill="#0643a3"
                fill-rule="evenodd"
                d="M1642.2,1105.5l99.5-73.6l57.6-42.4c-2.6-3.3-6.4-5.5-11-5.5H1496c-4.3,0-8.3,2.1-11,5.5l57.6,42.4     L1642.2,1105.5z"
                clip-rule="evenodd"
                class="color0643a3 svgShape"
              ></path>
              <path
                fill="#2c7efe"
                fill-rule="evenodd"
                d="M1642.2,873.6l99.5,73.6l57.6,42.4c-2.6,3.3-6.4,5.5-11,5.5H1496c-4.3,0-8.3-2.1-11-5.5l57.6-42.4     L1642.2,873.6z"
                clip-rule="evenodd"
                class="color2c7efe svgShape"
              ></path>
              <rect
                width="247.6"
                height="249.3"
                x="1518.4"
                y="910.2"
                fill="#ffffff"
                fill-rule="evenodd"
                clip-rule="evenodd"
                class="colorfff svgShape"
              ></rect>
              <path
                fill="#2c7efe"
                fill-rule="evenodd"
                d="M1799.4,989.5c1.7,2.1,2.9,5,2.9,8.1v181.4c0,7.6-6.2,13.6-13.8,13.6H1496c-7.4,0-13.6-6-13.6-13.6V997.6     c0-3.1,1-6,2.6-8.1l57.6,42.4l99.5,73.6l99.5-73.6L1799.4,989.5z"
                clip-rule="evenodd"
                class="color2c7efe svgShape"
              ></path>
              <path
                fill="#0643a3"
                fill-rule="evenodd"
                d="M1642.2,1071.2l-99.5,73.3l-57.6,42.6c2.4,3.3,6.4,5.5,11,5.5h292.4c4.5,0,8.6-2.1,11-5.5l-57.6-42.6     L1642.2,1071.2z"
                clip-rule="evenodd"
                class="color0643a3 svgShape"
              ></path>
              <path
                fill="#2c7efe"
                d="M1686.7,989.6c0,6.2-0.8,11.8-2.5,16.6c-1.7,4.9-4,9-7,12.4c-3,3.4-6.5,6-10.6,7.7      c-4.1,1.8-8.5,2.7-13.3,2.7c-3.2,0-5.7-0.8-7.5-2.5c-1.8-1.7-2.9-3.9-3.1-6.7c-4.3,6.2-10,9.2-17,9.2c-2.9,0-5.5-0.5-8-1.6      c-2.5-1.1-4.6-2.6-6.3-4.5c-1.8-2-3.2-4.3-4.2-7.1c-1-2.8-1.5-5.9-1.5-9.4c0-4.8,0.8-9.5,2.5-14c1.7-4.5,3.9-8.4,6.6-11.9      c2.7-3.4,5.8-6.2,9.2-8.3c3.4-2.1,6.9-3.1,10.4-3.1c7.9,0,13.7,2.4,17.4,7.1l1.3-5.5h9.9l-8.5,37.1c-0.5,2.1-0.9,3.8-1.1,5.3      c-0.2,1.5-0.3,2.8-0.3,4c0,2.6,1,3.9,3,3.9c3.1,0,6-0.7,8.7-2.2c2.7-1.5,5.1-3.6,7.2-6.3c2-2.8,3.7-6.1,4.8-9.9      c1.2-3.9,1.8-8.3,1.8-13.2c0-5-1-9.7-2.9-13.9c-1.9-4.3-4.6-8-8-11.1c-3.4-3.2-7.6-5.6-12.4-7.4c-4.8-1.8-10.2-2.7-16-2.7      c-6.8,0-13,1.3-18.7,3.9c-5.7,2.6-10.6,6.1-14.7,10.6c-4.1,4.4-7.3,9.6-9.5,15.6c-2.3,6-3.4,12.3-3.4,18.9      c0,6.7,1.1,12.6,3.2,17.8c2.2,5.2,5.3,9.6,9.4,13.1c4.1,3.6,9.1,6.3,15,8.2c5.9,1.8,12.6,2.8,20,2.8c9.4,0,17.1-1.4,23.3-4.3      l4.1,6.8c-8,3.5-17.1,5.3-27.3,5.3c-8.7,0-16.5-1.1-23.4-3.4c-6.9-2.3-12.7-5.6-17.5-9.9c-4.8-4.3-8.5-9.5-11-15.6      c-2.6-6.1-3.8-13-3.8-20.7c0-16.2,5.2-29.7,15.5-40.6c10.4-10.7,23.5-16.1,39.2-16.1c7.2,0,13.7,1.1,19.6,3.3      c5.8,2.2,10.8,5.2,14.9,9.1c4.1,3.9,7.3,8.4,9.5,13.7C1685.6,977.8,1686.7,983.5,1686.7,989.6z M1649.9,984.2      c-3-4.6-7.9-6.9-14.7-6.9c-2.5,0-4.9,0.9-7.3,2.6c-2.3,1.7-4.4,3.9-6.1,6.6c-1.8,2.7-3.2,5.8-4.3,9.2c-1.1,3.4-1.6,6.9-1.6,10.3      c0,9.9,3.9,14.9,11.8,14.9c2,0,3.9-0.4,5.7-1.3c1.9-0.9,3.6-2.1,5.2-3.6c1.6-1.5,3-3.4,4.2-5.6c1.2-2.2,2.1-4.6,2.7-7.3      L1649.9,984.2z"
                class="color2c7efe svgShape"
              ></path>
              <path
                fill="#2c7efe"
                fill-rule="evenodd"
                d="M237,487.5c75.6-49.8,271.4,30,348.5,130.3l2.1,239.7c-35,107.9-107.5,124.5-177.5,147.6l242.9,451.5    c46-42.8,132.7-93.7,201.8-81l220.7,129.2c70.3,124.2-12.3,338.4-79.2,379.8C605.3,1962.5-150.4,1032,237,487.5L237,487.5z"
                clip-rule="evenodd"
                class="color2c7efe svgShape"
              ></path>
              <g fill="#000000" class="color000 svgShape">
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M803,1226.2c97.1,0,176.3-79.2,176.3-176.3c0-97.1-79.2-176.3-176.3-176.3c-97.1,0-176.3,79.2-176.3,176.3     C626.7,1147,705.9,1226.2,803,1226.2L803,1226.2z"
                  clip-rule="evenodd"
                  class="colorfff svgShape"
                ></path>
                <path
                  fill="#2c7efe"
                  fill-rule="evenodd"
                  d="M803,1167.6c64.9,0,117.9-52.7,117.9-117.9c0-64.9-53-117.6-117.9-117.6c-64.9,0-117.9,52.7-117.9,117.6     C685.1,1114.9,738.1,1167.6,803,1167.6L803,1167.6z"
                  clip-rule="evenodd"
                  class="color2c7efe svgShape"
                ></path>
                <path
                  fill="#0643a3"
                  d="M914.1,1013.4c-1.1,0-2.1-0.7-2.5-1.8c-7.2-19.8-19.5-37.3-35.4-50.6c-1.1-1-1.3-2.7-0.3-3.8       c1-1.1,2.7-1.3,3.8-0.3c16.7,13.9,29.5,32.2,37.1,52.9c0.5,1.4-0.2,3-1.6,3.5C914.8,1013.4,914.4,1013.4,914.1,1013.4z"
                  class="color0643a3 svgShape"
                ></path>
                <path
                  fill="#0643a3"
                  d="M803,1170.3c-32.2,0-62.5-12.5-85.3-35.3c-22.8-22.8-35.3-53-35.3-85.3c0-66.3,54.1-120.3,120.6-120.3       c20.4,0,39.8,4.9,57.6,14.6c1.3,0.7,1.8,2.4,1.1,3.7c-0.7,1.3-2.4,1.8-3.7,1.1c-17.1-9.3-35.6-14-55-14       c-63.5,0-115.2,51.5-115.2,114.8c0,63.5,51.7,115.2,115.2,115.2s115.2-51.7,115.2-115.2c0-8.7-1-17-3-24.6       c-0.4-1.4,0.5-2.9,1.9-3.3c1.4-0.4,2.9,0.5,3.3,1.9c2.1,8,3.1,16.8,3.1,26C923.5,1116.2,869.5,1170.3,803,1170.3z"
                  class="color0643a3 svgShape"
                ></path>
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M767.3,1075.9l-50.6-26.8c-2.4-1.5-3,1.2-2.1,2.7l45.7,49.9c4.9,4.3,8.5,4.3,14,0     c39-34.7,77.7-69.4,116.6-104.2c1.2-1.2,0-3.7-2.1-2.4L767.3,1075.9z"
                  clip-rule="evenodd"
                  class="colorfff svgShape"
                ></path>
              </g>
              <g fill="#000000" class="color000 svgShape">
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M1227,1226.2c97.1,0,176.3-79.2,176.3-176.3c0-97.1-79.2-176.3-176.3-176.3c-97.1,0-176.3,79.2-176.3,176.3     C1050.7,1147,1129.9,1226.2,1227,1226.2L1227,1226.2z"
                  clip-rule="evenodd"
                  class="colorfff svgShape"
                ></path>
                <path
                  fill="#2c7efe"
                  fill-rule="evenodd"
                  d="M1227,1043c39.4,0,71.4-32.1,71.4-71.4c0-39.4-32-71.5-71.4-71.5s-71.5,32.1-71.5,71.5      C1155.5,1010.9,1187.7,1043,1227,1043L1227,1043z"
                  clip-rule="evenodd"
                  class="color2c7efe svgShape"
                ></path>
                <path
                  fill="#2c7efe"
                  fill-rule="evenodd"
                  d="M1293.4,1039.7c37.5,20.6,64.3,58.1,70.2,102.2h-273.1c5.9-44.1,32.7-81.6,70.1-102.2      c15.5,19.8,39.5,32.5,66.5,32.5S1278,1059.5,1293.4,1039.7L1293.4,1039.7z"
                  clip-rule="evenodd"
                  class="color2c7efe svgShape"
                ></path>
              </g>
              <g fill="#000000" class="color000 svgShape">
                <path
                  fill="#ffffff"
                  d="M1431.7,342.4c-8.8,0-17.5-4.2-23-12c-49.2-71-145.2-116.9-250.6-119.8c-105.4-3-203.8,37.4-256.8,105.5      c-9.5,12.2-27,14.4-39.1,4.9c-12.2-9.5-14.4-27-4.9-39.1c31.1-39.9,75.2-72.9,127.6-95.1c53.2-22.6,113.6-33.7,174.8-31.9      c61.1,1.7,120.9,16.1,172.7,41.6c51.1,25.2,93.3,60.5,122.2,102.2c8.8,12.7,5.6,30-7,38.8      C1442.7,340.8,1437.1,342.4,1431.7,342.4z"
                  class="colorfff svgShape"
                ></path>
                <path
                  fill="#ffffff"
                  d="M1349.6,415.8c-8.9,0-17.6-4.2-23-12c-33-47.7-97.9-78.6-169.4-80.6c-71.5-2-138.1,25.2-173.7,71      c-9.5,12.2-27,14.3-39.1,4.9c-12.2-9.5-14.3-27-4.9-39.1c22.7-29.2,54.9-53.2,93-69.4c38.5-16.4,82.1-24.4,126.3-23.1      c44.1,1.2,87.3,11.6,124.8,30.1c37.2,18.3,68,44.1,89,74.5c8.8,12.7,5.6,30-7.1,38.8C1360.6,414.2,1355,415.8,1349.6,415.8z"
                  class="colorfff svgShape"
                ></path>
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M1156.8,501.5c-27.4-0.8-50.3,20.7-51.1,48.4c-0.8,27.4,20.7,50.3,48.4,51.1c27.4,0.8,50.3-21,51.1-48.4     C1206,525.2,1184.2,502.3,1156.8,501.5L1156.8,501.5z"
                  clip-rule="evenodd"
                  class="colorfff svgShape"
                ></path>
                <path
                  fill="#ffffff"
                  d="M1269,492.1c-8.8,0-17.5-4.2-22.9-12c-17.4-25-51.8-41.1-89.9-42.1l-0.1,0c-38.2-1.1-73.5,13.1-92.1,37.1      c-9.5,12.2-27,14.4-39.1,4.9c-12.2-9.5-14.4-27-4.9-39.1c14.5-18.7,34.9-33.9,59-44.2c24-10.2,51.2-15.2,78.6-14.4      c27.5,0.7,54.4,7.2,77.9,18.7c23.4,11.6,42.9,27.9,56.4,47.3c8.8,12.6,5.7,30-7,38.8C1280.1,490.5,1274.5,492.1,1269,492.1z"
                  class="colorfff svgShape"
                ></path>
              </g>
              <g fill="#000000" class="color000 svgShape">
                <path
                  fill="#060352"
                  fill-rule="evenodd"
                  d="M1284.9,1531.5c-12.8-6.7-19.1-7.7-24.5,0.4c-3.4,5.3-4.6,14.8-11.3,18c-6.1,2.9-3.6,27-3.6,32     c0,8.6,11.1,22.5,1.6,34.8c-5.3,6.7,2,28.1-5.3,36.7c-1.3,1.4-2.3,10.3,8.6,11.3c17.7,1.6,25.5,4.1,41.8-2.7     c6.1-2.6,57.5,6.6,59.8-0.1c4-12.4-11-24.7-5.1-38.8c0-0.3-1.9-17.3-1.9-20c0-10.6-4.6-13.7,0.1-28.7     c4.7-15.3-2.3-35.1-21.5-37.1c-3.9-0.3-13-13.3-26.4-9.3L1284.9,1531.5z"
                  clip-rule="evenodd"
                  class="color060352 svgShape"
                ></path>
                <path
                  fill="#6767fd"
                  fill-rule="evenodd"
                  d="M1264.7,1793.4h64.5c11,0,20,9,20,20.1l0,0c0,11-9,20.1-20,20.1h-64.5c-11.1,0-20.1-9.1-20.1-20.1l0,0     C1244.6,1802.4,1253.6,1793.4,1264.7,1793.4L1264.7,1793.4z"
                  clip-rule="evenodd"
                  class="color6767fd svgShape"
                ></path>
                <path
                  fill="#ff4d8a"
                  fill-rule="evenodd"
                  d="M1297.9,1640.4h-0.3h-0.7h-0.1h-0.7h-0.1c-8.8,0-18,0-27.1,0.9l0,0c-9.7,0.9-19.3,2.7-28.1,6.3     c-22.4,15.1-51.1,83-46.5,109c5.4,15.5,45.4,14,74.6,17.7v3.7h50.2v-2.9c29.5-4.8,74.7-1.9,80.6-18.5c4.4-26-24.2-93.9-46.5-109     C1335.9,1640.5,1316,1640.4,1297.9,1640.4L1297.9,1640.4z"
                  clip-rule="evenodd"
                  class="colorff4d8a svgShape"
                ></path>
                <path
                  fill="#8183f1"
                  fill-rule="evenodd"
                  d="M1205.3,1886.4l-6.7-18.5c-2.6-2.3-10.1-3.7-13.7-4c-12.1,0.9-34.2,0.7-34.8,9     c-0.7,11.6,28.2,16.8,37.5,16.1L1205.3,1886.4z"
                  clip-rule="evenodd"
                  class="color8183f1 svgShape"
                ></path>
                <path
                  fill="#ff9866"
                  fill-rule="evenodd"
                  d="M1222,1881.7l-6.8-20.1l-16.3,6.6c-2.4,7.6,0.9,14.3,6.4,18.3L1222,1881.7z"
                  clip-rule="evenodd"
                  class="colorff9866 svgShape"
                ></path>
                <path
                  fill="#8183f1"
                  fill-rule="evenodd"
                  d="M1219.6,1886c-5.7-7.3-10.6-16-10.8-25.8c40.5-14.1,205-104.3,231.4-75.5     C1472.5,1829.1,1276.2,1866,1219.6,1886L1219.6,1886z"
                  clip-rule="evenodd"
                  class="color8183f1 svgShape"
                ></path>
                <path
                  fill="#6767fd"
                  fill-rule="evenodd"
                  d="M1388.5,1886.4l6.6-18.5c2.7-2.3,10.3-3.7,13.7-4c12.1,0.9,34.2,0.7,34.9,9c0.6,11.6-28.4,16.8-37.5,16.1     L1388.5,1886.4z"
                  clip-rule="evenodd"
                  class="color6767fd svgShape"
                ></path>
                <path
                  fill="#ff9866"
                  fill-rule="evenodd"
                  d="M1371.7,1881.7l7-20.1l16.1,6.6c2.6,7.6-0.9,14.3-6.3,18.3L1371.7,1881.7z"
                  clip-rule="evenodd"
                  class="colorff9866 svgShape"
                ></path>
                <path
                  fill="#9999fe"
                  fill-rule="evenodd"
                  d="M1374.2,1886c5.7-7.3,10.4-16,10.7-25.8c-40.5-14.1-204.8-104.3-231.2-75.5     C1121.3,1829.1,1317.5,1866,1374.2,1886L1374.2,1886z"
                  clip-rule="evenodd"
                  class="color9999fe svgShape"
                ></path>
                <path
                  fill="#84b2fe"
                  fill-rule="evenodd"
                  d="M1231,1709.1h131.8c4,0,7.4,3.4,7.4,7.4v88.3c0,4.1-3.4,7.4-7.4,7.4H1231c-4.1,0-7.4-3.3-7.4-7.4v-88.3     C1223.6,1712.6,1226.9,1709.1,1231,1709.1L1231,1709.1z"
                  clip-rule="evenodd"
                  class="color84b2fe svgShape"
                ></path>
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M1296.9,1747.8c0.1,0,0.3,0,0.4,0c-0.1,0.9-0.3,1.6-0.3,2.4c0,5.7,4.7,10.4,10.4,10.4     c0.9,0,1.6-0.1,2.3-0.3c0,0.1,0,0.3,0,0.4c0,7.1-5.7,12.8-12.8,12.8c-7.1,0-13-5.7-13-12.8     C1283.9,1753.6,1289.8,1747.8,1296.9,1747.8L1296.9,1747.8z"
                  clip-rule="evenodd"
                  class="colorfff svgShape"
                ></path>
                <path
                  fill="#ff9866"
                  fill-rule="evenodd"
                  d="M1280.4,1611.6c0.1,11.4,0.3,22.8,0.4,34.2c9.1,13.1,26.8,10.7,34.5,0l-1.3-36.2L1280.4,1611.6z"
                  clip-rule="evenodd"
                  class="colorff9866 svgShape"
                ></path>
                <path
                  fill="#ffaa81"
                  fill-rule="evenodd"
                  d="M1297.9,1559.9l-35.7-0.4c6,37.4,0.1,74.6,35.2,77.3v0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0v-0.1     c34.9-2.7,29.2-39.9,35.1-77.3L1297.9,1559.9z"
                  clip-rule="evenodd"
                  class="colorffaa81 svgShape"
                ></path>
                <path
                  fill="#060352"
                  fill-rule="evenodd"
                  d="M1255.6,1559.1c4.8,1.4-3.7,9.1,9.6,11.8c1.6,0.3,2.4,0.7,12.7,1c7,0.1,1.4-4,14.1-0.4     c10,2.9,11.3-7.6,20.5,5.6c1.4,2.1,16.5,6.8,19,7c4.8,0.1,10.3,7.1,10.3-6.8c0-5.3,1.7-17.3-0.6-19.4c-7.3-7-20.5-3.7-29.8-7     c-9-3.1-10.1-7.4-25.1-7.1c-9.6,0.1-12.3,11.7-27,13.1C1258.1,1556.8,1255.1,1558.9,1255.6,1559.1L1255.6,1559.1z"
                  clip-rule="evenodd"
                  class="color060352 svgShape"
                ></path>
              </g>
              <g fill="#000000" class="color000 svgShape">
                <path
                  fill="#9999fe"
                  fill-rule="evenodd"
                  d="M336.6,1644.6c10.8-24.4,48.8,12.9,51.9-4c-2.4-24.5-35.1-84.3,22.7-106.7       c106.6-39.1-0.2,99.9,14.7,133.3c8.7,14.8,53.6-10.5,48.4,21.5c-10.8,39.4-69.9,44.8-104.8,67.3       C358.5,1718.9,325.4,1672.5,336.6,1644.6L336.6,1644.6z"
                  clip-rule="evenodd"
                  class="color9999fe svgShape"
                ></path>
                <path
                  fill="#ccccfe"
                  d="M352.9,1815c-0.2,0-0.3,0-0.5-0.1c-1.1-0.3-1.8-1.4-1.5-2.5c6.4-25.2,16.3-56,26-85.9        c10.5-32.5,21.4-66.2,28.1-93.8c7.4-30.7,8.8-49.9,4.1-58.9c-0.5-1-0.1-2.2,0.9-2.7s2.2-0.1,2.7,0.9        c11.4,21.8-9.7,86.9-31.9,155.9c-9.6,29.8-19.6,60.6-25.9,85.6C354.6,1814.4,353.8,1815,352.9,1815z"
                  class="colorccccfe svgShape"
                ></path>
                <path
                  fill="#ccccfe"
                  d="M380.8 1723.1c-.3 0-.6-.1-.9-.2-1-.5-1.4-1.8-.9-2.7 9.7-18.6 28.2-21.5 53.1-23.6 1.1-.1 2.1.7 2.2 1.9.1 1.1-.7 2.1-1.9 2.2-27.4 2.2-41.8 6-49.8 21.4C382.2 1722.7 381.5 1723.1 380.8 1723.1zM387.5 1702.2c-.1 0-.2 0-.4 0-1.1-.2-1.8-1.3-1.6-2.4 3.1-16.5-14.9-40.5-24.3-44.4-1-.4-1.5-1.6-1.1-2.7.4-1 1.6-1.5 2.7-1.1 11 4.5 30.3 30 26.8 48.9C389.3 1701.5 388.5 1702.2 387.5 1702.2z"
                  class="colorccccfe svgShape"
                ></path>
                <path
                  fill="#ccccfe"
                  fill-rule="evenodd"
                  d="M245.6,1659.2c-2.5-29.3,54-13.6,48.1-31.6c-15.5-22.4-79-62.7-35.1-115.2c82-94.7,53.1,96.6,85.4,120.8       c16.4,9.7,46.1-38.8,58.2-5c10.6,43.8-43.5,80.6-65.2,120.9C306.5,1719.2,249.8,1692.1,245.6,1659.2L245.6,1659.2z"
                  clip-rule="evenodd"
                  class="colorccccfe svgShape"
                ></path>
                <path
                  fill="#9999fe"
                  d="M351.4,1815.1c-0.9,0-1.7-0.6-2-1.5c-7.3-27.7-14.2-62.9-20.9-96.9c-7.3-37-14.8-75.3-23-105.6        c-9.2-33.6-18.2-53-27.6-59.2c-0.9-0.6-1.2-1.9-0.6-2.8c0.6-0.9,1.9-1.2,2.8-0.6c10.4,6.9,19.7,26.4,29.3,61.5        c8.3,30.4,15.9,68.8,23.1,105.9c6.6,33.9,13.5,69,20.8,96.6c0.3,1.1-0.4,2.2-1.4,2.5C351.7,1815.1,351.5,1815.1,351.4,1815.1z        "
                  class="color9999fe svgShape"
                ></path>
                <path
                  fill="#9999fe"
                  d="M329.2 1711.4c-1.1 0-2-.9-2-2-.6-23 15.6-35.7 38.6-51 .9-.6 2.2-.4 2.8.6.6.9.4 2.2-.6 2.8-25.3 16.9-37.3 28.3-36.8 47.5C331.3 1710.5 330.4 1711.4 329.2 1711.4 329.2 1711.4 329.2 1711.4 329.2 1711.4zM324.5 1687.6c-.9 0-1.6-.5-1.9-1.4-5.9-17.7-36.2-31.4-47.4-30-1.1.1-2.1-.7-2.3-1.8-.1-1.1.7-2.1 1.8-2.3 6.5-.8 17.8 2.5 28 8.2 7.1 4 19.7 12.4 23.8 24.6.4 1.1-.2 2.2-1.3 2.6C324.9 1687.6 324.7 1687.6 324.5 1687.6z"
                  class="color9999fe svgShape"
                ></path>
                <polygon
                  fill="#be96f8"
                  fill-rule="evenodd"
                  points="375.2 1883.6 393.6 1892.7 353.8 1892.7 314.1 1892.7 332.5 1883.6"
                  clip-rule="evenodd"
                  class="colorbe96f8 svgShape"
                ></polygon>
                <path
                  fill="#dfcffd"
                  fill-rule="evenodd"
                  d="M438,1808.5c-3.5,43.3-39.9,77.5-84.2,77.5c-44.3,0-80.6-34.1-84.1-77.5H438z"
                  clip-rule="evenodd"
                  class="colordfcffd svgShape"
                ></path>
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M334.8,1875.6c-28.5-4.2-51.7-29.1-55.7-61l6.5-0.4c4.1,29.7,23.8,53.5,49.3,61.2V1875.6z"
                  clip-rule="evenodd"
                  class="colorfff svgShape"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <form className="px-8 pt-6 pb-8 mb-4">
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
                <div className="mb-4">
                  <label
                    className="block text-black-500 text-sm font-bold mb-2"
                    for="username"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Name..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-black-500 text-sm font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block text-black-500 text-sm font-bold mb-2"
                  for="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="text"
                  placeholder="Phone Number..."
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-black-500 text-sm font-bold mb-2"
                  for="subject"
                >
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Subject..."
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-black-500 text-sm font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  type="text"
                  placeholder="Message..."
                />
              </div>

              <div className="flex items-center justify-center lg:justify-between">
                <button
                  className="py-2 px-12  text-white-500 font-semibold rounded-lg bg-blue-400 hover:shadow-blue transition-all outline-none "
                  addClass
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
