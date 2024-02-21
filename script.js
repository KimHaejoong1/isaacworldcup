// 참가자 데이터 정의
const participants = [
  {
    id: 1,
    name: "The Fallen<br>(타락한 자)",
    imageUrl: "image/The Fallen.png",
  },
  {
    id: 2,
    name: "Headless Horseman<br>(머리없는 기마병)",
    imageUrl: "image/Headless Horseman.png",
  },
  { id: 3, name: "Monstro<br>(몬스트로)", imageUrl: "image/Monstro.png" },
  {
    id: 4,
    name: "The Duke of Flies<br>(파리 공작)",
    imageUrl: "image/The Duke of Flies.png",
  },
  { id: 5, name: "Gemini<br>(쌍둥이)", imageUrl: "image/Gemini.png" },
  { id: 6, name: "Steven<br>(스티븐)", imageUrl: "image/Steven.png" },
  { id: 7, name: "Larry Jr<br>(래리 주니어)", imageUrl: "image/Larry Jr.png" },
  { id: 8, name: "Widow<br>(과부)", imageUrl: "image/Widow.png" },
  { id: 9, name: "Pin<br>(핀)", imageUrl: "image/Pin.png" },
  {
    id: 10,
    name: "Blighted Ovum<br>(계류유산)",
    imageUrl: "image/Blighted Ovum.png",
  },
  { id: 11, name: "Dingle<br>(딩글)", imageUrl: "image/Dingle.png" },
  { id: 12, name: "Gurglings<br>(거글링)", imageUrl: "image/Gurglings.png" },
  { id: 13, name: "The Haunt<br>(유령)", imageUrl: "image/The Haunt.png" },
  { id: 14, name: "Rag Man<br>(넝마주이)", imageUrl: "image/Rag Man.png" },
  { id: 15, name: "Dangle<br>(댕글)", imageUrl: "image/Dangle.png" },
  { id: 16, name: "Turdlings<br>(응가링)", imageUrl: "image/Turdlings.png" },
  {
    id: 17,
    name: "Little Horn<br>(작은 뿔)",
    imageUrl: "image/Little Horn.png",
  },
  {
    id: 18,
    name: "Baby Plum<br>(아기 플럼)",
    imageUrl: "image/Baby Plum.png",
  },
  { id: 19, name: "Famine<br>(기근)", imageUrl: "image/Famine.png" },
  { id: 20, name: "Peep<br>(오줌보)", imageUrl: "image/Peep.png" },
  { id: 21, name: "Fistula<br>(누공)", imageUrl: "image/Fistula.png" },
  { id: 22, name: "Gurdy<br>(거디)", imageUrl: "image/Gurdy.png" },
  {
    id: 23,
    name: "Gurdy Jr<br>(거디 주니어)",
    imageUrl: "image/Gurdy Jr.png",
  },
  { id: 24, name: "Chub<br>(처브)", imageUrl: "image/Chub.png" },
  {
    id: 25,
    name: "Carrion Queen<br>(썩은 여왕)",
    imageUrl: "image/Carrion Queen.png",
  },
  { id: 26, name: "C.H.A.D.<br>(차드)", imageUrl: "image/C.H.A.D.png" },
  { id: 27, name: "The Husk<br>(겉껍질)", imageUrl: "image/The Husk.png" },
  { id: 28, name: "The Hollow<br>(공허)", imageUrl: "image/The Hollow.png" },
  {
    id: 29,
    name: "The Wretched<br>(흉물)",
    imageUrl: "image/The Wretched.png",
  },
  { id: 30, name: "Mega Maw<br>(구렁텅이)", imageUrl: "image/Mega Maw.png" },
  { id: 31, name: "Mega Fatty<br>(뚱땡이)", imageUrl: "image/Mega Fatty.png" },
  {
    id: 32,
    name: "Polycephalus<br>(쌍두괴물)",
    imageUrl: "image/Polycephalus.png",
  },
  {
    id: 33,
    name: "Dark One<br>(어둠의 자식)",
    imageUrl: "image/Dark One.png",
  },
  { id: 34, name: "The Frail<br>(노쇠)", imageUrl: "image/The Frail.png" },
  { id: 35, name: "The Stain<br>(부패)", imageUrl: "image/The Stain.png" },
  {
    id: 36,
    name: "The Forsaken<br>(버려진 자)",
    imageUrl: "image/The Forsaken.png",
  },
  { id: 37, name: "Big Horn<br>(큰 뿔)", imageUrl: "image/Big Horn.png" },
  {
    id: 38,
    name: "Rag Mega<br>(메가 넝마주이)",
    imageUrl: "image/Rag Mega.png",
  },
  { id: 39, name: "Pestilence<br>(역병)", imageUrl: "image/Pestilence.png" },
  { id: 40, name: "Loki<br>(로키)", imageUrl: "image/Loki.png" },
  {
    id: 41,
    name: "Monstro II<br>(몬스트로 2)",
    imageUrl: "image/Monstro II.png",
  },
  { id: 42, name: "Gish<br>(기쉬)", imageUrl: "image/Gish.png" },
  {
    id: 43,
    name: "Mask of Infamy<br>(악명 높은 가면)",
    imageUrl: "image/Mask of Infamy.png",
  },
  { id: 44, name: "The Bloat<br>(고창증)", imageUrl: "image/The Bloat.png" },
  { id: 45, name: "The Gate<br>(수문장)", imageUrl: "image/The Gate.png" },
  { id: 46, name: "The Cage<br>(우리)", imageUrl: "image/The Cage.png" },
  {
    id: 47,
    name: "The Adversary<br>(대적)",
    imageUrl: "image/The Adversary.png",
  },
  { id: 48, name: "Brownie<br>(브라우니)", imageUrl: "image/Brownie.png" },
  {
    id: 49,
    name: "Sisters Vis<br>(비스 자매)",
    imageUrl: "image/Sisters Vis.png",
  },
  { id: 50, name: "War<br>(전쟁)", imageUrl: "image/War.png" },
  {
    id: 51,
    name: "Daddy Long Legs<br>(장님 거미)",
    imageUrl: "image/Daddy Long Legs.png",
  },
  {
    id: 52,
    name: "Triachnid<br>(세다리 거미)",
    imageUrl: "image/Triachnid.png",
  },
  { id: 53, name: "Scolex<br>(두절)", imageUrl: "image/Scolex.png" },
  { id: 54, name: "Blastocyst<br>(배반포)", imageUrl: "image/Blastocyst.png" },
  { id: 55, name: "Teratoma<br>(테라토마)", imageUrl: "image/Teratoma.png" },
  { id: 56, name: "Lokii<br>(로키이)", imageUrl: "image/Lokii.png" },
  {
    id: 57,
    name: "Mr.Fred<br>(미스터 프레드)",
    imageUrl: "image/Mr.Fred.png",
  },
  {
    id: 58,
    name: "Mama Gurdy<br>(마마 거디)",
    imageUrl: "image/Mama Gurdy.png",
  },
  {
    id: 59,
    name: "The Matriarch<br>(메이트리아크)",
    imageUrl: "image/The Matriarch.png",
  },
  { id: 60, name: "Death<br>(죽음)", imageUrl: "image/Death.png" },
  { id: 61, name: "Conquest<br>(정복)", imageUrl: "image/Conquest.png" },
  {
    id: 62,
    name: "Ultra Greed<br>(왕 탐욕)",
    imageUrl: "image/Ultra Greed.png",
  },
  { id: 63, name: "Hush<br>(침묵)", imageUrl: "image/Hush.png" },
  { id: 64, name: "Delirium<br>(섬망)", imageUrl: "image/Delirium.png" },
];

