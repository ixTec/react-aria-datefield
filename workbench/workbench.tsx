import { DatePicker } from "components/date-picker";
import { css } from "@emotion/react";
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";

const wrapperStyle = css({
  display: "flex",
  flexDirection: "column",
  width: "500px",
});

function Workbench() {
  return (
    <div css={wrapperStyle}>
      <DatePicker label="Test" />
      {/* <DatePicker label="Small" size="small" />
      <DatePicker label="Medium" size="medium" />
      <DatePicker label="Large" size="large" /> */}
      {/* <DatePicker
        defaultValue={parseDate('2024-03-20')}
        description="Description"
        disabled
        label="Label"
        maxValue={parseDate('2024-03-27')}
        minValue={today(getLocalTimeZone())}
      />
      <DatePicker
        defaultValue={parseDate('2024-03-20')}
        description="Description"
        id="custom-id"
        label="Label"
        maxValue={parseDate('2024-03-28')}
        minValue={today(getLocalTimeZone())}
      />
      <DatePicker
        defaultValue={parseDate('2024-02-01')}
        description="Description"
        label="Label"
        maxValue={parseDate('2024-03-28')}
        minValue={today(getLocalTimeZone())}
      /> */}
    </div>
  );
}

export default Workbench;
