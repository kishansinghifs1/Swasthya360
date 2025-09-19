export const infantVaccines = [
  // --- Compulsory (Government NIS) ---
  { name: "BCG", desc: "Protects against tuberculosis.", type: "Compulsory" },
  {
    name: "Hepatitis B (Birth dose)",
    desc: "Prevents hepatitis B infection.",
    type: "Compulsory",
  },
  {
    name: "OPV-0 (Oral Polio Vaccine)",
    desc: "Gives early protection against poliomyelitis.",
    type: "Compulsory",
  },

  {
    name: "Pentavalent-1",
    desc: "Protects against diphtheria, pertussis, tetanus, hepatitis B, and Hib.",
    type: "Compulsory",
  },
  {
    name: "OPV-1",
    desc: "First dose for polio prevention.",
    type: "Compulsory",
  },
  {
    name: "Rotavirus-1",
    desc: "Prevents severe diarrhea caused by rotavirus infection.",
    type: "Compulsory",
  },
  {
    name: "fIPV-1 (Fractional IPV)",
    desc: "Provides injectable protection against poliomyelitis.",
    type: "Compulsory",
  },
  {
    name: "PCV-1",
    desc: "Protects against pneumococcal infections like pneumonia and meningitis.",
    type: "Compulsory",
  },

  {
    name: "Pentavalent-2",
    desc: "Second dose for DPT, hepatitis B, and Hib protection.",
    type: "Compulsory",
  },
  {
    name: "OPV-2",
    desc: "Second dose for polio prevention.",
    type: "Compulsory",
  },
  {
    name: "Rotavirus-2",
    desc: "Second dose for rotavirus diarrhea prevention.",
    type: "Compulsory",
  },
  {
    name: "PCV-2",
    desc: "Second dose against pneumococcal infections.",
    type: "Compulsory",
  },

  {
    name: "Pentavalent-3",
    desc: "Third dose for DPT, hepatitis B, and Hib protection.",
    type: "Compulsory",
  },
  {
    name: "OPV-3",
    desc: "Third dose for polio prevention.",
    type: "Compulsory",
  },
  {
    name: "Rotavirus-3",
    desc: "Third dose for rotavirus diarrhea prevention.",
    type: "Compulsory",
  },
  {
    name: "fIPV-2",
    desc: "Second injectable dose for polio protection.",
    type: "Compulsory",
  },
  {
    name: "PCV-3",
    desc: "Third dose against pneumococcal infections.",
    type: "Compulsory",
  },

  {
    name: "MR-1 (Measles-Rubella)",
    desc: "Protects against measles and rubella.",
    type: "Compulsory",
  },
  {
    name: "PCV Booster",
    desc: "Provides booster protection against pneumococcal infections.",
    type: "Compulsory",
  },
  {
    name: "JE-1 (in endemic areas)",
    desc: "Protects against Japanese Encephalitis.",
    type: "Compulsory",
  },
  {
    name: "Vitamin A (1st dose)",
    desc: "Prevents vitamin A deficiency disorders.",
    type: "Compulsory",
  },

  // --- Optional (IAP / Private schedule) ---
  {
    name: "MMR (Measles, Mumps, Rubella)",
    desc: "Protects against measles, mumps, and rubella.",
    type: "Optional",
  },
  {
    name: "Varicella (Chickenpox)",
    desc: "Prevents chickenpox infection.",
    type: "Optional",
  },
  {
    name: "Hepatitis A",
    desc: "Prevents hepatitis A infection.",
    type: "Optional",
  },
  {
    name: "Influenza",
    desc: "Protects against seasonal flu.",
    type: "Optional",
  },
  {
    name: "Meningococcal",
    desc: "Protects against meningococcal meningitis.",
    type: "Optional",
  },
  {
    name: "Typhoid Conjugate Vaccine",
    desc: "Prevents typhoid fever.",
    type: "Optional",
  },
];

