const listCon = document.querySelector(".list-konten");
const btnAdd = document.getElementById("btn-add");
const inputEl = document.getElementById("input-list");
const label = document.getElementById("input-label");

let list = ["illustrasi mobil", "Beli sapu lidi"];

function toggleLabel() {
  if (document.activeElement === inputEl || inputEl.value.trim() !== "") {
    label.classList.add("displayNone");
  } else {
    label.classList.remove("displayNone");
  }
}

inputEl.addEventListener("focus", toggleLabel);
inputEl.addEventListener("input", toggleLabel);
inputEl.addEventListener("blur", toggleLabel);

// Fungsi untuk membuat elemen to-do
function buatItem(teksIsi) {
  const container = document.createElement("section");
  const conCentang = document.createElement("section");
  const conTeks = document.createElement("section");
  const teks = document.createElement("p");
  const conX = document.createElement("section");
  const btnCheck = document.createElement("section");
  const btnX = document.createElement("button");
  const imgX = document.createElement("img");

  listCon.appendChild(container);
  container.appendChild(conCentang);
  container.appendChild(conTeks);
  container.appendChild(conX);
  conTeks.appendChild(teks);
  conX.appendChild(btnX);
  btnX.appendChild(imgX);
  conCentang.appendChild(btnCheck);

  imgX.setAttribute("src", "./asset/icon/x-icon.svg");
  teks.textContent = teksIsi;

  // Gaya
  Object.assign(container.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.2rem 0.5rem",
    width: "100%",
    height: "4rem",
    border: "2px solid rgba(0,0,0,0.3)",
    borderRadius: "10px",
    marginTop: "0.5rem",
  });

  Object.assign(conTeks.style, {
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 0.5rem",
    overflow: "hidden",
  });

  Object.assign(teks.style, {
    fontWeight: "400",
    fontSize: "0.9em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
  });

  [conCentang, conX].forEach((el) => {
    Object.assign(el.style, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "2rem",
      width: "2rem",
      borderRadius: "5px",
    });
  });

  Object.assign(btnCheck.style, {
    border: "2px solid black",
    borderRadius: "5px",
    scale: "0.7",
  });

  [btnX, btnCheck].forEach((el) => {
    Object.assign(el.style, {
      display: "inline-flex",
      height: "100%",
      width: "100%",
      transform: "scale(0.8)",
      cursor: "pointer",
    });
  });

  // Fungsi tombol hapus
  btnX.addEventListener("click", () => {
    listCon.removeChild(container);
  });
  {
    const imgCheck = document.createElement("img");

    imgCheck.setAttribute("src", "./asset/icon/check-icon.svg");

    btnCheck.appendChild(imgCheck);

    Object.assign(imgCheck.style, {
      display: "none",
    });

    btnCheck.addEventListener("click", function () {
      btnCheck.classList.toggle("backgroundBlack");
      imgCheck.classList.toggle("displayAda");
      teks.classList.toggle("teksCheck");
    });
  }
}

// Render awal dari array list
list.forEach(buatItem);

// Tambahkan item saat tombol + diklik
btnAdd.addEventListener("click", function () {
  const inputList = inputEl.value.trim();
  if (inputList) {
    buatItem(inputList);
    inputEl.value = ""; // kosongkan input setelah tambah
  }
  label.classList.remove("displayNone");
});
