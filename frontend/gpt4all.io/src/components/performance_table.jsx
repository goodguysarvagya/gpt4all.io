import React from "react";

const cols = [
    "Model", "BoolQ", "PIQA", "HellaSwag", "WinoGrande", "ARC-e", "ARC-c", "OBQA", "Avg"
];

const data = {
    "Model": ["GPT4All-J 6.7B v1.0", "GPT4All-J v1.1-breezy", "GPT4All-J v1.2-jazzy", "GPT4All-J v1.3-groovy", "GPT4All-J Lora 6.7B", "GPT4All LLaMa 13B", "GPT4All LLaMa Lora 7B", "Dolly 6B", "Dolly 12B", "Alpaca 7B", "Alpaca Lora 7B", "GPT-J 6.7B", "LLaMa 7B", "LLaMa 13B", "Pythia 6.7B", "Pythia 12B"],
    "BoolQ": [73.4, 74.0, 74.8, 73.6, 68.6, 83.3, 73.1, 68.8, 56.7, 73.9, 74.3, 65.4, 73.1, 68.5, 63.5, 67.7],
    "PIQA": [74.8, 75.1, 74.9, 74.3, 75.8, 79.1, 77.6, 77.3, 75.4, 77.2, 79.3, 76.2, 77.4, 79.1, 76.3, 76.6],
    "HellaSwag": [63.4, 63.2, 63.6, 63.8, 66.2, 75.0, 72.1, 67.6, 71.0, 73.9, 74.0, 66.2, 73.0, 76.2, 64.0, 67.3],
    "WinoGrande": [64.7, 63.6, 63.8, 63.5, 63.5, 71.3, 67.8, 63.9, 62.2, 66.1, 68.8, 64.1, 66.9, 70.1, 61.1, 63.8],
    "ARC-e": [54.9, 55.4, 56.6, 57.7, 56.4, 61.0, 51.1, 62.9, 64.6, 59.8, 56.6, 62.2, 52.5, 60.0, 61.3, 63.9],
    "ARC-c": [36.0, 34.9, 35.3, 35.0, 35.7, 44.2, 40.4, 38.7, 38.5, 43.3, 43.9, 36.6, 41.4, 44.6, 35.2, 34.8],
    "OBQA": [40.2, 38.4, 41.0, 38.8, 40.2, 43.4, 40.2, 41.2, 40.4, 43.4, 42.6, 38.2, 42.4, 42.2, 37.2, 38.0]
}

const avg = array => (array.reduce((a,b) => a+b) / array.length);

const avgCol =  data.Model.map((_, idx) => avg([data.BoolQ[idx], data.PIQA[idx], data.HellaSwag[idx]], data.WinoGrande[idx], data["ARC-e"][idx], data["ARC-c"][idx], data.OBQA[idx]));



const PerformanceTable = (

) =>
{
    return (
        <table className="border w-[800px] table-auto mx-auto">
            <thead>
                <tr className="h-10 bg-black text-white">
                    {
                        cols.map((col, idx) => 
                            <th key={idx}>
                                {col}
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.Model.map((model, idx) =>
                        <tr className={`text-center border-b h-9 ${model === "GPT4All LLaMa 13B"? "bg-slate-200 font-semibold": ""}`}>
                            <td className="border-r">{model}</td>
                            <td className={`${data.BoolQ[idx] === Math.max(...data.BoolQ) && "font-bold"}`}>{data.BoolQ[idx]}</td>
                            <td className={`${data.PIQA[idx] === Math.max(...data.PIQA) && "font-bold"}`}>{data.PIQA[idx]}</td>
                            <td className={`${data.HellaSwag[idx] === Math.max(...data.HellaSwag) && "font-bold"}`}>{data.HellaSwag[idx]}</td>
                            <td className={`${data.WinoGrande[idx] === Math.max(...data.WinoGrande) && "font-bold"}`}>{data.WinoGrande[idx]}</td>
                            <td className={`${data["ARC-e"][idx] === Math.max(...data["ARC-e"]) && "font-bold"}`}>{data["ARC-e"][idx]}</td>
                            <td className={`${data["ARC-c"][idx] === Math.max(...data["ARC-c"]) && "font-bold"}`}>{data["ARC-c"][idx]}</td>
                            <td className={`${data.OBQA[idx] === Math.max(...data.OBQA) && "font-bold"}`}>{data.OBQA[idx]}</td>
                            <td className={`${avgCol[idx] === Math.max(...avgCol) && "font-bold"}`}>{avgCol[idx].toFixed(1)}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default PerformanceTable;