import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightningALight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M173.88 111.94a6 6 0 0 0-3.42-4.27L119 84.56l14-59.17a6 6 0 0 0-10.24-5.47L27.6 122.78a6 6 0 0 0 1.94 9.55L81 155.44l-14 59.17a6 6 0 0 0 3 6.68 6 6 0 0 0 7.22-1.22l95.2-102.85a6 6 0 0 0 1.46-5.28Zm-90 83.21 9.92-41.76a6 6 0 0 0-3.38-6.86L42.08 124.8l74-80-9.92 41.77a6 6 0 0 0 3.38 6.86l48.38 21.73Zm153.44 18.16-36-72a6 6 0 0 0-10.74 0l-36 72a6 6 0 0 0 10.74 5.37L175.71 198h40.58l10.34 20.68A6 6 0 0 0 232 222a5.87 5.87 0 0 0 2.68-.64 6 6 0 0 0 2.68-8.05ZM181.71 186 196 157.42 210.29 186Z" />
  </Svg>
);
const Memo = memo(SvgLightningALight);
export default Memo;
