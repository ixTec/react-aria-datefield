import { useDateSegment } from "@react-aria/datepicker";
import { useRef } from "react";
import type {
  DateFieldState,
  DateSegment as DateSegmentType,
} from "react-stately";

import type { DatePickerProps } from "./date-picker";

type DateSegmentProps = {
  segment: DateSegmentType;
  size: NonNullable<DatePickerProps["size"]>;
  state: DateFieldState;
};

function DateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  // Always render the placeholder as hidden, to prevent any layout shift (especially important if placeholder is translated)
  return (
    <span {...segmentProps} ref={ref}>
      <span aria-hidden="true">{segment.placeholder}</span>
      {segment.text}
    </span>
  );
}

export default DateSegment;
