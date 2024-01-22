let human = {
    name: "John",
    age: 24,
    address: "4 bể là nhà :))",
}

console.log("Thông tin ban đầu:");
console.log(human);
console.log("Hiển thị thông tin:");
console.log("Tên: " + human.name);
console.log("Tuổi: " + human.age);
console.log("Địa chỉ: " + human.address);
human.birthDate = "22/01/2000"
console.log("sau khi thêm ngày sinh");
console.log(human);
delete human.age
console.log("sau khi xóa thuộc tính tuổi:");
console.log(human);