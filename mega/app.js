function vertical() {
    const cb = document.getElementById("checkbox");
    if (cb.checked) {
        document.documentElement.style
            .setProperty('--animation', 'translateX(20%)');
        document.getElementById("worm").style.flexDirection = "column";
        document.getElementById("n10").style.flexDirection = "column";
    } else {
        document.documentElement.style
            .setProperty('--animation', 'translateY(20%)');
        document.getElementById("worm").style.flexDirection = "row";
        document.getElementById("n10").style.flexDirection = "row";
    }
}

function setcolor() {
	document.documentElement.style
		.setProperty('--box-color', clr.value);
}

function setsize() {
    if (sz.value == '') {
        document.documentElement.style
		.setProperty('--worm-size', '50px');
    } else if (isNaN(parseInt(sz.value))) {
	alert("\"" + sz.value + "\" is not a number. Please recheck your input. Note that NO UNITS are needed.")    
    } else {
	document.documentElement.style
            .setProperty('--worm-size', sz.value + 'px');
    }
}

function megaworm() {
    window.location.assign("mega/index.html")
}

function normalworm() {
    window.location.assign("../")
}
