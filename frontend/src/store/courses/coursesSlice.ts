import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../constants";

const initialState: Course[] = [];

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses: (_state, action: PayloadAction<Course[]>) => {
            return action.payload;
        },

        addCourse: (state, action: PayloadAction<Course>) => {
            state.push(action.payload);
        },
        deleteCourse: (state, action: PayloadAction<string>) => {
            const courseIdToRemove = action.payload;
            return state.filter(course => course.id !== courseIdToRemove);
        },
        updateCourse: (state, action: PayloadAction<Course>) => {
            const { id, title, description, creationDate, duration, authors } = action.payload;
            const courseIndex = state.findIndex(course => id === course.id);
            state[courseIndex] = { ...state[courseIndex], title: title, description: description, creationDate: creationDate, duration: duration, authors: authors };
        }
    }
})

export const coursesReducer = coursesSlice.reducer;
export const { setCourses, addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
