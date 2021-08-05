function select(){
	window.date=document.getElementById('start').value;
};


function fetchData() {
	var city=document.getElementById('districtName').value;	
	fetch("https://api.covid19india.org/v4/min/data-all.min.json")
	.then(res=>{
		if(!res.ok){
			throw Error("ERROR");
		}
		return res.json();})
	.then(data=>data)
	.then(da=> {
		// document.getElementById('confirmed').textContent=da[date].UP.districts[city].delta.confirmed;
		// document.getElementById('deceased').textContent=da[date].UP.districts[city].delta.deceased;
		// document.getElementById('recovered').textContent=da[date].UP.districts[city].delta.recovered;
		// //console.log(da[date].UP.districts[city].delta);
		//document.getElementById('idParent').innerHTML += '<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">The total Confirmed covid cases are : </h5><span id="confirmed"></span></div></div>';
    document.getElementById('chart').innerHTML = "";
    document.getElementById('chart').innerHTML = `
      <canvas id="myChart" style="width:40%;max-width:600px"></canvas>`;

   var copyda=da;
   delete copyda["2020-01-30"]
   delete copyda["2020-02-02"]
   delete copyda["2020-02-03"]
   delete copyda["2020-02-14"]
   delete copyda["2020-03-02"]
   delete copyda["2020-03-03"]
   delete copyda["2020-03-04"]
   delete copyda["2020-03-05"]
   delete copyda["2020-03-06"]
   delete copyda["2020-03-07"]
   delete copyda["2020-03-08"]
   delete copyda["2020-03-09"]
   delete copyda["2020-03-10"]
   delete copyda["2020-03-11"]
   delete copyda["2020-03-12"]
   delete copyda["2020-03-13"]
   delete copyda["2020-03-14"]
   delete copyda["2020-03-15"]
   delete copyda["2020-03-16"]
   delete copyda["2020-03-17"]
   delete copyda["2020-03-18"]
   delete copyda["2020-03-19"]
   delete copyda["2020-03-20"]
   delete copyda["2020-03-21"]
   delete copyda["2020-03-22"]
   delete copyda["2020-03-23"]
   delete copyda["2020-03-24"]
   delete copyda["2020-03-25"]
   delete copyda["2020-03-26"]
   delete copyda["2020-03-27"]
   delete copyda["2020-03-28"]
   delete copyda["2020-03-29"]
   delete copyda["2020-03-30"]
   delete copyda["2020-03-31"]
   delete copyda["2020-04-01"]
   delete copyda["2020-04-02"]
   delete copyda["2020-04-03"]
   delete copyda["2020-04-04"]
   delete copyda["2020-04-05"]
   delete copyda["2020-04-06"]
   delete copyda["2020-04-07"]
   delete copyda["2020-04-08"]
   delete copyda["2020-04-09"]
   delete copyda["2020-04-10"]
   delete copyda["2020-04-11"]
   delete copyda["2020-04-12"]
   delete copyda["2020-04-13"]
   delete copyda["2020-04-14"]
   delete copyda["2020-04-15"]
   delete copyda["2020-04-16"]
   delete copyda["2020-04-17"]
   delete copyda["2020-04-18"]
   delete copyda["2020-04-19"]
   delete copyda["2020-04-20"]
   delete copyda["2020-04-21"]
   delete copyda["2020-04-22"]
   delete copyda["2020-04-23"]
   delete copyda["2020-04-24"]
   delete copyda["2020-04-25"]
   delete copyda["2020-04-26"]
   delete copyda["2020-04-27"]
   delete copyda["2020-04-28"]
   delete copyda["2020-04-29"]
   delete copyda["2020-04-30"]
   delete copyda["2020-05-01"]
   delete copyda["2020-05-02"]
   delete copyda["2020-05-03"]
   delete copyda["2020-05-04"]
   delete copyda["2020-05-05"]
   delete copyda["2020-05-06"]
   delete copyda["2020-05-07"]
   delete copyda["2020-05-08"]
   delete copyda["2020-05-09"]
   delete copyda["2020-05-10"]
   delete copyda["2020-05-11"]
   delete copyda["2020-05-12"]
   delete copyda["2020-05-13"]
   delete copyda["2020-05-14"]
   delete copyda["2020-05-15"]
   delete copyda["2020-05-16"]
   delete copyda["2020-05-17"]
   delete copyda["2020-05-18"]
   delete copyda["2020-05-19"]
   delete copyda["2020-05-20"]

   let confirmed=[]; 
   var xValues = [];
    for (const [key, value] of Object.entries(copyda)) {
      var datekey=key.toString();
      xValues.push(datekey);
      confirmed.push(copyda[datekey].UP.districts[city].total.confirmed);
    };

    var yValues = confirmed;
    var chartnew=new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          label: 'Total Cases Confirmed',
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        // legend: {display: true},
        // scales: {
        //   yAxes: [{ticks: {min: 0, max:10000000}}],
        // }
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'label',
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
  }
    });



   document.getElementById('containercard').innerHTML = "";
   
   document.getElementById('containercard').innerHTML += `<div id="card1">
                                                              <h2>
                                                              Confirmed Positive today in ${city} are 
                                                              <br>
                                                              <br>${da[date].UP.districts[city].delta.confirmed}</h2>
                                                              </div>
                                                              <div id="card2">
                                                              <h2>
                                                              Deceased agianst covid in ${city} are 
                                                              <br>
                                                              <br>${da[date].UP.districts[city].delta.deceased}</h2>
                                                              </div>
                                                              <div id="card3">
                                                              <h2>
                                                              Recovered against covid in ${city} are
                                                              <br>    
                                                              <br>${da[date].UP.districts[city].delta.recovered}</h2>
                                                              </div>`;
	 
  })
	.catch(error=>{
		console.log(error);
	});
}



