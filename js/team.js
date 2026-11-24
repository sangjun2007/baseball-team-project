const teams = {
    kia: {
        name: "KIA TIGERS",
        korean: "KIA 타이거즈",
        slogan: "전통과 열정으로 이어지는 호랑이의 역사",
        color: "#c8102e",
        city: "광주광역시",
        founded: "1982년 (해태 타이거즈)",
        titleCount: "12회",
        stadium: "광주-기아 챔피언스 필드",
        history: "1982년 해태 타이거즈로 출발한 KIA 타이거즈는 2001년 기아자동차가 구단을 인수하면서 현재의 이름을 갖게 되었습니다. 한국시리즈에서 12차례 우승한 명문 구단으로, 한국 프로야구의 역사에서 중요한 위치를 차지하고 있습니다.",
        timeline: [
            "1982년 - 해태 타이거즈 창단",
            "1983년 - 첫 한국시리즈 우승",
            "2001년 - KIA 타이거즈로 새롭게 출범",
            "2009년 - 한국시리즈 우승",
            "2017년 - 한국시리즈 우승",
            "2024년 - 통합 우승 및 V12 달성"
        ],
        players: [
            {
                name: "선동열",
                position: "투수",
                description: "해태 타이거즈의 전성기를 이끈 전설적인 투수"
            },
            {
                name: "이종범",
                position: "내야수",
                description: "뛰어난 주루와 타격으로 유명했던 선수"
            }
        ],
        feature: "한국시리즈 12회 진출, 12회 우승이라는 기록과 호남 지역을 대표하는 강력한 팬 문화를 가진 구단입니다."
    },

    samsung: {
        name: "SAMSUNG LIONS",
        korean: "삼성 라이온즈",
        slogan: "푸른 사자의 자부심과 전통",
        color: "#0066b3",
        city: "대구광역시",
        founded: "1982년",
        titleCount: "8회",
        stadium: "대구 삼성 라이온즈 파크",
        history: "삼성 라이온즈는 1982년 2월 3일 창단한 프로야구 원년 구단입니다. 오랜 기간 강팀으로 활약했으며, 특히 2011년부터 2014년까지 한국시리즈 4년 연속 우승을 기록하며 왕조 시대를 만들었습니다.",
        timeline: [
            "1982년 - 삼성 라이온즈 창단",
            "1985년 - 전후기 통합 우승",
            "2002년 - 첫 한국시리즈 우승",
            "2011년 - 한국시리즈 우승",
            "2012년 - 한국시리즈 우승",
            "2013년 - 한국시리즈 우승",
            "2014년 - 한국시리즈 4년 연속 우승"
        ],
        players: [
            {
                name: "이만수",
                position: "포수",
                description: "삼성의 초창기를 대표하는 상징적인 선수"
            },
            {
                name: "양준혁",
                position: "외야수",
                description: "뛰어난 타격 능력으로 유명했던 타자"
            },
            {
                name: "이승엽",
                position: "내야수",
                description: "국민타자로 불린 한국 야구의 대표적인 홈런 타자"
            }
        ],
        feature: "푸른색 유니폼과 강력한 타선, 그리고 2011~2014년 4년 연속 한국시리즈 우승이라는 역사를 자랑합니다."
    },

    lotte: {
        name: "LOTTE GIANTS",
        korean: "롯데 자이언츠",
        slogan: "부산의 열정, 거인의 도전",
        color: "#172b4d",
        city: "부산광역시",
        founded: "1982년",
        titleCount: "2회",
        stadium: "사직야구장",
        history: "롯데 자이언츠는 1982년 창단한 프로야구 원년 구단입니다. 부산을 연고로 하며 1984년과 1992년 두 차례 한국시리즈 우승을 차지했습니다. 열정적인 부산 팬들의 응원 문화로도 유명합니다.",
        timeline: [
            "1982년 - 롯데 자이언츠 창단",
            "1984년 - 첫 한국시리즈 우승",
            "1992년 - 두 번째 한국시리즈 우승",
            "2008년 - 정규시즌 3위 및 포스트시즌 진출"
        ],
        players: [
            {
                name: "최동원",
                position: "투수",
                description: "1984년 한국시리즈 우승의 상징적인 에이스"
            },
            {
                name: "이대호",
                position: "내야수",
                description: "한국과 해외에서 활약한 대표적인 거포"
            },
            {
                name: "손아섭",
                position: "외야수",
                description: "꾸준한 타격 능력으로 알려진 선수"
            }
        ],
        feature: "부산을 대표하는 구단으로, 사직야구장의 뜨거운 응원과 독특한 응원 문화가 특징입니다."
    },

    hanwha: {
        name: "HANWHA EAGLES",
        korean: "한화 이글스",
        slogan: "독수리의 비상, 끝없는 도전",
        color: "#e87500",
        city: "대전광역시",
        founded: "1986년 (빙그레 이글스)",
        titleCount: "1회",
        stadium: "대전 한화생명 볼파크",
        history: "한화 이글스는 1986년 빙그레 이글스로 창단했습니다. 1993년 현재의 한화 이글스로 구단명이 변경되었으며, 1999년 창단 이후 첫 한국시리즈 우승을 달성했습니다. 2025년에는 새로운 홈구장인 대전 한화생명 볼파크 시대를 열었습니다.",
        timeline: [
            "1986년 - 빙그레 이글스 창단",
            "1993년 - 한화 이글스로 구단명 변경",
            "1999년 - 첫 한국시리즈 우승",
            "2025년 - 대전 한화생명 볼파크 개장"
        ],
        players: [
            {
                name: "장종훈",
                position: "내야수",
                description: "한화의 전성기를 상징하는 대표적인 홈런 타자"
            },
            {
                name: "송진우",
                position: "투수",
                description: "오랜 기간 활약한 한화의 대표적인 투수"
            },
            {
                name: "김태균",
                position: "내야수",
                description: "뛰어난 타격 능력을 보여준 구단의 대표 선수"
            }
        ],
        feature: "대전과 충청 지역을 대표하며, 독수리라는 상징과 열정적인 팬들의 응원이 특징입니다."
    }
};

