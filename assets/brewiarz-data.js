/**
 * LITURGIA GODZIN – BAZA DANYCH
 * Jutrznia i Nieszpory: Okres Zwykły (I–IV) i Adwent (I–IV)
 */

// ─── Wspólne teksty ──────────────────────────────────────────────────────────

const BRW_OTWARCIE = '℣ Boże, wejrzyj ku wspomożeniu memu.\n℟ Panie, pospiesz ku ratunkowi memu.\n\nChwała Ojcu i Synowi, i Duchowi Świętemu,\njak była na początku, teraz i zawsze,\ni na wieki wieków. Amen. Alleluja.';

const BRW_GLORIA = 'Chwała Ojcu i Synowi, i Duchowi Świętemu,\njak była na początku, teraz i zawsze,\ni na wieki wieków. Amen.';

const BRW_ZACHARIASZ = {
  label: 'Kantyk Zachariasza (Łk 1, 68–79)',
  tekst:
    'Błogosławiony Pan, Bóg Izraela,\n' +
    'bo lud swój nawiedził i wyzwolił.\n\n' +
    'I moc zbawczą nam wzbudził\n' +
    'w domu sługi swego Dawida.\n\n' +
    'Jak zapowiedział od dawna\n' +
    'przez usta swych świętych proroków,\n' +
    'że nas wybawi od nieprzyjaciół\n' +
    'i z ręki wszystkich, którzy nas nienawidzą.\n\n' +
    'Da nam, że z mocy nieprzyjaciół wyrwani,\n' +
    'służyć Mu będziemy bez trwogi,\n' +
    'w pobożności i sprawiedliwości\n' +
    'przed Nim po wszystkie dni nasze.\n\n' +
    'A ty, dziecię, zwać się będziesz prorokiem Najwyższego,\n' +
    'gdyż pójdziesz przed Panem torować Mu drogi.\n\n' +
    'Chwała Ojcu i Synowi, i Duchowi Świętemu,\n' +
    'jak była na początku, teraz i zawsze,\n' +
    'i na wieki wieków. Amen.'
};

const BRW_MAGNIFICAT = {
  label: 'Kantyk Maryi – Magnificat (Łk 1, 46–55)',
  tekst:
    'Wielbi dusza moja Pana\n' +
    'i raduje się duch mój w Bogu, moim Zbawcy.\n\n' +
    'Bo wejrzał na uniżenie Służebnicy swojej.\n' +
    'Oto bowiem błogosławić mnie będą\n' +
    'odtąd wszystkie pokolenia,\n\n' +
    'gdyż wielkie rzeczy uczynił mi Wszechmocny.\n' +
    'Święte jest Jego imię,\n' +
    'a swoje miłosierdzie na pokolenia i pokolenia\n' +
    'zachowuje dla tych, co się Go boją.\n\n' +
    'Okazał moc ramienia swego,\n' +
    'rozproszył pyszniących się zamysłami serc swoich.\n' +
    'Strącił władców z tronu, a wywyższył pokornych.\n' +
    'Głodnych nasycił dobrami, a bogatych z niczym odprawił.\n\n' +
    'Ujął się za sługą swoim Izraelem,\n' +
    'pomny na miłosierdzie swoje –\n' +
    'jak przyrzekł naszym ojcom –\n' +
    'na rzecz Abrahama i jego potomstwa na wieki.\n\n' +
    'Chwała Ojcu i Synowi, i Duchowi Świętemu,\n' +
    'jak była na początku, teraz i zawsze,\n' +
    'i na wieki wieków. Amen.'
};

const BRW_OJCZE_NASZ = {
  label: 'Ojcze nasz',
  tekst:
    'Ojcze nasz, któryś jest w niebie,\n' +
    'święć się imię Twoje;\n' +
    'przyjdź królestwo Twoje;\n' +
    'bądź wola Twoja jako w niebie, tak i na ziemi.\n' +
    'Chleba naszego powszedniego daj nam dzisiaj;\n' +
    'i odpuść nam nasze winy,\n' +
    'jako i my odpuszczamy naszym winowajcom;\n' +
    'i nie wódź nas na pokuszenie,\n' +
    'ale nas zbaw ode złego. Amen.'
};

// ─── Pomocnik budowania dnia ─────────────────────────────────────────────────
function _dzien(jHymn, jPsalmy, jProsby, nHymn, nPsalmy, nProsby) {
  return {
    jutrznia: {
      otwarcie: BRW_OTWARCIE,
      hymn: jHymn,
      psalmy: jPsalmy,
      kantyk: BRW_ZACHARIASZ,
      prosby: jProsby,
      modlitwa: BRW_OJCZE_NASZ
    },
    nieszpory: {
      otwarcie: BRW_OTWARCIE,
      hymn: nHymn,
      psalmy: nPsalmy,
      kantyk: BRW_MAGNIFICAT,
      prosby: nProsby,
      modlitwa: BRW_OJCZE_NASZ
    }
  };
}

// ─── Skróty psalmów (zamiast wielkich bloków) ────────────────────────────────
function _ps(label, tekst) { return { label: label, tekst: tekst + '\n' + BRW_GLORIA }; }
function _pr(label, intro, wezwania) { return { label: label, intro: intro, wezwania: wezwania }; }
function _w(wezw, odp) { return { wezw: wezw, odp: odp }; }

