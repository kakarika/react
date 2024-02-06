import React from "react";

const studentList = [
	{
		id: 1,
		name: "aung aung",
		grade: "A",
	},
	{
		id: 2,
		name: "mg mg",
		grade: "A",
	},
	{
		id: 3,
		name: "mya mya",
		grade: "A",
	},
	{
		id: 4,
		name: "hla hla",
		grade: "A",
	},
];

const arr = ["bibimbap", "sushi", "bbq"];
const StudentList = () => {
	return (
		<div>
			<h2>StudentList</h2>
			<div className="students">
				{studentList.map((stu) => (
					<div key={stu.id}>
						<h3>{stu.name}</h3>
						<p>{stu.grade}</p>
					</div>
				))}
			</div>
			<div>
				<h2>array</h2>
				{arr.map((food, i) => (
					<h4 key={i}>{food}</h4>
				))}
			</div>
		</div>
	);
};

export default StudentList;
