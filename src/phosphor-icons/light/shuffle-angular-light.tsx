import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShuffleAngularLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236.24 179.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L217.52 190h-45.4a14.05 14.05 0 0 1-11.4-5.86L85.51 78.84a2 2 0 0 0-1.63-.84H32a6 6 0 0 1 0-12h51.88a14.05 14.05 0 0 1 11.4 5.86l75.21 105.3a2 2 0 0 0 1.63.84h45.4l-13.76-13.76a6 6 0 0 1 8.48-8.48Zm-92.07-74.4a6 6 0 0 0 8.37-1.4l18-25.12a2 2 0 0 1 1.63-.84h45.4l-13.81 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L217.52 66h-45.4a14.05 14.05 0 0 0-11.4 5.86L142.78 97a6 6 0 0 0 1.39 8.36Zm-32.34 45.28a6 6 0 0 0-8.37 1.4l-17.95 25.12a2 2 0 0 1-1.63.84H32a6 6 0 0 0 0 12h51.88a14.05 14.05 0 0 0 11.4-5.86L113.22 159a6 6 0 0 0-1.39-8.36Z" />
  </Svg>
);
const Memo = memo(SvgShuffleAngularLight);
export default Memo;