const rounds = ["64강", "32강", "16강", "8강", "4강", "결승"];
// 대진표와 현재 라운드를 초기화
let currentRound = 0;
let currentMatchups = [];
let currentRoundMatchups = [];
let nextRoundMatchups = [];
let currentMatchIndex = 0; // 현재 대진의 인덱스

// 참가자를 랜덤하게 섞는 함수
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 대진표 생성 함수
function generateMatchups(participants) {
  shuffle(participants); // 참가자를 랜덤하게 섞음
  for (let i = 0; i < participants.length; i += 2) {
    currentMatchups.push([participants[i], participants[i + 1]]);
  }
  currentRoundMatchups = [...currentMatchups]; // 현재 라운드의 대진표 복사
}

// 대진표 표시 함수
function displayMatchup() {
  if (currentMatchIndex >= currentRoundMatchups.length) {
    // 현재 스테이지 완료, 다음 스테이지로 초기화
    prepareNextStage();
    return;
  }

  const matchup = currentRoundMatchups[currentMatchIndex];
  const participant1 = matchup[0];
  const participant2 = matchup[1];

  const matchupElement = document.getElementById("matchup");
  const matchupHtml = `
    <div class="matchup">
        <div class="participant left" data-id="1" onclick="selectWinner(1)">
            <img src="${participant1.imageUrl}" alt="${participant1.name}">
            <span>${participant1.name}</span>
        </div>
        <div class="participant right" data-id="2" onclick="selectWinner(2)">
            <img src="${participant2.imageUrl}" alt="${participant2.name}">
            <span>${participant2.name}</span>
        </div>
    </div>
`;

  matchupElement.innerHTML = matchupHtml;
  // 현재 라운드 및 스테이지 업데이트
  document.getElementById("stage").textContent = `${rounds[currentRound]}`;
  document.getElementById("round").textContent = `${currentMatchIndex + 1} / ${
    currentRoundMatchups.length
  }`;
}

