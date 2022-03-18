function openNav() {
    var x = document.getElementById("menu")

    if (x.className === "menu") {
        x.className += " menu-mobile"
    }

    else {
        x.className = "menu"
    }
}

function openSub() {
    var y = document.getElementById("sub")

    if (y.className === "sub") {
        y.className += " sub-menu"
    }

    else {
        y.className = "sub"
    }
}




function sorteio() {
    let res = document.getElementById('res')
    const sor = ["Afrodite", "Apolo", "Ares", "Ártemis", "Atena", "Deméter", "Dionísio", "Hades", "Hefesto", "Hera", "Poseidon", "Hermes", "Hera", "Héstia", "Héstia", "Eros ", "Eros ", "Himeros", "Himeros", "Tália", "Tália", "Tália", "Aglaia", "Boreas", "Noto ", "Euro", "Zéfiro", "Asclépio", "Hebe", "Ilítia", "Hécate", "Hipnos", "Édipo", "Helena", "Belerofonte", "Belerofonte", "Atalanta", "Ulisses", "Hércules", "Perseu", "Teseu", "Aquiles", "Héracles", "Αion", "Ananque", "Caos", "Cronos", "Éter", "Érubus", "Eros", "Gaia", "Hemera", "Hipnos", "Nemesis", "Nesoi", "Nix", "Hipnos", "Óreas", "Ponto", "Tártaro", "Tálassa", "Tanátos", "Urano", "Midgard", "Asgard", "Niflheim", "Vanaheim", "Svartalfheim", "Jotunheim", "Nidavellir", "Muspelheim", "Bifrost", "Yggdrasil", "Valhalla", "Ragnarök", "Odin", "Frigga", "Thor", "Freyr", "Tyr", "Vidar", "Bragi", "Balder", "Njord", "Freya", "Loki", "Hel", "Jotuns", "Nun", "Atum", "Amon", "Aton", "Ptah", "Shu", "Tefnut", "Geb", "Osíris", "Ísis", "Seth", "Néftis", "Hórus", "Tot", "Maat", "Anúbis", "Anuket", "Bastet", "Sokar", "Sekhmet", "Asherah", "Baal", "Adônis", "Astarte", "Ba'al Hammon", "Baal", "Baal-Gade", "Baal-Peor", "Baaltis", "Dagom", "Eshmun", "Kotar", "Melcarte", "Resefe", "Tanit", "Zedeque", "Sucellus", "Taranis", "Cernunnos", "Dea Matrona", "Epona", "Dagda", "Lugh", "Morrigan", "Brigit", "Manannán", "Mac Lir"]
    const random = Math.floor(Math.random() * sor.length)

    res.innerHTML = (random, sor[random])
}