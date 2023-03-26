

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentSales: [
        {
            "month": "January",
            "avg": 1023,
            "dl": 479
        },
        {
            "month": "February",
            "avg": 2890,
            "dl": 993
        },
        {
            "month": "March",
            "avg": 3876,
            "dl": 1290
        },
        {
            "month": "April",
            "avg": 2994,
            "dl": 1279
        },
        {
            "month": "May",
            "avg": 3029,
            "dl": 1441
        },
        {
            "month": "June",
            "avg": 3295,
            "dl": 1538
        },
    ],
    topSellingProducts: [
        {
            id: "rge56414",
            product: "headphone",
            amount: 59.99,
            img: "https://m.media-amazon.com/images/I/61kV3qWxT-L._AC_UY327_FMwebp_QL65_.jpg",
            totalSales: 248,
            stock: 1257,
        },
        {
            id: "rge56464",
            product: "microphone",
            amount: 129.99,
            img: "https://m.media-amazon.com/images/I/61HWZsE5YNL._AC_UL480_FMwebp_QL65_.jpg",
            totalSales: 49,
            stock: 994,
        },
        {
            id: "rge56434",
            product: "yellow watch",
            amount: 59.99,
            img: "https://m.media-amazon.com/images/I/61UeaSp4DiL._AC_UL480_FMwebp_QL65_.jpg",
            totalSales: 29,
            stock: 1493,
        }
        ,
        {
            id: "rge52364",
            product: "table",
            amount: 49.99,
            img: "https://m.media-amazon.com/images/I/61cnWLJBxuL._AC_UL480_FMwebp_QL65_.jpg",
            totalSales: 19,
            stock: 447
        },
        {
            id: "rge89464",
            product: "Keyboard",
            amount: 39.99,
            img: "https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SX679_.jpg",
            totalSales: 94,
            stock: 426,
        }
    ],
    monthlySales: [
        {
            "id": "headphone",
            "label": "headphone",
            "value": 47,
            "color": "rgb(9, 166, 169)"
        },
        {
            "id": "microphone",
            "label": "microphone",
            "value": 171,
            "color": "hsl(231, 70%, 50%)"
        },
        {
            "id": "keyboard",
            "label": "keyboard",
            "value": 411,
            "color": "hsl(232, 70%, 50%)"
        },
        {
            "id": "watch",
            "label": "watch",
            "value": 422,
            "color": "hsl(256, 70%, 50%)"
        },
        {
            "id": "table",
            "label": "table",
            "value": 80,
            "color": "rgb(115, 50, 148)"
        }
    ],
    salesbyLocations: [
        {
            id: "AFG",
            value: 600,
        },
        {
            id: "AGO",
            value: 9905,
        },
        {
            id: "ALB",
            value: 9910,
        },
        {
            id: "ARE",
            value: 5484,
        },
        {
            id: "ARG",
            value: 2239,
        },
        {
            id: "ARM",
            value: 8305,
        },
        {
            id: "ATF",
            value: 5159,
        },
        {
            id: "AUT",
            value: 8526,
        },
        {
            id: "AZE",
            value: 81678,
        },
        {
            id: "BDI",
            value: 6457,
        },
        {
            id: "BEL",
            value: 2276,
        },
        {
            id: "BEN",
            value: 40315,
        },
        {
            id: "BFA",
            value: 43752,
        },
        {
            id: "BGD",
            value: 20203,
        },
        {
            id: "BGR",
            value: 1196,
        },
        {
            id: "BHS",
            value: 1551,
        },
        {
            id: "BIH",
            value: 4745,
        },
        {
            id: "BLR",
            value: 9288,
        },
        {
            id: "BLZ",
            value: 5983,
        },
        {
            id: "BOL",
            value: 30840,
        },
        {
            id: "BRN",
            value: 45666,
        },
        {
            id: "BTN",
            value: 49678,
        },
        {
            id: "BWA",
            value: 19392,
        },
        {
            id: "CAF",
            value: 222549,
        },
        {
            id: "AUS",
            value: 542432
        },
        {
            id: "BRA",
            value: 732441
        },
        {
            id: "SWE",
            value: 311458
        },
        {
            id: "CAN",
            value: 632843,
        },
        {
            id: "CHE",
            value: 22159,
        },
        {
            id: "CHL",
            value: 221736,
        },
        {
            id: "CHN",
            value: 293604,
        },
        {
            id: "CIV",
            value: 143219,
        },
        {
            id: "CMR",
            value: 30627,
        },
        {
            id: "COG",
            value: 198556,
        },
        {
            id: "COL",
            value: 660527,
        },
        {
            id: "CRI",
            value: 60262,
        },
        {
            id: "CUB",
            value: 177870,
        },
        {
            id: "-99",
            value: 463208,
        },
        {
            id: "CYP",
            value: 945909,
        },
        {
            id: "CZE",
            value: 500109,
        },
        {
            id: "DEU",
            value: 1163345,
        },
        {
            id: "DJI",
            value: 4523,
        },
        {
            id: "DNK",
            value: 731068,
        },
        {
            id: "DOM",
            value: 262538,
        },
        {
            id: "DZA",
            value: 3695,
        },
        {
            id: "ECU",
            value: 301263,
        },
        {
            id: "EGY",
            value: 148475,
        },
        {
            id: "ERI",
            value: 9504,
        },
        {
            id: "ESP",
            value: 706050,
        },
        {
            id: "EST",
            value: 227015,
        },
        {
            id: "ETH",
            value: 61734,
        },
        {
            id: "FIN",
            value: 422800,
        },
        {
            id: "FJI",
            value: 18985,
        },
        {
            id: "FLK",
            value: 64986,
        },
        {
            id: "FRA",
            value: 547457,
        },
        {
            id: "GAB",
            value: 69675,
        },
        {
            id: "GBR",
            value: 957120,
        },
        {
            id: "GEO",
            value: 158702,
        },
        {
            id: "GHA",
            value: 93180,
        },
        {
            id: "GIN",
            value: 7288,
        },
        {
            id: "GMB",
            value: 24530,
        },
        {
            id: "GNB",
            value: 387753,
        },
        {
            id: "GNQ",
            value: 6118,
        },
        {
            id: "GRC",
            value: 377796,
        },
        {
            id: "GTM",
            value: 66890,
        },
        {
            id: "GUY",
            value: 719300,
        },
        {
            id: "HND",
            value: 139590,
        },
        {
            id: "HRV",
            value: 229467,
        },
        {
            id: "HTI",
            value: 538961,
        },
        {
            id: "HUN",
            value: 146095,
        },
        {
            id: "IDN",
            value: 490681,
        },
        {
            id: "IND",
            value: 649818,
        },
        {
            id: "IRL",
            value: 630163,
        },
        {
            id: "IRN",
            value: 196921,
        },
        {
            id: "IRQ",
            value: 67023,
        },
        {
            id: "ISL",
            value: 278682,
        },
        {
            id: "ISR",
            value: 363688,
        },
        {
            id: "ITA",
            value: 393089,
        },
        {
            id: "JAM",
            value: 83173,
        },
        {
            id: "JOR",
            value: 52005,
        },
        {
            id: "JPN",
            value: 899174,
        },
        {
            id: "KAZ",
            value: 181424,
        },
        {
            id: "KEN",
            value: 60946,
        },
        {
            id: "KGZ",
            value: 432478,
        },
        {
            id: "KHM",
            value: 254461,
        },
        {
            id: "OSA",
            value: 942447,
        },
        {
            id: "KWT",
            value: 414413,
        },
        {
            id: "LAO",
            value: 448339,
        },
        {
            id: "LBN",
            value: 620090,
        },
        {
            id: "LBR",
            value: 435950,
        },
        {
            id: "LBY",
            value: 75091,
        },
        {
            id: "LKA",
            value: 595124,
        },
        {
            id: "LSO",
            value: 483524,
        },
        {
            id: "LTU",
            value: 267357,
        },
        {
            id: "LUX",
            value: 489172,
        },
        {
            id: "LVA",
            value: 442980,
        },
        {
            id: "MAR",
            value: 236538,
        },
        {
            id: "MDA",
            value: 126836,
        },
        {
            id: "MDG",
            value: 2840,
        },
        {
            id: "MEX",
            value: 353910,
        },
        {
            id: "MKD",
            value: 105842,
        },
        {
            id: "MLI",
            value: 286082,
        },
        {
            id: "MMR",
            value: 5544,
        },
        {
            id: "MNE",
            value: 29500,
        },
        {
            id: "MNG",
            value: 410428,
        },
        {
            id: "MOZ",
            value: 32868,
        },
        {
            id: "MRT",
            value: 375671,
        },
        {
            id: "MWI",
            value: 1935,
        },
        {
            id: "MYS",
            value: 231644,
        },
        {
            id: "NAM",
            value: 41897,
        },
        {
            id: "NCL",
            value: 144098,
        },
        {
            id: "NER",
            value: 312944,
        },
        {
            id: "NGA",
            value: 2877,
        },
        {
            id: "NIC",
            value: 90831,
        },
        {
            id: "NLD",
            value: 281879,
        },
        {
            id: "NOR",
            value: 224537,
        },
        {
            id: "NPL",
            value: 322331,
        },
        {
            id: "NZL",
            value: 86615,
        },
        {
            id: "OMN",
            value: 97881,
        },
        {
            id: "PAK",
            value: 158577,
        },
        {
            id: "PAN",
            value: 738579,
        },
        {
            id: "PER",
            value: 248751,
        },
        {
            id: "PHL",
            value: 557292,
        },
        {
            id: "PNG",
            value: 516874,
        },
        {
            id: "POL",
            value: 682137,
        },
        {
            id: "PRI",
            value: 957399,
        },
        {
            id: "PRT",
            value: 446430,
        },
        {
            id: "PRY",
            value: 720555,
        },
        {
            id: "QAT",
            value: 478726,
        },
        {
            id: "ROU",
            value: 259318,
        },
        {
            id: "RUS",
            value: 368735,
        },
        {
            id: "RWA",
            value: 136781,
        },
        {
            id: "ESH",
            value: 151957,
        },
        {
            id: "SAU",
            value: 111821,
        },
        {
            id: "SDN",
            value: 27112,
        },
        {
            id: "SDS",
            value: 6473,
        },
        {
            id: "SEN",
            value: 158085,
        },
        {
            id: "SLB",
            value: 178389,
        },
        {
            id: "SLE",
            value: 528433,
        },
        {
            id: "SLV",
            value: 353467,
        },
        {
            id: "ABV",
            value: 251,
        },
        {
            id: "SOM",
            value: 45243,
        },
        {
            id: "SRB",
            value: 202402,
        },
        {
            id: "SUR",
            value: 2121,
        },
        {
            id: "SVK",
            value: 319923,
        },
        {
            id: "SVN",
            value: 728766,
        },
        {
            id: "SWZ",
            value: 379669,
        },
        {
            id: "SYR",
            value: 16221,
        },
        {
            id: "TCD",
            value: 101273,
        },
        {
            id: "TGO",
            value: 498411,
        },
        {
            id: "THA",
            value: 506906,
        },
        {
            id: "TJK",
            value: 613093,
        },
        {
            id: "TKM",
            value: 327016,
        },
        {
            id: "TLS",
            value: 607972,
        },
        {
            id: "TTO",
            value: 36365,
        },
        {
            id: "TUN",
            value: 8416,
        },
        {
            id: "TUR",
            value: 597783,
        },
        {
            id: "TWN",
            value: 878213,
        },
        {
            id: "TZA",
            value: 442174,
        },
        {
            id: "UGA",
            value: 20710,
        },
        {
            id: "UKR",
            value: 274172,
        },
        {
            id: "URY",
            value: 753177,
        },
        {
            id: "USA",
            value: 1458725,
        },
        {
            id: "UZB",
            value: 550313,
        },
        {
            id: "VEN",
            value: 707492,
        },
        {
            id: "VNM",
            value: 538907,
        },
        {
            id: "VUT",
            value: 650646,
        },
        {
            id: "PSE",
            value: 476078,
        },
        {
            id: "YEM",
            value: 7751,
        },
        {
            id: "ZAF",
            value: 236949,
        },
        {
            id: "ZMB",
            value: 14503,
        },
        {
            id: "ZWE",
            value: 405217,
        },
        {
            id: "KOR",
            value: 671135,
        },
    ]

}

export const salesSlice = createSlice({
    name: "sales",
    initialState,
})

export default salesSlice.reducer