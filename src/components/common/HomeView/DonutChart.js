import React, { useEffect, useState } from 'react'

// Components
import ReactApexChart from "react-apexcharts";
import { getUsdPrice } from '../../../functions/GlobalFunctions';

//Functions
import { getAccountsSeries, getLinkedAccounts, getOptionsColors, getOptionsLabels } from '../../../functions/HomeFunctions';

export default function DonutChart() {
    const [series, setSeries] = useState([])
    const [options, setOptions] = useState({})
    const [firtstFetch, setFirtstFetch] = useState(true)

    useEffect(() => {
        if (firtstFetch) {
            getUsdPrice().then(res => {
                let seriesValue = getAccountsSeries(getLinkedAccounts(), res);
                let optionsValue = getOptionsLabels(getLinkedAccounts());
                let optionsColors = getOptionsColors(getLinkedAccounts());
                setTimeout(() => {
                    setSeries(seriesValue);
                    setOptions(
                        {
                            chart: {
                                width: "100%",
                                height: "100%",
                                type: 'donut',
                            },
                            noData: {
                                text: "No data available",
                                align: 'center',
                                verticalAlign: 'middle',
                                offsetX: 0,
                                offsetY: 0,
                                style: {
                                    color: undefined,
                                    fontSize: '14px',
                                    fontFamily: undefined
                                }
                            },
                            colors: optionsColors,
                            plotOptions: {
                                pie: {
                                    startAngle: -90,
                                    endAngle: 270
                                }
                            },
                            labels: optionsValue,
                            dataLabels: {
                                enabled: false
                            },
                            legend: {
                                position: 'bottom',
                                show: false,
                            },
                            title: {
                                text: '',
                                position: 'left',
                                show: false,
                            },
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    chart: {
                                        width: 300
                                    }
                                }
                            },
                            {
                                breakpoint: 400,
                                options: {
                                    chart: {
                                        width: 250
                                    }
                                }
                            },
                            {
                                breakpoint: 516,
                                options: {
                                    chart: {
                                        width: 250
                                    }
                                }
                            }
                            ],
                        });
                }, 700);
            });
            setFirtstFetch(false)
        }

    }, [firtstFetch, series])

    return (
        <div className='chart-space'>
            {series.length > 0 ?
                <ReactApexChart className="donut-chart" options={options} series={series} type="donut" />
                :
                "Cargando..."
            }
        </div>
    )
}
