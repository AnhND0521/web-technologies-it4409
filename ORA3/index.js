const studentName = "Nguyễn Đức Anh";
const studentId = "20214985";
const sign = "_" + studentId;

function createInfo(group) {
    let info = document.createElement("div");
    info.className = "info";

    let label = document.createElement("label");
    label.textContent = "Item Info Name";
    label.addEventListener("dblclick", () => {
        let input = document.createElement("input");
        input.type = "text";
        input.value = label.textContent;
        input.style = "flex: 1;";
        input.addEventListener("keydown", (event) => {
            if (event.key === 'Enter') {
                label.textContent = input.value;
                input.replaceWith(label);
            } else if (event.key === 'Escape') {
                input.replaceWith(label);
            }
        });
        label.replaceWith(input);
    });

    let value = document.createElement("span");
    value.textContent = "Item Info Value";
    value.addEventListener("dblclick", () => {
        let input = document.createElement("input");
        input.type = "text";
        input.value = value.textContent;
        input.style = "flex: 2;";
        input.addEventListener("keydown", (event) => {
            if (event.key === 'Enter') {
                value.textContent = input.value;
                input.replaceWith(value);
            } else if (event.key === 'Escape') {
                input.replaceWith(value);
            }
        });
        value.replaceWith(input);
    });

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "assets/delete-icon.png";
    deleteIcon.className = "icon";
    deleteIcon.addEventListener("click", () => {
        const confirmed = window.confirm(`${studentName} - ${studentId}\nAre you sure you want to delete this item?`);
        if (confirmed) info.remove();
    });

    info.append(label, value, deleteIcon);

    group.appendChild(info);
}

function createGroup() {
    let group = document.createElement("div");
    group.className = "group";

    let headerBar = document.createElement("div");
    headerBar.className = "header-bar";
    
    let title = document.createElement("h2");
    title.textContent = "Group Item" + sign;

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "assets/delete-icon.png";
    deleteIcon.className = "icon";
    deleteIcon.addEventListener("click", () => {
        const confirmed = window.confirm(`${studentName} - ${studentId}\nAre you sure you want to delete this item?`);
        if (confirmed) group.remove();
    });

    title.appendChild(deleteIcon);
    title.addEventListener("dblclick", () => {
        let titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.value = title.textContent.substring(0, title.textContent.indexOf(sign));
        titleInput.style = "flex: 5;";
        titleInput.addEventListener("keydown", (event) => {
            if (event.key === 'Enter') {
                title.textContent = titleInput.value + sign;
                title.appendChild(deleteIcon);
                titleInput.replaceWith(title);
            } else if (event.key === 'Escape') {
                titleInput.replaceWith(title);
            }
        });
        title.replaceWith(titleInput);
    });

    let buttonGroup = document.createElement("div");
    buttonGroup.className = "btn-group";

    let btnAddInfo = document.createElement("button");
    btnAddInfo.className = "btn-add";
    btnAddInfo.textContent = "Add info item";
    btnAddInfo.addEventListener("click", () => createInfo(group));

    let btnAddGroup = document.createElement("button");
    btnAddGroup.className = "btn-add";
    btnAddGroup.textContent = "Add group item";
    btnAddGroup.addEventListener("click", createGroup);

    buttonGroup.append(btnAddInfo, btnAddGroup);
    headerBar.append(title, buttonGroup);
    group.append(headerBar, document.createElement("hr"));

    document.querySelector(".content").appendChild(group);
}

createGroup();
document.querySelector(".header-bar h2").textContent = "THÔNG TIN SINH VIÊN" + sign;
document.querySelector("#pdf").addEventListener("click", () => {
    html2canvas($('.main-content')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("student-info.pdf");
        }
    });
});