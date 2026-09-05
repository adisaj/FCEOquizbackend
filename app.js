// ============================================================
// TALERANG ASSESSMENT — APP LOGIC (Phase 2 prototype)
// No backend yet. Everything lives in memory for this browser tab only.
// ============================================================

const state = {
  student: { name: "", mobile: "", email: "" },
  currentModuleIdx: 0,
  currentQuestionIdx: 0,
  answers: {},           // questionId -> array of selected option indices
  moduleResults: {},     // moduleId -> { score, max, percent }
  moduleStatus: {},      // moduleId -> 'locked' | 'current' | 'complete'
  moduleResultNextAction: null
};

// Set up initial module statuses: first module is "current", rest "locked"
moduleStructure.forEach((m, i) => {
  state.moduleStatus[m.id] = i === 0 ? "current" : "locked";
});

// ---------- Day naming (display layer only — does not touch question content) ----------
// Talerang runs this program as a 6-day cohort. Each day maps to one top-level module
// (module.parent in questionBank.js). Sub-modules like 1A/1B are shown as "Part A" / "Part B".
const dayTopics = {
  "1": "Self Awareness and Self Belief",
  "2": "Life vision, Design, Business, and verbal communication",
  "3": "Excel, Powerpoint, Design Thinking, and First impressions",
  "4": "Emotional intelligence, Business ethics, Prioritization, and goal setting",
  "5": "Problem-solving, Resume and Interviewing skills, and Bridge to Career",
  "6": "Microinternship and Project De-brief"
};

function partLetter(moduleId) {
  const match = moduleId.match(/[A-Z]$/);
  return match ? match[0] : null;
}

function dayFullTitle(parent) {
  return "Day " + parent + ": " + dayTopics[parent];
}

// e.g. "Day 1: Self Awareness and Self Belief — Part A" or "Day 2: Life vision..." (no part)
function fullDisplayLabel(m) {
  const letter = partLetter(m.id);
  return letter ? dayFullTitle(m.parent) + " \u2014 Part " + letter : dayFullTitle(m.parent);
}

// e.g. "Day 1 – Part A" or "Day 2" — used where space is tight (results table, checklist rows)
function shortDisplayLabel(m) {
  const letter = partLetter(m.id);
  return letter ? "Day " + m.parent + " \u2013 Part " + letter : "Day " + m.parent;
}

// ---------- Google Sheets connection ----------
// This is the "/exec" Web App URL from the Talerang Backend Apps Script deployment.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRVnWSCaTZPEVBaY9ola-T_Vl7bc7kIrKIgqeWwacs4IW7BKNZQvQx3tHXBPSYNCDyqw/exec";

// Converts a module id (e.g. "4B" or "2") into the exact column name used in the
// Google Sheet (e.g. "Day4_PartB" or "Day2"). Must stay in sync with the sheet headers.
function sheetColumnKey(m) {
  const letter = partLetter(m.id);
  return letter ? ("Day" + m.parent + "_Part" + letter) : ("Day" + m.parent);
}

async function sendToSheet(payload, statusElId, retryBtnId) {
  state.lastSubmissionPayload = payload;
  state.lastSubmissionStatusEl = statusElId;
  state.lastSubmissionRetryBtn = retryBtnId;

  const statusEl = document.getElementById(statusElId);
  const retryBtn = retryBtnId ? document.getElementById(retryBtnId) : null;
  if (retryBtn) retryBtn.style.display = "none";
  statusEl.textContent = "Saving...";
  statusEl.className = "sync-status sync-pending";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // avoids a CORS preflight to Apps Script
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    if (result.status === "success") {
      statusEl.textContent = "\u2713 Saved.";
      statusEl.className = "sync-status sync-ok";
    } else {
      throw new Error(result.message || "The backend reported an error.");
    }
  } catch (err) {
    statusEl.textContent = "Couldn't save automatically — check your internet connection.";
    statusEl.className = "sync-status sync-error";
    if (retryBtn) retryBtn.style.display = "block";
  }
}

