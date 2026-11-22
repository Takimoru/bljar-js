const names = [                                         // Nicknames mapped by outcome index.
  "Hole-in-one!",                                       // Index 0: exactly 1 stroke.
  "Eagle",                                              // Index 1: par minus 2 or lower.
  "Birdie",                                             // Index 2: par minus 1.
  "Par",                                                // Index 3: strokes equal par.
  "Bogey",                                              // Index 4: par plus 1.
  "Double Bogey",                                       // Index 5: par plus 2.
  "Go Home!",                                           // Index 6: par plus 3 or higher.
];

function golfScore(par, strokes) {                      // Takes par and strokes as inputs.
  const score = strokes - par;                          // Difference from par: negative is under par.
  const index = Math.min(Math.max(score + 3, 1), 6);    // Shift to an index from 1 to 6.

  if (strokes === 1) {                                  // Special case: exactly 1 stroke.
    return names[0];                                    // Return "Hole-in-one!".
  } else if (strokes > 9) {                             // Extra fixed limit, not in the requirements.
    return "Over limit";                                // Requirements say "Go Home!" at par + 3 or more.
  }

  return names[index];                                  // Return the nickname string for this score.
}

console.log(golfScore(3, 11));                          // Should be "Go Home!", but currently prints "Over limit".
