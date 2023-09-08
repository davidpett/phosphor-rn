import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPepper = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M167.27 40.42A40.06 40.06 0 0 0 128 8a8 8 0 0 0 0 16 24 24 0 0 1 22.85 16.66A64.08 64.08 0 0 0 96 104c0 46.75-25.75 78-76.53 93a16 16 0 0 0 1.77 31.13A264.8 264.8 0 0 0 66.75 232c40.78 0 86.16-9.15 117.53-35.46C210.64 174.44 224 143.3 224 104a64.07 64.07 0 0 0-56.73-63.58ZM160 56a48.07 48.07 0 0 1 45.37 32.37L192 95l-28.42-14.17a8 8 0 0 0-7.16 0L128 95l-13.37-6.68A48.08 48.08 0 0 1 160 56Zm14 128.3c-18 15.07-43.6 25.26-74.12 29.47a254.08 254.08 0 0 1-75.88-1.4c57.23-16.87 87.63-54 88-107.42l12.44 6.22a8 8 0 0 0 7.16 0L160 96.93l28.42 14.21a8 8 0 0 0 7.16 0l12.41-6.2c-.21 33.9-11.64 60.6-33.99 79.35Z" />
  </Svg>
);
const Memo = memo(SvgPepper);
export default Memo;
