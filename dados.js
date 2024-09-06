let dados = [
    {
        nome: "Michael Jordan",
        time: "Chicago Bulls",
        posicao: "Ala-Armador",
        descricao: "Michael Jordan é indiscutivelmente uma das maiores lendas do basquetebol de todos os tempos. Sua carreira na NBA, principalmente com o Chicago Bulls, foi marcada por um talento excepcional, uma ética de trabalho incansável e uma mentalidade vencedora que o tornaram um ícone global.",
        link: "https://pt.wikipedia.org/wiki/Michael_Jordan"
    },
    {
        nome: "LeBron James",
        time: "Lakers",
        posicao: "Ala",
        descricao: "LeBron James é considerado por muitos como um dos maiores jogadores de basquetebol de todos os tempos. Sua versatilidade, atletismo e longevidade na NBA o tornaram um ícone do esporte. Conhecido por sua liderança e impacto tanto dentro quanto fora das quadras",
        link: "https://pt.wikipedia.org/wiki/LeBron_James"
    },
    {
        nome: "Kareem Abdul-Jabbar",
        time: "Lakers (maior parte da carreira)",
        posicao: "Pivô",
        descricao: "Kareem Abdul-Jabbar é conhecido por seu famoso gancho e por ser o maior pontuador da história da NBA. Sua dominância na pintura e sua longevidade o colocam entre as maiores lendas do basquete.",
        link: "https://pt.wikipedia.org/wiki/Kareem_Abdul-Jabbar"
    },
    {
        nome: "Bill Russell",
        time: "Boston Celtics",
        posicao: "Pivô",
        descricao: "Bill Russell é considerado um dos maiores vencedores da história do esporte. Com 11 títulos da NBA, ele dominou a liga durante sua era e é conhecido por sua liderança e defesa implacável.",
        link: "https://pt.wikipedia.org/wiki.org/Bill_Russell"
    },
    {
        nome: "Magic Johnson",
        time: "Lakers",
        posicao: "Armador",
        descricao: "Magic Johnson revolucionou a posição de armador com sua visão de jogo, passe e habilidade de pontuar. Ele liderou os Lakers a diversos títulos e é considerado um dos maiores armadores de todos os tempos.",
        link: "https://pt.wikipedia.org/wiki/Magic_Johnson"
    },
    {
        nome: "Wilt Chamberlain",
        time: "Vários times (76ers, Lakers, Warriors)",
        posicao: "Pivô",
        descricao: "Wilt Chamberlain é conhecido por seus números estatísticos absurdos e por sua dominância física na pintura. Ele detém diversos recordes da NBA, incluindo o maior número de pontos em um único jogo.",
        link: "https://pt.wikipedia.org/wiki/Wilt_Chamberlain"
    },
    {
        nome: "Clyde Drexler",
        time: "Portland Trail Blazers",
        posicao: "Ala-armador",
        descricao: "Clyde Drexler, o 'Glide', era um ala-armador explosivo e atlético, conhecido por suas enterradas espetaculares. Ele liderou o Portland Trail Blazers a finais da NBA e foi um dos principais adversários de Michael Jordan nos anos 90.",
        link: "https://pt.wikipedia.org/wiki/Clyde_Drexler"
    },
    {
        nome: "Damian Lillard",
        time: "Portland Trail Blazers",
        posicao: "Armador",
        descricao: "Damian Lillard é um dos melhores armadores da atualidade, conhecido por seus arremessos de longa distância e por liderar o Portland Trail Blazers.",
        link: "https://pt.wikipedia.org/wiki/Damian_Lillard"
    },
    {
        nome: "Scottie Pippen",
        time: "Chicago Bulls",
        posicao: "Ala",
        descricao: "Scottie Pippen foi um dos principais jogadores dos Chicago Bulls durante a dinastia de Michael Jordan, conhecido por sua defesa e versatilidade.",
        link: "https://pt.wikipedia.org/wiki/Scottie_Pippen"
    },
    {
        nome: "Ray Allen",
        time: "Vários times (Bucks, Celtics, Heat)",
        posicao: "Ala-armador",
        descricao: "Ray Allen é considerado um dos melhores arremessadores de três pontos da história da NBA, conhecido por seus momentos decisivos.",
        link: "https://pt.wikipedia.org/wiki/Ray_Allen"
    },
    {
        nome: "Tim Duncan",
        time: "San Antonio Spurs",
        posicao: "Ala-pivô",
        descricao: "Tim Duncan é um dos maiores ala-pivôs da história, conhecido por sua consistência, ética de trabalho e liderança.",
        link: "https://pt.wikipedia.org/wiki/Tim_Duncan"
    },
    {
        nome: "Jerry Lucas",
        time: "Vários times (Cincinatti Royals, San Francisco Warriors, New York Knicks)",
        posicao: "Ala-pivô",
        descricao: "Jerry Lucas foi um dos primeiros grandes reboteiros da NBA, conhecido por sua habilidade de pegar rebotes e sua inteligência em quadra.",
        link: "https://pt.wikipedia.org/wiki/Jerry_Lucas"
    },
    {
        nome: "Willis Reed",
        time: "New York Knicks",
        posicao: "Ala-pivô",
        descricao: "Willis Reed foi um dos maiores líderes da história da NBA, conhecido por sua garra e por liderar os Knicks a dois títulos.",
        link: "https://pt.wikipedia.org/wiki/Willis_Reed"
    },
    {
        nome: "Giannis Antetokounmpo",
        time: "Milwaukee Bucks",
        posicao: "Ala-pivô",
        descricao: "Giannis Antetokounmpo é um dos jogadores mais dominantes da atualidade, conhecido por sua versatilidade e físico impressionante.",
        link: "https://pt.wikipedia.org/wiki/Giannis_Antetokounmpo"
    },
    {
        nome: "Kevin Durant",
        time: "Vários times (Thunder, Warriors, Nets)",
        posicao: "Ala",
        descricao: "Kevin Durant é conhecido por sua altura, habilidade de arremesso e versatilidade. É considerado um dos melhores artilheiros da história da NBA.",
        link: "https://pt.wikipedia.org/wiki/Kevin_Durant"
    },
    {
        nome: "Karl Malone",
        time: "Utah Jazz (maior parte da carreira)",
        posicao: "Ala-pivô",
        descricao: "Karl Malone é conhecido por sua força física, habilidade de finalizar perto da cesta e longevidade. É um dos maiores reboteiros da história da NBA.",
        link: "https://pt.wikipedia.org/wiki.org/Karl_Malone"
    },
    {
        nome: "Oscar Robertson",
        time: "Vários times (Royals, Bucks, Bucks/Pistons)",
        posicao: "Armador",
        descricao: "Oscar Robertson é conhecido por sua versatilidade e por ter sido o primeiro jogador a registrar um triplo-duplo de média por temporada. É considerado um dos maiores armadores da história da NBA.",
        link: "https://pt.wikipedia.org/wiki/Oscar_Robertson"
    },
    {
        nome: "Carmelo Anthony",
        time: "Vários times (Nuggets, Knicks, Rockets, Blazers)",
        posicao: "Ala",
        descricao: "Carmelo Anthony é um dos maiores pontuadores da história da NBA, conhecido por seu arremesso de média distância.",
        link: "https://pt.wikipedia.org/wiki/Carmelo_Anthony"
    },
    {
        nome: "Julius Erving",
        time: "76ers (maior parte da carreira)",
        posicao: "Ala",
        descricao: "Julius Erving, conhecido como 'Dr. J', é considerado um dos maiores jogadores de todos os tempos por sua habilidade de voar e suas jogadas acrobáticas.",
        link: "https://pt.wikipedia.org/wiki/Julius_Erving"
    },
    {
        nome: "Moses Malone",
        time: "Vários times (Rockets, 76ers, Lakers)",
        posicao: "Ala-pivô",
        descricao: "Moses Malone foi um dos maiores reboteiros e defensores da sua época. Ele é conhecido por sua força física e por sua liderança.",
        link: "https://pt.wikipedia.org/wiki/Moses_Malone"
    },
    {
        nome: "David Robinson",
        time: "San Antonio Spurs",
        posicao: "Pivô",
        descricao: "David Robinson, também conhecido como 'The Admiral', foi um dos maiores jogadores defensivos da sua geração. Ele combinava força, agilidade e habilidade de arremesso.",
        link: "https://pt.wikipedia.org/wiki/David_Robinson"
    },
    {
        nome: "Nate Archibald",
        time: "Vários times (Knicks, Celtics, Rockets)",
        posicao: "Armador",
        descricao: "Nate Archibald era conhecido por sua velocidade e habilidade de penetrar na defesa adversária. Ele foi um dos maiores assistentes da história da NBA.",
        link: "https://pt.wikipedia.org/wiki/Nate_Archibald"
    },
    {
        nome: "Patrick Ewing",
        time: "Knicks (maior parte da carreira)",
        posicao: "Pivô",
        descricao: "Patrick Ewing foi um dos maiores dominadores da pintura na década de 1990. Ele era conhecido por sua força física e por sua habilidade de bloquear chutes.",
        link: "https://pt.wikipedia.org/wiki/Patrick_Ewing"
    },
    {
        nome: "Pete Maravich",
        time: "Vários times (Jazz, Celtics, Hawks)",
        posicao: "Armador",
        descricao: "Pete Maravich era conhecido por sua habilidade de passar a bola e por seus arremessos incríveis. Ele era um dos jogadores mais divertidos de se assistir.",
        link: "https://pt.wikipedia.org/wiki/Pete_Maravich"
    },
    {
        nome: "Dennis Rodman",
        time: "Vários times (Pistons, Bulls, Lakers)",
        posicao: "Ala",
        descricao: "Dennis Rodman era conhecido por sua intensa dedicação à defesa e por seus rebotes. Ele foi um dos maiores reboteiros da história da NBA.",
        link: "https://pt.wikipedia.org/wiki/Dennis_Rodman"
    },
    {
        nome: "Charles Barkley",
        time: "Vários times (76ers, Suns, Rockets)",
        posicao: "Ala-pivô",
        descricao: "Charles Barkley era conhecido por sua força física, habilidade de marcar pontos e por sua personalidade extrovertida. Ele foi um dos maiores jogadores da sua geração.",
        link: "https://pt.wikipedia.org/wiki/Charles_Barkley"
    },
    {
        nome: "Walt Frazier",
        time: "Knicks (maior parte da carreira)",
        posicao: "Armador",
        descricao: "Walt Frazier era conhecido por seu estilo elegante de jogo e por sua habilidade de liderar a equipe. Ele foi um dos maiores armadores da história da NBA.",
        link: "https://pt.wikipedia.org/wiki/Walt_Frazier"
    },
    {
        nome: "Bob McAdoo",
        time: "Vários times (Bucks, Celtics, Lakers)",
        posicao: "Ala-pivô",
        descricao: "Bob McAdoo foi um dos maiores pontuadores da década de 1970, conhecido por sua habilidade de arremesso de média distância e versatilidade.",
        link: "https://pt.wikipedia.org/wiki/Bob_McAdoo" 
    },
    {
        nome: "Dolph Schayes",
        time: "Syracuse Nationals/Philadelphia 76ers",
        posicao: "Ala-pivô",
        descricao: "Dolph Schayes foi um dos primeiros grandes jogadores brancos da NBA, conhecido por sua habilidade de passar e sua liderança.",
        link: "https://pt.wikipedia.org/wiki/Dolph_Schayes" 
    },
    {
        nome: "Rick Barry",
        time: "Vários times (Warriors, Rockets, Celtics)",
        posicao: "Ala",
        descricao: "Rick Barry foi um dos maiores arremessadores de lances livres da história da NBA e um campeão com o Golden State Warriors.",
        link: "https://pt.wikipedia.org/wiki/Rick_Barry" 
    },
    {
        nome: "Kevin Garnett",
        time: "Vários times (Timberwolves, Celtics, Nets)",
        posicao: "Ala-pivô",
        descricao: "Kevin Garnett foi conhecido por sua versatilidade, defesa intensa e liderança, sendo um dos pilares do título dos Celtics em 2008.",
        link: "https://pt.wikipedia.org/wiki/Kevin_Garnett" 
    },
    {
        nome: "Kevin McHale",
        time: "Boston Celtics",
        posicao: "Ala-pivô",
        descricao: "Kevin McHale foi um dos membros mais importantes da dinastia dos Celtics na década de 1980, conhecido por seus fundamentos técnicos e jogo interior.",
        link: "https://pt.wikipedia.org/wiki/Kevin_McHale" 
    },
    {
        nome: "Bill Sharman",
        time: "Boston Celtics",
        posicao: "Ala-armador",
        descricao: "Bill Sharman foi um dos primeiros grandes arremessadores da NBA e um dos principais jogadores da dinastia dos Celtics.",
        link: "https://pt.wikipedia.org/wiki/Bill_Sharman" 
    },
    {
        nome: "Elgin Baylor",
        time: "Los Angeles Lakers",
        posicao: "Ala",
        descricao: "Elgin Baylor foi um dos maiores atletas da história da NBA, conhecido por sua habilidade de voar e por suas finais emocionantes contra os Celtics.",
        link: "https://pt.wikipedia.org/wiki/Elgin_Baylor"
    },
    {
        nome: "Hal Greer",
        time: "Philadelphia 76ers",
        posicao: "Ala-armador",
        descricao: "Hal Greer foi um dos maiores pontuadores da história dos Sixers e um dos pilares da equipe que venceu o título em 1967.",
        link: "https://pt.wikipedia.org/wiki/Hal_Greer" 
    },
    {
        nome: "George Mikan",
        time: "Minneapolis Lakers",
        posicao: "Pivô",
        descricao: "George Mikan foi um dos primeiros grandes astros da NBA, conhecido por sua dominância física e por ser um dos fundadores da liga.",
        link: "https://pt.wikipedia.org/wiki/George_Mikan" 
    },
    {
        nome: "John Stockton",
        time: "Utah Jazz",
        posicao: "Armador",
        descricao: "John Stockton é conhecido por sua habilidade de passar a bola e por ser um dos maiores assistentes da história da NBA. Ele formou uma dupla histórica com Karl Malone.",
        link: "https://pt.wikipedia.org/wiki/John_Stockton"
    },
    {
        nome: "Dave Bing",
        time: "Vários times (Pistons, Bullets)",
        posicao: "Ala-armador",
        descricao: "Dave Bing foi um dos primeiros afro-americanos a se formar em uma universidade branca nos Estados Unidos e um dos maiores pontuadores da história dos Pistons.",
        link: "https://pt.wikipedia.org/wiki/Dave_Bing" 
    },
    {
        nome: "James Harden",
        time: "Vários times (Thunder, Rockets, Nets)",
        posicao: "Ala-armador",
        descricao: "James Harden é conhecido por sua habilidade de marcar pontos e por suas jogadas de step-back. Ele foi o MVP da NBA em 2018.",
        link: "https://pt.wikipedia.org/wiki/James_Harden"
    },
    {
        nome: "Earl Monroe",
        time: "Vários times (Bullets, Warriors, Nets)",
        posicao: "Ala-armador",
        descricao: "Earl Monroe, apelidado de 'The Pearl', foi conhecido por seu estilo de jogo elegante e por suas habilidades de drible.",
        link: "https://pt.wikipedia.org/wiki/Earl_Monroe" 
    },
    {
        nome: "Isiah Thomas",
        time: "Detroit Pistons",
        posicao: "Armador",
        descricao: "Isiah Thomas foi o líder da equipe dos Pistons 'Bad Boys' que dominou a NBA na década de 1980",
        link: "https://pt.wikipedia.org/wiki/Isiah_Thomas"
    },
    {
        nome: "Larry Bird",
        time: "Boston Celtics",
        posicao: "Ala",
        descricao: "Larry Bird foi um dos maiores jogadores da história da NBA, conhecido por sua versatilidade e por sua rivalidade com Magic Johnson.",
        link: "https://pt.wikipedia.org/wiki/Larry_Bird"
    },
    {
        nome: "John Havlicek",
        time: "Boston Celtics",
        posicao: "Ala",
        descricao: "John Havlicek foi um dos pilares da dinastia dos Celtics, conhecido por sua versatilidade e por seu jogo de equipe.",
        link: "https://pt.wikipedia.org/wiki/John_Havlicek" 
    },
    {
        nome: "Steve Nash",
        time: "Vários times (Suns, Mavericks, Lakers)",
        posicao: "Armador",
        descricao: "Steve Nash foi conhecido por seu estilo de jogo rápido e por suas habilidades de passe, sendo duas vezes eleito o MVP da NBA.",
        link: "https://pt.wikipedia.org/wiki/Steve_Nash"
    },
    {
        nome: "Nate Thurmond",
        time: "Vários times (Warriors, Bulls, Cavaliers)",
        posicao: "Pivô",
        descricao: "Nate Thurmond foi um dos primeiros grandes pivôs da NBA, conhecido por sua defesa e rebotes. Ele foi um dos primeiros jogadores a registrar um triplo-duplo.",
        link: "https://pt.wikipedia.org/wiki/Nate_Thurmond" 
    },
    {
        nome: "Kobe Bryant",
        time: "Los Angeles Lakers",
        posicao: "Ala",
        descricao: "Kobe Bryant foi uma das maiores lendas da NBA, conhecido por sua ética de trabalho, habilidade de arremesso e cinco títulos da NBA. Ele faleceu tragicamente em 2020.",
        link: "https://pt.wikipedia.org/wiki/Kobe_Bryant"
    },
    {
        nome: "Elvin Hayes",
        time: "Vários times (San Diego Rockets, Bullets, Rockets)",
        posicao: "Ala-pivô",
        descricao: "Elvin Hayes foi um dos primeiros grandes ala-pivôs da NBA, conhecido por sua força física e habilidade de marcar pontos.",
        link: "https://pt.wikipedia.org/wiki/Elvin_Hayes" 
    },
    {
        nome: "Dirk Nowitzki",
        time: "Dallas Mavericks",
        posicao: "Ala-pivô",
        descricao: "Dirk Nowitzki foi um dos maiores arremessadores de longa distância da história da NBA, conhecido por seu fadeaway e por ter liderado os Mavericks ao título da NBA em 2011.",
        link: "https://pt.wikipedia.org/wiki/Dirk_Nowitzki"
    },
    {
        nome: "Wes Unseld",
        time: "Baltimore/Washington Bullets",
        posicao: "Pivô",
        descricao: "Wes Unseld foi um dos primeiros pivôs a dominar o jogo com sua força física e habilidades de passe. Ele foi o MVP das finais de 1969.",
        link: "https://pt.wikipedia.org/wiki/Wes_Unseld" 
    },
    {
        nome: "Allen Iverson",
        time: "Vários times (76ers, Nuggets, Pistons)",
        posicao: "Armador",
        descricao: "Allen Iverson foi conhecido por seu estilo de jogo agressivo, habilidade de drible e capacidade de marcar pontos. Ele foi o MVP da NBA em 2001.",
        link: "https://pt.wikipedia.org/wiki/Allen_Iverson"
    },
    {
        nome: "Hakeem Olajuwon",
        time: "Houston Rockets",
        posicao: "Pivô",
        descricao: "Hakeem Olajuwon, conhecido como 'The Dream', foi um dos maiores pivôs da história da NBA, famoso por seus movimentos de pés e sua defesa dominante.",
        link: "https://pt.wikipedia.org/wiki/Hakeem_Olajuwon"
    },
    {
        nome: "Dwyane Wade",
        time: "Vários times (Heat, Bulls, Cavaliers)",
        posicao: "Ala-armador",
        descricao: "Dwyane Wade foi um dos pilares do tricampeonato do Miami Heat, conhecido por sua habilidade de finalizar jogadas e sua liderança.",
        link: "https://pt.wikipedia.org/wiki/Dwyane_Wade"
    },
    {
        nome: "Bob Cousy",
        time: "Boston Celtics",
        posicao: "Armador",
        descricao: "Bob Cousy foi um dos primeiros grandes armadores da NBA, conhecido por seu passe mágico e por ter sido um dos fundadores da liga.",
        link: "https://pt.wikipedia.org/wiki/Bob_Cousy" 
    },
    {
        nome: "Shaquille O'Neal",
        time: "Vários times (Magic, Lakers, Heat, etc.)",
        posicao: "Pivô",
        descricao: "Shaquille O'Neal, conhecido como 'Shaq', foi um dos maiores dominadores da pintura da história da NBA, conhecido por sua força física e habilidade de finalizar perto da cesta.",
        link: "https://pt.wikipedia.org/wiki/Shaquille_O%27Neal"
    },
    {
        nome: "Bill Walton",
        time: "Vários times (Blazers, Celtics, Clippers)",
        posicao: "Pivô",
        descricao: "Bill Walton foi um dos maiores pivôs dos anos 70, conhecido por seu jogo de pés e sua visão de jogo. Ele foi o MVP da NBA em 1978.",
        link: "https://pt.wikipedia.org/wiki/Bill_Walton" 
    },
    {
        nome: "Dave Cowens",
        time: "Boston Celtics",
        posicao: "Ala-pivô",
        descricao: "Dave Cowens foi um dos pilares da dinastia dos Celtics na década de 1970, conhecido por sua força física e sua versatilidade.",
        link: "https://pt.wikipedia.org/wiki/Dave_Cowens" 
    },
    {
        nome: "Robert Parish",
        time: "Vários times (Celtics, Bulls, Hornets)",
        posicao: "Pivô",
        descricao: "Robert Parish foi um dos maiores pivôs da história da NBA, conhecido por sua longevidade, defesa e habilidade de rebote.",
        link: "https://pt.wikipedia.org/wiki/Robert_Parish" 
    },
    {
        nome: "Jerry West",
        time: "Los Angeles Lakers",
        posicao: "Ala-armador",
        descricao: "Jerry West, conhecido como 'Mr. Clutch', foi um dos maiores jogadores da história dos Lakers, famoso por suas jogadas decisivas e seu logo da NBA.",
        link: "https://pt.wikipedia.org/wiki/Jerry_West"
    },
    {
        nome: "Billy Cunningham",
        time: "Philadelphia 76ers",
        posicao: "Ala-pivô",
        descricao: "Billy Cunningham foi um dos primeiros grandes ala-pivôs da NBA, conhecido por sua força física e habilidade de marcar pontos.",
        link: "https://pt.wikipedia.org/wiki/Billy_Cunningham" 
    },
    {
        nome: "Sam Jones",
        time: "Boston Celtics",
        posicao: "Ala",
        descricao: "Sam Jones foi um dos pilares da dinastia dos Celtics, conhecido por sua habilidade de arremesso e por sua defesa.",
        link: "https://pt.wikipedia.org/wiki/Sam_Jones" 
    },
    {
        nome: "Chris Paul",
        time: "Vários times (Hornets, Clippers, Rockets, Suns)",
        posicao: "Armador",
        descricao: "Chris Paul é conhecido por sua habilidade de passar a bola, liderar equipes e marcar pontos. Ele é um dos maiores assistentes da história da NBA.",
        link: "https://pt.wikipedia.org/wiki/Chris_Paul"
    },
    {
        nome: "Russell Westbrook",
        time: "Vários times (Thunder, Rockets, Wizards, Lakers)",
        posicao: "Armador",
        descricao: "Russell Westbrook é conhecido por sua explosividade, habilidade de marcar pontos e por seus triplos-duplos. Ele foi o MVP da NBA em 2017.",
        link: "https://pt.wikipedia.org/wiki/Russell_Westbrook"
    },
    {
        nome: "Gary Payton",
        time: "Vários times (Sonics, Lakers, Heat)",
        posicao: "Armador",
        descricao: "Gary Payton, conhecido como 'The Glove', foi um dos maiores defensores da história da NBA, famoso por sua habilidade de marcar adversários e sua liderança.",
        link: "https://pt.wikipedia.org/wiki/Gary_Payton" 
    },
    {
        nome: "Lenny Wilkens",
        time: "Vários times (Hawks, Sonics, Cavaliers, etc.)",
        posicao: "Armador",
        descricao: "Lenny Wilkens é um dos maiores jogadores e treinadores da história da NBA, conhecido por sua longevidade e por suas habilidades de liderança.",
        link: "https://pt.wikipedia.org/wiki/Lenny_Wilkens" 
    },
    {
        nome: "Anthony Davis",
        time: "Vários times (Pelicans, Lakers)",
        posicao: "Ala-pivô",
        descricao: "Anthony Davis é um dos maiores jogadores da NBA da atualidade, conhecido por sua versatilidade, habilidade de marcar pontos e defesa.",
        link: "https://pt.wikipedia.org/wiki/Anthony_Davis"
    },
    {
        nome: "Jason Kidd",
        time: "Vários times (Nets, Mavericks, Knicks)",
        posicao: "Armador",
        descricao: "Jason Kidd é um dos maiores assistentes da história da NBA, conhecido por sua visão de jogo, habilidade de passar a bola e liderança.",
        link: "https://pt.wikipedia.org/wiki/Jason_Kidd"
    },
    {
        nome: "Bob Pettit",
        time: "St. Louis Hawks",
        posicao: "Ala-pivô",
        descricao: "Bob Pettit foi um dos primeiros grandes jogadores da NBA, conhecido por sua força física, habilidade de marcar pontos e liderança.",
        link: "https://pt.wikipedia.org/wiki/Bob_Pettit" 
    },
    {
        nome: "Dominique Wilkins",
        time: "Vários times (Hawks, Celtics, Clippers)",
        posicao: "Ala",
        descricao: "Dominique Wilkins foi um dos maiores pontuadores da história da NBA, conhecido por seu estilo de jogo acrobático e habilidade de voar.",
        link: "https://pt.wikipedia.org/wiki/Dominique_Wilkins"
    },
    {
        nome: "Dave DeBusschere",
        time: "Vários times (Pistons, Knicks)",
        posicao: "Ala",
        descricao: "Dave DeBusschere foi um dos primeiros grandes jogadores brancos da NBA, conhecido por sua versatilidade e defesa.",
        link: "https://pt.wikipedia.org/wiki/Dave_DeBusschere" 
    },
    {
        nome: "Kawhi Leonard",
        time: "Vários times (Spurs, Raptors, Clippers)",
        posicao: "Ala",
        descricao: "Kawhi Leonard é um dos maiores jogadores da NBA da atualidade, conhecido por sua defesa, habilidade de marcar pontos e liderança.",
        link: "https://pt.wikipedia.org/wiki/Kawhi_Leonard"
    },
    {
        nome: "Paul Pierce",
        time: "Vários times (Celtics, Nets, Wizards)",
        posicao: "Ala",
        descricao: "Paul Pierce foi um dos pilares do tricampeonato do Boston Celtics, conhecido por sua habilidade de marcar pontos e liderança.",
        link: "https://pt.wikipedia.org/wiki/Paul_Pierce"
    },
    {
        nome: "James Worthy",
        time: "Los Angeles Lakers",
        posicao: "Ala",
        descricao: "James Worthy foi um dos membros mais importantes da Showtime Lakers, conhecido por sua habilidade de finalizar jogadas e sua versatilidade.",
        link: "https://pt.wikipedia.org/wiki/James_Worthy" 
    },
    {
        nome: "Stephen Curry",
        time: "Golden State Warriors",
        posicao: "Armador",
        descricao: "Stephen Curry é considerado um dos maiores arremessadores de longa distância da história da NBA, conhecido por seu estilo de jogo revolucionário e por ter liderado os Warriors a vários títulos.",
        link: "https://pt.wikipedia.org/wiki/Stephen_Curry"
    },
    {
        nome: "Paul Arizin",
        time: "Philadelphia Warriors", 
        posicao: "Ala",
        descricao: "Paul Arizin foi um dos primeiros grandes artilheiros da NBA, conhecido por sua habilidade de marcar pontos e sua ética de trabalho exemplar.",
        link: "https://pt.wikipedia.org/wiki/Paul_Arizin"
      },
      {
        nome: "George Gervin",
        time: "San Antonio Spurs",
        posicao: "Ala-Armador",
        descricao: "George Gervin, conhecido como 'The Iceman', foi um dos maiores pontuadores da história da NBA, famoso por seu estilo elegante e habilidade de encestar de qualquer ângulo.",
        link: "https://pt.wikipedia.org/wiki/George_Gervin"
      },
      {
        nome: "Reggie Miller",
        time: "Indiana Pacers",
        posicao: "Ala-Armador",
        descricao: "Reggie Miller foi um dos maiores artilheiros da história dos Pacers e um dos maiores competidores da NBA, famoso por seus momentos decisivos e rivalidade com os Knicks.",
        link: "https://pt.wikipedia.org/wiki/Reggie_Miller"
      }
];
