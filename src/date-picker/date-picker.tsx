import type { DateValue } from "@react-aria/calendar";
import { useDatePicker } from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { mergeProps } from "@react-aria/utils";
import type { FocusEvent, ReactNode } from "react";
import { useRef } from "react";
import { useDatePickerState } from "react-stately";

import DateField from "./date-field";

type DatePickerBaseProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "onBlur" | "onFocus" | "size" | "type"
> & {
  /** The default value of the Date Picker. To be used when the Date Picker is uncontrolled. */
  defaultValue?: DateValue;
  /** */
  description?: ReactNode;
  /** Sets appropriate error style and `aria-invalid` attribute.
   * @defaultValue `false` */
  error?: boolean;
  /** The latest allowed date that a user may select. */
  maxValue?: DateValue;
  /** The earliest allowed date that a user may select. */
  minValue?: DateValue;
  /** Handler called when the Date Picker loses focus. */
  onBlur?: (event: FocusEvent<Element, Element>) => void;
  /** Handler called when the value of the Date Picker changes. */
  onChange?: (value: DateValue) => void;
  /** Handler called when the Date Picker obtains focus. */
  onFocus?: (event: FocusEvent<Element, Element>) => void;
  /** Defines the size of the Date Picker. In most cases, the default size should be used.
   * @defaultValue `medium` */
  size?: "large" | "medium" | "small";
  /** The current value of the Date Picker when controlled. **Note**: when `value` is provided, the `onChange` handler should be used to control and update `value`. */
  value?: DateValue;
};

// One of these must be provided
type DatePickerLabelProps =
  | {
      "aria-label"?: never;
      "aria-labelledby"?: never;
      /** The label displayed above the input field. */
      label: ReactNode;
    }
  | {
      "aria-label"?: never;
      /** The id of the associated custom label element. In most cases, use `<label>` */
      "aria-labelledby": string;
      label?: never;
    }
  | {
      /** An accessible label. */
      "aria-label": string;
      "aria-labelledby"?: never;
      label?: never;
    };

export type DatePickerProps = DatePickerBaseProps & DatePickerLabelProps;

function DatePicker({
  description,
  disabled: isDisabled,
  label,
  readOnly: isReadOnly,
  size = "medium",
  ...restProps
}: DatePickerProps) {
  const { locale } = useLocale();
  const datePickerRef = useRef(null);
  // Some props are referred to differently in react-aria and so need to be mapped accordingly
  const convertedProps = mergeProps(
    { isDisabled, isReadOnly, label },
    restProps
  );
  const datePickerState = useDatePickerState(convertedProps);
  const { buttonProps, fieldProps, groupProps } = useDatePicker(
    convertedProps,
    datePickerState,
    datePickerRef
  );

  return (
    <DateField
      {...{
        buttonProps,
        datePickerRef,
        groupProps,
        locale,
        size,
        ...fieldProps,
      }}
    />
  );
}

export default DatePicker;
