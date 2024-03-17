import { atom } from "nanostores";

interface IconsStore {
  allIcons: string[];
  newIcons: string[];
}

export const $icons = atom<IconsStore>({
  allIcons: [],
  newIcons: [],
})
