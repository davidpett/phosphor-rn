import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSoccerBallThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm40.87 147.42-11.69-16.09 13.95-40.64 18.93-6.15 29.65 22.74a91.32 91.32 0 0 1-12.9 40.14Zm-81.74 0H49.19a91.32 91.32 0 0 1-12.9-40.14l29.65-22.74 18.93 6.15 13.95 40.64ZM51.69 76.66l8.87 29.92L36 125.39a91.41 91.41 0 0 1 15.69-48.73ZM106.13 156l-13.36-38.92L128 92.85l35.23 24.23L149.87 156Zm89.31-49.42 8.87-29.92A91.41 91.41 0 0 1 220 125.39Zm2.87-37.84-10.72 36.19-19 6.16L132 85.9V66.1l32.68-22.46a92.44 92.44 0 0 1 33.63 25.1Zm-42.77-28.53L128 59.15l-27.54-18.94a92.18 92.18 0 0 1 55.08 0Zm-64.22 3.43L124 66.1v19.8l-36.64 25.19-19-6.16-10.67-36.19a92.44 92.44 0 0 1 33.63-25.1ZM54.61 183.42h31.73l11.1 31.36a92.46 92.46 0 0 1-42.83-31.36Zm52.3 34.14-13.27-37.5L105.32 164h45.36l11.68 16.06-13.27 37.5a92.37 92.37 0 0 1-42.18 0Zm51.65-2.78 11.1-31.36h31.73a92.46 92.46 0 0 1-42.83 31.36Z" />
  </Svg>
);
const Memo = memo(SvgSoccerBallThin);
export default Memo;
