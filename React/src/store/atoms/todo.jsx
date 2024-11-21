/* eslint-disable no-unused-vars */
import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const TodoAtomFamily = atomFamily({
  key: "TodoAtomFamilly",
  default: selectorFamily({
    key: "TodoSelector",
    get: (id) => async ({ get }) => {
      try {
        const response = await axios.get(`http://localhost:3000/todo?id=${id}`);      
        return response.data.todo
      } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
      }
    },
  })
});
