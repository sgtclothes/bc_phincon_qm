// import stringModule, { name } from "./module";
// console.log(stringModule().generateRandomCharacters(5));
// console.log(name);

let office = {
    name: "Phincon Academy",
    location: "Surabaya",
    employees: 500,
    detailOffice: {
        facilities: {
            meetingRoom: true,
            conferenceRoom: false,
        },
    },
};

const {
    name: officeName,
    location: officeLocation,
    employees,
    detailOffice: {
        facilities: { meetingRoom },
    },
} = office;
console.log(officeName);
console.log(officeLocation);
console.log(employees);
console.log(meetingRoom);
