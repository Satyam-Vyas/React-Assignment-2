export function isEnterPressedWithoutShift(e: React.KeyboardEvent): boolean {
  return e.key === "Enter" && !e.shiftKey;
}
