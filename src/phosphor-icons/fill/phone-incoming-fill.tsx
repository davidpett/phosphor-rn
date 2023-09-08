import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneIncomingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88 16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56 16 16 0 0 1 15.17-1.4l.13.06 47.11 21.11a16 16 0 0 1 9.55 16.62ZM160 104h40a8 8 0 0 0 0-16h-20.68l34.34-34.34a8 8 0 0 0-11.32-11.32L168 76.69V56a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgPhoneIncomingFill);
export default Memo;