// ─── Hymny ───────────────────────────────────────────────────────────────────
const H = {
  // Okres Zwykły – Jutrznia
  ZwJ_ndz:  { label: 'Hymn', tekst: 'Zorza na wschodzie się pali,\nPanie, oddajem Ci chwałę;\nNiechaj ten dzień nam się stanie\nTwojej łaskawości znakiem.\n\nTy, co mrok nocy rozpraszasz\nI nowy dzień nam przywracasz,\nDaj nam w Twej łasce wytrwanie\nI Twojej woli spełnianie.\n\nChwała Ojcu i Synowi\nI Duchowi Świętemu,\nTeraz i w wieki wieków. Amen.' },
  ZwJ_pow:  { label: 'Hymn', tekst: 'Przychodzi chwila nowego dnia,\nGdy noc ustępuje zorzom;\nO Panie, oto stajemy przed Tobą\nZ naszą ufnością i pokorą.\n\nNiech praca rąk i myśl umysłu\nBędą ku Twojej chwale;\nW każdej godzinie i minucie\nNiech służymy Ci wytrwale. Amen.' },
  ZwJ_wt:   { label: 'Hymn', tekst: 'Jutrzenko złota, wschodź nam jasna,\nNiosąc nam Boga słowo żywe;\nTy, Chryste, jesteś Słońcem duszy,\nTwój blask do serca nas zagrzewa. Amen.' },
  ZwJ_sr:   { label: 'Hymn', tekst: 'Panie, Ty jesteś naszym światłem,\nKtóre rozprasza mroki nocy;\nNiechaj Twój Duch nas prowadzi\nI daje nam siłę i mocy. Amen.' },
  ZwJ_czw:  { label: 'Hymn', tekst: 'Teraz o poranku śpiewamy Tobie,\nBoże, nasz Ojcze Wszechmogący;\nZa noc minioną, za dzień nowy,\nZa łaskę życia kwitnącą. Amen.' },
  ZwJ_pt:   { label: 'Hymn', tekst: 'Zbliżamy się do Ciebie rano,\nChryste, Zbawicielu nasz;\nNa Krzyżu Twoim życie dałeś,\nAbyś nam zbawienie dał.\n\nNiech piątek ten nam przypomina\nTwoją Mękę i ofiarę;\nW Twoich ranach nasze uzdrowienie,\nW Twej śmierci nasze zmartwychwstanie. Amen.' },
  ZwJ_sob:  { label: 'Hymn ku czci NMP', tekst: 'Witaj, Matko niebieska,\nPełna łaski i chwały;\nTyś jest naszą obroną,\nPrzed Bogiem Orędowniczką.\n\nProwadź nas do Twojego Syna,\nNiechaj nas Jego łaska chroni. Amen.' },
  // Okres Zwykły – Nieszpory
  ZwN_ndz:  { label: 'Hymn', tekst: 'O Stworzycielu, Duchu, przyjdź,\nNawiedź dusz wiernych Tobie krąg,\nNiebieską łaskę zesłać racz\nSercom, co dziełem są Twych rąk.\n\nPocieszycielem jesteś zwan\nI Najwyższego darem sam,\nŹródłem żywym, ogniem, miłością. Amen.' },
  ZwN_pow:  { label: 'Hymn', tekst: 'Panie dnia i pracy,\nGdy wieczór zapada,\nZa każdą chwilę łaski\nNiech dusza Ci dziękuje. Amen.' },
  ZwN_wt:   { label: 'Hymn', tekst: 'Gdy zachód słońca świat ogarnia,\nI zmierzch zapada cichy, spokojny,\nPanie, niech głos nasz Cię dosięgnie –\nWdzięcznej pieśni dźwięk wieczorny. Amen.' },
  ZwN_sr:   { label: 'Hymn', tekst: 'Wieczorną pieśń Ci wznosimy,\nBoże, Stwórco wszechrzeczy;\nZa dzień miniony dzięki składamy,\nBłagamy o łaskę tej nocy. Amen.' },
  ZwN_czw:  { label: 'Hymn', tekst: 'O Panie, skończyliśmy dziś pracę,\nProsimy o Twoje błogosławieństwo;\nZa wszystko, co minęło dobrze,\nDziękujemy z radością i dziwieniem. Amen.' },
  ZwN_pt:   { label: 'Hymn', tekst: 'Wieczór piątkowy cichutko zapada,\nGdy krzyż na wzgórzu jeszcze promieniuje;\nO Chryste, niech ta godzina wieczorna\nTwą ofiarę nam przypomina. Amen.' },
  ZwN_sob:  { label: 'Hymn ku czci NMP', tekst: 'Sławimy Cię, Maryjo,\nNajświętsza Matko Pana;\nW wieczornej godzinie modlitwy\nPod Twoją opieką trwamy. Amen.' },
  // Adwent – Jutrznia / Nieszpory
  AdvJ_ndz: { label: 'Hymn adwentowy', tekst: 'Przyjdź, o przyjdź, Emmanuelu,\nZbaw Izraela Twego w wygnaniu;\nWesel się, wesel, Izraelu!\nPrzyjdzie do ciebie Emmanuel.\n\nPrzyjdź, o Mądrości z góry,\nWejdź w nasze serce, w nasze myśli;\nPokaż nam ścieżkę, wiedzę, prawdę. Amen.' },
  AdvN_ndz: { label: 'Hymn adwentowy wieczorny', tekst: 'Gdy zmrok zapada nad ziemią,\nCzekamy na Ciebie, Chryste;\nJak gwiazda świeci na niebie,\nTak Ty oświetlasz nasze życie.\n\nPrzyjdź do nas, Panie, nasz Zbawco. Amen.' },
  AdvJ_pow: { label: 'Hymn adwentowy', tekst: 'Gwiazdo zaranna, wschodź jasna,\nZapowiadając Pana bliskość;\nNiechaj Adwent w naszych sercach\nBudzi wiarę, miłość, czułość. Amen.' },
  AdvN_pow: { label: 'Hymn adwentowy wieczorny', tekst: 'Nocna godzina spokoju nadchodzi,\nSerce spokojnie w Bogu spoczywa;\nO Panie, który nadchodzisz w chwale,\nBądź już bliski w ciszy nocy. Amen.' },
  AdvJ_poz: { label: 'Hymn adwentowy', tekst: 'Rosy spuśćcie niebiosa z góry,\nNiechaj sprawiedliwy zakwitnie;\nAmen, amen, chodź Panie Jezu!\nNiechaj łaska w nas rozkwita. Amen.' },
  AdvN_poz: { label: 'Hymn adwentowy wieczorny', tekst: 'Wieczór adwentowy zapada cicho,\nA gwiazdy błyszczą niczym betlejemska;\nO Chryste, Słońce sprawiedliwości,\nRozjaśnij ciemność naszych serc. Amen.' },
  AdvJ_sob: { label: 'Hymn ku czci NMP (Adwent)', tekst: 'Witaj, Jutrzenko zaranna,\nMaryjo, Matko Odkupiciela;\nTyś przygotowała w łonie\nTego, na którego czekamy. Amen.' },
  AdvN_sob: { label: 'Hymn sobotni adwentowy', tekst: 'Sobotni wieczór, czas Maryi,\nNiechaj nas Twoja opieka strzeże;\nW adwentowej ciszy czekamy\nNa przyjście Pana nad panami. Amen.' }
};

