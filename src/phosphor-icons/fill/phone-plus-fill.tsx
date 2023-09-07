import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhonePlusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88 16 16 0 0 1 16.62 9.52l21.12 47.15a.61.61 0 0 0 0 .12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56 16 16 0 0 1 15.18-1.4l.12.06 47.1 21.11a16 16 0 0 1 9.56 16.62ZM152 80h24v24a8 8 0 0 0 16 0V80h24a8 8 0 0 0 0-16h-24V40a8 8 0 0 0-16 0v24h-24a8 8 0 0 0 0 16Z" />
  </Svg>
);
const Memo = memo(SvgPhonePlusFill);
export default Memo;
