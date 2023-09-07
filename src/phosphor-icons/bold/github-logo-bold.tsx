import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGithubLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212.62 75.17A63.7 63.7 0 0 0 206.39 26 12 12 0 0 0 196 20a63.71 63.71 0 0 0-50 24h-20a63.71 63.71 0 0 0-50-24 12 12 0 0 0-10.39 6 63.7 63.7 0 0 0-6.23 49.17A61.5 61.5 0 0 0 52 104v8a60.1 60.1 0 0 0 45.76 58.28A43.66 43.66 0 0 0 92 192v4H76a20 20 0 0 1-20-20 44.05 44.05 0 0 0-44-44 12 12 0 0 0 0 24 20 20 0 0 1 20 20 44.05 44.05 0 0 0 44 44h16v12a12 12 0 0 0 24 0v-40a20 20 0 0 1 40 0v40a12 12 0 0 0 24 0v-40a43.66 43.66 0 0 0-5.76-21.72A60.1 60.1 0 0 0 220 112v-8a61.5 61.5 0 0 0-7.38-28.83ZM196 112a36 36 0 0 1-36 36h-48a36 36 0 0 1-36-36v-8a37.87 37.87 0 0 1 6.13-20.12 11.65 11.65 0 0 0 1.58-11.49 39.9 39.9 0 0 1-.4-27.72 39.87 39.87 0 0 1 26.41 17.8 12 12 0 0 0 10.1 5.53h32.35a12 12 0 0 0 10.11-5.53 39.84 39.84 0 0 1 26.41-17.8 39.9 39.9 0 0 1-.4 27.72 12 12 0 0 0 1.61 11.53A37.85 37.85 0 0 1 196 104Z" />
  </Svg>
);
const Memo = memo(SvgGithubLogoBold);
export default Memo;
