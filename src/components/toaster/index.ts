import { IToaster, Position, Toaster } from "@blueprintjs/core";

export const AppToaster: IToaster = Toaster.create({
  className: "common-toaster",
  position: Position.TOP_RIGHT,
});
