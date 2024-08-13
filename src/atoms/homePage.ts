import { atom } from "recoil";

export const homepageAtom = atom<Navbar>({
   key: "homepageAtom",
   default: {
      messageCount: 3,
      notificationCount: 14,
      networkCount: 3,
      profilePic: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
   },
});
