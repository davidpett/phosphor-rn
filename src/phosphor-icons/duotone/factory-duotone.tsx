import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFactoryDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 136v80H40V88l64 48V88l64 48Z" opacity={0.2} />
    <Path d="M116 176a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h28a8 8 0 0 1 8 8Zm60-8h-28a8 8 0 0 0 0 16h28a8 8 0 0 0 0-16Zm72 48a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h16V88a8 8 0 0 1 12.8-6.4L96 120V88a8 8 0 0 1 12.8-6.4l38.74 29.05 11.56-80.91A16.08 16.08 0 0 1 174.94 16h18.12a16.08 16.08 0 0 1 15.84 13.74l15 105.13s.08.78.08 1.13v72h16a8 8 0 0 1 8.02 8Zm-85.86-94.4 8.53 6.4h36.11l-13.72-96h-18.12ZM48 208h160v-64h-40a8 8 0 0 1-4.8-1.6l-14.4-10.8L112 104v32a8 8 0 0 1-12.8 6.4L48 104Z" />
  </Svg>
);
const Memo = memo(SvgFactoryDuotone);
export default Memo;
