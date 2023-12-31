import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebhooksLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M179.37 182H109.6a46 46 0 1 1-82.4-33.61 6 6 0 0 1 9.6 7.21A33.68 33.68 0 0 0 30 176a34 34 0 0 0 68 0 6 6 0 0 1 6-6h75.37a14 14 0 1 1 0 12ZM64 190a14 14 0 0 0 11.73-21.62l36.42-59.18a6 6 0 0 0-2-8.25 34 34 0 1 1 49-42.57 6 6 0 1 0 11-4.79A46 46 0 1 0 99 107.7l-33.48 54.38c-.5-.05-1-.08-1.52-.08a14 14 0 0 0 0 28Zm128-60a46 46 0 0 0-18.8 4l-33.47-54.39A14 14 0 1 0 128 86a12.79 12.79 0 0 0 1.52-.09l36.4 59.17a6.05 6.05 0 0 0 3.73 2.69 6 6 0 0 0 4.53-.73A34 34 0 1 1 192 210a6 6 0 0 0 0 12 46 46 0 0 0 0-92Z" />
  </Svg>
);
const Memo = memo(SvgWebhooksLogoLight);
export default Memo;
