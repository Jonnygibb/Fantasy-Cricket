// Add database initialisation here.. Not sure how this works yet lol
db.createUser({
    user: 'root',
    pwd: 'toor',
    roles: [
        {
            role: 'readWrite',
            db: 'testDB',
        },
    ],
});

db = new Mongo().getDB("testDB");

db.createCollection('players', {capped: false});

db.players.insert([
        {
            "Player": "Ravindra Jadeja",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ruturaj Gaikwad",
            "Role": "Batsman",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Matheesha Pathirana",
            "Role": "Bowler",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shivam Dube",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Noor Ahmad",
            "Role": "Bowler",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ravichandran Ashwin",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Devon Conway",
            "Role": "Batsman",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Khaleel Ahmed",
            "Role": "Bowler",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rachin Ravindra",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "MS Dhoni",
            "Role": "Wicket-Keeper",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rahul Tripathi",
            "Role": "Batsman",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Anshul Kamboj",
            "Role": "All-Rounder ",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sam Curran",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Gurjapneet Singh",
            "Role": "Bowler",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Nathan Ellis",
            "Role": "Bowler",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Deepak Hooda",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jamie Overton ",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vijay Shankar",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vansh Bedi",
            "Role": "Wicket-Keeper",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shreyas Gopal",
            "Role": "Bowler",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Andre Siddarth",
            "Role": "Batsman",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ramakrishna Ghosh",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shaik Rasheed",
            "Role": "Batsman",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mukhesh Choudhary",
            "Role": "Bowler",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kamlesh Nagarkoti",
            "Role": "All-Rounder",
            "Team": "Chennai Super Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Axar Patel",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "KL Rahul",
            "Role": "Wicket-Keeper",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kuldeep Yadav",
            "Role": "Bowler",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mitchell Starc",
            "Role": "Bowler",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "T Natarajan",
            "Role": "Bowler",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Tristan Stubbs",
            "Role": "Batsman",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jake Fraser-McGurk",
            "Role": "Batsman",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mukhesh Kumar",
            "Role": "Bowler",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Harry Brook",
            "Role": "Batsman",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Abishek Porel",
            "Role": "Wicket-Keeper",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ashutosh Sharma",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mohit Sharma",
            "Role": "Bowler",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Faf Du Plessis",
            "Role": "Batsman",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sameer Rizvi",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Donovan Ferreira",
            "Role": "Wicket-Keeper",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Dushmantha Chameera",
            "Role": "Bowler",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vipraj Nigam",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Karun Nai",
            "Role": "Batsman",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Madhav Tiwari",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Manvanth Kumar",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Tripurana Vijay",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Darshan Nalkande",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ajay Mandal",
            "Role": "All-Rounder",
            "Team": "Delhi Capitals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rashid Khan",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shubman Gill",
            "Role": "Batsman",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jos Buttler",
            "Role": "Wicket-Keeper",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mohammad Siraj",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kagiso Rabada",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Prasidh Krishna",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sai Sudharshan",
            "Role": "Batsman",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shahrukh Khan",
            "Role": "Batsman",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rahul Tewatia",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Washington Sundar",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sherfane Rutherford",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Gerald Coetzee",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Glenn Phillips",
            "Role": "Batsman",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sai Kishore",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Gurnoor Brar",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Arshad Khan",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Karim Janat",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mahipal Lomror",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jayant Yadav",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ishant Yadav",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kumar Kushagra",
            "Role": "Wicket-Keeper",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Nishant Sindhu",
            "Role": "All-Rounder",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Manav Suthar",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Anuj Rawat",
            "Role": "Wicket-Keeper",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kulwant Kherjoliya",
            "Role": "Bowler",
            "Team": "Gujurat Titans",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Venkatesh Iyer",
            "Role": "All-Rounder",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rinku Singh ",
            "Role": "Batsman",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Varun Chakravarthy",
            "Role": "Bowler",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Andre Russell",
            "Role": "All-Rounder",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sunil Narine",
            "Role": "All-Rounder",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Anrich Nortje",
            "Role": "Bowler",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Harshit Rana",
            "Role": "Bowler",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ramandeep SIngh",
            "Role": "All-Rounder",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Quinton De Kock",
            "Role": "Wicket-Keeper",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Angkrish Raghuvanshi",
            "Role": "Batsman",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Spencer Johnson",
            "Role": "Bowler",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rahmanullah Gurbaz",
            "Role": "Wicket-Keeper",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Moeen Ali",
            "Role": "All-Rounder",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vaibhav Arora",
            "Role": "Bowler",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rovman Powell",
            "Role": "Batsman",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ajinkya Rahane",
            "Role": "Batsman",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Umran Malik",
            "Role": "Bowler",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Manish Pandey",
            "Role": "Batsman",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Anukul Roy",
            "Role": "All-Rounder",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Luvnith Sisodia",
            "Role": "Wicket-Keeper",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mayank Markande",
            "Role": "Bowler",
            "Team": "Kolkata Knight Riders",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rishabh Pant",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Nicholas Pooran",
            "Role": "Wicket-Keeper",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mayank Yadav",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ravi Bishnoi",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Avesh Khan",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Akash Deep",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "David Miller",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Abdul Samad",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ayush Badoni",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mohsin Khan",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mitchell Marsh",
            "Role": "All-Rounder",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shahbaz Ahmed",
            "Role": "All-Rounder",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Aiden Markram",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Matthew Breetzke",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shamar Joseph",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "M Siddharth",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Himmat Singh",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Arshin Kulkarni",
            "Role": "All-Rounder",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Digvesh Singh ",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Prince Yadav",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Yuvraj Chaudhary",
            "Role": "All-Rounder",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Akash Singh",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rajvardhan Hangargekar",
            "Role": "Bowler",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Aryan Juyal",
            "Role": "Batsman",
            "Team": "Lucknow Super Giants",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shreyas Iyer",
            "Role": "Batsman",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Arshdeep SIngh",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Yuzvendra Chahal",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Marcus Stoinis",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Marco Jansen",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shahshank Singh ",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Nehal Wadhera",
            "Role": "Batsman",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Glenn Maxwell",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Prabhsimran Singh",
            "Role": "Wicket-Keeper",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Priyansh Arya",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Josh Inglis ",
            "Role": "Wicket-Keeper",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Azmatullah Omarzai",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Lockie Ferguson",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vijaykumar Vyshak",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Yash Thakur",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Harpreet Brar",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Aaron Hardie",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vishnu Vinod",
            "Role": "Wicket-Keeper",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kuldeep Sen",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Xavier Bartlett",
            "Role": "Bowler",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Suryansh Shedge",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Pyla Avinash",
            "Role": "Batsman",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mushneer Khan",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Harnoor Singh ",
            "Role": "Batsman",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Praveen Singh",
            "Role": "All-Rounder",
            "Team": "Punjab Kings",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Yashasvi Jaiswal",
            "Role": "Batsman",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sanju Samson",
            "Role": "Wicket-Keeper",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Dhruv Jurel",
            "Role": "Wicket-Keeper",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Riyan Parag",
            "Role": "Batsman",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jofra Archer",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shimron Hetmyer",
            "Role": "Batsman",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Tushar Deshpande",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Wanindu Hasaranga",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Maheesh Theekshana",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Nitish Rana",
            "Role": "Batsman",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sandeep Sharma",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Fazalhaq Farooqi",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kwema Maphaka",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Akash Madhwal",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vaibhav Suryavanshi",
            "Role": "Batsman",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Shubham Dubey",
            "Role": "Batsman",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Yudhvir Singh",
            "Role": "All-Rounder",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kunal Singh Rathore",
            "Role": "Batsman",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ashok Sharma",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kumar Kartikeya",
            "Role": "Bowler",
            "Team": "Rajasthan Royals",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Virat Kohli",
            "Role": "Batsman",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Josh Hazlewood",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Phil Salt",
            "Role": "Wicket-Keeper",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rajat Patidar",
            "Role": "Batsman",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jitesh Sharma",
            "Role": "Wicket-Keeper",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Bhuvneshwar Kumar",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Liam Livingstone ",
            "Role": "All-Rounder",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Raikh Salam",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Krunal Pandya",
            "Role": "All-Rounder",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Yash Dayal",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Tim David",
            "Role": "All-Rounder",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Suyash Sharma",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jacob Bethell",
            "Role": "All-Rounder",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Devdutt Padikkal",
            "Role": "Batsman",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Nuwan Thushara",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Romario Shepard",
            "Role": "All-Rounder",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Lungi Ngidi",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Swapnil Singh",
            "Role": "All-Rounder",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Abhinandan SIngh",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Swastik Chikara",
            "Role": "Batsman",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mohit Rathee",
            "Role": "Bowler",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Manoj Bhandage",
            "Role": "All-Rounder",
            "Team": "Royal Challengers Bangalore",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Heinrich Klassen",
            "Role": "Wicket-Keeper",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Pat Cummins",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Abhishek Sharma",
            "Role": "Batsman",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Travis Head",
            "Role": "Batsman",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ishan Kishan",
            "Role": "Wicket-Keeper",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mohammed Shami",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Harshal Patel",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Nitish Kumar Reddy",
            "Role": "All-Rounder",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rahul Chahar",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Abhinav Manohar",
            "Role": "Batsman",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Adam Zampa",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Simarjeet Singh",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Eshan Malinga",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Wiian Mulder",
            "Role": "All-Rounder",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jaydev Unadkut",
            "Role": "Bowler",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Kamindu Mendis",
            "Role": "All-Rounder",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Zeeshan Ansari",
            "Role": "Batsman",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Aniket Verma",
            "Role": "Batsman",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Atharva Taide",
            "Role": "Batsman",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Jasprit Bumrah ",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Hardik Pandya",
            "Role": "All-Rounder",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Suryakumar Yadav",
            "Role": "Batsman",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Rohit Sharma",
            "Role": "Batsman",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Trent Boult",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Deepak Chahar",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Tilak Varma",
            "Role": "Batsman",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Naman Dhir",
            "Role": "All-Rounder",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Will Jacks",
            "Role": "All-Rounder",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mujeeb Ur Rahman",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Mitchell Santner",
            "Role": "All-Rounder",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ryan Rickleton",
            "Role": "Wicket-Keeper",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Reece Topley",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Lizaad Williams",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Robin Minz",
            "Role": "Wicket-Keeper",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Karn Sharma",
            "Role": "All-Rounder",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Vignesh Puthur",
            "Role": "All-Rounder",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Bevon Jacobs",
            "Role": "Batsman",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Satyanrayna Raju",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Raj Bawa",
            "Role": "All-Rounder",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Ashwani Kumar",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Arjun Tendulkar",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Krishan Shrijith",
            "Role": "Batsman",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Venkata Satyanarayana Penmetsa",
            "Role": "Bowler",
            "Team": "Mumbai Indians",
            "Points": 0,
            "Free Agent": 0
        },
        {
            "Player": "Sachin Baby",
            "Role": "Batsman",
            "Team": "Sunrisers Hydreabad",
            "Points": 0,
            "Free Agent": 0
        }
])