function retrySubmission() {
  if (state.lastSubmissionPayload) {
    sendToSheet(state.lastSubmissionPayload, state.lastSubmissionStatusEl, state.lastSubmissionRetryBtn);
  }
}

// ---------- Screen navigation ----------
function shouldShowChecklistButton(screenName) {
  if (screenName === "checklist") return false;       // already there — redundant
  if (screenName === "welcome") return false;         // nothing to show before registering
  if (screenName === "register") return false;        // registration isn't done yet
  if (screenName === "alreadyCompleted") return false; // this student is blocked anyway
  return !!state.student.email;                        // only ever show once registered
}

function goTo(screenName) {
  // Safety net: no path — button, direct call, anything — can land on the checklist
  // before registration is actually complete.
  if (screenName === "checklist" && !state.student.email) {
    screenName = "register";
  }

  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.getElementById("screen-" + screenName).classList.add("active");
  window.scrollTo(0, 0);

  document.getElementById("header-checklist-btn").style.display =
    shouldShowChecklistButton(screenName) ? "inline-block" : "none";

  if (screenName === "checklist") renderChecklist();
  if (screenName === "review") renderReview();
}

// The page loads on the Welcome screen directly via HTML (no goTo() call fires),
// so hide the header button up front to match.
document.getElementById("header-checklist-btn").style.display = "none";

// ---------- Registration ----------
async function submitRegistration() {
  const name = document.getElementById("input-name").value.trim();
  const mobile = document.getElementById("input-mobile").value.trim();
  const email = document.getElementById("input-email").value.trim();

  document.getElementById("error-name").textContent = "";
  document.getElementById("error-mobile").textContent = "";
  document.getElementById("error-email").textContent = "";

  let ok = true;

  if (!name) {
    document.getElementById("error-name").textContent = "Please enter your name.";
    ok = false;
  }

  const digitsOnly = mobile.replace(/[^0-9]/g, "");
  if (!/^\d{7,15}$/.test(digitsOnly)) {
    document.getElementById("error-mobile").textContent = "Please enter a valid mobile number.";
    ok = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("error-email").textContent = "Please enter a valid email address.";
    ok = false;
  }

  if (!ok) return;

  state.student = { name, mobile: digitsOnly, email: email.toLowerCase() };

  const submitBtn = document.querySelector("#screen-register .btn-primary");
  submitBtn.disabled = true;
  submitBtn.textContent = "Checking...";

  try {
    const checkUrl = GOOGLE_SCRIPT_URL + "?action=checkEmail&email=" + encodeURIComponent(state.student.email);
    const response = await fetch(checkUrl);
    const result = await response.json();

    if (result.completed) {
      showAlreadyCompletedScreen(result.progress);
    } else if (result.exists) {
      applyResumedProgress(result.progress);
      goTo("checklist"); // returning students skip straight past the instructions screen
    } else {
      goTo("instructions"); // brand new student
    }
  } catch (err) {
    // If the check itself fails (e.g. no internet), don't block a legitimate
    // student from starting — treat it as a fresh attempt. But make it visible
    // rather than silent, so a backend problem doesn't masquerade as "it just restarted."
    console.error("checkEmail failed, starting fresh as a fallback:", err);
    goTo("instructions");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Continue";
  }
}

function showAlreadyCompletedScreen(progress) {
  const scoreEl = document.getElementById("alreadyCompleted-score");
  if (progress && progress.Overall_Score !== null && progress.Overall_Score !== undefined) {
    scoreEl.textContent = "Your recorded overall score: " + progress.Overall_Score + "%";
  } else {
    scoreEl.textContent = "";
  }
  goTo("alreadyCompleted");
}

// Takes the {Day1_PartA: 80, Day1_PartB: null, ...} object from checkEmail and
// rebuilds this session's local progress to match — so a returning student's
// checklist and starting point are correct without redoing finished days.
function applyResumedProgress(progress) {
  moduleStructure.forEach(m => {
    const val = progress[sheetColumnKey(m)];
    if (val !== null && val !== undefined && val !== "") {
      state.moduleResults[m.id] = { score: null, max: null, percent: Number(val) };
      state.moduleStatus[m.id] = "complete";
    }
  });

  // Whatever comes right after the last completed day becomes "current"; anything
  // further out stays "locked".
  let foundCurrent = false;
  moduleStructure.forEach(m => {
    if (state.moduleStatus[m.id] === "complete") return;
    state.moduleStatus[m.id] = foundCurrent ? "locked" : "current";
    foundCurrent = true;
  });
}

