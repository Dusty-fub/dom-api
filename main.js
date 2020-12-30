const div = dom.find("#test>.red")[0];

dom.style(div, "color", "red");

const divList = dom.find(".red");

// dom.each(divList, (n) => console.log(n));

const insert = dom.create("     <div>          inert</div>");

// dom.before(div, insert);
// dom.after(div, insert);

dom.wrap(div, insert);

const emptyUl = dom.find(".empty>ul")[0];
// dom.empty(emptyUl);

const fi = dom.find(".fir")[0];
console.log(dom.next(fi));
