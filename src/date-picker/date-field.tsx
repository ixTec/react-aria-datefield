import { createCalendar } from "@internationalized/date";
import { type AriaButtonProps, useButton } from "@react-aria/button";
import type {
  AriaDateFieldOptions,
  DatePickerAria,
  DateValue,
} from "@react-aria/datepicker";
import { useDateField } from "@react-aria/datepicker";
import type { MutableRefObject } from "react";
import { useRef } from "react";
import { useDateFieldState } from "react-stately";

import type { DatePickerProps } from "./date-picker";
import DateSegment from "./date-segment";

type DateFieldProps = AriaDateFieldOptions<DateValue> & {
  buttonProps: AriaButtonProps<"button">;
  datePickerRef: MutableRefObject<null>;
  groupProps: DatePickerAria["groupProps"];
  locale: string;
  size: NonNullable<DatePickerProps["size"]>;
};

function DateField({
  buttonProps,
  datePickerRef,
  groupProps,
  locale,
  size,
  ...props
}: DateFieldProps) {
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const fieldState = useDateFieldState({
    ...props,
    createCalendar,
    locale,
  });
  const { fieldProps, inputProps } = useDateField(props, fieldState, ref);

  // Using react-aria's `useButton` to manage the interactions for the Calendar properly, as the properties differ to normal buttons
  const { buttonProps: reactAriaButtonProps } = useButton(
    {
      ...buttonProps,
    },
    buttonRef
  );

  return (
    <div {...groupProps} ref={datePickerRef}>
      <input aria-hidden {...inputProps} />
      <div {...fieldProps}>
        {fieldState.segments.map((segment, index) => (
          <DateSegment key={index} {...{ segment, size, state: fieldState }} />
        ))}
      </div>
      <div>
        <button {...reactAriaButtonProps}>
          {/** Placeholder for icon */}
          Icon
        </button>
      </div>
    </div>
  );
}

export default DateField;
