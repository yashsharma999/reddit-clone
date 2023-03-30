import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  type: "login" | "signup" | "resetPassword";
}

export type ModalView = "login" | "signup" | "resetPassword";

const defaultModalState: AuthModalState = {
  open: false,
  type: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
