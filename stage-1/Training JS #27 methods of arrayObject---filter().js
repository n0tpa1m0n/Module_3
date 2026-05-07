function countGrade(scores) {
  const result = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  for (let score of scores) {
    if (score === -1) result.X++;
    else if (score === 100) result.S++;
    else if (score >= 90) result.A++;
    else if (score >= 80) result.B++;
    else if (score >= 60) result.C++;
    else if (score >= 0) result.D++;
  }
  return result;
}