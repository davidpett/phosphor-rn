import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGlobeSimple = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm87.63 96H175.8c-1.41-28.46-10.27-55.47-25.12-77a88.2 88.2 0 0 1 64.95 77ZM128 215.89c-18.73-20.27-30.09-49-31.77-79.89h63.54c-1.68 30.87-13.04 59.62-31.77 79.89ZM96.23 120c1.68-30.87 13-59.62 31.77-79.89 18.73 20.27 30.09 49 31.77 79.89Zm9.09-77C90.47 64.53 81.61 91.54 80.2 120H40.37a88.2 88.2 0 0 1 64.95-77Zm-64.95 93H80.2c1.41 28.46 10.27 55.47 25.12 77a88.2 88.2 0 0 1-64.95-77Zm110.31 77c14.85-21.56 23.71-48.57 25.12-77h39.83a88.2 88.2 0 0 1-64.95 77Z" />
  </Svg>
);
const Memo = memo(SvgGlobeSimple);
export default Memo;
