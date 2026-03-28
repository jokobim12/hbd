/**
 * ============================================================
 *  BIRTHDAY VISUAL NOVEL — Interactive Script
 * ============================================================
 *
 *  CARA EDIT:
 *  - Untuk mengganti dialog / pilihan → edit array `dialogData` di bawah
 *  - Untuk mengganti gambar karakter   → ganti path di `CHARACTERS`
 *  - Untuk menambah pesan romantis    → edit array `romanticMessages`
 *  - Untuk mengubah kecepatan typing  → ubah `TYPING_SPEED`
 *
 * ============================================================
 */

// === KECEPATAN TYPING (ms per karakter) ===
const TYPING_SPEED = 45;

// === GAMBAR KARAKTER — ganti path sesuai gambar kamu ===
const CHARACTERS = {
  normal: './image/normal.png',
  shy:    './image/normal.png',
  happy:  './image/happy.png',
};

// === PESAN SEMANGAT untuk tombol hati ❤️ — tambah sesukamu ===
const romanticMessages = [
  "kamu lebih kuat dari yang kamu kira.",
  "Gak semua orang bisa nahan kayak kamu. Salut sih.",
  "Istirahat dulu gak papa. kamu perlu itu keknya.",
  "kamu gak sendirian. ada si anu kann.",
  "Yang kamu laluin itu berat, dan kamu masih di sini. jujur itu gege banget sihh",
  "Hari ini berat? Yaudah besok coba lagi. klo besok berat, coba lagi kebesokannya ",
  "Kamu layak buat bahagia. Serius inii.",
  "Jangan terlalu keras sama diri sendiri.",
  "Gak usah bandingin sama orang.",
];

/**
 * ============================================================
 *  DATA DIALOG — Edit di sini untuk mengubah cerita
 * ============================================================
 *
 *  POV: NPC = kamu (yang kasih hadiah / teman)
 *       User yang buka web = teman yang ulang tahun
 *
 *  Format:
 *  {
 *    text: "Dialog yang ditampilkan",
 *    expression: "normal" | "shy" | "happy",
 *    choices: [
 *      {
 *        text: "Teks pilihan",
 *        response: "Balasan karakter",
 *        expression: "shy"
 *      }
 *    ]
 *  }
 */
