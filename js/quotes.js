const quotes = [
    {
        quote: "내가 해 뜬 것을 믿는 것처럼 기독교를 믿는다. 그것을 볼 수 있기 때문만이 아니라, 그것으로 인해 다른 모든 것을 볼 수 있기 때문이다.",
        author: "C.S.루이스"
    },
    {
        quote: "하나님, 바꿀 수 없는 것은 받아들이는 평온함을, 바꿀 수 있는 것은 바꾸는 용기를, 또한 그 차이를 구별하는 지혜를 주옵소서.",
        author: "라인홀드 니버"
    },
    {
        quote: "우리가 그리스도안에서 기뻐하는 것보다 하나님을 영광스럽게 하는 것은 없다.",
        author: "존 파이퍼"
    },
    {
        quote: "우리가 하나님을 신뢰하지 않는 것은 무엇보다 자신의 지혜를 지나치게 신뢰하기 때문이다.",
        author: "팀 켈러"
    },
    {
        quote: "하나님을 아는 만큼, 그 분을 신뢰할 수 있다.",
        author: "조나단 에드워드"
    },
    {
        quote: "지금 우리의 고통이 크면 클수록 그 영광의 무게도 더 커질 것입니다. 미스터리하고 상상할 수 없는 일이지만 그렇게 될 것이므로 감사합니다.",
        author: "엘리자베스 엘리엇"
    }
]

const quote = document.querySelector('#quotes span:first-child')
const author = document.querySelector('#quotes span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;