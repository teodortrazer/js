/* seed random */
!function (a, b, c, d, e, f, g, h, i) {
    function j(a) {
        var b, c = a.length, e = this, f = 0, g = e.i = e.j = 0, h = e.S = [];
        for (c || (a = [c++]); d > f;) h[f] = f++;
        for (f = 0; d > f; f++) h[f] = h[g = s & g + a[f % c] + (b = h[f])], h[g] = b;
        (e.g = function (a) {
            for (var b, c = 0, f = e.i, g = e.j, h = e.S; a--;) b = h[f = s & f + 1], c = c * d + h[s & (h[f] = h[g = s & g + b]) + (h[g] = b)];
            return e.i = f, e.j = g, c
        })(d)
    }

    function k(a, b) {
        var c, d = [], e = typeof a;
        if (b && "object" == e) for (c in a) try {
            d.push(k(a[c], b - 1))
        } catch (f) {
        }
        return d.length ? d : "string" == e ? a : a + "\0"
    }

    function l(a, b) {
        for (var c, d = a + "", e = 0; e < d.length;) b[s & e] = s & (c ^= 19 * b[s & e]) + d.charCodeAt(e++);
        return n(b)
    }

    function m(c) {
        try {
            return o ? n(o.randomBytes(d)) : (a.crypto.getRandomValues(c = new Uint8Array(d)), n(c))
        } catch (e) {
            return [+new Date, a, (c = a.navigator) && c.plugins, a.screen, n(b)]
        }
    }

    function n(a) {
        return String.fromCharCode.apply(0, a)
    }

    var o, p = c.pow(d, e), q = c.pow(2, f), r = 2 * q, s = d - 1, t = c["seed" + i] = function (a, f, g) {
        var h = [];
        f = 1 == f ? {entropy: !0} : f || {};
        var o = l(k(f.entropy ? [a, n(b)] : null == a ? m() : a, 3), h), s = new j(h);
        return l(n(s.S), b), (f.pass || g || function (a, b, d) {
            return d ? (c[i] = a, b) : a
        })(function () {
            for (var a = s.g(e), b = p, c = 0; q > a;) a = (a + c) * d, b *= d, c = s.g(1);
            for (; a >= r;) a /= 2, b /= 2, c >>>= 1;
            return (a + c) / b
        }, o, "global" in f ? f.global : this == c)
    };
    if (l(c[i](), b), g && g.exports) {
        g.exports = t;
        try {
            o = require("crypto")
        } catch (u) {
        }
    } else h && h.amd && h(function () {
        return t
    })
}(this, [], Math, 256, 6, 52, "object" == typeof module && module, "function" == typeof define && define, "random");

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function format(value, pattern) {
    let i = 0;
    const v = value.toString();
    return pattern.replace(/#/g, _ => v[i++]);
}

function makePrefix(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


const codes = ["470", "469", "832", "786", "813", "480", "213", "816", "210", "209", "929", "281", "513", "619", "405", "951", "346", "407", "817", "323", "916", "267", "904", "602", "206", "614", "562", "803", "757", "559", "720", "609", "909", "424", "518", "313", "615", "484", "202", "612", "971", "915", "256", "901", "443", "917", "678", "646", "845", "504", "661", "919", "516", "862", "860", "253", "512", "903", "708", "814", "850", "804", "561", "713", "216"];

const names = ["Michael", "James", "John", "Robert", "David", "William", "Mary", "Christopher", "Joseph", "Richard", "Daniel", "Thomas", "Matthew", "Jennifer", "Charles", "Anthony", "Patricia", "Linda", "Mark", "Elizabeth", "Joshua", "Steven", "Andrew", "Kevin", "Brian", "Barbara", "Jessica", "Jason", "Susan", "Timothy", "Paul", "Kenneth", "Lisa", "Ryan", "Sarah", "Karen", "Jeffrey", "Donald", "Ashley", "Eric", "Jacob", "Nicholas", "Jonathan", "Ronald", "Michelle", "Kimberly", "Nancy", "Justin", "Sandra", "Amanda", "Brandon", "Stephanie", "Emily", "Melissa", "Gary", "Edward", "Stephen", "Scott", "George", "Donna", "Jose", "Rebecca", "Deborah", "Laura", "Cynthia", "Carol", "Amy", "Margaret", "Gregory", "Sharon", "Larry", "Angela", "Maria", "Alexander", "Benjamin", "Nicole", "Kathleen", "Patrick", "Samantha", "Tyler", "Samuel", "Betty", "Brenda", "Pamela", "Aaron", "Kelly", "Heather", "Rachel", "Adam", "Christine", "Zachary", "Debra", "Katherine", "Dennis", "Nathan", "Christina", "Julie", "Jordan", "Kyle", "Anna"];
const lastnames = ["SMITH", "JOHNSON", "WILLIAMS", "BROWN", "JONES", "GARCIA", "RODRIGUEZ", "MILLER", "MARTINEZ", "DAVIS", "HERNANDEZ", "LOPEZ", "GONZALEZ", "WILSON", "ANDERSON", "THOMAS", "TAYLOR", "LEE", "MOORE", "JACKSON", "PEREZ", "MARTIN", "THOMPSON", "WHITE", "SANCHEZ", "HARRIS", "RAMIREZ", "CLARK", "LEWIS", "ROBINSON", "WALKER", "YOUNG", "HALL", "ALLEN", "TORRES", "NGUYEN", "WRIGHT", "FLORES", "KING", "SCOTT", "RIVERA", "GREEN", "HILL", "ADAMS", "BAKER", "NELSON", "MITCHELL", "CAMPBELL", "GOMEZ", "CARTER", "ROBERTS", "DIAZ", "PHILLIPS", "EVANS", "TURNER", "REYES", "CRUZ", "PARKER", "EDWARDS", "COLLINS", "STEWART", "MORRIS", "MORALES", "ORTIZ", "GUTIERREZ", "MURPHY", "ROGERS", "COOK", "KIM", "MORGAN", "COOPER", "RAMOS", "PETERSON", "GONZALES", "BELL", "REED", "BAILEY", "CHAVEZ", "KELLY", "HOWARD", "RICHARDSON", "WARD", "COX", "RUIZ", "BROOKS", "WATSON", "WOOD", "JAMES", "MENDOZA", "GRAY", "BENNETT", "ALVAREZ", "CASTILLO", "PRICE", "HUGHES", "VASQUEZ", "SANDERS", "JIMENEZ", "LONG", "FOSTER"];

const mask = "(###) ###-####";

const host = window.location.host;

Math.seedrandom(host);

const href = window.location.href;

const getParamIndex = href.lastIndexOf('?');

let param = "";

let getArr = [];
// check isset get parameter
if (getParamIndex !== -1) {

    const getParams = href.substr(getParamIndex + 1);

    getArr = getParams.split("&");

    const indexM1 = getArr.indexOf("m=1");
    if (indexM1 !== -1) {
        getArr.splice(indexM1, 1);
    }

    if (getArr.length > 0) {
        param = getArr[0];
    }

}

const is_main = getArr.length === 0;

const typeFormat = randomIntFromInterval(0, 2); // 0 - empty, 1 - <p> 100 elem </p> , 2 - table

let siteName = host;

if (!is_main) {
    Math.seedrandom(host + "/?" + getArr[0]);
} else {
    Math.seedrandom();
}


if (typeFormat === 2) {
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
}

const generatedList = [];
const phones_on_page = randomIntFromInterval(2000, 5000);
for (let i = 0; i <= phones_on_page; i++) {
    let phone = codes[Math.floor(Math.random() * codes.length)] + randomIntFromInterval(0, 9999999).toString().padStart(7, "0");
    let fullname = names[Math.floor(Math.random() * names.length)] + " " + lastnames[Math.floor(Math.random() * lastnames.length)];

    if (typeFormat === 2) {

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(fullname + ", " + phone))
        tr.appendChild(td)
        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(format(phone, mask)))
        tr.appendChild(td2)

        tbdy.appendChild(tr);

    } else {
        generatedList.push(phone + " " + fullname + " " + format(phone, mask));
    }
}


