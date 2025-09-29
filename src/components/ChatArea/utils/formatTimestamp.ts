//utils
import { timestampFormatters } from "@/components/ChatArea/utils/formatters";

//types
import type { TimestampFormatter } from "@/components/ChatArea/types";

export function formatTimestamp(timestamp: number): string {
  const timeNow = new Date();
  const messageDate = new Date(timestamp);

  const today = new Date(
    timeNow.getFullYear(),
    timeNow.getMonth(),
    timeNow.getDate()
  );
  const messageDay = new Date(
    messageDate.getFullYear(),
    messageDate.getMonth(),
    messageDate.getDate()
  );

  const timeDifferenceInMilliseconds = today.getTime() - messageDay.getTime();
  const daysElapsed = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return timestampFormatters
    .find((formatter: TimestampFormatter): boolean =>
      formatter.condition(daysElapsed)
    )!
    .format(messageDate);
}
