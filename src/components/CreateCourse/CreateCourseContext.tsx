import React, { createContext, useState, ReactNode } from 'react';
import { Course } from '../Courses/Courses';

interface CreateCourseContextType {
    courses: Course[];
    addCourse: (course: Course) => void;
    removeCourse: (id: string) => void;
}

export const CreateCourseContext = createContext<CreateCourseContextType | undefined>(undefined);

