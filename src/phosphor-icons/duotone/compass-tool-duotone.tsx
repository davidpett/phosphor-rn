import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCompassToolDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 80a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" opacity={0.2} />
    <Path d="M215.12 123.64a8 8 0 1 0-14.24-7.28 79.58 79.58 0 0 1-33.08 33.5l-16.58-37.32A40 40 0 0 0 136 40.8V24a8 8 0 0 0-16 0v16.8a40 40 0 0 0-15.22 71.74L56.69 220.75a8 8 0 1 0 14.62 6.5l25.14-56.56A95.48 95.48 0 0 0 128 176a99.13 99.13 0 0 0 31.6-5.21l25.09 56.46a8 8 0 0 0 14.62-6.5l-25-56.25a95.81 95.81 0 0 0 40.81-40.86ZM128 56a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm0 104a79.52 79.52 0 0 1-25-4l16.42-36.94a39.81 39.81 0 0 0 17.2 0l16.48 37.06A83.21 83.21 0 0 1 128 160Z" />
  </Svg>
);
const Memo = memo(SvgCompassToolDuotone);
export default Memo;
