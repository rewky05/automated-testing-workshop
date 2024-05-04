interface Participant {
  firstName: string;
  lastName: string;
  age: number;
  attending: boolean;
}

var participant: Participant = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  attending: true
};

console.log(participant.firstName);