export const preschoolVaccines = [
  // --- Compulsory (Government NIS) ---
  {
    name: "MR-2 (Measles-Rubella)",
    desc: "Second dose to protect against measles and rubella.",
    type: "Compulsory",
  },
  {
    name: "DPT Booster-1",
    desc: "First booster for diphtheria, pertussis, and tetanus.",
    type: "Compulsory",
  },
  {
    name: "OPV Booster",
    desc: "Booster dose for polio prevention.",
    type: "Compulsory",
  },
  {
    name: "JE-2 (in endemic areas)",
    desc: "Second dose for Japanese Encephalitis protection.",
    type: "Compulsory",
  },
  {
    name: "Vitamin A (2nd to 9th doses every 6 months till age 5)",
    desc: "Prevents vitamin A deficiency and night blindness.",
    type: "Compulsory",
  },

  // --- Optional (IAP / Private schedule) ---
  {
    name: "MMR-2",
    desc: "Second dose to protect against measles, mumps, and rubella.",
    type: "Optional",
  },
  {
    name: "Varicella-2",
    desc: "Second dose to prevent chickenpox infection.",
    type: "Optional",
  },
  {
    name: "Hepatitis A (2-dose series)",
    desc: "Prevents hepatitis A infection.",
    type: "Optional",
  },
  {
    name: "Typhoid Conjugate Booster",
    desc: "Booster dose for typhoid fever prevention.",
    type: "Optional",
  },
  {
    name: "Influenza (annual)",
    desc: "Protects against seasonal flu, recommended yearly.",
    type: "Optional",
  },
];

export const childrenVaccines = [
  // --- Compulsory (Government NIS) ---
  {
    name: "DPT Booster-2 (at 5–6 years)",
    desc: "Second booster for diphtheria, pertussis, and tetanus.",
    type: "Compulsory",
  },
  {
    name: "MR / MMR (booster around 5 years)",
    desc: "Protects against measles, mumps, and rubella.",
    type: "Compulsory",
  },
  {
    name: "TT (Tetanus Toxoid at 10 years)",
    desc: "Protects against tetanus infection.",
    type: "Compulsory",
  },

  // --- Optional (IAP / Private schedule) ---
  {
    name: "Varicella (Booster, if not taken earlier)",
    desc: "Protects against chickenpox.",
    type: "Optional",
  },
  {
    name: "Typhoid Booster (every 3 years)",
    desc: "Protects against typhoid fever.",
    type: "Optional",
  },
  {
    name: "Hepatitis A (if not completed earlier)",
    desc: "Prevents hepatitis A infection.",
    type: "Optional",
  },
  {
    name: "Influenza (annual, especially in high-risk kids)",
    desc: "Protects against seasonal flu.",
    type: "Optional",
  },
  {
    name: "HPV (9–12 years, especially girls)",
    desc: "Prevents cervical cancer caused by human papillomavirus.",
    type: "Optional ",
  },
];

export const adultVaccines = [
  // --- Compulsory / Strongly Recommended (India NIS / IAP) ---
  {
    name: "Td/Tdap (Tetanus, Diphtheria, Pertussis)",
    desc: "One booster every 10 years for continued protection.",
    type: "Compulsory",
  },
  {
    name: "Influenza (annual)",
    desc: "Yearly flu shot, especially for elderly, pregnant women, and those with chronic illness.",
    type: "Compulsory",
  },
  {
    name: "COVID-19 Vaccine",
    desc: "Protects against SARS-CoV-2 infection and severe disease.",
    type: "Compulsory",
  },

  // --- Optional / Recommended (IAP / Private schedule) ---
  {
    name: "Hepatitis B (if not vaccinated earlier)",
    desc: "Prevents chronic hepatitis B infection and liver disease.",
    type: "Optional",
  },
  {
    name: "Hepatitis A",
    desc: "Prevents hepatitis A infection, especially for travelers and food handlers.",
    type: "Optional",
  },
  {
    name: "HPV (up to 26 years, sometimes up to 45)",
    desc: "Prevents cervical, anal, and other HPV-related cancers.",
    type: "Optional",
  },
  {
    name: "MMR (if missed in childhood)",
    desc: "Protects against measles, mumps, and rubella.",
    type: "Optional",
  },
  {
    name: "Varicella (if not immune)",
    desc: "Protects against chickenpox in adults who never had it or were not vaccinated.",
    type: "Optional",
  },
  {
    name: "Pneumococcal (PCV13/PPSV23)",
    desc: "Protects against pneumonia, meningitis, and bloodstream infections; advised for >50 years or high-risk adults.",
    type: "Optional",
  },
  {
    name: "Typhoid (booster every 3 years if risk continues)",
    desc: "Protects against typhoid fever, especially in endemic areas.",
    type: "Optional",
  },
  {
    name: "Japanese Encephalitis",
    desc: "For adults living in or traveling to JE endemic areas.",
    type: "Optional",
  },
  {
    name: "Meningococcal",
    desc: "Protects against meningitis; required for students, travelers, or Hajj pilgrims.",
    type: "Optional",
  },
  {
    name: "Shingles (Herpes Zoster)",
    desc: "Recommended after 50 years to prevent shingles and its complications.",
    type: "Optional",
  },
];