// HTML에 구단 정보를 출력하는 함수
const params = new URLSearchParams(window.location.search);
const teamKey = document.body.dataset.team || params.get("team");
const team = teams[teamKey];

if (team) {
    document.title = `${team.korean} | KBO FAN ZONE`;

    document.documentElement.style.setProperty(
        "--team-color",
        team.color
    );

    document.getElementById("team-name").textContent = team.name;
    document.getElementById("team-korean").textContent = team.korean;
    document.getElementById("team-slogan").textContent = team.slogan;

    document.getElementById("team-info").innerHTML = `
        <div class="info-card">
            <h3>연고지</h3>
            <p>${team.city}</p>
        </div>
        <div class="info-card">
            <h3>창단</h3>
            <p>${team.founded}</p>
        </div>
        <div class="info-card">
            <h3>한국시리즈 우승</h3>
            <p>${team.titleCount}</p>
        </div>
        <div class="info-card">
            <h3>홈구장</h3>
            <p>${team.stadium}</p>
        </div>
    `;

    document.getElementById("team-history").textContent =
        team.history;

    document.getElementById("team-timeline").innerHTML =
        team.timeline.map(item => `<li>${item}</li>`).join("");

    document.getElementById("team-players").innerHTML =
        team.players.map(player => `
            <article class="player-card">
                <span>${player.position}</span>
                <h3>${player.name}</h3>
                <p>${player.description}</p>
            </article>
        `).join("");

    document.getElementById("team-feature").textContent =
        team.feature;

} else {
    document.querySelector("main").innerHTML =
        "<h2>구단 정보를 찾을 수 없습니다.</h2>";
}