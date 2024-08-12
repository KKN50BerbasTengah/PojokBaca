document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        {
            name: "Muhammad Arief Wicaksana",
            position: "Ilmu Pemerintahan",
            imgSrc: "images/arif.JPG",
        },
        {
            name: "Sumarni Ratuloli",
            position: "Ekonomi Syariah",
            imgSrc: "images/arni.JPG",
        },
        {
            name: "Enji Dwi Putri",
            position: "Farmasi",
            imgSrc: "images/enji.JPG",
        },
        {
            name: "Devi Khuan Aurellia",
            position: "Akuntansi",
            imgSrc: "images/uan.JPG",
        },
        {
            name: "Saidul Bahri",
            position: "Ilmu Pemerintahan",
            imgSrc: "images/saidul.JPG",
        },
        {
            name: "Muhammad Haikal Saharuddin",
            position: "Farmasi",
            imgSrc: "images/haikal.JPG",
        },
        {
            name: "Salsabila Maharani Amelia",
            position: "Statistika",
            imgSrc: "images/sabil.JPG",
        },
        {
            name: "Putri Herli Wijaya",
            position: "Kehutanan",
            imgSrc: "images/uty.JPG",
        },
        {
            name: "Bintang Arya Nugraha",
            position: "Ilmu Pemerintahan",
            imgSrc: "images/bintang.JPG",
        },
        {
            name: "Ardi Setyiawan",
            position: "Informatika",
            imgSrc: "images/ardi.JPG",
        },
        {
            name: "Hermansyah",
            position: "Akuntansi",
            imgSrc: "images/herman.jpg",
        },
        {
            name: "Rafi Izdihaar",
            position: "Informatika",
            imgSrc: "images/rafi.JPG",
        }
    ];

    const teamRow = document.getElementById("teamRow");

    teamMembers.forEach(member => {
        const memberBox = document.createElement("div");
        memberBox.classList.add("col-lg-3", "col-sm-6");

        memberBox.innerHTML = `
        <div class="box">
          <div class="img-box">
            <img src="${member.imgSrc}" class="img1" alt="">
          </div>
          <div class="detail-box">
            <h5>${member.name}</h5>
            <p>${member.position}</p>
          </div>
        </div>
      `;

        teamRow.appendChild(memberBox);
    });
});
