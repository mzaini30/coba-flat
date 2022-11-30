let filenya = Deno.args[0]; // required

let data = Deno.readFileSync(filenya);
Deno.writeFileSync("salinan.html", data);
