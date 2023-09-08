import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonSimpleThrowBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 92a36 36 0 1 0-36-36 36 36 0 0 0 36 36Zm0-48a12 12 0 1 1-12 12 12 12 0 0 1 12-12ZM44 96a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm184 17.6a12 12 0 0 1-19.51 9.4s-21-15.48-53.34.28c-.34 4.75-1 10.94-2.13 18l30.66 25.55a12 12 0 0 1 3.7 13l-16 48a12 12 0 1 1-22.76-7.59L162 180l-15.44-12.86a136.39 136.39 0 0 1-5.72 14.23c-14.64 31-39.34 51.93-73.42 62.15A11.82 11.82 0 0 1 64 244a12 12 0 0 1-3.45-23.5c37.84-11.35 60.77-38.71 68.41-81.44-24 13.54-43.11 17-56.46 17a65.87 65.87 0 0 1-21.5-3.75 12 12 0 0 1 9.72-21.93c.43.17 25.42 9.53 68.5-19.76 54.71-37.18 94.26-6.38 94.26-6.38a12 12 0 0 1 4.52 9.36Z" />
  </Svg>
);
const Memo = memo(SvgPersonSimpleThrowBold);
export default Memo;