export const middleAgedVaccines = [
  // --- Compulsory / Strongly Recommended ---
  {
    name: "Td/Tdap (Tetanus, Diphtheria, Pertussis)",
    desc: "Booster every 10 years to maintain protection.",
    type: "Compulsory",
  },
  {
    name: "Influenza (annual)",
    desc: "Flu shot recommended yearly, especially for those with diabetes, heart, or lung disease.",
    type: "Compulsory",
  },
  {
    name: "COVID-19 Vaccine / Boosters",
    desc: "Protects against SARS-CoV-2 infection and complications.",
    type: "Compulsory",
  },

  // --- Optional / Recommended ---
  {
    name: "Hepatitis B",
    desc: "If not previously vaccinated; prevents chronic hepatitis B and liver cancer.",
    type: "Optional",
  },
  {
    name: "Hepatitis A",
    desc: "For travelers, food handlers, or those in high-risk areas.",
    type: "Optional",
  },
  {
    name: "HPV (up to 45 years)",
    desc: "Prevents cervical, anal, and other HPV-related cancers.",
    type: "Optional",
  },
  {
    name: "Pneumococcal (PCV13/PPSV23)",
    desc: "Advised for people with diabetes, heart disease, asthma, or other chronic conditions.",
    type: "Optional",
  },
  {
    name: "Typhoid (booster every 3 years if risk continues)",
    desc: "For those living in or traveling to endemic areas.",
    type: "Optional",
  },
  {
    name: "MMR (if not taken earlier)",
    desc: "Protects against measles, mumps, and rubella.",
    type: "Optional",
  },
  {
    name: "Varicella (if not immune)",
    desc: "Protects against chickenpox for those who missed it in childhood.",
    type: "Optional",
  },
  {
    name: "Japanese Encephalitis",
    desc: "For adults in endemic areas or frequent travelers.",
    type: "Optional ",
  },
  {
    name: "Meningococcal",
    desc: "For travelers, students going abroad, or Hajj pilgrims.",
    type: "Optional ",
  },
];

export const seniorVaccines = [
  // --- Compulsory / Strongly Recommended ---
  {
    name: "Td/Tdap (Tetanus, Diphtheria, Pertussis)",
    desc: "One booster every 10 years to maintain protection.",
    type: "Compulsory",
  },
  {
    name: "Influenza (annual)",
    desc: "Yearly flu vaccine is highly recommended to prevent seasonal influenza and its complications.",
    type: "Compulsory",
  },
  {
    name: "COVID-19 Vaccine / Boosters",
    desc: "Strongly recommended for older adults to reduce severe illness and hospitalization risk.",
    type: "Compulsory",
  },

  // --- Optional / Strongly Recommended for Seniors ---
  {
    name: "Pneumococcal (PCV13 / PPSV23)",
    desc: "Protects against pneumonia, meningitis, and bloodstream infections. Advised for all ≥60 years.",
    type: "Optional",
  },
  {
    name: "Shingles (Herpes Zoster)",
    desc: "Recommended after 50 years to prevent shingles and post-herpetic neuralgia.",
    type: "Optional ",
  },
  {
    name: "Hepatitis B",
    desc: "If not previously vaccinated; protects against chronic hepatitis and liver disease.",
    type: "Optional",
  },
  {
    name: "Hepatitis A",
    desc: "For seniors with liver disease or frequent travelers.",
    type: "Optional",
  },
  {
    name: "Typhoid (booster every 3 years if risk continues)",
    desc: "For seniors living in or traveling to typhoid-endemic areas.",
    type: "Optional",
  },
  {
    name: "MMR (if never taken earlier)",
    desc: "Provides protection against measles, mumps, and rubella.",
    type: "Optional ",
  },
  {
    name: "Varicella (if not immune)",
    desc: "Protects against chickenpox in elderly who never had it or vaccination.",
    type: "Optional",
  },
];
