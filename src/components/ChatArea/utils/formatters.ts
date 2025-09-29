//types
import type { TimestampFormatter } from "@/components/ChatArea/types";

export const timestampFormatters: TimestampFormatter[] = [
  {
    condition: (daysElapsed: number): boolean => daysElapsed === 0,
    format: (messageDate: Date): string =>
      messageDate.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
  },
  {
    condition: (daysElapsed: number): boolean => daysElapsed === 1,
    format: (): string => "Yesterday",
  },
  {
    condition: (daysElapsed: number): boolean => daysElapsed < 7,
    format: (messageDate: Date): string =>
      messageDate.toLocaleDateString("en-US", { weekday: "long" }),
  },
  {
    condition: (): boolean => true,
    format: (messageDate: Date): string =>
      messageDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
  },
];
