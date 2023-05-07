import React from "react";

export default function StudentCard({ student }) {
  return (
    <div className="student">
        <h3>
          {student.names.preferredName} {student.names.middleName.slice(0, 1)}. {student.names.surname}
        </h3>
        <p>{student.username}</p>
        <p>Birthday: {student.dob}</p>;
        <img
          style={{ height: "150px", width: "150px" }}
          src={student.profilePhoto}
          alt={student.names.surname}
        />
        <div>
          {/* Anonymous function is required to use function that was passed from app.js */}
          <button className="showMore">Show More...</button>
        </div>
    </div>
  );
}