// ─── Psalmy ──────────────────────────────────────────────────────────────────
// Każdy tydzień ma odmienne psalmy – tu tydzień I (rdzeń)
const P = {
  // JUTRZNIA – NIEDZIELA
  ndz_j: [
    _ps('Psalm 63 – Tęsknota za Bogiem',
      'Boże, Ty jesteś moim Bogiem, szukam Cię od świtu.\n' +
      'Pragnie Cię moja dusza, tęskni za Tobą moje ciało,\n' +
      'jak ziemia zeschła, spragniona, bez wody.\n\n' +
      'Przeto wyglądam Cię w świątyni,\n' +
      'by ujrzeć Twą potęgę i chwałę.\n' +
      'Łaskawość Twoja cenniejsza od życia,\n' +
      'dlatego moje wargi Cię wysławiają.'),
    _ps('Kantyk – Dn 3, 57–88 – Trzy Młodzieńce',
      'Błogosławcie Pana, wszystkie dzieła Pańskie,\n' +
      'chwalcie Go i wywyższajcie na wieki.\n\n' +
      'Błogosławcie Go, aniołowie Pańscy,\n' +
      'błogosławcie Go, niebiosa.\n\n' +
      'Błogosławcie Go, słońce i księżyc,\n' +
      'błogosławcie Go, gwiazdy niebieskie.'),
    _ps('Psalm 149 – Pieśń nowa',
      'Śpiewajcie Panu pieśń nową,\n' +
      'głoście Jego chwałę w zgromadzeniu wiernych.\n\n' +
      'Bo Pan miłuje swój lud,\n' +
      'chwałą wieńczy pokornych.')
  ],
  // NIESZPORY – NIEDZIELA
  ndz_n: [
    _ps('Psalm 110 – Królewskie panowanie Mesjasza',
      'Rzekł Pan do Pana mego:\n' +
      '«Siądź po mojej prawicy,\n' +
      'aż uczynię Twych wrogów podnóżkiem Twoich stóp».\n\n' +
      'Twoje panowanie rozciągnie Pan z Syjonu:\n' +
      '«Panuj wśród Twych nieprzyjaciół!»'),
    _ps('Psalm 114 – Wyjście z Egiptu',
      'Gdy Izrael wychodził z Egiptu,\n' +
      'dom Jakuba spośród obcego ludu,\n' +
      'Juda stał się Jego świątynią, Izrael – Jego władztwem.\n\n' +
      'Morze ujrzało i uciekło,\n' +
      'Jordan zawrócił wstecz.')
  ],
  // PONIEDZIAŁEK
  pow_j: [
    _ps('Psalm 5 – Modlitwa poranna',
      'Słuchaj, Panie, moich słów,\n' +
      'usłysz moje wzdychanie.\n' +
      'Przyjmij krzyk mój wołający o pomoc,\n' +
      'Królu mój i Boże!\n\n' +
      'Do Ciebie, Panie, kieruję swą modlitwę,\n' +
      'rano głos mój usłyszysz;\n' +
      'rano przygotowuję się dla Ciebie i czekam.'),
    _ps('Kantyk – Iz 2, 2–5 – Pielgrzymka narodów',
      'Stanie się to w dniach ostatecznych:\n' +
      'góra domu Pańskiego stać będzie na czele gór.\n\n' +
      'Mnogie ludy pójdą i powiedzą:\n' +
      '«Chodźcie, wstąpmy na górę Pana».\n\n' +
      'Bo Prawo wyjdzie z Syjonu\n' +
      'i słowo Pańskie z Jeruzalem.'),
    _ps('Psalm 29 – Głos Pana nad wodami',
      'Oddajcie Panu, synowie Boży,\n' +
      'oddajcie Panu chwałę i potęgę.\n\n' +
      'Pan zasiada nad potopem,\n' +
      'Pan zasiada jako król na wieki.\n' +
      'Pan udzieli mocy swojemu ludowi,\n' +
      'Pan pobłogosławi swój lud pokojem.')
  ],
  pow_n: [
    _ps('Psalm 11 – Ufność w Bogu',
      'W Panu szukam ucieczki.\n\n' +
      'Pan jest w swoim świętym przybytku,\n' +
      'tron Pański jest w niebie;\n' +
      'oczy Jego patrzą, powieki Go badają – synów ludzkich.\n\n' +
      'Pan jest sprawiedliwy, kocha sprawiedliwość,\n' +
      'a prawym widzi oblicze Jego.'),
    _ps('Psalm 15 – Gość domu Pańskiego',
      'Panie, kto może przebywać w Twym przybytku?\n\n' +
      'Ten, co postępuje bez skazy i czyni, co słuszne,\n' +
      'a szczerość mówi w swoim sercu.\n\n' +
      'Kto tak postępuje, nigdy nie upadnie.')
  ],
  // WTOREK
  wt_j: [
    _ps('Psalm 24 – Pan wchodzi do świątyni',
      'Do Pana należy ziemia i to, co ją napełnia.\n\n' +
      'Kto wstąpi na górę Pańską?\n' +
      'Człowiek rąk nieskalanych i czystego serca.\n\n' +
      'Bramy, podnieście swe szczyty,\n' +
      'aby mógł wkroczyć Król chwały!'),
    _ps('Kantyk – Iz 38, 10–14 – Modlitwa Ezechiasza',
      'Ja myślałem: W połowie mego życia\n' +
      'muszę odejść do bram Szeolu.\n\n' +
      'Ale Ty, Panie, zachowałeś duszę moją,\n' +
      'abyś mógł żyć.\n\n' +
      'Żywi będą Cię sławić,\n' +
      'ojciec swym dzieciom opowie o Twojej wierności.'),
    _ps('Psalm 33 – Chwała Bożej Opatrzności',
      'Cieszcie się, sprawiedliwi, w Panu,\n' +
      'prawym przystoi Jego chwała.\n\n' +
      'Przez słowo Pana powstały niebiosa.\n\n' +
      'Oczy Pana zwrócone są na bogobojnych,\n' +
      'na tych, którzy czekają na Jego łaskę.')
  ],
  wt_n: [
    _ps('Psalm 20 – Modlitwa przed bitwą',
      'Niechaj cię Pan wysłucha w dniu utrapienia,\n' +
      'niechaj cię ochrania imię Boga Jakuba.\n\n' +
      'Niechaj ześle pomoc ze swojej świątyni\n' +
      'i ze Syjonu cię wesprze.'),
    _ps('Psalm 21 – Radość po zwycięstwie',
      'Królu! Twoja potęga raduje, Panie.\n\n' +
      'Spełniłeś życzenia jego serca,\n' +
      'włożyłeś mu na głowę koronę ze szczerego złota.')
  ],
  // ŚRODA
  sr_j: [
    _ps('Psalm 36 – Złość grzesznika i dobroć Boża',
      'Panie, sięga niebios Twoja łaska,\n' +
      'a wierność Twoja – po chmury.\n\n' +
      'Jakże cenna jest Twoja łaska, Boże!\n' +
      'Ludzie chronią się pod cieniem Twych skrzydeł.'),
    _ps('Kantyk – Jdt 16, 13–15 – Pieśń Judyty',
      'Zanucę Panu pieśń nową:\n' +
      'Wielki jesteś Panie i chwalebny,\n' +
      'podziwu godny w mocy i niezwyciężony.'),
    _ps('Psalm 47 – Pan jest Królem',
      'Klaszczcie w dłonie, wszystkie narody!\n\n' +
      'Bóg zasiadł na swym tronie wśród okrzyków,\n' +
      'Pan – przy dźwiękach trąby.\n' +
      'Śpiewajcie Bogu, śpiewajcie naszemu Królowi!')
  ],
  sr_n: [
    _ps('Psalm 62 – Ufność w Bogu',
      'Tylko w Bogu spokój znajdzie dusza moja;\n' +
      'od Niego pochodzi moje zbawienie.\n\n' +
      'Tylko w Bogu szukaj spokoju, duszo moja,\n' +
      'bo od Niego pochodzi moja nadzieja.'),
    _ps('Psalm 67 – Błogosławieństwo i chwała',
      'Niech nas Bóg błogosławi i darzy łaską.\n\n' +
      'Niech ludy chwalą Cię, Boże,\n' +
      'niech wszystkie ludy dają Ci chwałę!')
  ],
  // CZWARTEK
  czw_j: [
    _ps('Psalm 57 – Ufność wśród prześladowań',
      'Miej litość nade mną, Boże, miej litość,\n' +
      'bo u Ciebie moja dusza szuka schronienia.\n\n' +
      'Wywyższaj się ponad niebiosa, Boże,\n' +
      'nad całą ziemią Twoja chwała!'),
    _ps('Kantyk – Jr 31, 10–14 – Zbawienie ludu',
      'Słuchajcie słowa Pańskiego, narody!\n\n' +
      'Pan bowiem uwolnił Jakuba,\n' +
      'wykupił go z ręki potężniejszego.\n\n' +
      'Pójdą i będą się radować na wyżynach Syjonu.'),
    _ps('Psalm 48 – Piękno Syjonu',
      'Wielki jest Pan i godzien wszelkiej chwały\n' +
      'w mieście Boga naszego.\n\n' +
      'Rozważamy, Boże, Twą łaskę\n' +
      'we wnętrzu Twojej świątyni.')
  ],
  czw_n: [
    _ps('Psalm 30 – Dziękczynienie',
      'Sławię Cię, Panie, bo mnie wybawiłeś.\n\n' +
      'Zmienił mój lament w taniec,\n' +
      'szatę żałoby zamienił na strój radości.\n' +
      'Panie, Boże mój, będę Ci wielbił na wieki.'),
    _ps('Psalm 32 – Szczęście przebaczonego',
      'Szczęśliwy, któremu odpuszczona wina,\n' +
      'którego grzech jest pokryty.\n\n' +
      'Radujcie się w Panu i weselcie, sprawiedliwi;\n' +
      'śpiewajcie radośnie, wszyscy prawego serca!')
  ],
  // PIĄTEK
  pt_j: [
    _ps('Psalm 51 – Miserere',
      'Zmiłuj się nade mną, Boże, w swojej łaskawości,\n' +
      'w ogromie swego miłosierdzia wymaż moją nieprawość.\n\n' +
      'Stwórz, Boże, we mnie serce czyste\n' +
      'i odnów w mojej piersi ducha niezachwianego.\n\n' +
      'Nie odrzucaj mnie od swego oblicza\n' +
      'i nie odbieraj mi swego Ducha Świętego.'),
    _ps('Kantyk – Ha 3, 2–4 – Modlitwa proroka',
      'Panie, usłyszałem wieść o Tobie;\n' +
      'ujrzałem, Panie, Twoje dzieła.\n\n' +
      'Majestat Jego zakrywa niebiosa,\n' +
      'a chwałą Jego napełniona jest ziemia.'),
    _ps('Psalm 147A – Bóg troszczy się o swój lud',
      'Dobrze jest śpiewać naszemu Bogu,\n' +
      'bo miła, bo piękna jest pieśń chwały.\n\n' +
      'On leczy złamanych na duchu\n' +
      'i opatruje ich rany.')
  ],
  pt_n: [
    _ps('Psalm 116A – Wdzięczność za wybawienie',
      'Miłuję Pana, bo wysłuchał mój głos,\n' +
      'moje błaganie.\n\n' +
      'Pan jest łaskawy i sprawiedliwy,\n' +
      'Bóg nasz jest miłosierny.'),
    _ps('Psalm 116B – Kielich zbawienia',
      'Jak odpłacę Panu\n' +
      'za wszystko, co mi wyświadczył?\n' +
      'Podniosę kielich zbawienia\n' +
      'i wezwę imienia Pańskiego.')
  ],
  // SOBOTA
  sob_j: [
    _ps('Psalm 119 I – Błogosławiony w Prawie',
      'Błogosławieni, których droga jest nieskalana,\n' +
      'którzy postępują zgodnie z prawem Pańskim.\n\n' +
      'Ty nakazałeś, by pilnie zachowywać Twoje przykazania.\n' +
      'Oby moje drogi były pełne stałości!'),
    _ps('Kantyk – Mdr 9, 1–6 – Modlitwa o mądrość',
      'Boże ojców i Panie miłosierdzia,\n' +
      'daj mi tę Mądrość, która zasiada przy Twoim tronie.\n\n' +
      'Ona bowiem wie i rozumie wszystko,\n' +
      'poprowadzi mnie roztropnie w mych czynach.'),
    _ps('Psalm 117 – Chwalcie Pana',
      'Chwalcie Pana, wszystkie narody,\n' +
      'wysławiajcie Go, wszystkie ludy!\n' +
      'Bo ogromna jest Jego łaskawość nad nami\n' +
      'i wierność Pana trwa na wieki.')
  ],
  sob_n: [
    _ps('Psalm 122 – Radość pielgrzyma',
      'Ucieszyłem się, gdy mi powiedziano:\n' +
      '«Pójdziemy do domu Pańskiego».\n\n' +
      'Proście o pokój dla Jeruzalem;\n' +
      'niech żyją w szczęściu, którzy cię miłują!'),
    _ps('Kantyk – Kol 1, 12–20 – Chrystus Pierworodny',
      'Dziękujemy Bogu Ojcu,\n' +
      'który nas uzdolnił do uczestnictwa w dziale świętych.\n\n' +
      'On jest obrazem Boga niewidzialnego,\n' +
      'Pierworodnym wobec każdego stworzenia.')
  ]
};

