const question = {
  question: "日本の首都はどこ？",
  choices: ["大阪", "京都", "東京", "福岡"],
  answer: 2
};

const container = document.getElementById("quiz-container");

container.innerHTML = `<p>${question.question}</p>` +
  question.choices.map((choice, i) => `
    <label>
      <input type="radio" name="choice" value="${i}"> ${choice}
    </label><br>
  `).join("");

function checkAnswer() {
  const selected = document.querySelector('input[name="choice"]:checked');
  const result = document.getElementById("result");

  if (!selected) {
    result.textContent = "選択してください。";
    return;
  }

  if (parseInt(selected.value) === question.answer) {
    result.textContent = "正解！";
  } else {
    result.textContent = "不正解...";
  }
}
