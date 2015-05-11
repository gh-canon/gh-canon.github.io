(function () {

<<<<<<< HEAD
	if (!console) window.console = {};

	var _log = console.log;
	var _error = console.error;
	var _warn = console.warn;
	var _clear = console.clear;
	var wrapper = document.createElement("div");
	var div = document.createElement("div");
	var style = document.createElement("style");
	var maxEntries = 50;

	wrapper.className = "as-console-wrapper";
	div.className = "as-console";

	document.body.appendChild(wrapper).appendChild(div);

	style.type = "text/css";
	style.textContent = [
    ".as-console-wrapper { position: fixed; bottom: 0; left: 0; right: 0; max-height: 150px; overflow-y: scroll; overflow-x: hidden; border-top: 1px solid #000; display: none; }",
    ".as-console { background: #e9e9e9; border: 1px solid #ccc; display: table; width: 100%; counter-reset: console-row; border-collapse: collapse; }",
    ".as-console-row { display: table-row; counter-increment: console-row; font-family: monospace; font-size: 13px; }",
    ".as-console-row:after { display: table-cell; padding: 3px 6px; color: rgba(0,0,0,.35); border: 1px solid #ccc; content: attr(data-date); }",
=======
    if (!console) window.console = {};

    var _log = console.log;
    var _error = console.error;
    var _warn = console.warn;
    var _clear = console.clear;
    var wrapper = document.createElement("div");
    var div = document.createElement("div");
    var style = document.createElement("style");

    wrapper.className = "as-console-wrapper";
    div.className = "as-console";

    document.body.appendChild(wrapper).appendChild(div);

    style.type = "text/css";
    style.textContent = [
    ".as-console-wrapper { position: fixed; bottom: 0; left: 0; right: 0; max-height: 120px; overflow-y: scroll; overflow-x: hidden; border-top: 1px solid #000; display: none; }",
    ".as-console { background: #e9e9e9; border: 1px solid #ccc; display: table; width: 100%; counter-reset: console-row; border-collapse: collapse; }",
    ".as-console-row { display: table-row; counter-increment: console-row; font-family: monospace; font-size: 13px; }",
    ".as-console-row:before, .as-console-row:after { display: table-cell; padding: 3px 6px; content: counter(console-row); color: #bbb; border: 1px solid #ccc; }",
    ".as-console-row:after { content: attr(data-date); }",
>>>>>>> origin/master
    ".as-console-row + .as-console-row > * { border: 1px solid #ccc; }",
    ".as-console-row-code { width: 100%; white-space: pre-wrap; padding: 3px 5px; display: table-cell; font-family: monospace; font-size: 13px; }",
    ".as-console-error:before { content: 'Error: '; color: #f00  }",
    ".as-console-warning:before { content: 'Warning: '; color: #e90 }",
    "@-webkit-keyframes flash { 0% { background: rgba(255,240,0,.25); } 100% { background: none; } }",
    "@-moz-keyframes flash { 0% { background: rgba(255,240,0,.25); } 100% { background: none; } }",
    "@-ms-keyframes flash { 0% { background: rgba(255,240,0,.25); } 100% { background: none; } }",
    "@keyframes flash { 0% { background: rgba(255,240,0,.25); } 100% { background: none; } }",
    ".as-console-row code, .as-console-row:before, .as-console-row:after { -webkit-animation: flash 1s; -moz-animation: flash 1s; -ms-animation: flash 1s; animation: flash 1s; }"].join("\n");

<<<<<<< HEAD
	document.head.appendChild(style);

	function getString(val, wrapString) {
		if (typeof val === "string") {
			return wrapString ? '"' + val + '"' : val;
		} else if (val == null || typeof val === "number" || typeof val === "function") {
			return "" + val;
		} else if (val instanceof Date) {
			return val.toJSON();
		} else if (val instanceof HTMLElement) {
			return val.outerHTML;
		} else {
			try {
				return JSON.stringify(val, function (k, v) {
					if (v instanceof HTMLElement) {
						return v.outerHTML;
					} else if (typeof v === "function") {
						return "" + v;
					} else if (typeof v == "string") {
						var a = /^\/Date\((-?\d*)(\-\d+)?\)\/$/.exec(v);
						if (a) {
							return new Date(+a[1]).toJSON();
						}
					}
					return v;
				}, "  ");
			} catch (err) {
				return Object.prototype.toString.call(val);
			}
		}
	}

	function formatDate(d) {
		d = new Date(d.valueOf() - d.getTimezoneOffset() * 60000);
		return d.toISOString().replace("Z", "").replace("T", " ");
	}

	function format() {
		var i = 0,
=======
    document.head.appendChild(style);

    function getString(val, wrapString) {
        if (typeof val === "string") {
            return wrapString ? '"' + val + '"' : val;
        } else if (val == null || typeof val === "number" || typeof val === "function") {
            return "" + val;
        } else if (val instanceof Date) {
            return val.toJSON();
        } else if (val instanceof HTMLElement) {
            return val.outerHTML;
        } else {
            try {
                return JSON.stringify(val, function (k, v) {
                    if (v instanceof HTMLElement) {
                        return v.outerHTML;
                    } else if (typeof v === "function") {
                        return "" + v;
                    } else if (typeof v == "string") {
                        var a = /^\/Date\((-?\d*)(\-\d+)?\)\/$/.exec(v);
                        if (a) {
                            return new Date(+a[1]).toJSON();
                        }
                    }
                    return v;
                }, "  ");
            } catch (err) {
                return Object.prototype.toString.call(val);
            }
        }
    }

    function formatDate(d) {
        d = new Date(d.valueOf() - d.getTimezoneOffset() * 60000);
        return d.toISOString().replace("Z", "").replace("T", " ");
    }

    function format() {
        var i = 0,
>>>>>>> origin/master
            val,
            args = arguments;

        return args[0].replace(/(%?%[sdifoO])/g, function (c) {

            if (c.length === 3) return c;

            val = args[++i];

            if (val == null) {
                return "" + val;
            }

            switch (c.charAt(1)) {
                case "s":
                    return val;
                case "d":
                case "i":
                    return typeof val === "number" ? Math.floor(val) : "NaN";
                case "f":
                    return typeof val === "number" ? val : "NaN";
                default:
                    return getString(val, true);
            }
        });
    }

<<<<<<< HEAD
	function truncateEntries() {
		while (div.childNodes.length > maxEntries) {
			div.removeChild(div.firstChild);
		}
	}

	function createLogEntry() {

		var args = arguments;		
=======
    function createLogEntry() {

        var args = arguments;
>>>>>>> origin/master

        var row = document.createElement("div");
        row.className = "as-console-row";

        row.setAttribute("data-date", formatDate(new Date()));

        var code = row.appendChild(document.createElement("code"));
        code.className = "as-console-row-code";

        if (typeof args[0] === "string" && args.length > 1 && /((^|[^%])%[sdifoO])/.test(args[0])) {
            code.textContent = format.apply(null, args);
        } else {
            code.textContent = [].map.call(args, getString).join(" ");
        }

        div.appendChild(row);

<<<<<<< HEAD
		truncateEntries();

		wrapper.scrollTop = row.offsetTop;
=======
        wrapper.scrollTop = row.offsetTop;
>>>>>>> origin/master

        return row;
    }

<<<<<<< HEAD
	function showConsole(show) {
		wrapper.style.display = show ? "block" : "none";
	}

	console.log = function () {
=======
    function showConsole(show) {
        wrapper.style.display = show ? "block" : "none";
    }
>>>>>>> origin/master

    console.log = function () {

        var args = arguments;

        _log && _log.apply(console, args);

<<<<<<< HEAD
		showConsole(1);

	};

	console.warn = function () {

		var args = arguments;

		_warn && _warn.apply(console, args);

		createLogEntry.apply(null, args)
            .children[0].classList.add("as-console-warning");

		showConsole(1);

	};

	console.error = function () {

		var args = arguments;

		_error && _error.apply(console, args);

		var entry;
		var e = args[0];

		if (e instanceof Error) {
			entry = createLogEntry({
				message: e.message,
				filename: e.filename,
				lineno: e.lineno,
				colno: e.colno
			});
		} else {
			entry = createLogEntry.apply(null, args)
		}

		entry.children[0].classList.add("as-console-error");

		showConsole(1);

	};

	console.clear = function () {

		while (div.lastChild) {
			div.removeChild(div.lastChild);
		}

		_clear && _clear.apply(console, arguments);

		showConsole(0);

	};

	console.config = function (settings) {

		if (typeof settings === "object") {

			if (settings.maxEntries > 0) {
				maxEntries = settings.maxEntries;
				truncateEntries();
			}
		}

		console.log({
			maxEntries: maxEntries
		});
	}

	window.addEventListener("error", function (e) {
		createLogEntry({
			message: e.message,
			filename: e.filename,
			lineno: e.lineno,
			colno: e.colno
		}).children[0].classList.add("as-console-error");
	});
=======
        createLogEntry.apply(null, args);

        showConsole(1);

    };

    console.warn = function () {

        var args = arguments;

        _warn && _warn.apply(console, args);

        createLogEntry.apply(null, args)
            .children[0].classList.add("as-console-warning");

        showConsole(1);

    };

    console.error = function () {

        var args = arguments;

        _error && _error.apply(console, args);

        var entry;
        var e = args[0];

        if (e instanceof Error) {
            entry = createLogEntry({
                message: e.message,
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno
            });
        } else {
            entry = createLogEntry.apply(null, args)
        }

        entry.children[0].classList.add("as-console-error");

        showConsole(1);

    };

    console.clear = function () {

        while (div.lastChild) {
            div.removeChild(div.lastChild);
        }

        _clear && _clear.apply(console, arguments);

        showConsole(0);

    };

    window.addEventListener("error", function (e) {
        createLogEntry({
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno
        }).children[0].classList.add("as-console-error");
    });
>>>>>>> origin/master

})();