// ---------- Checklist ----------
function renderChecklist() {
  const container = document.getElementById("checklist-list");
  container.innerHTML = "";

  // Group modules by parent so 1A/1B, 3A/3B, 4A/4B/4C nest under one heading
  const groups = [];
  moduleStructure.forEach(m => {
    let group = groups.find(g => g.parent === m.parent);
    if (!group) {
      group = { parent: m.parent, members: [] };
      groups.push(group);
    }
    group.members.push(m);
  });

  groups.forEach(group => {
    if (group.members.length > 1) {
      const header = document.createElement("div");
      header.className = "checklist-group-label";
      header.textContent = dayFullTitle(group.parent);
      container.appendChild(header);

      group.members.forEach(m => {
        container.appendChild(buildChecklistRow(m, true));
      });
    } else {
      container.appendChild(buildChecklistRow(group.members[0], false));
    }
  });

  // Update the "Continue" button so it always reflects what happens next
  const continueBtn = document.getElementById("checklist-continue-btn");
  const allDone = moduleStructure.every(m => state.moduleStatus[m.id] === "complete");
  if (allDone) {
    continueBtn.textContent = "See Final Results";
  } else {
    const nextModule = moduleStructure.find(m => state.moduleStatus[m.id] === "current");
    continueBtn.textContent = "Continue to " + shortDisplayLabel(nextModule);
  }
}

function buildChecklistRow(m, indent) {
  const status = state.moduleStatus[m.id];
  const row = document.createElement("div");
  row.className = "checklist-item " + status + (indent ? " checklist-sub" : "");

  const icon = document.createElement("span");
  icon.className = "icon";
  icon.textContent = status === "complete" ? "\u2713" : status === "current" ? "\u2192" : "\u25CB";

  const letter = partLetter(m.id);
  const rowLabel = indent ? ("Part " + letter) : dayFullTitle(m.parent);

  const label = document.createElement("span");
  label.textContent = rowLabel + (status === "complete" ? " \u2014 " + state.moduleResults[m.id].percent + "%" : "");

  row.appendChild(icon);
  row.appendChild(label);
  return row;
}

function continueFromChecklist() {
  const allDone = moduleStructure.every(m => state.moduleStatus[m.id] === "complete");
  if (allDone) {
    showFinalResults();
    return;
  }
  const nextModule = moduleStructure.find(m => state.moduleStatus[m.id] === "current");
  if (!nextModule) return;

  // If they were already partway through this exact module when they tapped
  // "View Checklist", resume at the same question instead of restarting it.
  const alreadyLoaded = moduleStructure[state.currentModuleIdx] &&
    moduleStructure[state.currentModuleIdx].id === nextModule.id;

  if (alreadyLoaded) {
    goTo("quiz");
    renderQuizQuestion();
  } else {
    startModule(nextModule.id);
  }
}

// ---------- Quiz ----------
function getQuestionsForModule(moduleId) {
  return questionBank.filter(q => q.module === moduleId);
}

