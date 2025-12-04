import { createSlice } from "@reduxjs/toolkit";
import { Course } from "../../constants";

const initialState: Course[] = [];

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses: (_state, action) => {
            return action.payload;
        },

        addCourse: (state, action) => {
            state.push(action.payload);
        },
        deleteCourse: (state, action) => {
            const courseIdToRemove = action.payload;
            return state.filter(course => course.id !== courseIdToRemove);
        }, updateCourse: (state, action) => {
            return state
        }
    }
})

export const coursesReducer = coursesSlice.reducer;
export const { setCourses, addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
