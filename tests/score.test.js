const test=require("node:test"),assert=require("node:assert/strict"),{calculateScore,canonicalize}=require("../www/js/score.js");
test("todos IM/OM",()=>assert.equal(calculateScore(["IM/OM","IM/OM"],2).score,100));
test("mistura",()=>assert.equal(calculateScore(["IM/OM","PI","NI"],3).score,50));
test("NA excluído",()=>assert.equal(calculateScore(["IM/OM","NA"],2).score,100));
test("todos NA",()=>assert.equal(calculateScore(["NA","NA"],2).score,null));
test("nenhum avaliado",()=>assert.equal(calculateScore([],20).score,null));
test("pendentes",()=>assert.equal(calculateScore(["IM/OM"],4).pending,3));
test("arredondamento",()=>assert.equal(calculateScore(["IM/OM","IM/OM","PI"],3).score,83.3));
test("total variável",()=>assert.equal(calculateScore(["IM/OM","NI"],2).pending,0));
test("JSON canônico",()=>assert.equal(canonicalize({b:2,a:1}),canonicalize({a:1,b:2})));
const {createHash}=require("node:crypto");
test("hash SHA-256 determinístico sobre JSON canônico",()=>{const digest=v=>createHash("sha256").update(canonicalize(v)).digest("hex");assert.equal(digest({b:2,a:1}),digest({a:1,b:2}));assert.equal(digest({a:1}),digest({a:1}));});

test("IM e OM separados possuem pontuação integral",()=>{
 const r=calculateScore(["IM","OM","PI","NI","NA"],5);
 assert.equal(r.score,62.5);
 assert.deepEqual(r.counts,{im:1,om:1,na:1,pi:1,ni:1});
});
test("classificação legada IM/OM mantém pontuação integral",()=>{
 assert.equal(calculateScore(["IM/OM","PI","NI"],3).score,50);
});
