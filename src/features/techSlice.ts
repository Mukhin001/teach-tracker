import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Tech {
  id: number;
  name: string;
  description: string;
  done: boolean;
}

interface TechState {
  technologies: Tech[];
}

const initialState: TechState = {
  technologies: [],
};

export const techSlice = createSlice({
  name: "technologies",
  initialState,
  reducers: {
    addTech: (state, action: PayloadAction<Tech>) => {
      state.technologies.push(action.payload);
    },
    removeTech: (state, action: PayloadAction<number>) => {
      state.technologies = state.technologies.filter(
        (tech) => tech.id !== action.payload
      );
    },
    replaceTech: (state, action: PayloadAction<Tech[]>) => {
      state.technologies = action.payload;
    },
  },
});

export const { addTech, removeTech, replaceTech } = techSlice.actions;
export default techSlice.reducer;
