function Job(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
}

let jobs = [];

function addJob() {
    let id = prompt("Nhập ID công việc:");
    let title = prompt("Nhập tiêu đề công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let completed = prompt("Công việc đã hoàn thành? (true/false):").toLowerCase();
    let newJob = new Job(id, title, description, completed === "true");
    jobs.push(newJob);
    console.log("Công việc đã được thêm vào danh sách.");
}

function displayJobs() {
    console.log("Danh sách công việc:");
    for (let i = 0; i < jobs.length; i++) {
        console.log(`Công việc${i + 1}:`);
        console.log("ID: " + jobs[i].id);
        console.log("Tiêu đề: " + jobs[i].title);
        console.log("Mô tả: " + jobs[i].description);
        console.log("Hoàn thành: " + (jobs[i].completed ? "Đã hoàn thành" : "Chưa hoàn thành"));
        console.log("\n");
    }
}

function findJobById() {
    let searchId = prompt("Nhập ID công việc cần tìm:");
    let foundJob = jobs.find(function (job) {
        return job.id === searchId;
    });

    if (foundJob) {
        console.log("Thông tin công việc:");
        console.log("ID: " + foundJob.id);
        console.log("Tiêu đề: " + foundJob.title);
        console.log("Mô tả: " + foundJob.description);
        console.log("Hoàn thành: " + (foundJob.completed ? "Đã hoàn thành" : "Chưa hoàn thành"));
    } else {
        console.log("Không tìm thấy công việc với ID: " + searchId);
    }
}

let choice;

do {
    choice = prompt("Chọn một lựa chọn:\n1: Thêm công việc\n2: Hiển thị danh sách công việc\n3: Tìm kiếm công việc theo ID\n4: Thoát:");

    switch (choice) {
        case "1":
            addJob();
            break;
        case "2":
            displayJobs();
            break;
        case "3":
            findJobById();
            break;
        case "4":
            console.log("Chương trình đã kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== "4");
