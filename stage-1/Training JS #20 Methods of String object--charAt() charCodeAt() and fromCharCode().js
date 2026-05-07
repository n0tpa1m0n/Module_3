function topSecret(str){
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    let code = c.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      code = ((code - 65 - 3 + 26) % 26) + 65;
    }
    else if (code >= 97 && code <= 122) {
      code = ((code - 97 - 3 + 26) % 26) + 97;
    }

    res += String.fromCharCode(code);
  }

  const fileNoMatch = res.match(/No\.?\s+(\d+)/);
  const agentMatch  = res.match(/agent\s+([A-Za-z]+)/i);
  const itemMatch   = res.match(/stole the (.*?) from/i);

  answer1 = fileNoMatch ? fileNoMatch[1] : "";
  answer2 = agentMatch  ? agentMatch[1]  : "";
  answer3 = itemMatch   ? itemMatch[1]   : "";

  return res;
}
