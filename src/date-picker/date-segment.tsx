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

  return (
    <span {...segmentProps} ref={ref}>
      {segment.text}
    </span>
  );
}

export default DateSegment;