function startModule(moduleId) {
  state.currentModuleIdx = moduleStructure.findIndex(m => m.id === moduleId);
  state.currentQuestionIdx = 0;
  state.moduleStatus[moduleId] = "current";
  goTo("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const mod = moduleStructure[state.currentModuleIdx];
  const questions = getQuestionsForModule(mod.id);
  const q = questions[state.currentQuestionIdx];

  document.getElementById("quiz-module-label").textContent = fullDisplayLabel(mod);
  document.getElementById("quiz-progress-label").textContent =
    "Question " + (state.currentQuestionIdx + 1) + " of " + questions.length;
  document.getElementById("quiz-progress-fill").style.width =
    ((state.currentQuestionIdx + 1) / questions.length * 100) + "%";

  const preworkEl = document.getElementById("quiz-prework");
  if (state.currentQuestionIdx === 0 && q.preWork) {
    preworkEl.style.display = "block";
    preworkEl.textContent = "Pre-work: " + q.preWork;
  } else {
    preworkEl.style.display = "none";
  }

  document.getElementById("quiz-section-tag").textContent = q.section.toUpperCase();
  document.getElementById("quiz-question-text").textContent = q.question;
  document.getElementById("quiz-error").textContent = "";

  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";
  const selected = state.answers[q.id] || [];

  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option" + (selected.includes(idx) ? " selected" : "");
    div.onclick = () => selectOption(q, idx);

    const input = document.createElement("input");
    input.type = q.type === "multi" ? "checkbox" : "radio";
    input.name = "quiz-option";
    input.checked = selected.includes(idx);
    input.onclick = (e) => e.stopPropagation(); // let the div's onclick handle it

    const label = document.createElement("span");
    label.textContent = opt.text;

    div.appendChild(input);
    div.appendChild(label);
    optionsContainer.appendChild(div);
  });

  document.getElementById("quiz-back-btn").disabled = state.currentQuestionIdx === 0;
  document.getElementById("quiz-next-btn").textContent =
    state.currentQuestionIdx === questions.length - 1 ? "Finish Module" : "Next";
}

function selectOption(q, idx) {
  let selected = state.answers[q.id] || [];
  if (q.type === "multi") {
    if (selected.includes(idx)) {
      selected = selected.filter(i => i !== idx);
    } else {
      selected = [...selected, idx];
    }
  } else {
    selected = [idx];
  }
  state.answers[q.id] = selected;
  renderQuizQuestion();
}

function quizNext() {
  const mod = moduleStructure[state.currentModuleIdx];
  const questions = getQuestionsForModule(mod.id);
  const q = questions[state.currentQuestionIdx];
  const selected = state.answers[q.id];

  if (!selected || selected.length === 0) {
    document.getElementById("quiz-error").textContent = "Please select an answer to continue.";
    return;
  }

  if (state.currentQuestionIdx < questions.length - 1) {
    state.currentQuestionIdx++;
    renderQuizQuestion();
  } else {
    finishModule(mod, questions);
  }
}

function quizBack() {
  if (state.currentQuestionIdx > 0) {
    state.currentQuestionIdx--;
    renderQuizQuestion();
  }
}

// ---------- Scoring ----------
function maxScoreForQuestion(q) {
  if (q.scored === false) return 0;
  if (q.type === "multi") {
    return q.options.reduce((sum, o) => sum + o.score, 0);
  }
  return Math.max(...q.options.map(o => o.score));
}

function obtainedScoreForQuestion(q, selectedIdx) {
  if (!selectedIdx || q.scored === false) return 0;
  if (q.type === "multi") {
    return selectedIdx.reduce((sum, i) => sum + q.options[i].score, 0);
  }
  return q.options[selectedIdx[0]].score;
}

// Total possible points for a whole module, computed straight from the question bank.
// This works even for a module the student completed in an earlier session (resumed
// from the sheet as just a percentage) since it never depends on locally-stored answers.
function moduleMaxScore(moduleId) {
  return getQuestionsForModule(moduleId).reduce((sum, q) => sum + maxScoreForQuestion(q), 0);
}