const dialogData = [
  // --- Pembuka ---
  {
    text: "Haii kamu Erfa yaa? salam kenal, aku Farah Karakter dari masa depan yang dikirim seseorang untuk kamu",
    expression: "happy",
  },
  {
    text: "Santai, ini bukan web aneh-aneh. aku cuma mau ngomong sesuatu.",
    expression: "normal",
  },
  {
    text: "Tapi sebelum itu, jawab dulu. beberapa pertanyaan yang bakal ku kasih.",
    expression: "normal",
  },

  // --- Pertanyaan 1: Kabar ---
  {
    text: "Gimana kabar kamu akhir-akhir ini? Jangan jawab \"baik\" doang.",
    expression: "normal",
    choices: [
      {
        text: "Capek banget sih jujur",
        response: "aku tau. Kamu tipe yang suka simpen semuanya sendiri. Tapi di sini kamu boleh jujur, gak semuanya bisa di pendem sendiri. kadang harus di pendem bareng-bareng.",
        expression: "normal",
      },
      {
        text: "Biasa aja, gitu-gitu aja",
        response: "\"Gitu-gitu aja\" masa sii boong banget siii",
        expression: "normal",
      },
      {
        text: "Lumayan baik kok",
        response: "Boong yaaa, gamungkin lumayan sii",
        expression: "happy",
      },
    ],
  },

  // --- Transisi ---
  {
    text: "aku tau beberapa akhir ini keknya gak gampang buat kamu.",
    expression: "normal",
  },
  {
    text: "Masalah keluarga, urusan hati, tekanan dari sana-sini... kamu nanggung banyak hal.",
    expression: "normal",
  },
  {
    text: "tapi kamu tetep bisa kelihatan baik aja itu sebenernya josjis bangett",
    expression: "happy",
  },

  // --- Pertanyaan 2: Soal beban ---
  {
    text: "Kalau boleh nanya, hal apa yang paling berat buat kamu sekarang?",
    expression: "normal",
    choices: [
      {
        text: "Masalah keluarga",
        response: "Keluarga emang ribet. Kadang orang terdekat itu malah yang paling ngerusak suasana hati sii dan yang bikin jengkel bangett jujur. Tapi bawa santai aja",
        expression: "normal",
      },
      {
        text: "Urusan Percintaan",
        response: "Klo urusan perasaan hati emang gak bisa di paksa sih. tapi mending gosah mikirin cinta-cintaan dulu klo kataku mah. fokus kuliah aja siapa tau nanti dapet cowo yang josjiss",
        expression: "normal",
      },
      {
        text: "Capek sama hidup secara umum",
        response: "klo umum itu luas sihh, tapii.....",
        expression: "normal",
      },
    ],
  },

  // --- Dialog semangat ---
  {
    text: "aku gak bakal bilang \"semuanya bakal baik-baik aja\" karena aku gak tau masalahmu tu kek gimana ya. setiap orang punya masalah masing-masing dan masalahmu klo aku yang ngalamin belom tentu sekuat kamu",
    expression: "normal",
  },
  {
    text: "tapi yang aku pasti tau itu, kamu masih kuat sampe sekarang sudah termasuk josjiss ko",
    expression: "normal",
  },
  {
    text: "Itu udah cukup hebat siii....",
    expression: "happy",
  },

  // --- Pertanyaan 3: Soal diri sendiri ---
  {
    text: "Satu lagi. Menurutmu, kamu orang yang kayak gimana?",
    expression: "normal",
    choices: [
      {
        text: "Biasa aja, gak ada yang spesial",
        response: "Salah. Kamu itu \"Spesial\" buat orang-orang yang perlu kamu. angjayy kelasss ",
        expression: "happy",
      },
      {
        text: "Agak Berantakan",
        response: "Sebenernya klo masalah itu, jangan yang terlalu dipikirin siii. klo kita santai-santai aja nikmatin hidup, ngelakuin hal-hal yang kita sukai tanpa meduliin seberapa berantakan hidup, nanti bakal ga kerasa koo...",
        expression: "normal",
      },
      {
        text: "Gatau juga",
        response: "Emmm, cewe banget jawabannya. ga tau apa ga mau ngasih tauu",
        expression: "normal",
      },
    ],
  },

  // --- Menuju ending ---
  {
    text: "Oke, aku gak mau ceramah kepanjangan.",
    expression: "happy",
  },
  {
    text: "Intinya, aku cuma mau bilang: jan sedih-sedih mulu, dimasa depan kamu ga semenyedihkan ituu 🙂‍↕️",
    expression: "normal",
  },
  {
    text: "Kamu boleh capek, boleh nangis, boleh ngeluh. Tapi jangan lupa makan 🤭.",
    expression: "normal",
  },
  {
    text: "Oh iya kamu ulang tahun yaa. selamat ulang tahun yaaa...🙂‍↕️",
    expression: "happy",
  },
  {
    text: "Hepi Bes Dayyyy....😙🥳",
    expression: "happy",
  },
  {
    text: "Selamat Ulang Tahun yaa! Semoga panjang umur, sehat selalu, dan semua yang kamu semogakan bisa tercapai di tahun ini. gada kado siii, hehe",
    expression: "happy",
    triggerConfetti: true,
  },
  {
    text: "Dari temen yang kadang nyebelin, dan akan tetap nyebelin sampai kapanpun ituu 😋.",
    expression: "happy",
  },
  {
    text: "Ehh tunggu, sebelum aku pergi...",
    expression: "normal",
  },
  {
    text: "Kamu ada yang mau ditanyain atau mau ngobrol lebih lanjut gak?",
    expression: "normal",
    choices: [
      {
        text: "Chat WA Aku",
        link: "https://wa.me/6282252359194",
      },
      {
        text: "DM Instagram Aku",
        link: "https://instagram.com/@errr.ynn",
      },
      {
        text: "Atau Mau Main Api TikTok",
        link: "https://tiktok.com/@paa_a__",
      },
    ],
  },
];


// ============================================================
//  STATE
// ============================================================
let currentDialogIndex = 0;
let isTyping = false;
let typingTimeout = null;
let currentFullText = '';
let isShowingResponse = false; // true saat sedang menampilkan response dari pilihan

