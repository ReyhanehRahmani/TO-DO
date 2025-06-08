document.getElementById("creatbut").onclick = function () {
    const title = document.getElementById("titlebox").value;
    const desc = document.getElementById("descriptionbox").value;

    const card = document.createElement("div");
    card.classList.add("createdCards");
    card.innerHTML = "<h3>" + title + "</h3><p>" + desc + "</p>";

    document.body.appendChild(card);
};
