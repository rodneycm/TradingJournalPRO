/**
 * KPI RENDER MODULE
 *
 * Responsible for rendering KPI cards
 */





export function renderKPICards(kpi) {



    const container =
        document.querySelector(
            "#kpi"
        );



    if (!container) {



        console.warn(
            "KPI container not found"
        );



        return;



    }






    container.innerHTML = `




        <div class="kpi-card">


            <h3>

                Total Trades

            </h3>


            <span>

                ${kpi.totalTrades}

            </span>



        </div>





        <div class="kpi-card">


            <h3>

                Win Rate

            </h3>


            <span>

                ${kpi.winRate}%

            </span>



        </div>







        <div class="kpi-card">


            <h3>

                Profit

            </h3>


            <span>

                ${kpi.profit}

            </span>



        </div>







        <div class="kpi-card">


            <h3>

                Average

            </h3>


            <span>

                ${kpi.average}

            </span>



        </div>





    `;



}