let phoneBook = [
    {
        name: "Alice",
        phoneNumber: "123-456-7890",
        email: "alice@example.com"
    },
    {
        name: "Bob",
        phoneNumber: "987-654-3210",
        email: "bobe@example.com"
    },
];
for (let i = 0; i < phoneBook.length; i++) {
    console.log("Tên: " + phoneBook[i].name);
    console.log("Số điện thoại: " + phoneBook[i].phoneNumber);
    console.log("Email: " + phoneBook[i].email);
    console.log("------------------------------------------------------");
}