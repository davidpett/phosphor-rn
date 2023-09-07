import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCrownSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m239.78 86.62-37 113.38S176 184 128 184s-74.78 16-74.78 16l-37-113.37a4.1 4.1 0 0 1 5.72-5l53.41 26.62a4.11 4.11 0 0 0 5.36-1.56L124.48 34a4.11 4.11 0 0 1 7 0l43.77 72.74a4.12 4.12 0 0 0 5.35 1.56l53.43-26.64a4.1 4.1 0 0 1 5.75 4.96Z"
      opacity={0.2}
    />
    <Path d="M243.84 76.19a12.08 12.08 0 0 0-13.34-1.7l-50.21 25-41.92-69.63a12.11 12.11 0 0 0-20.74 0L75.71 99.52l-50.19-25a12.11 12.11 0 0 0-16.9 14.6l37 113.36a8 8 0 0 0 11.68 4.4c.25-.15 25.82-14.88 70.7-14.88s70.45 14.73 70.68 14.87a8 8 0 0 0 11.71-4.39l37-113.33a12.06 12.06 0 0 0-3.55-12.96ZM198 188.83c-12-5.09-35.92-12.83-70-12.83s-58 7.74-70 12.83L26.71 93l45.07 22.47a12.17 12.17 0 0 0 15.78-4.59L128 43.66l40.44 67.2a12.17 12.17 0 0 0 15.77 4.59L229.29 93Z" />
  </Svg>
);
const Memo = memo(SvgCrownSimpleDuotone);
export default Memo;
