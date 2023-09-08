import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonSimpleRunLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 86a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm66.49 100.86c-.59.27-7.17 3.13-18.88 3.13-13.86 0-34.9-4-61.73-21a165.89 165.89 0 0 1-17.43 36.51c9.43 2.78 22 7.72 33.19 16.26C172.46 188.05 182 207.65 182 232a6 6 0 0 1-12 0c0-44-37.23-59.18-56.91-64.11q-1.2 1.55-2.46 3.09c-19.25 23.31-43.34 35.45-70.11 35.45a90.72 90.72 0 0 1-9.12-.43 6 6 0 0 1 1.2-12c26.63 2.66 49.77-7.66 68.77-30.69 13.16-15.94 21.94-35.51 26.08-49.15-40.51-24.52-66.59-4.78-67.72-3.89a6 6 0 0 1-7.48-9.38c.37-.3 9.39-7.43 24.76-10 13.86-2.31 35.92-1.3 62.36 16.67 47.14 32 73.88 20.47 74.14 20.35a6 6 0 1 1 5 10.92Z" />
  </Svg>
);
const Memo = memo(SvgPersonSimpleRunLight);
export default Memo;
