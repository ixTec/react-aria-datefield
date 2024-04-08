import { DatePicker as TranspiledDatePicker } from "transpiled/date-picker";
import DatePicker from "./components/external/date-picker/date-picker";
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
      <DatePicker
        label="Test"
        defaultValue={parseDate("2024-03-30")}
        maxValue={parseDate("2024-04-23")}
        minValue={today(getLocalTimeZone())}
      />
      {/* <TranspiledDatePicker
        label="Test"
        defaultValue={parseDate("2024-03-30")}
        maxValue={parseDate("2024-04-23")}
        minValue={today(getLocalTimeZone())}
      /> */}
    </div>
  );
}

export default Workbench;