// ============================================================
//  DOM ELEMENTS
// ============================================================
const $opening     = document.getElementById('scene-opening');
const $vn          = document.getElementById('scene-vn');
const $ending      = document.getElementById('scene-ending');
const $charImg     = document.getElementById('characterImg');
const $dialogText  = document.getElementById('dialogText');
const $choices     = document.getElementById('choicesContainer');
const $nextBtn     = document.getElementById('btnNext');
const $nextBtnWrap = document.getElementById('nextBtnContainer');
const $romanticPop = document.getElementById('romanticPopup');
const $romanticTxt = document.getElementById('romanticText');

// ============================================================
//  INIT — background petals
// ============================================================
(function initPetals() {
  const container = document.getElementById('petalsContainer');
  const symbols = ['🌸', '✿', '❀', '💮', '🩷'];
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left     = Math.random() * 100 + 'vw';
    petal.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
    petal.style.opacity  = 0.15 + Math.random() * 0.25;
    animatePetal(petal);
    container.appendChild(petal);
  }
  function animatePetal(el) {
    const dur = 8000 + Math.random() * 12000;
    const startX = Math.random() * 100;
    el.style.left = startX + 'vw';
    el.style.top  = '-5vh';
    el.animate([
      { transform: 'translateY(0) rotate(0deg)',     left: startX + 'vw' },
      { transform: 'translateY(110vh) rotate(360deg)', left: (startX + (Math.random() * 20 - 10)) + 'vw' },
    ], { duration: dur, easing: 'linear' }).onfinish = () => animatePetal(el);
  }
})();

// ============================================================
//  SCENE TRANSITIONS
// ============================================================
function switchScene(from, to) {
  from.classList.remove('active');
  setTimeout(() => to.classList.add('active'), 100);
}

// ============================================================
//  START GAME
// ============================================================
function startGame() {
  switchScene($opening, $vn);
  currentDialogIndex = 0;
  setTimeout(() => showDialog(dialogData[0]), 500);
}

// ============================================================
//  SHOW DIALOG
// ============================================================
function showDialog(data) {
  // Update character expression
  const expr = data.expression || 'normal';
  $charImg.src = CHARACTERS[expr] || CHARACTERS.normal;

  if (data.triggerConfetti) {
    launchConfetti();
  }

  // Hide choices & next button
  $choices.classList.add('hidden');
  $choices.innerHTML = '';
  $nextBtn.classList.add('hidden');
  isShowingResponse = false; // reset flag

  // Type the text
  typeText(data.text, () => {
    if (data.choices && data.choices.length > 0) {
      showChoices(data.choices);
    } else {
      $nextBtn.classList.remove('hidden');
    }
  });
}

// ============================================================
//  TYPING SOUND EFFECT (Web Audio API — no file needed)
// ============================================================
let typingAudioCtx = null;

function playTypingSound() {
  try {
    if (!typingAudioCtx) {
      typingAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = typingAudioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Low frequency + quick pitch drop = soft "blup" sound
    const baseFreq = 280 + Math.random() * 40;
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.45, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) { /* silently fail */ }
}

// ============================================================
//  TYPING EFFECT
// ============================================================
function typeText(text, onComplete) {
  if (typingTimeout) clearTimeout(typingTimeout);
  isTyping = true;
  currentFullText = text;
  $dialogText.innerHTML = '';
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      $dialogText.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor"></span>';
      // Play sound for non-space characters
      if (text[i] !== ' ') {
        playTypingSound();
      }
      i++;
      typingTimeout = setTimeout(typeChar, TYPING_SPEED);
    } else {
      $dialogText.innerHTML = text;
      isTyping = false;
      if (onComplete) onComplete();
    }
  }
  typeChar();
}

// Skip typing when clicking on dialog
document.querySelector('.dialog-box')?.addEventListener('click', (e) => {
  if (e.target.closest('.choice-btn') || e.target.closest('#btnNext')) return;
  if (isTyping) {
    clearTimeout(typingTimeout);
    $dialogText.innerHTML = currentFullText;
    isTyping = false;
    
    // Jangan tampilkan choices lagi kalau sedang menampilkan response
    if (isShowingResponse) {
      $nextBtn.classList.remove('hidden');
    } else {
      const data = dialogData[currentDialogIndex];
      if (data.choices && data.choices.length > 0) {
        showChoices(data.choices);
      } else {
        $nextBtn.classList.remove('hidden');
      }
    }
  }
});