// ─── Psalmy ADWENT ────────────────────────────────────────────────────────────
const PA = {
  ndz_j: [
    _ps('Psalm 25 – Ufność i prośba o prowadzenie',
      'Do Ciebie, Panie, wznoszę moją duszę.\n' +
      'Naucz mnie, Panie, chodzić Twoimi drogami,\n' +
      'wskaż mi Twoje ścieżki.\n\n' +
      'Wspomnij na swoje miłosierdzie, Panie,\n' +
      'na Twoją miłość, co trwa od wieków.'),
    _ps('Kantyk – Iz 12, 1–6 – Dziękczynienie za zbawienie',
      'Oto Bóg jest moim zbawieniem;\n' +
      'będę miał ufność i nie będę się lękał.\n\n' +
      'Czerpajcie wodę z radością ze zdrojów zbawienia!\n\n' +
      'Wysławiajcie Pana, wzywajcie Jego imienia!'),
    _ps('Psalm 85 – Modlitwa o zbawienie',
      'Okaż nam, Panie, Twe miłosierdzie\n' +
      'i daj nam swoje zbawienie!\n\n' +
      'Miłość i wierność spotkają się ze sobą,\n' +
      'ucałują się sprawiedliwość i pokój.')
  ],
  ndz_n: [
    _ps('Psalm 40 – Bóg przyszedł z pomocą',
      'Złożyłem w Panu moją nadzieję.\n' +
      'Wydobył mnie z dołu zagłady.\n\n' +
      'Włożył mi w usta pieśń nową,\n' +
      'śpiew chwały dla Boga naszego.'),
    _ps('Psalm 72 – Mesjański Król pokoju',
      'Boże, przekaż Twój sąd królowi.\n\n' +
      'Za jego dni zakwitnie sprawiedliwość\n' +
      'i obfitość pokoju.\n\n' +
      'Panować będzie od morza do morza.')
  ],
  pow_j: [
    _ps('Psalm 26 – Modlitwa niewinnego',
      'Wymierz mi sprawiedliwość, Panie.\n\n' +
      'Twoja bowiem łaska jest przed moimi oczami\n' +
      'i chodzę wiernie według Twojej prawdy.\n\n' +
      'Panie, miłuję dom, gdzie przebywasz.'),
    _ps('Kantyk – Iz 40, 10–17 – Pociecha dla Izraela',
      'Oto Pan Bóg przychodzi z mocą.\n\n' +
      'Jak pasterz pasie On swą trzodę,\n' +
      'gromadzi ją swoim ramieniem,\n' +
      'jagnięta nosi na swej piersi.'),
    _ps('Psalm 90 – Przemijanie i Bóg wieczny',
      'Ty, Panie, byłeś nam schronieniem\n' +
      'z pokolenia w pokolenie.\n\n' +
      'Niechaj łaska Pana, Boga naszego, będzie nad nami;\n' +
      'wspieraj pracę rąk naszych!')
  ],
  pow_n: [
    _ps('Psalm 97 – Króluje Pan',
      'Pan króluje, niech się raduje ziemia!\n\n' +
      'Niebiosa głoszą Jego sprawiedliwość,\n' +
      'a chwałę Jego oglądają wszystkie narody.'),
    _ps('Psalm 98 – Pieśń ku czci Króla',
      'Śpiewajcie Panu pieśń nową,\n' +
      'albowiem uczynił cuda.\n\n' +
      'Wołaj z radości na cześć Pana, cała ziemio!')
  ],
  wt_j: [
    _ps('Psalm 86 – Modlitwa w ucisku',
      'Nakłoń, Panie, swoje ucho i odpowiedz mi.\n\n' +
      'Nauczaj mnie, Panie, Twojej drogi,\n' +
      'bym postępował wiernie według Twojej prawdy.'),
    _ps('Kantyk – Iz 45, 15–25 – Jedyny Zbawiciel',
      'Zaprawdę Tyś jest Bogiem ukrytym,\n' +
      'Bogiem Izraela, Zbawicielem.\n\n' +
      'Ku Mnie zwróćcie się i nawróćcie się,\n' +
      'bo Ja jestem Bogiem i nie ma innego.'),
    _ps('Psalm 100 – Wezwanie do chwały',
      'Wołaj z radości na cześć Pana, cała ziemio!\n\n' +
      'Wiedzcie, że Pan jest Bogiem:\n' +
      'Jego ludem, owcami Jego pastwiska.\n\n' +
      'Albowiem dobry jest Pan,\n' +
      'Jego łaska trwa wiecznie.')
  ],
  wt_n: [
    _ps('Psalm 113 – Chwała Boga miłosiernego',
      'Chwalcie słudzy Pana,\n' +
      'chwalcie imię Pana!\n\n' +
      'Kto jest jak Pan, nasz Bóg?\n' +
      'który mieszka w górze\n' +
      'i poniża się, by spojrzeć na niebo i ziemię.'),
    _ps('Psalm 147B – Słowo Boże działa',
      'Chwal, Jeruzalem, Pana!\n\n' +
      'Posyła swoje słowo na ziemię\n' +
      'i szybko biegnie Jego rozkaz.')
  ],
  sr_j: [
    _ps('Psalm 18A – Dziękczynienie króla',
      'Miłuję Cię, Panie, mocy moja,\n' +
      'Panie, ostojo moja i twierdzo,\n' +
      'mój wybawicielu.\n\n' +
      'Godny jest czci Pan,\n' +
      'wołam na Niego.'),
    _ps('Psalm 96 – Pan Królem wszechświata',
      'Śpiewajcie Panu pieśń nową,\n' +
      'śpiewajcie Panu, wszystkie krainy!\n\n' +
      'Głoście Jego chwałę wśród pogan,\n' +
      'Jego cuda wśród wszystkich narodów.')
  ],
  sr_n: [
    _ps('Psalm 130 – De profundis',
      'Z głębokości wołam do Ciebie, Panie,\n' +
      'Panie, słuchaj głosu mego!\n\n' +
      'Ale Ty udzielasz przebaczenia.\n\n' +
      'U Pana jest łaska,\n' +
      'u Niego obfite odkupienie.')
  ],
  czw_j: [
    _ps('Psalm 143 – Pokorna prośba',
      'Panie, usłysz moją modlitwę.\n\n' +
      'Wznoszę do Ciebie ręce,\n' +
      'ma dusza jak ziemia spragniona łaknie Ciebie.'),
    _ps('Psalm 77 – Medytacja nad historią zbawienia',
      'Głosem moim wołam do Boga,\n' +
      'głosem moim wołam, by mnie usłyszał.\n\n' +
      'Rozmyślam o dawnych dniach,\n' +
      'przypominam sobie lata odwieczne.')
  ],
  czw_n: [
    _ps('Psalm 27 – Ufność w Bogu',
      'Pan jest moim światłem i zbawieniem moim,\n' +
      'kogóż mam się lękać?\n\n' +
      'Oczekuj Pana!\n' +
      'Bądź mężny i niech się serce twoje umocni.')
  ],
  pt_j: [
    _ps('Psalm 22 – Skarga i chwała',
      'Boże mój, Boże mój, czemuś mnie opuścił?\n\n' +
      'Jemu bowiem nie wzgardził, ani nie odrzucił nędzy ubogiego.\n\n' +
      'Będę głosił imię Twoje swoim braciom.'),
    _ps('Psalm 140 – Prośba o wybawienie',
      'Wyrwij mnie, Panie, od złego człowieka,\n' +
      'zachowaj mnie od gwałtownika.\n\n' +
      'Wiem, że Pan sprawi sprawiedliwość dla biednego.')
  ],
  pt_n: [
    _ps('Psalm 141 – Modlitwa wieczorna',
      'Panie, wołam do Ciebie, spiesz się ku mnie!\n\n' +
      'Niechaj moja modlitwa jak kadzidło unosi się przed Tobą,\n' +
      'podniesienie moich rąk jak ofiara wieczorna!')
  ],
  sob_j: [
    _ps('Psalm 92 – Sławić Pana',
      'Dobrze jest dziękować Panu\n' +
      'i śpiewać Twojemu imieniu, o Najwyższy.\n\n' +
      'Prawy jak palma rozkwitnie,\n' +
      'wyrośnie jak cedr na Libanie.')
  ],
  sob_n: [
    _ps('Psalm 132 – Przymierze z Dawidem',
      'Wspomnij, Panie, na Dawida\n' +
      'i na wszelkie jego utrapienia!\n\n' +
      'Pan przysiągł Dawidowi niezłomną przysięgę:\n' +
      '«Potomka zrodzonego z twego łona posadzę na twoim tronie».')
  ]
};

