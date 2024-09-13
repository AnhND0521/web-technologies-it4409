function TTSV(hoTen, namVaoTruong, bacDT, chuongTrinh, khoaVien, tinhTrang, gioiTinh, lop, khoa, email, avatar) {
    this.hoTen = hoTen;
    this.namVaoTruong = namVaoTruong;
    this.bacDT = bacDT;
    this.chuongTrinh = chuongTrinh;
    this.khoaVien = khoaVien;
    this.tinhTrang = tinhTrang;
    this.gioiTinh = gioiTinh;
    this.lop = lop;
    this.khoa = khoa;
    this.email = email;
    this.avatar = avatar;
}

const defaultTTSV = new TTSV(
    "Nguyễn Đức Anh",
    2021,
    "KSCLC-TN-TT-VN-ICT",
    "Công nghệ thông tin Việt-Nhật 2021",
    "Trường Công nghệ Thông tin và Truyền thông",
    "Học",
    "Nam",
    "Việt Nhật 04-K66",
    66,
    "anh.nd214985@sis.hust.edu.vn",
    "assets/profile.png"
);

let ttsv = JSON.parse(localStorage.getItem("ttsv")) ?? JSON.parse(JSON.stringify(defaultTTSV));

console.log(ttsv);

if (window.location.href.includes("/index.html")) {
    document.querySelector("span#ho-ten").textContent = ttsv.hoTen;
    document.querySelector("span#nam-vao-truong").textContent = ttsv.namVaoTruong;
    document.querySelector("span#bac-dt").textContent = ttsv.bacDT;
    document.querySelector("span#chuong-trinh").textContent = ttsv.chuongTrinh;
    document.querySelector("span#khoa-vien").textContent = ttsv.khoaVien;
    document.querySelector("span#tinh-trang").textContent = ttsv.tinhTrang;
    document.querySelector("span#gioi-tinh").textContent = ttsv.gioiTinh;
    document.querySelector("span#lop").textContent = ttsv.lop;
    document.querySelector("span#khoa").textContent = ttsv.khoa;
    document.querySelector("span#email").textContent = ttsv.email;
    document.querySelector("img#avatar").src = ttsv.avatar;

    document.getElementById("btn-edit").addEventListener("click", () => {
        localStorage.setItem("ttsv", JSON.stringify(ttsv));
        window.location.href = "edit.html";
    });
}

if (window.location.href.includes("/edit.html")) {
    document.querySelector("input#ho-ten").value = ttsv.hoTen;
    document.querySelector("input#nam-vao-truong").value = ttsv.namVaoTruong;
    document.querySelector("input#bac-dt").value = ttsv.bacDT;
    document.querySelector("input#chuong-trinh").value = ttsv.chuongTrinh;
    document.querySelector("select#khoa-vien").value = ttsv.khoaVien;
    document.querySelector("select#tinh-trang").value = ttsv.tinhTrang;
    document.querySelector(`input[name='gioi-tinh'][value='${ttsv.gioiTinh}']`).checked = "true";
    document.querySelector("input#lop").value = ttsv.lop;
    document.querySelector("input#khoa").value = ttsv.khoa;
    document.querySelector("input#email").value = ttsv.email;
    document.querySelector("img#avatar").src = ttsv.avatar;

    const avatarInput = document.getElementById("avt-input");
    avatarInput.addEventListener("change", () => {
        const selectedFile = avatarInput.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = () => {
                document.getElementById("avatar").src = reader.result;
            }

            reader.readAsDataURL(selectedFile);
        }
    });

    document.getElementById("btn-ok").addEventListener("click", () => {
        ttsv.hoTen = document.querySelector("input#ho-ten").value;
        ttsv.namVaoTruong = document.querySelector("input#nam-vao-truong").value;
        ttsv.bacDT = document.querySelector("input#bac-dt").value;
        ttsv.chuongTrinh = document.querySelector("input#chuong-trinh").value;
        ttsv.khoaVien = document.querySelector("select#khoa-vien").value;
        ttsv.tinhTrang = document.querySelector("select#tinh-trang").value;
        ttsv.gioiTinh = document.querySelector("input[name='gioi-tinh']:checked").value;
        ttsv.lop = document.querySelector("input#lop").value;
        ttsv.khoa = document.querySelector("input#khoa").value;
        ttsv.email = document.querySelector("input#email").value;
        ttsv.avatar = document.querySelector("img#avatar").src;
    
        localStorage.setItem("ttsv", JSON.stringify(ttsv));
        window.location.href = "index.html";
    });

    document.getElementById("btn-cancel").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    document.getElementById("btn-reset").addEventListener("click", () => {
        localStorage.setItem("ttsv", JSON.stringify(defaultTTSV));
        window.location.href = "index.html";
    });
}