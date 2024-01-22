let phoneBook = [
    {
        name: "Alice",
        phoneNumber: "123-456-7890",
        email: "alice@example.com",
        displayFullInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phoneNumber);
            console.log("Email: " + this.email);
        }
    },
    {
        name: "Bob",
        phoneNumber: "987-654-3210",
        email: "bobe@example.com",
        displayFullInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phoneNumber);
            console.log("Email: " + this.email);
        }
    },
];

for (let i = 0; i < phoneBook.length; i++) {
    phoneBook[i].displayFullInfo();
    
    console.log("------------------------------------------------------");
}