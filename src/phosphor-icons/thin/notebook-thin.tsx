import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotebookThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 112a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8Zm44-92v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12ZM48 212h28V44H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4ZM212 48a4 4 0 0 0-4-4H84v168h124a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgNotebookThin);
export default Memo;