// ============================================================
//  SHOW CHOICES
// ============================================================
function showChoices(choices) {
  $choices.innerHTML = '';
  $choices.classList.remove('hidden');

  choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn w-full text-left bg-gradient-to-r from-pink-50 to-violet-50 border border-pink-200 rounded-xl px-5 py-3.5 text-gray-700 font-body font-semibold shadow-sm cursor-pointer opacity-0';
    btn.textContent = choice.text;
    btn.style.animation = `fadeInUp 0.4s ease-out ${idx * 0.12}s forwards`;
    btn.addEventListener('click', () => handleChoice(choice));
    $choices.appendChild(btn);
  });
}

// ============================================================
//  HANDLE CHOICE
// ============================================================
function handleChoice(choice) {
  // If the choice is a link, open it and don't continue dialogue
  if (choice.link) {
    window.open(choice.link, '_blank');
    return;
  }

  $choices.classList.add('hidden');
  isShowingResponse = true; // tandai sedang response

  if (choice.expression) {
    $charImg.src = CHARACTERS[choice.expression] || CHARACTERS.normal;
  }

  // Type the response
  typeText(choice.response, () => {
    $nextBtn.classList.remove('hidden');
  });
}

// ============================================================
//  NEXT DIALOG
// ============================================================
function nextDialog() {
  currentDialogIndex++;
  
  // Kalau sudah mentok di array terakhir, jangan lakukan apa-apa
  if (currentDialogIndex >= dialogData.length) {
    currentDialogIndex = dialogData.length - 1;
    return;
  }

  const data = dialogData[currentDialogIndex];
  showDialog(data);
}



// ============================================================
//  CONFETTI 🎉
// ============================================================
function launchConfetti() {
  const colors = ['#f472b6', '#c4b5fd', '#fbbf24', '#fb7185', '#a78bfa', '#34d399', '#f9a8d4', '#fcd34d'];
  const container = document.body;

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left            = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width           = (6 + Math.random() * 8) + 'px';
    confetti.style.height          = (6 + Math.random() * 8) + 'px';
    confetti.style.borderRadius    = Math.random() > 0.5 ? '50%' : '2px';

    const duration = 2000 + Math.random() * 3000;
    confetti.style.animation = `confettiFall ${duration}ms ease-in-out ${Math.random() * 1500}ms forwards`;

    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), duration + 2000);
  }
}

// ============================================================
//  HEART CLICK — pesan semangat random
// ============================================================
let heartCooldown = false;
function clickHeart(e) {
  if (heartCooldown) return;
  heartCooldown = true;

  const heart = document.createElement('div');
  heart.className = 'heart-float';
  heart.textContent = ['❤️', '💕', '💖', '💗', '🩷'][Math.floor(Math.random() * 5)];
  heart.style.left = (e.clientX - 10) + 'px';
  heart.style.top  = (e.clientY - 10) + 'px';
  heart.style.animation = 'heartPop 1s ease-out forwards';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1100);

  const msg = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
  $romanticTxt.textContent = msg;
  $romanticPop.style.opacity   = '1';
  $romanticPop.style.transform = 'translate(-50%, -50%) scale(1)';

  setTimeout(() => {
    $romanticPop.style.opacity   = '0';
    $romanticPop.style.transform = 'translate(-50%, -50%) scale(0.8)';
    heartCooldown = false;
  }, 2500);
}

// ============================================================
//  MUSIC — auto-play on first interaction
// ============================================================
const $music = document.getElementById('bgMusic');
let musicStarted = false;

function startMusic() {
  if (!musicStarted && $music) {
    $music.volume = 0.2;
    $music.play().then(() => {
      musicStarted = true;
    }).catch(() => {});
  }
}

// Auto-play music on first click anywhere
document.addEventListener('click', function firstClick() {
  startMusic();
  document.removeEventListener('click', firstClick);
}, { once: true });





// ============================================================
//  KEYBOARD SUPPORT
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    if ($opening.classList.contains('active')) {
      startGame();
      return;
    }
    if (!$nextBtn.classList.contains('hidden')) {
      nextDialog();
      return;
    }
    if (isTyping) {
      clearTimeout(typingTimeout);
      $dialogText.innerHTML = currentFullText;
      isTyping = false;

      if (isShowingResponse) {
        $nextBtn.classList.remove('hidden');
      } else {
        const data = dialogData[currentDialogIndex];
        if (data.choices && data.choices.length > 0) {
          showChoices(data.choices);
        } else {
          $nextBtn.classList.remove('hidden');
        }
      }
    }
  }
});
