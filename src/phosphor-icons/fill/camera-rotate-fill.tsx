import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCameraRotateFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24Zm-51.19 110.4A48.21 48.21 0 0 1 96 163.77V168a8 8 0 0 1-16 0v-24a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-5.15a32.12 32.12 0 0 0 40.34 1.61 8 8 0 0 1 9.62 12.79ZM176 120a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h5.15a32.12 32.12 0 0 0-40.34-1.61 8 8 0 0 1-9.62-12.79 48.21 48.21 0 0 1 60.81 2.63V96a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgCameraRotateFill);
export default Memo;
