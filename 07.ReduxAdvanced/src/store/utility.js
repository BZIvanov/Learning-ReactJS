// we are creating utility file to export here the common logic from the reducers, which will make reducers less code repetition and easier to read

export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};