function hospitals(){
var object={
"Agra": {
    "CHC Baroli Ahir": 30,
    "Hindustan Engg Collage": 450,
    "RASA PUBLIC SCHOOL": 75,
    "Neminath Homeopathic Medical College": 100,
    "Mount Litera School, Shamshabad Road": 100,
    "Global Agra Convent School,Shamshabad Road": 250,
    "Chauhan hospital": 20,
    "SNMC Medical College": 375,
  },
"Mathura":{

                "CHC Vrindavan": 30, 
                "IVS SANSKRITI UNVERSITY": 160,
                "K.D. Medical College": 620,
                "Krishna Mohan Medical College & Hospital": 520,

          },
"Firozabad":{
                "CHC Jasrana": 30,
                "Pandit Deen Dayal Upadhyay Govt. Ashram Padwati Vidyalaya": 100,
                "F. H. Medical Collage": 620,
                "CHC Deedamai": 60 ,
                "J.S. Hospital Shikohabad": 100, 
                "ASMC": 180,

            },
"Mainpuri":{
               "CHC Bhogon": 30, 
               "Jawahar Navodayay Vidyalaya": 250,

           },

"Aligarh":{

               "CHC Harduaganj": 30,
               "100 Bed Combined Hospital": 100,
               "DDU Joint Hospital": 100,
               "Jeevan Jyoti Hospital": 100,
               "Sai Ayurvedic Hospital": 125, 
               "J. N Medical Collage": 66,
          },
"Etah":{
               "CHC Baghwala": 30,
               "ZH PG College Agra Road": 250,
               "Jawahar Navodayay Vidyalaya": 100,
               "Dr. Shailendra Jain Hospital": 25,
       },

"Hathras":{
               "CHC Mursan": 30,
               "Lord Krishna Public School Mursan Hathras": 100,
               "J P Degree Collage": 150,
               "Sri ram Hospital": 150,
          },

"Kasganj":{

              "DCH soron": 30,
              "ITI Yakutganj, Sahawar": 80,
              "V K Jain Collage of Management": 80,

         },

"Azamgarh":{
             "CHC-Kolhukhor": 30,
             "Seth Jaipuriya School Mirla": 250,
             "100 Bed Combined Hospital": 100,

},

"Ballia":{

            "CHC Basantpur": 30,
            "Town Politechnic Collage": 125,
            "Sacred Heart School, Ballia": 125,
            "Gaurav Multispeciallity Hospital": 50,

        },
"Mau":{

            "CHC PARDAHA": 30,
            "Bapu Ayurvedic Medical College": 100,
            "Sainik Nursing School": 150,  
            "Fatima Hospital": 250,


      },

"Amethi":{
           "CHC Gauriganj": 30,
           "District Combined Hospital": 200,
           "Radheyshyam Satyaprakash Trauma center": 100,
        },
"Sultanpur":{
           "CHC Kurwar": 30,
           "KNIPSS": 100,
           "Aastha Hospital": 30,
           "KNIIT Megnath saha Hostel & Aryabatt Hostel": 130,
          },
"Ambedkar Nagar":{
          "CHC jalalpur": 30,
          "Eklaya Stadium": 250, 
          "GMC": 420,
         },
"Ayodhya":{
         "Mashudha": 30,
         "ASMC": 380,
         "100 Bedded Kumarganj Hospital": 100,
         "Old Building District Women Hospital": 70,
         },

"Barabanki":{
         "CHC Satarik" :30,
         "Chandra Hospital and Research Center": 96,
         "Sherwood Hospital": 110,
         "Hind Institute of Medical Sciences": 520,
         "Mayo Institute of Medical Sciences": 630,

},
"Bareilly":{

         "Bithrichainpur": 30,
         "Divisional Railway Hospital": 70,
         "Manas Sthali Boarding School": 150,
         "Rajshree Medical Research Institute": 620,
         "Khushlok Hospital": 70, 
         "Sri Rammurti Smarak Institute of Medical Sciences": 630,
         "Rohilkhand Medical College": 630,
} ,

"Badaun":{
         "CHC Ujhani": 30,
         "Aasra Awas": 250,
         "Rajkiya Mahila Mahavidyalay": 100,
         "GMC": 315,
},
"Pilibhit":{
         "CHC Jahanabad": 30,
         "Ayurvedic Collage": 350, 
         "Maikul Hospital": 30, 
         "ASMC": 305,
},
"Shahjahanpur":{
         "CHC-Dadraul": 30,
         "Hanumathdham Asraysthal": 100,
         "OCF Hospital Shahjahanpur": 70,
         "Varunarjun Medical College": 520,
         "Aasra Awasiya Pariyojna Jalalabad": 130,
         "ASMC": 185,
               },
"Basti":{
         "Munderwa": 30,
         "Shrimati Shanti Devi Degree College": 100,
         "Jawahar Navodayay Vidyalaya": 100,
         "ASMC": 305,
        },


"Siddhartha Nagar": {
         "CHC Birdpur": 30,
         "MCH Wing": 200,
                    },

"Santkabir Nagar":{
         "CHC Khalilabad": 30,
         "St. Thomas Inter Collage": 200,
                   },

"Chitrakoot": {
         "CHC Shiv Rampur": 30,
         "Sri Kedar Nath Ramswaroop Degree College Khatwara": 100,
         "ITI Collage": 100,
               },

"Hamirpur": {
         "CHC Kurara": 30,
         "Boys/Girls Hostel,Govt.Polytechnic Institution": 125,
         "Saraswati Vidya Mandir Inter Collage": 100,
            },
"Kanpur Dehat":{
         "CHC Gajner": 30,
         "Kendriya Vidyalaya": 200,
         "VPN Hospital": 100,
         "Guari Hospital": 34,
                },
"Kanpur Nagar":{
 
         "CHC Sarsaul": 30,
         "ESI Hospital": 100,
         "Rama Institute of Medical Sciences Research Hospital": 420,
         "Ayush Wing, RAMA University": 120,
         "Narayana Medical College": 250,
         "Kansiram Joint Hospital": 100,
         "SVM Medical College": 790,
},
"Lucknow":{

         "RSM 100 BED DCH BKT": 30,
         "CHC Malihabad": 30,
         "Surya Engineering Collage Mohanlalganj": 250,
         "Sunder Singh Engineering Collage Mohanlalganj": 250,
         "Career Medical College": 520,
         "Era's Lucknow Medical College": 710,
         "CHC Mohanlalganj": 30,
         "RR Engineering Collage": 250,
         "Career Medical College": 520,
         "Integral Institute of Medical Sciences": 420,
         "Dr RMLIMS": 10,
         "Prasad Institute of Medical Sciences": 220,
         "SGPGI Lucknow": 155,
         "T.S.M. Institute of Medical Sciences": 220,
         "KGMU": 185,
         "Sant Marry Hospital": 75,
         "Lokbandhu Rajnarayan Hospital": 100,
},
"Mahoba":{
         "CHC Panwari": 30,
         "St. Joseph School": 250,
         "Govt. Inter Collage": 100,
},
"Banda": {
         "CHC Naraini": 30,
         "Agriculture University": 300,
         "GMC": 420,
        },
"Shrawasti":{
         "CHC Bhangha": 30,
         "Girls Govt. Inter Collage": 125,
         "Kasturba Balika Vidyalaya Bhinga": 125,
},
"Balrampur":{
         "Memorial Hospital": 30,
         "Jawahar Navodayay Vidyalaya": 288,
},
"Bahraich":{
        "CHC Chittaura": 30,
        "Maharishi Balak Hospital": 70,
        "ASMC": 280,
        "Mahila Polytechnic Risia": 250,
},
"Gonda":{
        "Railway Hospital": 70, 
        "SCPM Nursing College": 200,
        "Pandri kripal": 30,
        "RN Pandey Hospital": 100,
        "Satish Chandra pandey Memorial Hospital": 250,
} ,
"Gorakhpur":{
        "CHC Chargawan": 30,
        "LNM Railway Hospital": 200,
        "Sports Collage": 100,
        "Hope hospital": 64,
        "BRD Medical College Gorakhpur": 570,
},

"Deoria": {
       "Guari Bazar": 30,
       "Central Academy": 250,
       "Shanti Nurshing Home": 20,
},

"Mahrajganj":{

      "CHC Mithaura": 30,
      "Government Polytechnic Purania": 250,
      "Samekit Vidyaylay": 100,
      "KMC Digital": 100,
},
"Kushinagar":{
      "CHC Sapaha": 30,
      "Rajkiya Asharam Padhati Vidyalaya": 250,
},
"Jalaun":{
       "CHC Konch": 30,
       "Madhuban Villa": 120,
       "Jamuna Palace": 130,
       "GMC": 415,
},
"Jhansi":{
       "CHC Badagaon": 30,
       "Railway Hospital": 100,
       "Nirmal Hospital": 100,
},

"Lalitpur":{
      "CHC Talbehat": 30,
      "Polytechnic Collage": 100,
      "Jawahar Narvoday Vidyalaya": 100,
},

"Kannauj":{
      "CHC Tirwa": 30,
      "Gautam Budh Hospital": 250,
      "GMC": 420,
},

"Etawah":{
      "CHC Jaswant Nagar": 30,
      "Pandit Deen Dayal Upadhyay Ashram Padhiti Vidhayle": 175,
      "Narayan Collage": 100,
      "UPUMS Saifai Etawah": 575,
},

"Auraiya":{
      "MCH wing CHC Dibiyapur": 30,
      "PBRP Academy": 120,
      "BBS Smriti Vidya Peeth": 150,
      "Krishna Medical Care": 20,
},
"Farrukhabad":{
      "CHC Baraun": 30,
      "Dr Anar Singh Ayurvedic Medical College & Hospital": 100,
      "Shri Babu Singh Jai Singh Ayurvedic Medical and Hospital": 100,
},
"Unnao": {
      "CHC Bichhiya": 30,
      "Dr Virendra Swaroop group of Institution": 100,
      "Institute of Pharmaceutical Science and Research Center": 100,
      "Saraswati Medical College": 520,
},
"Hardoi":{
      "CHC Bawan": 30,
      "Kendriya Vidyalay": 100,
      "Joint DH": 100, 
      "Kendriya Vidayalay Malihamau,Biligram Road": 150,
      "Balaji Hospital": 25,
},
"Sitapur":{
      "Hind Institute of Medical Science": 240,
      "CHC Khairabad": 30,
      "BCM Hospital": 70, 
      "Hind Medical College": 615,
},
"Raibareili":{
      "CHC ROHANIYA": 30,
      "Ryan International School": 220,
      "Batohi Guest House": 10,
},
"LakhimpurKhiri":{ 
      "Bhejam": 30,
      "Rajkiya Drishti Badhit avasiya Sparsh Balika Vidyalaya": 62,
      "Pt. Deen Dayal Saraswati Vidya Mandir": 250,
      "Omsain Vidya Mandir Inter Collage": 100, 
      "Mahta Mellainium Hospital": 100,
},
"Baghpat":{
      "Khekra": 30,
      "Sarvodaya Paramedical Collage": 230,
      "Baroot Medicity": 65,
},

"Bulandshahr":{
      "SSMJ KHURJA": 30,
      "JP Hospital Anupshahar": 35,
      "VIIT Nursing Training Collage": 500,
      "V. I. I. T. Hospital": 40,
      "JP Hospital": 45,
},
"Meerut":{
      "CHC- Jani Khurd": 30,
      "Mahaveer Ayurvedic Vidyalaya": 100,
      "Mulayam Singh Medical College Meerut": 250,
      "Shree Ram Ayurvedic Medical College And Hospital": 100,
      "MIET College Block A": 300,
      "BIT Partapur": 120,
      "Viklang Kalyan Hostel Partapur": 140,
      "SVS Inter College Mawana": 100,
      "MSY MEDICAL COLLEGE AND HOSPITAL": 520,
      "Subharti Medical College": 720,
      "LLRM Medical College Meerut": 375,
},
"GB Nagar": {
      "CHC Bisrakh": 30,
      "Kailash Isolation": 100,
      "Greater Noida Institute of technlogy knowledge": 500,
      "GIMS Greater": 215,
      "SSPHPGTI": 105,
      "Rama Medical College & Hospital": 620,
      "School of Medical Sciences (Sharda University)": 620,
      "Santosh Medical College": 610,
},

"Hapur": {
      "CHC Hapur": 30,
      "DH": 250,
      "Saraswati Institute of Medical Sciences": 720,
      "G.S. Medical College": 520,
},
"Rampur":{
      "CHC Milak": 30,
      "Mohmd Ali Jauhar University": 500,
      "Narayana Hospital and Trama Center": 100,
},

"Sambhal":{
     "CHC Narauli": 30,
     "Bahaman zahra Public School": 200, 
     "Asiayayi Haseena Beg Hospital": 50,
     "Mata Gayatri Nursing College": 90,
},
"Bijnor":{
     "CHC Nazibabad": 30,
     "Pulkit Memorial": 100,
     "Vardhmann Collage": 130,
},

"Moradabad":{
     "DWC Hospital": 30, 
     "Vivkanand Collage of Nursing": 250,
     "Teerthankar Mahaveer Medical College & Research Center": 720,
},
"Amroha":{
     "Old building of DCH": 30,
     "Sanjivni Ayurvedic Hospital": 100,
     "Bhartiya Ayurvedic Sansthan": 100,
     "Part of Venkateshwara Hospital": 100, 
     "Venkateshwara": 520,
},
"Prayagraj":{
     "CHC Kotwa at Bani": 100,
     "ESIC Hospital": 100,
     "CRPF Camp Hospital": 100, 
     "Govt. LBS Homeopathic Medical College": 100,
     "Central Hospital Railways": 100,
     "Unani Medical Collage": 100,
     "MLN Medical College Prayagraj": 5,
},
"Kaushambi":{
     "PHC Manjhanpur- Vistar Patal": 30,
     "Purnima Hospital & Reaserch center": 47,
     "PDDU Ashram Paddhati Inter Collage": 100,
     "St. Joseph's School, Kazipur Teramil": 250,
},
"Fatehpur":{
     "CHC Thariyaon": 30,
     "Allahabad Institute of Eng. And Management collage": 150,
     "Ghausia Unani Medical College and Hospital": 100,
     "Bardwell Christian Hospital": 40,
},
"Shamli":{
     "CHC Jhinjhna": 30,
     "St. RC school": 200, 
     "Ganga Amrit multi Specility Hospital": 56,
},
"Muzaffarnagar": {
     "CHC Makhiyall": 30,
     "SD College of Engineering and Technology": 250,
     "Muzaffar Nagar Medical College": 620,
     "Swami Kalyan Dev Govt. ayurvedic Collage": 70,
},
"Saharanpur":{
     "CHC Fatehpur": 30,
     "Dhanwantri Life Line Hospital": 100,
     "Kunwar Shekhar Ayurvedic Unani College": 100.,
     "Glocal University": 400, 
     "GMC": 420,
},
"Mirzapur":{
     "CHC Vindhyachal Mirzapur": 30,
     "Shemford school": 150,
     "Popular Hospital": 50,
},

"Bhadohi":{
      "CHC Bhadohi": 30,
      "Bhadohi Expro mart": 100,
      "Jeevan Jyoti": 100,
},
"Sonbhadra":{
      "CHC Madhupur": 30,
      "Nursing hostal": 100, 
      "Hindalco Hospital": 150,
},
"Ghazipur":{
      "CHC, mohamadabad": 30,
      "Govt. Inter Collage": 100,
      "Shahid Smarak Govt Degree College Yushufpur Muhammdabad": 100,
      "KSB Institute of Ayurvedic Medical College Sadat": 100,
},
"Chandauli":{
      "CHC Bhogawar": 30,
      "Rajkiya Adogic Prashikshan Prathisthan": 100,
      "Dr. R.D. Memorial Hospital": 55,
      "Mahamaya Rajkiya Polytechnic College": 150,
},

"Jaunpur":{
      "CHC": 30,
      "Rain Bsera": 150,
      "Snehlata Super Speciallity": 35,
      "Kunwar Harivansh Nursing College": 100,
},
"Varanasi":{
      "UCHC Shivpur": 30,
      "Ayurvedic Vidhyalya": 100,
      "Heritage Institute of Medical Sciences": 515,
      "Apex hospital": 100,
      "DDU Joint Hospital": 120,
      "Institute of Medical Sciences (Sir Sunder lal Hospital)": 200,
}};




	var city=document.getElementById('districtHospital').value;
  document.getElementById('td').innerHTML='';
  document.getElementById('td').innerHTML+=`<table id="hosp">
        <thead align="center">
          <th>Hospital</th>
          <th>Number of Beds</th>
        </thead>
        <tbody align="center" id="hospitalDetails"> 
        </tbody>
      </table>`
  document.getElementById('hospitalDetails').innerHTML="";
	for (const property in object[city]) {	
    document.getElementById('hospitalDetails').innerHTML += `<tr>
                                                              <td>${property}</td>
                                                              <td>${object[city][property]}</td> 
                                                              </tr>`;
  }
}




function final(){
	select();
	fetchData();
}
//["2021-05-10"].UP.districts["Kanpur Nagar"].delta.confirmed
//fetchData(date, "Kanpur Nagar");





