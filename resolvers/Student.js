
export const Student = {
    classroom: ( student ) => {
        return db.classroom.find(
            (classroom) => classroom.id == student.classroom
        );
    }
}