// ─── Prośby ──────────────────────────────────────────────────────────────────
const PR = {
  // Okres Zwykły
  ndz_j: _pr('Prośby poranne', 'Módlmy się do Boga, Ojca naszego Pana Jezusa Chrystusa:', [
    _w('Panie, przebacz nam winy popełnione w nocy.', '℟ Wysłuchaj nas, Panie.'),
    _w('Spraw, abyśmy w tym dniu głosili Twoje miłosierdzie.', '℟ Wysłuchaj nas, Panie.'),
    _w('Chroń wszystkich, którzy wyruszają w podróż.', '℟ Wysłuchaj nas, Panie.'),
    _w('Daj łaskę wytrwania wszystkim pracującym dla Ciebie.', '℟ Wysłuchaj nas, Panie.')
  ]),
  ndz_n: _pr('Prośby wieczorne', 'Uwielbiając Boga, który jest bogaty w miłosierdzie, módlmy się:', [
    _w('Panie, dziękujemy za łaski tego dnia.', '℟ Panie, usłysz naszą modlitwę.'),
    _w('Otocz opieką chorych i samotnych.', '℟ Panie, usłysz naszą modlitwę.'),
    _w('Daj pokój sercom znękanym troską.', '℟ Panie, usłysz naszą modlitwę.'),
    _w('Przyjmij dusze tych, którzy dziś odeszli do Ciebie.', '℟ Panie, usłysz naszą modlitwę.')
  ]),
  pow_j: _pr('Prośby poranne', 'Z ufnością zwracamy się do Boga, który nas kocha:', [
    _w('Panie, niechaj praca tego dnia przynosi owoce dla Twojego królestwa.', '℟ Panie, wysłuchaj nas.'),
    _w('Daj mądrość i roztropność tym, którzy sprawują władzę.', '℟ Panie, wysłuchaj nas.'),
    _w('Pociesz tych, których ciągnie do siebie smutek i zwątpienie.', '℟ Panie, wysłuchaj nas.'),
    _w('Otwórz nasze serca na potrzebujących braci.', '℟ Panie, wysłuchaj nas.')
  ]),
  pow_n: _pr('Prośby wieczorne', 'Módlmy się do Pana, który jest naszą ucieczką:', [
    _w('Niech ten wieczór przyniesie pokój naszym rodzinom.', '℟ Panie, usłysz nas.'),
    _w('Ochraniaj dzieci i młodzież od wszelkiego zła.', '℟ Panie, usłysz nas.'),
    _w('Pociesz tych, którzy przeżywają żałobę i samotność.', '℟ Panie, usłysz nas.'),
    _w('Daj wieczny odpoczynek wszystkim naszym zmarłym.', '℟ Panie, usłysz nas.')
  ]),
  wt_j: _pr('Prośby poranne', 'Wysławiajmy Boga Ojca przez Jezusa Chrystusa:', [
    _w('Naucz nas, Panie, szukać Ciebie w każdej chwili dnia.', '℟ Boże, wysłuchaj nas.'),
    _w('Wspieraj ludzi szukających pracy i chleba.', '℟ Boże, wysłuchaj nas.'),
    _w('Daj naszym kapłanom gorliwość apostolską.', '℟ Boże, wysłuchaj nas.'),
    _w('Otwórz nasze serca na wezwanie do nawrócenia.', '℟ Boże, wysłuchaj nas.')
  ]),
  wt_n: _pr('Prośby wieczorne', 'Polecamy Bogu wszystkie sprawy tego dnia:', [
    _w('Dziękujemy za dar każdego dobrego spotkania z dziś.', '℟ Chwal duszę moją Pana.'),
    _w('Wspieraj misjonarzy głoszących Ewangelię w dalekich krajach.', '℟ Chwal duszę moją Pana.'),
    _w('Otocz opieką bezdomnych i głodnych tej nocy.', '℟ Chwal duszę moją Pana.'),
    _w('Prowadź ku sobie wszystkich błądzących.', '℟ Chwal duszę moją Pana.')
  ]),
  sr_j: _pr('Prośby poranne', 'Módlmy się do Chrystusa, drogi, prawdy i życia:', [
    _w('Prowadź nas drogami Twojej Ewangelii.', '℟ Panie, zmiłuj się nad nami.'),
    _w('Wspieraj wszystkich szukających prawdy.', '℟ Panie, zmiłuj się nad nami.'),
    _w('Daj nam odwagę w głoszeniu wiary.', '℟ Panie, zmiłuj się nad nami.'),
    _w('Ochraniaj naszą parafię i wspólnotę.', '℟ Panie, zmiłuj się nad nami.')
  ]),
  sr_n: _pr('Prośby wieczorne', 'Módlmy się do Pana wieczorną modlitwą Kościoła:', [
    _w('Przebacz nam wszelkie zaniedbania wobec Ciebie i bliźnich.', '℟ Boże, chwal Cię dusza moja.'),
    _w('Błogosław wszystkim, którzy nam dziś wyświadczyli dobro.', '℟ Boże, chwal Cię dusza moja.'),
    _w('Otocz opieką bezdomnych i głodnych tej nocy.', '℟ Boże, chwal Cię dusza moja.'),
    _w('Prowadź ku sobie wszystkich błądzących.', '℟ Boże, chwal Cię dusza moja.')
  ]),
  czw_j: _pr('Prośby poranne', 'Uwielbiajmy Boga, wspominając Jego cuda:', [
    _w('Panie, umocnij nas w wierze i nadziei na ten dzień.', '℟ Panie, zmiłuj się.'),
    _w('Daj łaskę wytrwałości wszystkim, którzy są w pokusie.', '℟ Panie, zmiłuj się.'),
    _w('Błogosław naszym rodzinom i domom.', '℟ Panie, zmiłuj się.'),
    _w('Otwórz nasze oczy na Twoje działanie w świecie.', '℟ Panie, zmiłuj się.')
  ]),
  czw_n: _pr('Prośby wieczorne', 'Składając Panu wieczorną ofiarę modlitwy, mówimy:', [
    _w('Panie, przyjmij dzięki za każdą łaskę tego dnia.', '℟ Niech Cię chwali moja dusza.'),
    _w('Bądź blisko wszystkich, którzy cierpią fizycznie lub duchowo.', '℟ Niech Cię chwali moja dusza.'),
    _w('Wspieraj naszą parafię w jej misji i posłudze.', '℟ Niech Cię chwali moja dusza.'),
    _w('Wprowadź do wiecznej radości wszystkich naszych umarłych.', '℟ Niech Cię chwali moja dusza.')
  ]),
  pt_j: _pr('Prośby poranne (Piątek – pamiątka Męki Pańskiej)', 'W piątek wspominamy Mękę Chrystusa. Módlmy się:', [
    _w('Chryste, który z miłości do nas przyjąłeś krzyż – naucz nas miłować bezinteresownie.', '℟ Chryste, usłysz nas.'),
    _w('Przez Twoje rany – ulecz wszystkich chorych.', '℟ Chryste, usłysz nas.'),
    _w('Przez Twoją śmierć – daj życie wieczne wszystkim umarłym.', '℟ Chryste, usłysz nas.'),
    _w('Przez Twoje zmartwychwstanie – daj nam nadzieję w każdym utrapieniu.', '℟ Chryste, usłysz nas.')
  ]),
  pt_n: _pr('Prośby wieczorne (Piątek)', 'Polecamy Bogu Ojcu przez Chrystusa ukrzyżowanego:', [
    _w('Dzięki Ci, Panie, za krzyż, który jest naszą nadzieją.', '℟ Chwała Tobie, Chryste.'),
    _w('Zmiłuj się nad wszystkimi grzesznikami.', '℟ Chwała Tobie, Chryste.'),
    _w('Umocnij tych, którzy prześladowani są dla wiary.', '℟ Chwała Tobie, Chryste.'),
    _w('Przyjmij do wiecznej chwały wszystkich, którzy dziś odeszli.', '℟ Chwała Tobie, Chryste.')
  ]),
  sob_j: _pr('Prośby poranne (Sobota – ku czci NMP)', 'W sobotę szczególnie polecamy się Matce Bożej:', [
    _w('Maryjo, módl się za nami grzesznymi.', '℟ Teraz i w godzinę śmierci.'),
    _w('Prowadź nas do swego Syna Jezusa.', '℟ Teraz i w godzinę śmierci.'),
    _w('Otaczaj troską macierzyńską naszą parafię.', '℟ Teraz i w godzinę śmierci.'),
    _w('Wyproś nam łaskę wytrwania w dobrym.', '℟ Teraz i w godzinę śmierci.')
  ]),
  sob_n: _pr('Prośby wieczorne (Sobota)', 'Wieczorną modlitwą kończymy tydzień:', [
    _w('Panie, przyjmij nasze dziękczynienie za cały tydzień.', '℟ Chwała Tobie, Panie.'),
    _w('Przygotuj nasze serca na niedzielną Eucharystię.', '℟ Chwała Tobie, Panie.'),
    _w('Błogosław wszystkim rodzinom gromadzącym się jutro na Mszy.', '℟ Chwała Tobie, Panie.'),
    _w('Daj wieczny spoczynek wszystkim, których kochamy a odeszli.', '℟ Chwała Tobie, Panie.')
  ]),
  // Adwent
  A_ndz_j: _pr('Prośby adwentowe', 'W oczekiwaniu na przyjście Pana, módlmy się:', [
    _w('Przyjdź, Panie Jezu, i oczyść nasze serca ze wszystkiego, co Cię zasmuca.', '℟ Przyjdź, Panie Jezu.'),
    _w('Przygotuj drogi w naszych sercach na Twoje przyjście.', '℟ Przyjdź, Panie Jezu.'),
    _w('Naucz nas czuwać i modlić się w tym czasie oczekiwania.', '℟ Przyjdź, Panie Jezu.'),
    _w('Daj nam radość oczekiwania na Twoje narodziny.', '℟ Przyjdź, Panie Jezu.')
  ]),
  A_ndz_n: _pr('Prośby adwentowe wieczorne', 'Oczekując przyjścia Pana, powierzamy Mu nasze prośby:', [
    _w('Panie, przebacz nam nasze winy.', '℟ Maranatha – przyjdź, Panie Jezu.'),
    _w('Przyjdź do wszystkich, którzy stracili nadzieję.', '℟ Maranatha – przyjdź, Panie Jezu.'),
    _w('Przyjdź i ulecz chorych ciałem i duchem.', '℟ Maranatha – przyjdź, Panie Jezu.'),
    _w('Przyjdź i daj pokój naszym sercom i całemu światu.', '℟ Maranatha – przyjdź, Panie Jezu.')
  ]),
  A_pow_j: _pr('Prośby adwentowe poranne', 'Módlmy się do Pana, który ma przyjść:', [
    _w('Panie, uczyń nas godnymi oczekiwania na Ciebie.', '℟ Przyjdź, Panie, nie zwlekaj.'),
    _w('Daj nam wytrwałość w codziennej wierności.', '℟ Przyjdź, Panie, nie zwlekaj.'),
    _w('Otwórz nasze oczy na znaki Twojej obecności.', '℟ Przyjdź, Panie, nie zwlekaj.'),
    _w('Spraw, byśmy przygotowali Ci drogę przez nasze dobre czyny.', '℟ Przyjdź, Panie, nie zwlekaj.')
  ]),
  A_pow_n: _pr('Prośby adwentowe wieczorne', 'Z oczekiwaniem w sercu, modlimy się:', [
    _w('Dziękujemy za czas Adwentu – czas nawrócenia i odnowy.', '℟ Niechaj Twoje królestwo przyjdzie.'),
    _w('Chroń nas przed pośpiechem i powierzchownością.', '℟ Niechaj Twoje królestwo przyjdzie.'),
    _w('Spraw, by nasze serca były pełne cichej radości oczekiwania.', '℟ Niechaj Twoje królestwo przyjdzie.'),
    _w('Przyjmij do swojego królestwa wszystkich naszych umarłych.', '℟ Niechaj Twoje królestwo przyjdzie.')
  ]),
  A_wt_j: _pr('Prośby adwentowe poranne', 'Modląc się z Kościołem w Adwencie, prosimy:', [
    _w('Panie, oczyść nasze serca w tym czasie oczekiwania.', '℟ Panie, usłysz nas.'),
    _w('Spraw, byśmy z radością nieśli dobrą nowinę.', '℟ Panie, usłysz nas.'),
    _w('Daj łaskę nawrócenia wszystkim oddalonym od Ciebie.', '℟ Panie, usłysz nas.'),
    _w('Otwórz nasze oczy na potrzebujących wokół nas.', '℟ Panie, usłysz nas.')
  ]),
  A_wt_n: _pr('Prośby adwentowe wieczorne', 'Powierzamy Panu nasze prośby w wieczornej ciszy Adwentu:', [
    _w('Panie, pomóż nam przeżyć Adwent jako czas prawdziwego nawrócenia.', '℟ Przyjdź, Królu wieczności.'),
    _w('Wyproś nam łaskę prostoty i pokory.', '℟ Przyjdź, Królu wieczności.'),
    _w('Dotknij swoją łaską serc oziębłych i zranionych.', '℟ Przyjdź, Królu wieczności.'),
    _w('Daj pokój wieczny wszystkim naszym umarłym.', '℟ Przyjdź, Królu wieczności.')
  ]),
  A_sr_j: _pr('Prośby adwentowe', 'Módlmy się w czasie oczekiwania:', [
    _w('Przygotuj, Panie, drogi Twojego przyjścia w naszych sercach.', '℟ Przyjdź, Panie Jezu.'),
    _w('Daj nam siłę do pokuty i nawrócenia.', '℟ Przyjdź, Panie Jezu.'),
    _w('Otocz opieką naszą wspólnotę parafialną.', '℟ Przyjdź, Panie Jezu.'),
    _w('Daj odpocznienie wieczne naszym umarłym.', '℟ Przyjdź, Panie Jezu.')
  ]),
  A_sr_n: _pr('Prośby wieczorne', 'Wieczorną modlitwą w Adwencie:', [
    _w('Panie, przebacz nam nasze grzechy zaniedbania.', '℟ Maranatha, przyjdź Panie Jezu.'),
    _w('Daj pokój naszym sercom i rodzinom.', '℟ Maranatha, przyjdź Panie Jezu.'),
    _w('Chroń nas tej nocy od wszelkiego zła.', '℟ Maranatha, przyjdź Panie Jezu.'),
    _w('Przyjmij do chwały wszystkich naszych umarłych.', '℟ Maranatha, przyjdź Panie Jezu.')
  ]),
  A_czw_j: _pr('Prośby adwentowe', 'Módlmy się z Kościołem oczekującym przyjścia Chrystusa:', [
    _w('Panie, rozbudź w nas ducha modlitwy i czuwania.', '℟ Przyjdź, Panie.'),
    _w('Daj nam radość z głoszenia Twojej Ewangelii.', '℟ Przyjdź, Panie.'),
    _w('Ochraniaj naszych bliskich w drodze do Ciebie.', '℟ Przyjdź, Panie.'),
    _w('Prowadź ku sobie wszystkich poszukujących Boga.', '℟ Przyjdź, Panie.')
  ]),
  A_czw_n: _pr('Prośby wieczorne', 'Powierzamy się Panu przed nocnym spoczynkiem:', [
    _w('Dziękujemy za wszystkie łaski tego dnia.', '℟ Panie, wysłuchaj nas.'),
    _w('Spraw, abyśmy dziś w nocy spoczęli w Twojej miłości.', '℟ Panie, wysłuchaj nas.'),
    _w('Pociesz wszystkich, którzy tej nocy cierpią.', '℟ Panie, wysłuchaj nas.'),
    _w('Daj wieczny pokój naszym umarłym.', '℟ Panie, wysłuchaj nas.')
  ]),
  A_pt_j: _pr('Prośby adwentowe (Piątek)', 'Wspominając Mękę Pańską, módlmy się:', [
    _w('Chryste, który cierpiałeś za nas – przyjdź i ulecz nasze rany.', '℟ Przyjdź, Panie, zbaw nas.'),
    _w('Przez Twoją śmierć – otwórz bramy raju dla naszych umarłych.', '℟ Przyjdź, Panie, zbaw nas.'),
    _w('Przez Twoje zwycięstwo – dodaj nam odwagi w cierpieniu.', '℟ Przyjdź, Panie, zbaw nas.'),
    _w('Przez Twój Adwent – przygotuj nas na spotkanie z Tobą.', '℟ Przyjdź, Panie, zbaw nas.')
  ]),
  A_pt_n: _pr('Prośby wieczorne (Piątek adwentowy)', 'Składamy Panu wieczorną ofiarę uwielbienia:', [
    _w('Panie, za dar Twojej Paschy – dziękujemy.', '℟ Alleluja, przyjdź Panie Jezu.'),
    _w('Za znak Twojego Krzyża, który jest naszą nadzieją – chwała Tobie.', '℟ Alleluja, przyjdź Panie Jezu.'),
    _w('Niechaj ci, którzy dziś cierpią, doświadczą Twojej bliskości.', '℟ Alleluja, przyjdź Panie Jezu.'),
    _w('Daj pokój wieczny wszystkim, którzy odeszli w tym tygodniu.', '℟ Alleluja, przyjdź Panie Jezu.')
  ]),
  A_sob_j: _pr('Prośby adwentowe sobotnie', 'W sobotę, pod opieką Maryi, módlmy się:', [
    _w('Maryjo, ty, która czekałaś na Zbawiciela – ucz nas cierpliwości.', '℟ Módl się za nami, Maryjo.'),
    _w('Twój Syn ma przyjść w chwale – przygotuj nam serca.', '℟ Módl się za nami, Maryjo.'),
    _w('Prowadź nas ku jutrzejszej niedzielnej Eucharystii.', '℟ Módl się za nami, Maryjo.'),
    _w('Wyproś łaskę dobrej śmierci dla naszych bliskich.', '℟ Módl się za nami, Maryjo.')
  ]),
  A_sob_n: _pr('Prośby wieczorne sobotnie', 'Kończąc adwentowy tydzień, módlmy się:', [
    _w('Panie, przyjmij dziękczynienie za każdy adwentowy dzień.', '℟ Przyjdź, Królu łaski.'),
    _w('Przygotuj nasze serca na jutrzejszą niedzielę.', '℟ Przyjdź, Królu łaski.'),
    _w('Błogosław naszym rodzinom w oczekiwaniu na Boże Narodzenie.', '℟ Przyjdź, Królu łaski.'),
    _w('Daj odpoczynek wieczny wszystkim naszym umarłym.', '℟ Przyjdź, Królu łaski.')
  ])
};

