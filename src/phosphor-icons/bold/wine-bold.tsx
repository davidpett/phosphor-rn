import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWineBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m209.17 94.54-21.78-73.93a12 12 0 0 0-11.5-8.61H80.11a12 12 0 0 0-11.5 8.61L46.83 94.54a67.45 67.45 0 0 0 18.53 68.72A91.32 91.32 0 0 0 116 187.2V220H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-32.8a91.32 91.32 0 0 0 50.65-23.94 67.45 67.45 0 0 0 18.52-68.72ZM89.08 36h77.84l18.38 62.41c-10.88 2.8-28.05 3-51.88-9.12C110.68 77.78 91.92 75 77.24 76.22ZM128 164a67.5 67.5 0 0 1-46.26-18.27 43.55 43.55 0 0 1-12-43.89c18.44-5.33 38.64 1.66 52.87 8.87 11.55 5.85 30.18 13.28 50.26 13.28a74.15 74.15 0 0 0 14.29-1.35 43.2 43.2 0 0 1-12.87 23.09A67.5 67.5 0 0 1 128 164Z" />
  </Svg>
);
const Memo = memo(SvgWineBold);
export default Memo;
