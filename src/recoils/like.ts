import { atom, selector, selectorFamily, useRecoilValue } from "recoil";

export const likeState = atom<Map<string, number>>({
  key: "likeState",
  default: new Map(),
});

export const likeItemSelector = selectorFamily<boolean, string>({
  key: "likeItemSelector",
  get:
    (id: string) =>
    ({ get }) => {
      const likes = get(likeState);
      return likes.get(id) ?? false; // 기본값은 false
    },
  set:
    (id: string) =>
    ({ get, set }) => {
      const likes = get(likeState);
      const updatedLikes = new Map(likes);
      const currentStatus = updatedLikes.get(id) ?? false; // 현재 상태 가져오기
      updatedLikes.set(id, !currentStatus); // 상태 반전
      set(likeState, updatedLikes);
    },
});
