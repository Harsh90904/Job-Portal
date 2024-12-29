// import { navbar } from "../components/navbar.js";
// document.getElementById("navbar").innerHTML = navbar();

// const countriesData = {
//     US: {
//         states: {
//             California: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
//             Texas: ["Houston", "Dallas", "Austin", "San Antonio"],
//             Florida: ["Miami", "Orlando", "Tampa", "Jacksonville"],
//             NewYork: ["New York City", "Buffalo", "Rochester", "Albany"]
//         }
//     },
//     UK: {
//         states: {
//             England: ["London", "Manchester", "Birmingham", "Liverpool"],
//             Scotland: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
//             Wales: ["Cardiff", "Swansea", "Newport", "Wrexham"],
//             NorthernIreland: ["Belfast", "Derry", "Lisburn", "Newry"]
//         }
//     },
//     INDIA: {
//         states: {
//             Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
//             Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
//             Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
//             TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
//             Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"]
//         }
//     },
//     CANADA: {
//         states: {
//             Ontario: ["Toronto", "Ottawa", "Hamilton", "Kitchener"],
//             Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge"],
//             BritishColumbia: ["Vancouver", "Victoria", "Surrey", "Kelowna"],
//             Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau"]
//         }
//     },
//     AUSTRALIA: {
//         states: {
//             NewSouthWales: ["Sydney", "Newcastle", "Wollongong", "Dubbo"],
//             Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
//             Queensland: ["Brisbane", "Gold Coast", "Cairns", "Townsville"],
//             WesternAustralia: ["Perth", "Fremantle", "Albany", "Bunbury"]
//         }
//     },
//     GERMANY: {
//         states: {
//             Bavaria: ["Munich", "Nuremberg", "Augsburg", "Regensburg"],
//             Berlin: ["Berlin"],
//             Hamburg: ["Hamburg"],
//             NorthRhineWestphalia: ["Cologne", "Düsseldorf", "Dortmund", "Essen"]
//         }
//     },
//     FRANCE: {
//         states: {
//             ÎleDeFrance: ["Paris", "Versailles", "Boulogne-Billancourt", "Saint-Denis"],
//             ProvenceAlpesCôteDAzur: ["Marseille", "Nice", "Toulon", "Aix-en-Provence"],
//             AuvergneRhôneAlpes: ["Lyon", "Grenoble", "Saint-Étienne", "Annecy"],
//             Occitanie: ["Toulouse", "Montpellier", "Nîmes", "Perpignan"]
//         }
//     },
//     JAPAN: {
//         states: {
//             Tokyo: ["Tokyo", "Shinjuku", "Shibuya", "Akihabara"],
//             Osaka: ["Osaka", "Sakai", "Higashi-Osaka", "Takatsuki"],
//             Hokkaido: ["Sapporo", "Hakodate", "Asahikawa", "Obihiro"],
//             Kyoto: ["Kyoto", "Uji", "Nagaokakyo", "Fukuchiyama"]
//         }
//     },
//     CHINA: {
//         states: {
//             Guangdong: ["Guangzhou", "Shenzhen", "Dongguan", "Zhuhai"],
//             Shanghai: ["Shanghai"],
//             Beijing: ["Beijing"],
//             Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou", "Jiaxing"]
//         }
//     },
//     RUSSIA: {
//         states: {
//             Moscow: ["Moscow", "Zelenograd"],
//             SaintPetersburg: ["Saint Petersburg", "Kronstadt"],
//             Novosibirsk: ["Novosibirsk", "Berdsk"],
//             Sverdlovsk: ["Yekaterinburg", "Nizhny Tagil"]
//         }
//     },
//     MALAYSIA: {
//         states: {
//             KualaLumpur: ["Kuala Lumpur"],
//             Selangor: ["Petaling Jaya", "Shah Alam", "Subang Jaya"],
//             Johor: ["Johor Bahru", "Muar", "Batu Pahat"],
//             Penang: ["George Town", "Butterworth", "Bukit Mertajam"]
//         }
//     },
//     SINGAPORE: {
//         states: {
//             CentralRegion: ["Bukit Merah", "Newton", "Outram", "Rochor"],
//             EastRegion: ["Bedok", "Tampines", "Pasir Ris", "Changi"],
//             NorthRegion: ["Sembawang", "Woodlands", "Yishun"],
//             WestRegion: ["Bukit Batok", "Jurong", "Clementi", "Boon Lay"]
//         }
//     }
// };


// const countrySelect = document.getElementById("country");
// const stateSelect = document.getElementById("state");
// const citySelect = document.createElement("select"); 
// citySelect.setAttribute("name", "city");
// citySelect.setAttribute("id", "city");
// document.getElementById("signupForm").appendChild(citySelect); 

// countrySelect.addEventListener("change", () => {
//     const selectedCountry = countrySelect.value;
//     const states = countriesData[selectedCountry]?.states || {};

//     stateSelect.innerHTML = '<option value="">Select State</option>';
//     citySelect.innerHTML = '<option value="">Select City</option>';

//     Object.keys(states).forEach(state => {
//         const option = document.createElement("option");
//         option.value = state;
//         option.textContent = state;
//         stateSelect.appendChild(option);
//     });
// });

// stateSelect.addEventListener("change", () => {
//     const selectedCountry = countrySelect.value;
//     const selectedState = stateSelect.value;
//     const cities = countriesData[selectedCountry]?.states[selectedState] || [];

//     citySelect.innerHTML = '<option value="">Select City</option>';

//     cities.forEach(city => {
//         const option = document.createElement("option");
//         option.value = city;
//         option.textContent = city;
//         citySelect.appendChild(option);
//     });
// });
import userApi from "../api/user.api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handleSubmit = (e) => {
  e.preventDefault();
  let user = {
    username: document.querySelector("#username"),
    email: document.querySelector("#email"),
    number: document.querySelector("#number"),
    country:document.querySelector("#country"),
    password: document.querySelector("#password"),
  };
  if (!user.username || !user.email || !user.password || !user.number) {
    alert("Please enter all required fields");
    return;
  }
  userApi.signup(user);
};

document.getElementById("userDetails").addEventListener("submit", handleSubmit);
