import { IToaster, Position, Toaster } from "@blueprintjs/core";

export const AppToaster: IToaster = Toaster.create({
  maxToasts: 2,
  className: "common-toaster",
  position: Position.TOP,
});
