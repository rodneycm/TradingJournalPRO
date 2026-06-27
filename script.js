/* ==========================================================
   TRADING JOURNAL PRO
   Script v0.1
========================================================== */

const App = {

    state: {

        trades: []

    },

    init() {

    this.storage.load();

    this.clock.start();

    this.form.events();

    this.refresh();

},

refresh() {

    this.history.render();

},

    /* ====================================================== */

    storage: {

        load() {

            const data = localStorage.getItem("tradingJournal");

            if (data) {

                App.state.trades = JSON.parse(data);

            }

        },

        save() {

            localStorage.setItem(

                "tradingJournal",

                JSON.stringify(App.state.trades)

            );

        }

    },

    /* ====================================================== */

    clock: {

        start() {

            this.update();

            setInterval(() => {

                this.update();

            }, 1000);

        },

        update() {

            const now = new Date();

            const date = now.toLocaleDateString("pt-BR");

            const time = now.toLocaleTimeString("pt-BR");

            const dateEl = document.getElementById("currentDate");
            const timeEl = document.getElementById("currentTime");

            if (dateEl) dateEl.textContent = date;
            if (timeEl) timeEl.textContent = time;

        }

    },

    /* ====================================================== */

    form: {

        events() {

            const form = document.getElementById("tradeForm");

            form.addEventListener("submit", function (e) {

                e.preventDefault();

                App.form.save();

            });

        },

        save() {

            const trade = {

                id: Date.now(),

                date: document.getElementById("tradeDate").value,

                account: document.getElementById("account").value,

                market: document.getElementById("market").value,

                asset: document.getElementById("asset").value,

                setup: document.getElementById("setup").value,

                side: document.getElementById("side").value,

                contracts: Number(document.getElementById("contracts").value),

                result: Number(document.getElementById("result").value),

                notes: document.getElementById("notes").value

            };

            if (!trade.date) {

                alert("Informe a data.");

                return;

            }

            App.state.trades.push(trade);

App.storage.save();

App.refresh();

document.getElementById("tradeForm").reset();

        }

    },

    /* ====================================================== */

    history: {

    render() {

        const tbody = document.getElementById("historyTable");

            tbody.innerHTML = "";

            App.state.trades
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .forEach(trade => {

                    const tr = document.createElement("tr");

                    const color = trade.result >= 0
                        ? "positive"
                        : "negative";

                    tr.innerHTML = `

                        <td>${trade.date}</td>

                        <td>${trade.account}</td>

                        <td>${trade.asset}</td>

                        <td>${trade.setup}</td>

                        <td class="${color}">
                            $ ${trade.result.toFixed(2)}
                        </td>

                        <td>

                            <button onclick="App.history.remove(${trade.id})">

                                Excluir

                            </button>

                        </td>

                    `;

                    tbody.appendChild(tr);

                });

        },

        remove(id) {

            if (!confirm("Excluir este trade?")) return;

            App.state.trades = App.state.trades.filter(t => t.id !== id);

App.storage.save();

App.refresh();

        }

    }

};

/* ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