// ─── Dane struktury tygodniowej ──────────────────────────────────────────────
const TYDZIEN_ZWYKLY_1 = {
  niedziela:   _dzien(H.ZwJ_ndz, P.ndz_j, PR.ndz_j, H.ZwN_ndz, P.ndz_n, PR.ndz_n),
  poniedzialek: _dzien(H.ZwJ_pow, P.pow_j, PR.pow_j, H.ZwN_pow, P.pow_n, PR.pow_n),
  wtorek:      _dzien(H.ZwJ_wt,  P.wt_j,  PR.wt_j,  H.ZwN_wt,  P.wt_n,  PR.wt_n),
  sroda:       _dzien(H.ZwJ_sr,  P.sr_j,  PR.sr_j,  H.ZwN_sr,  P.sr_n,  PR.sr_n),
  czwartek:    _dzien(H.ZwJ_czw, P.czw_j, PR.czw_j, H.ZwN_czw, P.czw_n, PR.czw_n),
  piatek:      _dzien(H.ZwJ_pt,  P.pt_j,  PR.pt_j,  H.ZwN_pt,  P.pt_n,  PR.pt_n),
  sobota:      _dzien(H.ZwJ_sob, P.sob_j, PR.sob_j, H.ZwN_sob, P.sob_n, PR.sob_n)
};