function finishModule(mod, questions) {
  let score = 0;
  questions.forEach(q => {
    if (q.scored === false) return;
    score += obtainedScoreForQuestion(q, state.answers[q.id]);
  });
  const max = moduleMaxScore(mod.id);
  const percent = max > 0 ? Math.round((score / max) * 100) : 0;

  state.moduleResults[mod.id] = { score, max, percent };
  state.moduleStatus[mod.id] = "complete";

  const nextMod = moduleStructure[state.currentModuleIdx + 1];

  // Let the checklist know what's next as soon as this module is done —
  // this way it's accurate even if the student exits instead of continuing.
  if (nextMod) state.moduleStatus[nextMod.id] = "current";

  const letter = partLetter(mod.id);
  const resultTitle = letter ? ("Part " + letter + " complete") : ("Day " + mod.parent + " complete");

  document.getElementById("moduleResult-daylabel").textContent = dayFullTitle(mod.parent);
  document.getElementById("moduleResult-title").textContent = resultTitle;
  document.getElementById("moduleResult-percent").textContent = percent + "%";
  document.getElementById("moduleResult-fraction").textContent = score + " / " + max + " points";

  const continueBtn = document.getElementById("moduleResult-continue-btn");
  const exitBtn = document.getElementById("moduleResult-exit-btn");

  if (nextMod) {
    continueBtn.textContent = "Continue to " + shortDisplayLabel(nextMod) + " \u2192";
    state.moduleResultNextAction = () => startModule(nextMod.id);
    exitBtn.style.display = "block";
  } else {
    continueBtn.textContent = "See Final Results";
    state.moduleResultNextAction = () => showFinalResults();
    exitBtn.style.display = "none"; // nothing left to pause before — go straight to results
  }

  goTo("moduleResult");

  // Save just this day's score right away, so progress survives even if the
  // student never comes back to finish the rest.
  const dayPayload = {
    Name: state.student.name,
    Mobile: state.student.mobile,
    Email: state.student.email
  };
  dayPayload[sheetColumnKey(mod)] = percent;
  sendToSheet(dayPayload, "moduleResult-syncStatus", null);
}

function continueAfterModuleResult() {
  if (state.moduleResultNextAction) state.moduleResultNextAction();
}

// ---------- Final results ----------
function showFinalResults() {
  let totalWeightedScore = 0;
  let totalMax = 0;
  moduleStructure.forEach(m => {
    const max = moduleMaxScore(m.id);
    const percent = state.moduleResults[m.id].percent;
    totalWeightedScore += (percent / 100) * max;
    totalMax += max;
  });
  const overallPercent = Math.round((totalWeightedScore / totalMax) * 100);

  document.getElementById("finalResult-percent").textContent = overallPercent + "%";

  const table = document.getElementById("finalResult-table");
  table.innerHTML = "<tr><th>Day</th><th>Score</th></tr>";
  moduleStructure.forEach(m => {
    const r = state.moduleResults[m.id];
    table.innerHTML += "<tr><td>" + shortDisplayLabel(m) + "</td><td>" + r.percent + "%</td></tr>";
  });

  goTo("finalResult");

  // Resend every day's score plus the Overall_Score as one final "flush" —
  // this also quietly fixes any single day whose save failed earlier.
  const payload = {
    Name: state.student.name,
    Mobile: state.student.mobile,
    Email: state.student.email,
    Overall_Score: overallPercent
  };
  moduleStructure.forEach(m => {
    payload[sheetColumnKey(m)] = state.moduleResults[m.id].percent;
  });
  sendToSheet(payload, "finalResult-syncStatus", "finalResult-retry-btn");
}

// ---------- Review ----------
function renderReview() {
  const container = document.getElementById("review-list");
  container.innerHTML = "";

  questionBank.forEach(q => {
    const selected = state.answers[q.id] || [];
    const div = document.createElement("div");
    div.className = "review-item";

    const qText = document.createElement("div");
    qText.className = "review-q";
    qText.textContent = q.question;

    const aText = document.createElement("div");
    aText.className = "review-a";
    const answerText = selected.map(i => q.options[i].text).join("; ") || "(no answer)";
    aText.textContent = "Your answer: " + answerText;

    const tag = document.createElement("span");
    tag.className = "review-tag";

    if (q.scored === false) {
      tag.classList.add("unscored");
      tag.textContent = "Not scored";
    } else {
      const obtained = obtainedScoreForQuestion(q, selected);
      const max = maxScoreForQuestion(q);
      if (obtained >= max) {
        tag.classList.add("best");
        tag.textContent = "Best response";
      } else {
        tag.classList.add("review");
        tag.textContent = "Review this response";
      }
    }

    div.appendChild(qText);
    div.appendChild(aText);
    div.appendChild(tag);
    container.appendChild(div);
  });
}
