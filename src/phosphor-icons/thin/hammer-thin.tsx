import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHammerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248.5 114.81 181.05 46.9A92.1 92.1 0 0 0 50.9 47L37.12 61.18a4 4 0 1 0 5.75 5.56L56.6 52.56a83.75 83.75 0 0 1 22.34-16L130.34 88l-98.83 98.82a12 12 0 0 0 0 17l20.69 20.66a12 12 0 0 0 17 0l98.8-98.85 17.17 17.18 17.66 17.66a12 12 0 0 0 17 0l28.69-28.69a12 12 0 0 0-.02-16.97Zm-185 104a4 4 0 0 1-5.66 0l-20.67-20.67a4 4 0 0 1 0-5.66L108 121.63 134.34 148Zm101.67-101.66L140 142.32 113.65 116l25.18-25.2a4 4 0 0 0 0-5.66l-52-52a84.11 84.11 0 0 1 88.52 19.38l47 47.35L188 134.32l-17.17-17.17a4 4 0 0 0-5.66 0Zm77.66 9-28.68 28.69a4 4 0 0 1-5.66 0L193.66 140l34.39-34.4 14.78 14.88a4 4 0 0 1 0 5.64Z" />
  </Svg>
);
const Memo = memo(SvgHammerThin);
export default Memo;