// 사용자 선택 처리 및 다음 라운드 진행
function selectWinner(selectedId) {
  // 모든 참가자를 숨김
  document.querySelectorAll(".participant").forEach((participant) => {
    if (parseInt(participant.getAttribute("data-id")) !== selectedId) {
      participant.style.display = "none"; // 선택되지 않은 참가자 숨김
    }
  });

  // 선택된 참가자를 찾아서 애니메이션 클래스 추가
  const winnerElement = document.querySelector(
    `.participant[data-id="${selectedId}"]`
  );
  winnerElement.classList.add("selected-participant");

  // 애니메이션 대기 시간 (1초)
  setTimeout(() => {
    winnerElement.classList.remove("selected-participant"); // 애니메이션 클래스 제거
    winnerElement.style.display = "none"; // 애니메이션 후 선택된 참가자도 숨김

    // 대진표 업데이트 로직 (다음 대진 표시 또는 다음 스테이지 준비)
    currentMatchIndex++; // 다음 대진으로
    if (currentMatchIndex < currentRoundMatchups.length) {
      displayMatchup(); // 다음 대진 표시
    } else {
      prepareNextStage(); // 모든 대진 완료 시 다음 스테이지 준비
    }
  }, 1000); // 1초 대기 후 실행
}

// 다음 스테이지 준비 함수
function prepareNextStage() {
  if (nextRoundMatchups.length === 1) {
    // 최종 승자 표시 로직
    displayFinalWinner();
    return;
  }

  // 다음 스테이지 초기화
  currentRound++;
  currentMatchIndex = 0;
  currentRoundMatchups = [];
  for (let i = 0; i < nextRoundMatchups.length; i += 2) {
    currentRoundMatchups.push([
      nextRoundMatchups[i],
      nextRoundMatchups[i + 1] || nextRoundMatchups[i],
    ]);
  }
  nextRoundMatchups = [];
  displayMatchup(); // 다음 스테이지 첫 대진 표시
}

// 최종 승자 표시 함수
function displayFinalWinner() {
  const winner = nextRoundMatchups[0];
  const matchupElement = document.getElementById("matchup");
  matchupElement.innerHTML = `
        <div class="winner">
            <img src="${winner.imageUrl}" alt="${winner.name}">
            <br>
            <span>${winner.name}</span>
        </div>
    `;
  document.getElementById("stage").textContent = `우`;
  document.getElementById("round").textContent = `승`;
}

// 게임 초기화 및 시작
function initializeGame() {
  generateMatchups(participants);
  displayMatchup();
}

// 페이지 로드 시 게임 시작
document.addEventListener("DOMContentLoaded", initializeGame);