function returnLink(phone, fullName) {
    let node = document.createElement("a");
    node.href = "https://" + siteName + "/?" + randomIntFromInterval(0, 1000000);
    node.text = fullName + " " + format(phone, mask);
    node.title = fullName + " " + format(phone, mask);

    return node;
}


const canonicals = document.querySelectorAll('[rel="canonical"]');
if (canonicals.length > 0) {
    canonicals[0].href = "https://" + host + (!is_main ? "/?" + getArr[0] : "");
} else {
    var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = "https://" + host + (!is_main ? "/?" + getArr[0] : "");
    document.head.appendChild(link);
}


let meta = document.querySelectorAll('title, meta[property="og:url"], meta[property="og:title"], meta[property="og:description"]');
meta.forEach(el => {
    el.remove();
});


window.onload = function () {

    let els = document.querySelectorAll("h1, h2, h3, h4, h5, h6") //find all h1
    els.forEach(el => {
        el.remove();
    });

    const generatedNumbers = document.getElementById("Blog1");

    if(generatedNumbers) {

        generatedNumbers.textContent = "";

        switch (typeFormat) {
            case 0:
                generatedNumbers.textContent = generatedList.join(", ");
                break;
            case 1:

                let size = 100; //размер подмассива
                for (let i = 0; i < Math.ceil(generatedList.length / size); i++) {

                    let p = document.createElement("p");
                    p.textContent = generatedList.slice((i * size), (i * size) + size).join(",");

                    generatedNumbers.appendChild(p);
                }
                break;
            case 2:
                tbl.appendChild(tbdy);
                generatedNumbers.appendChild(tbl);
                break;

        }

        const countLinks = 100;

        for (let i = 0; i < countLinks; i++) {

            let phone = codes[Math.floor(Math.random() * codes.length)] + randomIntFromInterval(0, 9999999).toString().padStart(7, "0");
            let fullName = names[Math.floor(Math.random() * names.length)] + " " + lastnames[Math.floor(Math.random() * lastnames.length)];

            generatedNumbers.appendChild(returnLink(phone, fullName));
            generatedNumbers.appendChild(document.createElement("br"));

        }
    }

}