const TYDZIEN_ADWENT_1 = {
  niedziela:   _dzien(H.AdvJ_ndz, PA.ndz_j, PR.A_ndz_j, H.AdvN_ndz, PA.ndz_n, PR.A_ndz_n),
  poniedzialek: _dzien(H.AdvJ_pow, PA.pow_j, PR.A_pow_j, H.AdvN_pow, PA.pow_n, PR.A_pow_n),
  wtorek:      _dzien(H.AdvJ_poz, PA.wt_j,  PR.A_wt_j,  H.AdvN_poz, PA.wt_n,  PR.A_wt_n),
  sroda:       _dzien(H.AdvJ_ndz, PA.sr_j,  PR.A_sr_j,  H.AdvN_ndz, PA.sr_n,  PR.A_sr_n),
  czwartek:    _dzien(H.AdvJ_pow, PA.czw_j, PR.A_czw_j, H.AdvN_pow, PA.czw_n, PR.A_czw_n),
  piatek:      _dzien(H.AdvJ_poz, PA.pt_j,  PR.A_pt_j,  H.AdvN_poz, PA.pt_n,  PR.A_pt_n),
  sobota:      _dzien(H.AdvJ_sob, PA.sob_j, PR.A_sob_j, H.AdvN_sob, PA.sob_n, PR.A_sob_n)
};

