const questions = [
  {
    question: "地方自治法における「普通地方公共団体」に該当するのはどれか？",
    choices: ["都道府県と市町村", "国と都道府県", "市町村と特別区", "特別区と国"],
    answer: 0,
    explanation: "地方自治法において、普通地方公共団体とは「都道府県」と「市町村」のことを指します。"
  },
  {
    question: "議会の解散権を持つのは誰か？",
    choices: ["都道府県知事", "市町村長", "住民投票による住民", "議会自身"],
    answer: 2,
    explanation: "地方自治法では、一定の署名数を集めた住民によってリコール（解散請求）を行うことができます。"
  },
  {
    question: "地方公共団体の長の任期は原則として何年か？",
    choices: ["2年", "3年", "4年", "5年"],
    answer: 2,
    explanation: "地方自治法により、知事や市町村長などの長の任期は原則4年です。"
  },
  {
    question: "地方議会の議員定数を定めるのは誰か？",
    choices: ["議会", "長", "条例", "国会"],
    answer: 2,
    explanation: "地方議会の議員定数は、各地方公共団体の条例で定めることになっています。"
  },
  {
    question: "住民監査請求の対象とならないのはどれか？",
    choices: ["違法な支出", "職員の人事", "財産の管理", "契約の締結"],
    answer: 1,
    explanation: "住民監査請求は財務会計上の行為に対するもので、職員の人事などは対象外です。"
  },
  {
    question: "地方公共団体の財務を監査するのは誰か？",
    choices: ["会計管理者", "議会", "監査委員", "住民"],
    answer: 2,
    explanation: "地方公共団体の財務監査を行うのは監査委員です。"
  },
  {
    question: "地方公共団体において、直接請求制度が適用されないのはどれか？",
    choices: ["条例の制定", "条例の改廃", "議会の解散", "税率の設定"],
    answer: 3,
    explanation: "税率の設定は直接請求制度の対象ではありません。"
  },
  {
    question: "地方自治法上、議会の定例会は最低でも年に何回開かなければならないか？",
    choices: ["1回", "2回", "3回", "4回"],
    answer: 0,
    explanation: "定例会は地方自治法により、少なくとも年1回は開催する必要があります。"
  },
  {
    question: "監査委員の定数は通常いくつか？",
    choices: ["1人", "2人", "3人", "4人"],
    answer: 1,
    explanation: "監査委員の定数は原則2人とされています。"
  },
  {
    question: "地方議会の議長はどのように選出されるか？",
    choices: ["住民投票", "長が任命", "議員の互選", "国が指名"],
    answer: 2,
    explanation: "議長は議員の互選によって選ばれます。"
  }
];

let current = 0;
let score = 0;

const container = document.getElementById("quiz-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");

function loadQuestion() {
  const q = questions[current];
  result.textContent = "";
  nextBtn.style.display = "none";

  container.innerHTML = `<p>${q.question}</p>` +
    q.choices.map((choice, i) => `
      <div class="choice">
        <label>
          <input type="radio" name="choice" value="${i}"> ${choice}
        </label>
      </div>
    `).join("");
}

submitBtn.onclick = () => {
  const selected = document.querySelector('input[name="choice"]:checked');
  if (!selected) {
    result.textContent = "選択してください。";
    return;
  }
  const q = questions[current];
  const selectedValue = parseInt(selected.value);
  const isCorrect = selectedValue === q.answer;
  if (isCorrect) score++;

  result.innerHTML = (isCorrect ? "正解！" : "不正解...") + "<br>" + q.explanation;
  nextBtn.style.display = "inline";
};

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    container.innerHTML = `<p>全問終了！あなたの正解数は ${score} / ${questions.length} です。</p>`;
    result.innerHTML = "";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
};

window.onload = loadQuestion;
