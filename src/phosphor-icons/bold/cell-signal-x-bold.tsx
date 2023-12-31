import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalXBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216.49 191.51a12 12 0 0 1-17 17L184 193l-15.51 15.52a12 12 0 0 1-17-17L167 176l-15.52-15.51a12 12 0 0 1 17-17L184 159l15.51-15.52a12 12 0 0 1 17 17L201 176ZM160 124a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12Zm40 0a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v80a12 12 0 0 0 12 12Zm-80-24a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12Zm-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12Zm-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalXBold);
export default Memo;
