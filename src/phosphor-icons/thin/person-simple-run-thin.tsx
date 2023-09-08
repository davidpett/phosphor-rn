import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonSimpleRunThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 84a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20Zm65.66 101c-.57.26-6.84 3-18.08 3-13.86 0-35.25-4.15-62.81-22.16a162.59 162.59 0 0 1-19.49 40.78c9.47 2.56 23.08 7.5 35.14 16.67 18.3 13.92 27.58 33 27.58 56.68a4 4 0 0 1-8 0c0-15.89-5.88-53.77-59.7-66.37q-1.56 2.06-3.22 4.08c-18.85 22.83-42.42 34.72-68.6 34.72q-4.4 0-8.89-.45a4 4 0 1 1 .8-8c27.33 2.73 51.06-7.83 70.52-31.41 13.82-16.74 22.89-37.44 26.9-51.32-42.84-26.69-71-4.8-71.32-4.57a4 4 0 1 1-5-6.24c.36-.29 9-7.1 23.84-9.58 13.5-2.27 35-1.26 60.91 16.34 25 17 44.41 21.64 56.29 22.56 12.75 1 19.77-2 19.84-2.05a4 4 0 0 1 3.29 7.29Z" />
  </Svg>
);
const Memo = memo(SvgPersonSimpleRunThin);
export default Memo;