// Tygodnie II–IV jako kopia I z oznaczeniem tygodnia
function klonujTyp(base, tydzienNum) {
  const klon = JSON.parse(JSON.stringify(base));
  if (tydzienNum === 1) return klon;
  const cyfry = ['','I','II','III','IV'];
  Object.keys(klon).forEach(function(dzien) {
    ['jutrznia','nieszpory'].forEach(function(hora) {
      const h = klon[dzien][hora];
      if (h && h.psalmy) {
        h.psalmy = h.psalmy.map(function(ps) {
          return Object.assign({}, ps, { label: ps.label + ' [Tydz. ' + cyfry[tydzienNum] + ']' });
        });
      }
    });
  });
  return klon;
}

window.BREWIARZ_DATA = {
  zwykly: {
    1: TYDZIEN_ZWYKLY_1,
    2: klonujTyp(TYDZIEN_ZWYKLY_1, 2),
    3: klonujTyp(TYDZIEN_ZWYKLY_1, 3),
    4: klonujTyp(TYDZIEN_ZWYKLY_1, 4)
  },
  adwent: {
    1: TYDZIEN_ADWENT_1,
    2: klonujTyp(TYDZIEN_ADWENT_1, 2),
    3: klonujTyp(TYDZIEN_ADWENT_1, 3),
    4: klonujTyp(TYDZIEN_ADWENT_1, 4)
  }
};

// ─── Silnik brewiarza ─────────────────────────────────────────────────────────
window.BREWIARZ = {

  /** Oblicza tydzień psałterza (1–4) i nazwę okresu dla danej daty */
  obliczTydzien: function(data) {
    var y = data.getFullYear();
    var a = y%19, b = Math.floor(y/100), c = y%100;
    var d = Math.floor(b/4), e = b%4;
    var f = Math.floor((b+8)/25), g = Math.floor((b-f+1)/3);
    var h = (19*a+b-d-g+15)%30;
    var i = Math.floor(c/4), k = c%4;
    var l = (32+2*e+2*i-h-k)%7;
    var m = Math.floor((a+11*h+22*l)/451);
    var month = Math.floor((h+l-7*m+114)/31);
    var day = ((h+l-7*m+114)%31)+1;
    var easter = new Date(y, month-1, day);

    function addDays(dt, n) { var r = new Date(dt); r.setDate(r.getDate()+n); return r; }

    var christmas = new Date(y, 11, 25);
    var epiphany  = new Date(y, 0, 6);
    var ashWed    = addDays(easter, -46);
    var pentecost = addDays(easter, 49);
    var palmSun   = addDays(easter, -7);

    // Adwent
    var xmasDay = christmas.getDay();
    var advent1 = addDays(christmas, -(xmasDay===0 ? 28 : 21+xmasDay));
    if (data >= advent1 && data < christmas) {
      var wAdv = Math.floor((data - advent1) / 604800000);
      return { okres: 'adwent', tydzien: (wAdv%4)+1, nazwaOkresu: 'Adwent' };
    }

    // Okres Wielkanocny
    if (data >= easter && data <= pentecost) {
      var wEast = Math.floor((data - easter) / 604800000);
      return { okres: 'zwykly', tydzien: (wEast%4)+1, nazwaOkresu: 'Okres Wielkanocny' };
    }

    // Wielki Post
    if (data >= ashWed && data < palmSun) {
      var wLent = Math.floor((data - ashWed) / 604800000);
      return { okres: 'zwykly', tydzien: (wLent%4)+1, nazwaOkresu: 'Wielki Post' };
    }

    // Okres Zwykły (przed WP)
    var baptism = addDays(epiphany, (7 - epiphany.getDay()) % 7 || 7);
    if (data >= baptism && data < ashWed) {
      var wOrd = Math.floor((data - baptism) / 604800000) + 1;
      return { okres: 'zwykly', tydzien: ((wOrd-1)%4)+1, nazwaOkresu: 'Okres Zwykły', tydzienOrd: wOrd+1 };
    }

    // Okres Zwykły (po Zesłaniu)
    if (data > pentecost) {
      // Tydzień 9 = pierwsza pełna niedziela po Pięćdziesiątnicy (w przybliżeniu)
      var wPost = Math.floor((data - pentecost) / 604800000) + 9;
      return { okres: 'zwykly', tydzien: ((wPost-1)%4)+1, nazwaOkresu: 'Okres Zwykły', tydzienOrd: wPost };
    }

    return { okres: 'zwykly', tydzien: 1, nazwaOkresu: 'Okres Zwykły' };
  },

  /** Pobiera dane dla danej daty i horarium */
  pobierzDane: function(data, hora) {
    var info = this.obliczTydzien(data);
    var dni = ['niedziela','poniedzialek','wtorek','sroda','czwartek','piatek','sobota'];
    var dzien = dni[data.getDay()];
    var db = window.BREWIARZ_DATA[info.okres] || window.BREWIARZ_DATA.zwykly;
    var tyg = db[info.tydzien] || db[1];
    if (!tyg || !tyg[dzien]) return null;
    return tyg[dzien][hora] || null;
  },

  /** Opis tygodnia psałterza */
  opisTygodnia: function(data) {
    var info = this.obliczTydzien(data);
    var rz = ['','I','II','III','IV'];
    return info.nazwaOkresu + ' \u00b7 Tydzień ' + rz[info.tydzien] + ' Psałterza';
  },

  /** Nazwa dnia tygodnia (klucz) */
  kluczDnia: function(data) {
    return ['niedziela','poniedzialek','wtorek','sroda','czwartek','piatek','sobota'][data.getDay()];
  }
};
