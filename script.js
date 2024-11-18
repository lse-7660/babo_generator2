// DOM 요소들
const button = document.getElementById('infiniteButton');
const baboContainer =
    document.getElementById('baboContainer');

let btnPosition = { top: '50%', left: '50%' }; // 버튼 위치 초기화
let babo = []; // 바보 텍스트 상태 관리

// 클릭 시 호출될 함수
const handleClick = () => {
    // 바보 추가
    babo.push({
        top: btnPosition.top,
        left: btnPosition.left,
        text: '바보',
    });

    // 새로운 바보 요소 생성
    const baboElement = document.createElement('span');
    baboElement.classList.add('babo');
    baboElement.textContent = '바보';
    baboElement.style.top = btnPosition.top;
    baboElement.style.left = btnPosition.left;
    baboContainer.appendChild(baboElement);

    // 버튼 위치를 랜덤으로 변경
    const randomTop = Math.random() * 80 + 10; // 10% ~ 90% 사이
    const randomLeft = Math.random() * 80 + 10; // 10% ~ 90% 사이

    btnPosition = {
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
    };

    // 버튼 위치 업데이트
    button.style.top = btnPosition.top;
    button.style.left = btnPosition.left;
};

// 버튼 클릭 이벤트 리스너
button.addEventListener('click', handleClick);
