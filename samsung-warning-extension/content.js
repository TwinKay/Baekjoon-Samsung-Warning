const samsungProblems = [
    12100, 15683, 17779, 14890, 13460, 16235, 17143, 15685,
    14503, 23290, 21611, 21610, 20057, 20056, 20058, 20061,
    17144, 3190, 15684, 21609, 21608, 17837, 19238, 14889,
    13458, 16236, 19237, 23291, 14502, 17142, 14888, 23289,
    17822, 17140, 16234, 14499, 23288, 17825, 19236, 15686,
    20055, 5373, 14500, 14891, 14501, 17135
];

function getProblemIdFromUrl() {
    const match = window.location.href.match(/problem\/(\d+)/);
    return match ? parseInt(match[1], 10) : null;
}

function showSamsungWarning() {
    if (document.querySelector('#samsung-warning-popup')) return;

    const popup = document.createElement('div');
    popup.id = 'samsung-warning-popup';
    popup.innerHTML = `
    <div class="popup-content">
      <p>🚨 <strong>해당 문제는 삼성 기출문제입니다!</strong></p>
      <p>주의하세요!</p>
      <button id="samsung-warning-confirm">확인</button>
    </div>
  `;
    document.body.appendChild(popup);

    // 버튼 클릭 시 팝업 제거
    document.getElementById('samsung-warning-confirm').addEventListener('click', () => {
        popup.remove();
    });
}

const problemId = getProblemIdFromUrl();
if (problemId && samsungProblems.includes(problemId)) {
    showSamsungWarning();
}
