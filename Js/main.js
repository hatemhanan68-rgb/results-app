function addStudent() {
  let name = document.getElementById("name").value;
  let g1 = Number(document.getElementById("grade1").value);
  let g2 = Number(document.getElementById("grade2").value);
  let g3 = Number(document.getElementById("grade3").value);
  let att = Number(document.getElementById("attendance").value);
  let error = document.getElementById("error");

  if (name === "" || !g1 && g1 !== 0 || !g2 && g2 !== 0 || !g3 && g3 !== 0 || !att && att !== 0) {
    error.textContent = "من فضلك املأ كل البيانات";
    return;
  }
  if (g1 < 0 || g1 > 100 || g2 < 0 || g2 > 100 || g3 < 0 || g3 > 100) {
    error.textContent = "الدرجة لازم تكون بين 0 و 100";
    return;
  }
  if (att < 0 || att > 100) {
    error.textContent = "الحضور لازم يكون بين 0 و 100";
    return;
  }

  error.textContent = "";
  let total = g1 + g2 + g3;
  let avg = (total / 3).toFixed(1);
  let grade = avg >= 85 ? "امتياز" : avg >= 70 ? "جيد جدا" : avg >= 50 ? "ناجح" : "راسب";

  let row = `<tr><td>${name}</td><td>${g1}</td><td>${g2}</td><td>${g3}</td><td>${total}</td><td>${avg}</td><td>${grade}</td><td>${att}%</td></tr>`;
  document.getElementById("results").innerHTML += row;

  document.getElementById("name").value = "";
  document.getElementById("grade1").value = "";
  document.getElementById("grade2").value = "";
  document.getElementById("grade3").value = "";
  document.getElementById("attendance").value = "";
      }
