var d = document;
var __aula = d.getElementById("aulas-description");
var __horarios = d.getElementById("tabela-horarios");
var __planos = d.getElementById("tabela-planos");
var __accordion = d.getElementById("accordion-planos");
var turma_vazio = "<h3>EM BREVE NOVAS TURMAS</h3>";
var horario_vazio = "<h3>EM BREVE NOVOS HORARIOS</h3>";
var style = "black text-uppercase";

function create_element(e) {
    return d.createElement(e)
}

function create_aula(e, t) {
    title = create_element("h5");
    title.innerHTML = e;
    title.className = style;
    p = create_element("p");
    p.innerHTML = t;
    __aula.appendChild(title);
    __aula.appendChild(p)
}

function create_head_table(e) {
    var t = create_element("thead");
    var n = create_element("tr");
    e.map(function(e) {
        var t = create_element("th");
        t.innerHTML = e;
        n.appendChild(t)
    });
    t.appendChild(n);
    return t
}

function create_body_table(e) {
    var t = create_element("tbody");
    e.map(function(e) {
        var n = create_linha(e);
        t.appendChild(n)
    });
    return t
}

function create_linha(e) {
    var t = create_element("tr");
    var n = create_element("th");
    n.innerHTML = e.horario;
    t.appendChild(n);
    e.dias.map(function(e) {
        var n = create_element("th");
        n.innerHTML = e.aula;
        t.appendChild(n);
        if (e.aula == "") {
            n.className = "branco"
        }
    });
    return t
}

function create_horario(e) {
    var t = create_head_table(e.header);
    __horarios.appendChild(t);
    var n = create_body_table(e.horarios);
    __horarios.appendChild(n)
}

function reorganizar_array(e) {
    e.id.map(function(t, n) {
        var i = d.getElementById(t);
        var r = create_element("div");
        r.className = "card-block";
        var o = create_element("table");
        o.className = "table table-striped";
        var a = create_element("tbody");
        e.horarios.map(function(e, t) {
            var i = create_element("tr");
            var r = create_element("th");
            r.innerHTML = e.horario;
            var o = create_element("th");
            o.innerHTML = e.dias[n].aula;
            if (e.dias[n].aula == "") {
                o.className = "branco"
            }
            i.appendChild(r);
            i.appendChild(o);
            a.appendChild(i);
        });
        o.appendChild(a);
        r.appendChild(o);
        i.appendChild(r);
        console.log(i);
        console.log(r);
    })
}

function create_horario_mobile(e) {
    reorganizar_array(e)
}

function create_body_table_planos(e) {
    var t = create_element("tbody");
    e.map(function(e) {
        var n = create_linha_planos(e);
        t.appendChild(n)
    });
    return t
}

function create_linha_planos(e) {
    var t = create_element("tr");
    var n = create_element("th");
    n.innerHTML = e.aulas;
    t.appendChild(n);
    var n = create_element("th");
    if (e.nx) {
        var i = create_element("small");
        i.innerHTML = e.nx + " ";
        n.appendChild(i);
        var r = create_element("span");
        r.innerHTML = e.total;
        n.appendChild(i);
        n.appendChild(r)
    } else n.innerHTML = e.total;
    t.appendChild(n);
    var n = create_element("th");
    n.innerHTML = e.cada;
    t.appendChild(n);
    var n = create_element("th");
    n.innerHTML = e.validade;
    t.appendChild(n);
    return t
}

function create_planos(e) {
    var t = create_head_table(e.header);
    __planos.appendChild(t);
    var n = create_body_table_planos(e.planos);
    __planos.appendChild(n);
    if (e.extras) {
        e.extras.map(function(e) {
            var t = create_element("tr");
            var i = create_element("th");
            i.setAttribute("colspan", "4");
            i.innerHTML = e;
            t.appendChild(i);
            n.appendChild(t)
        })
    }
}

function create_card(e, t, n) {
    var i = create_element("div");
    i.classList.add("card");
    var r = create_element("a");
    r.className = "collapsed spin";
    r.setAttribute("data-toggle", "collapse");
    r.setAttribute("data-parent", "#accordion-planos");
    r.setAttribute("href", "#" + t);
    var o = create_element("div");
    o.classList.add("card-header");
    var a = create_element("h5");
    a.classList.add("mb-0");
    a.innerHTML = e;
    o.appendChild(a);
    r.appendChild(o);
    i.appendChild(r);
    var o = create_element("div");
    o.setAttribute("id", t);
    o.classList.add("collapse");
    var s = create_element("div");
    s.classList.add("card-block");
    s.appendChild(n);
    o.appendChild(s);
    i.appendChild(o);
    __accordion.appendChild(i)
}

function create_table(e, t, n) {
    var i = create_element("table");
    i.classList.add("table");
    var r = create_element("tbody");
    var o = create_element("tr");
    var a = create_element("th");
    a.innerHTML = "valor total";
    o.appendChild(a);
    var a = create_element("th");
    if (n.nx) {
        var s = create_element("small");
        s.innerHTML = n.nx + " ";
        a.appendChild(s);
        var l = create_element("span");
        l.innerHTML = n.total;
        a.appendChild(s);
        a.appendChild(l)
    } else a.innerHTML = n.total;
    o.appendChild(a);
    r.appendChild(o);
    var o = create_element("tr");
    var a = create_element("th");
    a.innerHTML = "cada aula";
    o.appendChild(a);
    var a = create_element("th");
    a.innerHTML = n.cada;
    o.appendChild(a);
    r.appendChild(o);
    var o = create_element("tr");
    var a = create_element("th");
    a.innerHTML = "validade";
    o.appendChild(a);
    var a = create_element("th");
    a.innerHTML = n.validade;
    o.appendChild(a);
    r.appendChild(o);
    i.appendChild(r);
    return i
}

function create_extra(e) {
    var t = create_element("div");
    t.className = "card";
    var n = create_element("div");
    n.className = "card-header vazio";
    var i = create_element("h6");
    i.className = "mb-0";
    i.innerHTML = e;
    n.appendChild(i);
    t.appendChild(n);
    __accordion.appendChild(t)
}

function open_first(e) {
    var t = d.getElementById(e);
    t.classList.add("show")
}

function create_planos_mobile(e) {
    e.planos.map(function(t, n) {
        var i = create_table(e.header[n], e.header[n], t);
        create_card(t.aulas, e.id[n], i)
    });
    if (e.extras.length > 0) {
        e.extras.map(function(e) {
            create_extra(e)
        })
    }
    open_first(e.id[0])
}
// fetch("../json/conf.json").then(function(e) {
//     return e.json()
// }).then(function(e) {
//     aulas = e.aulas;
//     if (e.aulas.length == 0) {
//         __aula.innerHTML = turma_vazio
//     } else {
//         aulas.forEach(function(e, t) {
//             create_aula(e.name, e.description)
//         })
//     }
// });
fetch("https://raw.githubusercontent.com/crisciano/horaries-from-git/master/src/json/horaries.json").then(function(e) {
    return e.json()
}).then(function(e) {
    create_horario(e);
    create_horario_mobile(e)
});

// fetch("../json/planos.json").then(function(e) {
//     return e.json()
// }).then(function(e) {
//     create_planos(e);
//     create_planos_mobile(e)
// });