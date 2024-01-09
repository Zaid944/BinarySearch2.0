export const doughnutLabel = {
  id: "doughnutLabel",
  beforeDatasetsDraw(chart) {
    const { ctx } = chart;

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = "15px system-ui";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Total Problems Solved : 100", xCoor, yCoor);
  },
};

export const options = {
  plugins: {
    tooltip: {
      backgroundColor: "rgb(30 41 59)",
    },
    legend: {
      position: "right",
      labels: {
        color: "white",
      },
    },
    animation: {
      animateRotate: true,
    },
  },
};

export const data = {
  labels: ["Easy", "Medium", "Hard"],
  datasets: [
    {
      label: "# of Problems",
      data: [40, 40, 20],
      backgroundColor: [
        "rgb(74 222 128)",
        "rgb(250 204 21)",
        "rgb(248 113 113)",
      ],
      borderColor: ["rgb(74 222 128)", "rgb(250 204 21)", "rgb(248 113 113)"],
      borderWidth: 1,
      cutout: "80%",
      hoverOffset: 5,
      radius: 120,
    },
  ],
};
