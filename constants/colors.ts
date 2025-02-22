export interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
}

export interface ColorPalette {
  name: string;
  colors: ColorSwatch[];
}

export const colorPalettes: ColorPalette[] = [
  {
    name: "Background",
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        rgb: "rgb(255, 255, 255)",
        hsl: "hsl(0, 0, 100)"
      },
      {
        name: "Gray/950",
        hex: "#0C111D",
        rgb: "rgb(12, 17, 29)",
        hsl: "hsl(222, 41, 8)"
      }
    ]
  },
  {
    name: "Primary",
    colors: [
      {
        name: "25",
        hex: "#F5F4FE",
        rgb: "rgb(245, 244, 254)",
        hsl: "hsl(252, 83, 98)"
      },
      {
        name: "50",
        hex: "#F5F4FE",
        rgb: "rgb(244, 244, 254)",
        hsl: "hsl(252, 83, 98)"
      },
      {
        name: "100",
        hex: "#EFEDF7",
        rgb: "rgb(239, 235, 252)",
        hsl: "hsl(254, 74, 95)"
      },
      {
        name: "200",
        hex: "#DFDBF9",
        rgb: "rgb(223, 219, 249)",
        hsl: "hsl(248, 71, 92)"
      },
      {
        name: "300",
        hex: "#C8BDF5",
        rgb: "rgb(200, 189, 245)",
        hsl: "hsl(252, 74, 85)"
      },
      {
        name: "400",
        hex: "#A49BED",
        rgb: "rgb(171, 152, 237)",
        hsl: "hsl(253, 70, 76)"
      },
      {
        name: "500",
        hex: "#9547E5",
        rgb: "rgb(148, 116, 229)",
        hsl: "hsl(257, 68, 68)"
      },
      {
        name: "600",
        hex: "#7F74FD",
        rgb: "rgb(127, 79, 216)",
        hsl: "hsl(261, 64, 58)"
      },
      {
        name: "700",
        hex: "#5F3DC4",
        rgb: "rgb(111, 61, 196)",
        hsl: "hsl(262, 53, 50)"
      },
      {
        name: "800",
        hex: "#5D33A4",
        rgb: "rgb(93, 51, 164)",
        hsl: "hsl(262, 52, 42)"
      },
      {
        name: "900",
        hex: "#4D28B7",
        rgb: "rgb(77, 43, 135)",
        hsl: "hsl(262, 52, 35)"
      },
      {
        name: "950",
        hex: "#301A5B",
        rgb: "rgb(48, 26, 91)",
        hsl: "hsl(248, 56, 23)"
      }
    ]
  },
  {
    name: "Gray",
    colors: [
      {
        name: "25",
        hex: "#FCFCFD",
        rgb: "rgb(252, 252, 253)",
        hsl: "hsl(240, 20, 99)"
      },
      {
        name: "50",
        hex: "#F9FAFB",
        rgb: "rgb(249, 250, 251)",
        hsl: "hsl(210, 20, 98)"
      },
      {
        name: "100",
        hex: "#F2F4F7",
        rgb: "rgb(242, 244, 247)",
        hsl: "hsl(216, 24, 96)"
      },
      {
        name: "200",
        hex: "#EAECF0",
        rgb: "rgb(234, 236, 240)",
        hsl: "hsl(220, 17, 93)"
      },
      {
        name: "300",
        hex: "#D0D5DD",
        rgb: "rgb(208, 213, 221)",
        hsl: "hsl(217, 16, 84)"
      },
      {
        name: "400",
        hex: "#98A2B3",
        rgb: "rgb(152, 162, 179)",
        hsl: "hsl(218, 15, 65)"
      },
      {
        name: "500",
        hex: "#667085",
        rgb: "rgb(102, 112, 133)",
        hsl: "hsl(221, 13, 46)"
      },
      {
        name: "600",
        hex: "#475467",
        rgb: "rgb(71, 84, 103)",
        hsl: "hsl(216, 18, 34)"
      },
      {
        name: "700",
        hex: "#344054",
        rgb: "rgb(52, 64, 84)",
        hsl: "hsl(218, 24, 27)"
      },
      {
        name: "800",
        hex: "#1B2230",
        rgb: "rgb(24, 34, 48)",
        hsl: "hsl(215, 33, 14)"
      },
      {
        name: "900",
        hex: "#101828",
        rgb: "rgb(16, 24, 40)",
        hsl: "hsl(220, 43, 11)"
      },
      {
        name: "950",
        hex: "#0C111D",
        rgb: "rgb(12, 17, 29)",
        hsl: "hsl(222, 41, 8)"
      }
    ]
  },
  {
    name: "Info",
    colors: [
      {
        name: "25",
        hex: "#F5FAFF",
        rgb: "rgb(245, 250, 255)",
        hsl: "hsl(210, 100, 98)"
      },
      {
        name: "50",
        hex: "#F0F9FF",
        rgb: "rgb(240, 249, 255)",
        hsl: "hsl(204, 100, 97)"
      },
      {
        name: "100",
        hex: "#E0F2FE",
        rgb: "rgb(224, 242, 254)",
        hsl: "hsl(204, 94, 94)"
      },
      {
        name: "200",
        hex: "#BAE6FD",
        rgb: "rgb(186, 230, 253)",
        hsl: "hsl(201, 94, 86)"
      },
      {
        name: "300",
        hex: "#7DD3FC",
        rgb: "rgb(125, 211, 252)",
        hsl: "hsl(199, 95, 74)"
      },
      {
        name: "400",
        hex: "#38BDF8",
        rgb: "rgb(56, 189, 248)",
        hsl: "hsl(198, 93, 60)"
      },
      {
        name: "500",
        hex: "#2196F3",
        rgb: "rgb(33, 150, 243)",
        hsl: "hsl(207, 90, 54)"
      },
      {
        name: "600",
        hex: "#0284C7",
        rgb: "rgb(2, 132, 199)",
        hsl: "hsl(201, 98, 39)"
      },
      {
        name: "700",
        hex: "#0369A1",
        rgb: "rgb(3, 105, 161)",
        hsl: "hsl(201, 96, 32)"
      },
      {
        name: "800",
        hex: "#075985",
        rgb: "rgb(7, 89, 133)",
        hsl: "hsl(201, 90, 27)"
      },
      {
        name: "900",
        hex: "#0C4A6E",
        rgb: "rgb(12, 74, 110)",
        hsl: "hsl(202, 80, 24)"
      },
      {
        name: "950",
        hex: "#082F49",
        rgb: "rgb(8, 47, 73)",
        hsl: "hsl(205, 80, 16)"
      }
    ]
  },
  {
    name: "Success",
    colors: [
      {
        name: "25",
        hex: "#F6FEF9",
        rgb: "rgb(246, 254, 249)",
        hsl: "hsl(142, 80, 98)"
      },
      {
        name: "50",
        hex: "#ECFCF2",
        rgb: "rgb(237, 252, 242)",
        hsl: "hsl(140, 71, 96)"
      },
      {
        name: "100",
        hex: "#D3F8DF",
        rgb: "rgb(211, 248, 233)",
        hsl: "hsl(139, 73, 90)"
      },
      {
        name: "200",
        hex: "#AAF5C4",
        rgb: "rgb(170, 245, 196)",
        hsl: "hsl(142, 70, 80)"
      },
      {
        name: "300",
        hex: "#73E2A3",
        rgb: "rgb(115, 226, 163)",
        hsl: "hsl(146, 66, 67)"
      },
      {
        name: "400",
        hex: "#32C87F",
        rgb: "rgb(60, 203, 127)",
        hsl: "hsl(148, 58, 52)"
      },
      {
        name: "500",
        hex: "#16B364",
        rgb: "rgb(22, 179, 100)",
        hsl: "hsl(150, 78, 39)"
      },
      {
        name: "600",
        hex: "#099250",
        rgb: "rgb(9, 146, 80)",
        hsl: "hsl(151, 88, 30)"
      },
      {
        name: "700",
        hex: "#087443",
        rgb: "rgb(8, 116, 67)",
        hsl: "hsl(153, 87, 24)"
      },
      {
        name: "800",
        hex: "#065C37",
        rgb: "rgb(6, 92, 55)",
        hsl: "hsl(153, 82, 20)"
      },
      {
        name: "900",
        hex: "#064C2E",
        rgb: "rgb(6, 76, 46)",
        hsl: "hsl(154, 81, 16)"
      },
      {
        name: "950",
        hex: "#052E1C",
        rgb: "rgb(5, 46, 28)",
        hsl: "hsl(154, 89, 10)"
      }
    ]
  },
  {
    name: "Warning",
    colors: [
      {
        name: "25",
        hex: "#FFF5F5",
        rgb: "rgb(255, 235, 245)",
        hsl: "hsl(42, 100, 98)"
      },
      {
        name: "50",
        hex: "#FFFAB8",
        rgb: "rgb(255, 250, 235)",
        hsl: "hsl(45, 100, 96)"
      },
      {
        name: "100",
        hex: "#FEF0C7",
        rgb: "rgb(254, 240, 199)",
        hsl: "hsl(45, 96, 89)"
      },
      {
        name: "200",
        hex: "#FEDF89",
        rgb: "rgb(254, 223, 137)",
        hsl: "hsl(44, 96, 77)"
      },
      {
        name: "300",
        hex: "#FEC84B",
        rgb: "rgb(254, 200, 75)",
        hsl: "hsl(42, 99, 65)"
      },
      {
        name: "400",
        hex: "#FDB022",
        rgb: "rgb(253, 176, 34)",
        hsl: "hsl(38, 96, 56)"
      },
      {
        name: "500",
        hex: "#F79009",
        rgb: "rgb(247, 144, 9)",
        hsl: "hsl(34, 94, 50)"
      },
      {
        name: "600",
        hex: "#DC6803",
        rgb: "rgb(220, 104, 3)",
        hsl: "hsl(28, 97, 44)"
      },
      {
        name: "700",
        hex: "#B54708",
        rgb: "rgb(181, 71, 8)",
        hsl: "hsl(22, 92, 37)"
      },
      {
        name: "800",
        hex: "#93370D",
        rgb: "rgb(147, 55, 13)",
        hsl: "hsl(19, 84, 31)"
      },
      {
        name: "900",
        hex: "#7A2E0E",
        rgb: "rgb(122, 46, 14)",
        hsl: "hsl(18, 79, 27)"
      },
      {
        name: "950",
        hex: "#4E1D09",
        rgb: "rgb(78, 29, 9)",
        hsl: "hsl(17, 79, 17)"
      }
    ]
  },
  {
    name: "Error",
    colors: [
      {
        name: "25",
        hex: "#FFFBFA",
        rgb: "rgb(255, 251, 250)",
        hsl: "hsl(12, 100, 99)"
      },
      {
        name: "50",
        hex: "#FEF3F2",
        rgb: "rgb(254, 243, 242)",
        hsl: "hsl(8, 86, 97)"
      },
      {
        name: "100",
        hex: "#FEE4E2",
        rgb: "rgb(254, 228, 226)",
        hsl: "hsl(4, 93, 94)"
      },
      {
        name: "200",
        hex: "#FECDCA",
        rgb: "rgb(254, 205, 202)",
        hsl: "hsl(3, 96, 89)"
      },
      {
        name: "300",
        hex: "#FDA29B",
        rgb: "rgb(253, 162, 155)",
        hsl: "hsl(4, 96, 80)"
      },
      {
        name: "400",
        hex: "#F97066",
        rgb: "rgb(249, 112, 102)",
        hsl: "hsl(4, 92, 69)"
      },
      {
        name: "500",
        hex: "#F04438",
        rgb: "rgb(240, 68, 56)",
        hsl: "hsl(4, 86, 58)"
      },
      {
        name: "600",
        hex: "#D92D20",
        rgb: "rgb(217, 45, 32)",
        hsl: "hsl(4, 74, 49)"
      },
      {
        name: "700",
        hex: "#B42318",
        rgb: "rgb(180, 35, 24)",
        hsl: "hsl(4, 76, 40)"
      },
      {
        name: "800",
        hex: "#912018",
        rgb: "rgb(145, 32, 24)",
        hsl: "hsl(4, 72, 33)"
      },
      {
        name: "900",
        hex: "#7A271A",
        rgb: "rgb(122, 39, 26)",
        hsl: "hsl(5, 70, 29)"
      },
      {
        name: "950",
        hex: "#55160C",
        rgb: "rgb(85, 22, 12)",
        hsl: "hsl(7, 75, 19)"
      }
    ]
  }
];
