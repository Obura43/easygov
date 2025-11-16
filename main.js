document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdowns();
    initProgressBars();
    initSmoothScroll();
});

/* -----------------------------
   MOBILE MENU
-------------------------------- */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/* -----------------------------
   DROPDOWNS
-------------------------------- */
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        if (!dropdownToggle) return;

        // Add click behavior for small screens
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
}

/* -----------------------------
   PROGRESS BARS
-------------------------------- */
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    if (progressBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const targetWidth = bar.getAttribute('data-progress') || '0';
                    setTimeout(() => {
                        bar.style.width = targetWidth + '%';
                    }, 100);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => observer.observe(bar));
    }
}

/* -----------------------------
   SMOOTH SCROLL
-------------------------------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
}

/* -----------------------------
   COUNTIES DATA
-------------------------------- */
const kenyaCounties = [
    { name: 'Nairobi', id: 'nairobi' },
    { name: 'Mombasa', id: 'mombasa' },
    { name: 'Kisumu', id: 'kisumu' },
    { name: 'Nakuru', id: 'nakuru' },
    { name: 'Kiambu', id: 'kiambu' },
    { name: 'Machakos', id: 'machakos' },
    { name: 'Kajiado', id: 'kajiado' },
    { name: 'Kilifi', id: 'kilifi' },
    { name: 'Kwale', id: 'kwale' },
    { name: 'Meru', id: 'meru' },
    { name: 'Nyeri', id: 'nyeri' },
    { name: 'Murang\'a', id: 'muranga' },
    { name: 'Kirinyaga', id: 'kirinyaga' },
    { name: 'Embu', id: 'embu' },
    { name: 'Tharaka-Nithi', id: 'tharaka-nithi' },
    { name: 'Kitui', id: 'kitui' },
    { name: 'Makueni', id: 'makueni' },
    { name: 'Nyandarua', id: 'nyandarua' },
    { name: 'Nyamira', id: 'nyamira' },
    { name: 'Kisii', id: 'kisii' },
    { name: 'Migori', id: 'migori' },
    { name: 'Homa Bay', id: 'homa-bay' },
    { name: 'Siaya', id: 'siaya' },
    { name: 'Busia', id: 'busia' },
    { name: 'Bungoma', id: 'bungoma' },
    { name: 'Kakamega', id: 'kakamega' },
    { name: 'Vihiga', id: 'vihiga' },
    { name: 'Trans Nzoia', id: 'trans-nzoia' },
    { name: 'Uasin Gishu', id: 'uasin-gishu' },
    { name: 'Elgeyo-Marakwet', id: 'elgeyo-marakwet' },
    { name: 'Nandi', id: 'nandi' },
    { name: 'Baringo', id: 'baringo' },
    { name: 'Laikipia', id: 'laikipia' },
    { name: 'Samburu', id: 'samburu' },
    { name: 'Isiolo', id: 'isiolo' },
    { name: 'Marsabit', id: 'marsabit' },
    { name: 'Turkana', id: 'turkana' },
    { name: 'West Pokot', id: 'west-pokot' },
    { name: 'Mandera', id: 'mandera' },
    { name: 'Wajir', id: 'wajir' },
    { name: 'Garissa', id: 'garissa' },
    { name: 'Tana River', id: 'tana-river' },
    { name: 'Lamu', id: 'lamu' },
    { name: 'Taita-Taveta', id: 'taita-taveta' },
    { name: 'Kericho', id: 'kericho' },
    { name: 'Bomet', id: 'bomet' },
    { name: 'Narok', id: 'narok' }
];

/* -----------------------------
   PROJECTS (Option C: hybrid)
   - 3 projects per county
   - concise facts: title, sector, impact, status
-------------------------------- */
const countyProjects = {
    nairobi: [
        { title: "Last Mile Electricity Connections – Mukuru, Kayole & Kawangware", sector: "Energy", impact: "Connected thousands of informal settlement households to stable power, enabling small businesses to operate longer hours.", status: "Ongoing" },
        { title: "Kangundo Road Affordable Housing (Utawala)", sector: "Housing", impact: "Over 4,000 affordable units under construction creating jobs for youth.", status: "Ongoing" },
        { title: "Nairobi Railway City (Haile Selassie District)", sector: "Transport", impact: "Transforming 425 acres into a transit hub linking BRT, commuter rail & expressway traffic.", status: "Ongoing" },
        { title: "Eastlands Roads Rehabilitation – Donholm, Umoja, Pipeline", sector: "Infrastructure", impact: "150+ urban roads tarmacked improving traffic flow and drainage.", status: "Ongoing" },
        { title: "Mama Margaret Kenyatta Children’s Hospital Operationalization (Kariobangi)", sector: "Health", impact: "Increasing pediatric capacity for Eastlands by over 300 beds.", status: "Completed" }
    ],


mombasa: [
    { title: "Makupa Bridge Completion", sector: "Infrastructure", impact: "Replaced the old causeway improving traffic flow into Mombasa Island.", status: "Completed" },
    { title: "Dongo Kundu Bypass Phase II & III", sector: "Transport", impact: "SEZ access, reduced port congestion and unlocked industrial growth.", status: "Ongoing" },
    { title: "Likoni Affordable Housing Units", sector: "Housing", impact: "Delivery of 3,000+ affordable units enabling low-income families to own homes.", status: "Ongoing" },
    { title: "Mombasa Water Supply – Kipevu Reservoir Upgrade", sector: "Water", impact: "Expanded clean water supply to Changamwe, Likoni & Jomvu.", status: "Ongoing" },
    { title: "Port of Mombasa Berth Expansion", sector: "Transport", impact: "Increased container handling capacity reducing ship turnaround time.", status: "Ongoing" }
],


kisumu: [
    { title: "Kisumu Port Modernization", sector: "Transport", impact: "Revived lake transport creating new trade opportunities with Uganda & Tanzania.", status: "Completed" },
    { title: "Kibuye Market Modernization", sector: "Commerce", impact: "3,500 trader capacity improved hygiene, drainage & business environment.", status: "Completed" },
    { title: "Kisumu Level 5 Hospital Oxygen Plant", sector: "Health", impact: "Expanded ICU and emergency care for the entire Nyanza region.", status: "Completed" },
    { title: "Mamboleo–Kanyakwar Road Upgrade", sector: "Infrastructure", impact: "Boosted access to residential estates and sports stadium.", status: "Ongoing" },
    { title: "Nyalenda Affordable Housing Pilot", sector: "Housing", impact: "Provides dignified housing for low-income families around Kisumu city.", status: "Planned" }
],


nakuru: [
    { title: "Nakuru–Naivasha Highway Rehabilitation", sector: "Transport", impact: "Reduces travel time for horticulture exporters and commuters.", status: "Ongoing" },
    { title: "Nakuru Railway Station Upgrade", sector: "Transport", impact: "Improved cargo handling supporting SGR–Meter Gauge connection.", status: "Completed" },
    { title: "Bondeni Affordable Housing Project", sector: "Housing", impact: "1,700+ units completed, transforming old council estates.", status: "Completed" },
    { title: "Nakuru County Hospital Ward Expansion", sector: "Health", impact: "Additional wards and modern equipment improving patient care.", status: "Ongoing" },
    { title: "Gilgil–Elementaita Water Pipeline Project", sector: "Water", impact: "Provides clean water to arid settlements improving health.", status: "Ongoing" }
],


kiambu: [
    { title: "Ruiru Affordable Housing Megaproject", sector: "Housing", impact: "Over 6000 housing units under development supporting Nairobi's workforce.", status: "Ongoing" },
    { title: "Wangige–Ndenderu–Gitaru Road Upgrade", sector: "Transport", impact: "Decongests Kiambu–Nairobi corridor.", status: "Ongoing" },
    { title: "Thika Industrial Water Supply Upgrade", sector: "Water", impact: "Supports Juja, Thika & industrial zones with improved supply.", status: "Completed" },
    { title: "Gatundu Level 5 Hospital Expansion", sector: "Health", impact: "Additional theaters and maternity units added.", status: "Ongoing" },
    { title: "Kiambu Digital Skills & Innovation Center", sector: "ICT", impact: "Training thousands of youth on job-ready tech skills.", status: "Ongoing" }
],


machakos: [
    { title: "Mlolongo–Athi River–Machakos Turnoff Road Upgrade", sector: "Transport", impact: "Improves Mombasa Road traffic flow and reduces congestion.", status: "Completed" },
    { title: "Konza Technopolis Development Phase II", sector: "ICT", impact: "Construction of data centers, roads & investor facilities.", status: "Ongoing" },
    { title: "Machakos Water Expansion (Athi River Pipeline)", sector: "Water", impact: "Improved water access in Athi River, Syokimau & Mavoko.", status: "Ongoing" },
    { title: "Machakos Level 5 Hospital Modernization", sector: "Health", impact: "Better emergency and maternity services for 7 counties.", status: "Ongoing" },
    { title: "Mwala Irrigation Scheme", sector: "Agriculture", impact: "Boosts food security and farm income across lower eastern region.", status: "Ongoing" }
],


// Kajiado
kajiado: [
    {
        title: "Kajiado County Water Supply Expansion",
        sector: "Water",
        impact: "Provides piped water to arid and peri-urban settlements, improving health and livelihoods.",
        status: "Ongoing"
    },
    {
        title: "Kajiado Roads & Bridge Works",
        sector: "Transport",
        impact: "Improves livestock and goods movement to markets, boosting local economies.",
        status: "Ongoing"
    },
    {
        title: "Kajiado County Vocational Training Centres",
        sector: "Education",
        impact: "Skills training for youth to support pastoral value chains and reduce unemployment.",
        status: "Planned"
    },
    {
        title: "Kajiado Solar Electrification Project",
        sector: "Energy",
        impact: "Expands access to renewable energy in off-grid areas, fostering small business growth.",
        status: "Ongoing"
    },
    {
        title: "Kajiado County Health Facilities Upgrade",
        sector: "Health",
        impact: "Enhances maternal and child health services in remote areas.",
        status: "Ongoing"
    }
],

// Kilifi
kilifi: [
    {
        title: "Kilifi County Water & Sanitation",
        sector: "Water",
        impact: "Improves safe water access for coastal communities, reducing waterborne diseases.",
        status: "Ongoing"
    },
    {
        title: "Kilifi Road Rehabilitation (Rural Links)",
        sector: "Transport",
        impact: "Improves market access for smallholder farmers, enhancing incomes.",
        status: "Ongoing"
    },
    {
        title: "Kilifi Beach Tourism Infrastructure",
        sector: "Tourism",
        impact: "Upgrades public beach facilities to support local tourism jobs and economic growth.",
        status: "Planned"
    },
    {
        title: "Kilifi County Health Centre Expansion",
        sector: "Health",
        impact: "Improved outpatient and maternal health services across the county.",
        status: "Ongoing"
    },
    {
        title: "Kilifi Agricultural Support Programs",
        sector: "Agriculture",
        impact: "Training and subsidies for cashew and coconut farmers to increase productivity.",
        status: "Ongoing"
    }
],

// Kwale
kwale: [
    {
        title: "Kwale Rural Roads Program",
        sector: "Transport",
        impact: "Enhances connectivity for farmers and traders to markets and service centers.",
        status: "Ongoing"
    },
    {
        title: "Kwale County Water Projects",
        sector: "Water",
        impact: "Increased piped water coverage in towns and villages, improving public health.",
        status: "Ongoing"
    },
    {
        title: "Msambweni Market Modernization",
        sector: "Commerce",
        impact: "Improves trading conditions for local entrepreneurs and supports local economy.",
        status: "Planned"
    },
    {
        title: "Kwale Health Facilities Renovation",
        sector: "Health",
        impact: "Upgraded clinics and dispensaries improving access to healthcare services.",
        status: "Ongoing"
    },
    {
        title: "Kwale Tourism Promotion Initiatives",
        sector: "Tourism",
        impact: "Developing eco-tourism to boost local employment and environmental conservation.",
        status: "Ongoing"
    }
],

// Meru
meru: [
    {
        title: "Meru Agricultural Extension & Irrigation",
        sector: "Agriculture",
        impact: "Boosts productivity for smallholder coffee and horticulture farmers.",
        status: "Ongoing"
    },
    {
        title: "Meru County Hospital Expansion",
        sector: "Health",
        impact: "Expanded specialist and emergency services enhancing regional healthcare.",
        status: "Ongoing"
    },
    {
        title: "Meru Town Roads Upgrade",
        sector: "Transport",
        impact: "Improved urban mobility and reduced traffic congestion.",
        status: "Completed"
    },
    {
        title: "Meru Vocational Training Centres",
        sector: "Education",
        impact: "Empowers youth with technical skills aligned to local industry needs.",
        status: "Ongoing"
    },
    {
        title: "Meru Water Supply Improvement",
        sector: "Water",
        impact: "Extended reliable piped water services to underserved rural communities.",
        status: "Ongoing"
    }
],

// Nyeri
nyeri: [
    {
        title: "Nyeri County Tea & Coffee Value Chain Support",
        sector: "Agriculture",
        impact: "Increases farmer incomes through improved processing and marketing.",
        status: "Ongoing"
    },
    {
        title: "Nyeri Hospital Equipment Upgrades",
        sector: "Health",
        impact: "Improved diagnostics and specialist services benefiting central Kenya.",
        status: "Completed"
    },
    {
        title: "Nyeri Rural Roads Upgrade",
        sector: "Transport",
        impact: "Better access to markets, schools, and health facilities.",
        status: "Ongoing"
    },
    {
        title: "Nyeri County Youth Empowerment Programs",
        sector: "Education",
        impact: "Skills training and entrepreneurship support to reduce youth unemployment.",
        status: "Ongoing"
    },
    {
        title: "Nyeri Water and Sanitation Expansion",
        sector: "Water",
        impact: "Increased access to clean water and improved sanitation facilities.",
        status: "Ongoing"
    }
],

// Murang'a
muranga: [
    {
        title: "Murang'a County Water & Sanitation",
        sector: "Water",
        impact: "Expanded safe water access for rural households.",
        status: "Ongoing"
    },
    {
        title: "Murang'a Market Modernization",
        sector: "Commerce",
        impact: "Improves hygiene and incomes for market traders.",
        status: "Planned"
    },
    {
        title: "Murang'a County Health Facility Upgrades",
        sector: "Health",
        impact: "Upgraded maternal and child health services, improving outcomes.",
        status: "Ongoing"
    },
    {
        title: "Murang'a Agricultural Extension Services",
        sector: "Agriculture",
        impact: "Training and subsidies to boost tea and horticulture productivity.",
        status: "Ongoing"
    },
    {
        title: "Murang'a Road Maintenance and Upgrades",
        sector: "Transport",
        impact: "Improves rural access and connects farmers to markets.",
        status: "Ongoing"
    }
],

// Kirinyaga
kirinyaga: [
    {
        title: "Kirinyaga Irrigation & Hatua Projects",
        sector: "Agriculture",
        impact: "Boosts rice and horticulture production through improved irrigation.",
        status: "Ongoing"
    },
    {
        title: "Kirinyaga County Roads",
        sector: "Transport",
        impact: "Improves access to tea and coffee farms and enhances market access.",
        status: "Ongoing"
    },
    {
        title: "Kirinyaga Health Centre Modernization",
        sector: "Health",
        impact: "Increased capacity for emergency and specialist care.",
        status: "Planned"
    },
    {
        title: "Kirinyaga Youth Empowerment Programs",
        sector: "Education",
        impact: "Skills development and entrepreneurship for young people.",
        status: "Ongoing"
    },
    {
        title: "Kirinyaga Water Supply Expansion",
        sector: "Water",
        impact: "Improves access to clean water in rural and urban areas.",
        status: "Ongoing"
    }
],


 // Embu
embu: [
    { title: "Embu Irrigation Expansion", sector: "Agriculture", impact: "Supports maize and horticulture production for food security.", status: "Ongoing" },
    { title: "Embu County Hospital Upgrades", sector: "Health", impact: "Improved county referral services.", status: "Ongoing" },
    { title: "Embu Market & Trade Hubs", sector: "Commerce", impact: "Modernizes markets to support small traders.", status: "Planned" },
    { title: "Embu Rural Roads Rehabilitation", sector: "Transport", impact: "Improves connectivity between Embu town and remote wards.", status: "Ongoing" },
    { title: "Embu Youth Vocational Training Centers", sector: "Education", impact: "Provides skills development for unemployed youth.", status: "Ongoing" }
],

// Tharaka-Nithi
'tharaka-nithi': [
    { title: "Tharaka-Nithi Water Projects", sector: "Water", impact: "Improves household and livestock water access.", status: "Ongoing" },
    { title: "Rural Road Upgrades", sector: "Transport", impact: "Improves connectivity for farmers and traders.", status: "Ongoing" },
    { title: "County Health Facility Renovations", sector: "Health", impact: "Improves local primary healthcare services.", status: "Planned" },
    { title: "Tharaka-Nithi Agricultural Extension Services", sector: "Agriculture", impact: "Supports tea and coffee farmers with inputs and training.", status: "Ongoing" },
    { title: "Tharaka-Nithi Vocational Training Expansion", sector: "Education", impact: "Enhances youth employability through technical skills.", status: "Planned" }
],

// Kitui
kitui: [
    { title: "Kitui County Boreholes & Water Supply", sector: "Water", impact: "Brings reliable water to arid and semi-arid areas.", status: "Ongoing" },
    { title: "Kitui Rural Roads Rehabilitation", sector: "Transport", impact: "Enables trade and access to markets.", status: "Ongoing" },
    { title: "Kitui Vocational Training Centers", sector: "Education", impact: "Skills training for youth to promote local employment.", status: "Planned" },
    { title: "Kitui County Health Facility Improvements", sector: "Health", impact: "Expanded outpatient services in rural health centers.", status: "Ongoing" },
    { title: "Kitui Solar Electrification Projects", sector: "Energy", impact: "Improves energy access in off-grid villages.", status: "Ongoing" }
],

// Makueni
makueni: [
    { title: "Thwake Multipurpose Dam Works (Regional)", sector: "Water & Energy", impact: "Provides irrigation, domestic water and small hydropower benefits to surrounding counties.", status: "Ongoing" },
    { title: "Makueni County Roads", sector: "Transport", impact: "Improves rural access and market connectivity.", status: "Ongoing" },
    { title: "Makueni Healthcare Upgrades", sector: "Health", impact: "Improved primary healthcare and reduced referrals.", status: "Ongoing" },
    { title: "Makueni County Market Modernization", sector: "Commerce", impact: "Upgrades major markets to boost local trade.", status: "Planned" },
    { title: "Makueni Youth Empowerment Programs", sector: "Education", impact: "Skills training and entrepreneurship support.", status: "Ongoing" }
],

// Nyandarua
nyandarua: [
    { title: "Nyandarua Agricultural Extension & Dairy Support", sector: "Agriculture", impact: "Supports dairy farmers with improved inputs and markets.", status: "Ongoing" },
    { title: "Ol Kalou–Nyandarua Road Upgrades", sector: "Transport", impact: "Reduces travel times to market towns.", status: "Completed" },
    { title: "County Health Centre Upgrades", sector: "Health", impact: "Expanded maternal and child health services.", status: "Ongoing" },
    { title: "Nyandarua Water Supply Expansion", sector: "Water", impact: "Improved rural access to clean water.", status: "Ongoing" },
    { title: "Nyandarua Vocational Training Expansion", sector: "Education", impact: "Increases technical skills for local youth.", status: "Planned" }
],

// Nyamira
nyamira: [
    { title: "Nyamira County Market Upgrades", sector: "Commerce", impact: "Improves trading conditions for smallholders.", status: "Planned" },
    { title: "Nyamira Rural Roads", sector: "Transport", impact: "Improves access to schools and health centres.", status: "Ongoing" },
    { title: "Nyamira Health Facility Improvements", sector: "Health", impact: "Better primary healthcare coverage.", status: "Ongoing" },
    { title: "Nyamira Agricultural Support Programs", sector: "Agriculture", impact: "Supports tea and dairy farmers.", status: "Ongoing" },
    { title: "Nyamira Youth Empowerment Initiatives", sector: "Education", impact: "Skills training and entrepreneurship development.", status: "Planned" }
],

// Kisii
kisii: [
    { title: "Kisii Urban Roads & Drainage", sector: "Transport", impact: "Reduces flooding and improves town mobility.", status: "Ongoing" },
    { title: "Gucha Irrigation & Farmer Support", sector: "Agriculture", impact: "Increases yields and household incomes.", status: "Planned" },
    { title: "Kisii County Hospital Equipment Upgrades", sector: "Health", impact: "Improves local diagnostics and specialist care.", status: "Ongoing" },
    { title: "Kisii Market Modernization", sector: "Commerce", impact: "Upgrades key markets to support traders.", status: "Ongoing" },
    { title: "Kisii Vocational Training Expansion", sector: "Education", impact: "Skills development for youth.", status: "Planned" }
],

// Migori
migori: [
    { title: "Migori Bridge & Road Links", sector: "Transport", impact: "Improves cross-border trade and local access.", status: "Ongoing" },
    { title: "Migori County Water Projects", sector: "Water", impact: "Expanded safe water to rural settlements.", status: "Ongoing" },
    { title: "Migori Health Centre Upgrades", sector: "Health", impact: "Improved maternal and child health services.", status: "Planned" },
    { title: "Migori Market Modernization", sector: "Commerce", impact: "Upgraded markets for smallholder traders.", status: "Ongoing" },
    { title: "Migori Youth Empowerment Programs", sector: "Education", impact: "Skills training and entrepreneurship support.", status: "Planned" }
],

// Homa Bay
'homa-bay': [
    { title: "Homa Bay County Pier & Fish Market Upgrades", sector: "Commerce", impact: "Boosts fisheries value chain and incomes.", status: "Ongoing" },
    { title: "Homa Bay Water Supply Expansion", sector: "Water", impact: "Improves household water access in lakeshore communities.", status: "Ongoing" },
    { title: "Homa Bay County Health Projects", sector: "Health", impact: "Better referral services for surrounding sub-counties.", status: "Planned" },
    { title: "Homa Bay Rural Roads Rehabilitation", sector: "Transport", impact: "Improves connectivity between lakeshore wards.", status: "Ongoing" },
    { title: "Homa Bay Youth Skills Development", sector: "Education", impact: "Empowers youth through vocational training.", status: "Planned" }
],

// Siaya
siaya: [
    { title: "Siaya County Roads & Connectivity", sector: "Transport", impact: "Improves access between rural and urban markets.", status: "Ongoing" },
    { title: "Siaya Health Centre Upgrades", sector: "Health", impact: "Expanded primary and maternal health services.", status: "Ongoing" },
    { title: "Siaya Agri Value-chain Support", sector: "Agriculture", impact: "Supports staple crop commercialization and storage.", status: "Planned" },
    { title: "Siaya Market Modernization", sector: "Commerce", impact: "Enhances hygiene and trading environments.", status: "Ongoing" },
    { title: "Siaya Youth Empowerment Initiatives", sector: "Education", impact: "Promotes entrepreneurship among youth.", status: "Planned" }
],


// Busia
busia: [
    { title: "Busia Border Infrastructure & Market Upgrades", sector: "Commerce", impact: "Enhances cross-border trade and trader incomes.", status: "Ongoing" },
    { title: "Busia Rural Roads Rehabilitation", sector: "Transport", impact: "Improves market access for agricultural producers.", status: "Ongoing" },
    { title: "Busia County Water Projects", sector: "Water", impact: "Expanded piped water in key towns.", status: "Planned" },
    { title: "Busia Health Facility Upgrades", sector: "Health", impact: "Improves maternal and emergency healthcare services.", status: "Ongoing" },
    { title: "Busia Vocational Training Centers", sector: "Education", impact: "Skills training targeting youth and women empowerment.", status: "Planned" }
],

// Bungoma
bungoma: [
    { title: "Bungoma County Roads & Market Access", sector: "Transport", impact: "Improves trade linkages for agricultural products.", status: "Ongoing" },
    { title: "Bungoma Agricultural Extension", sector: "Agriculture", impact: "Increases smallholder productivity and incomes.", status: "Ongoing" },
    { title: "Bungoma Health Facility Upgrades", sector: "Health", impact: "Improves county referral services.", status: "Planned" },
    { title: "Bungoma Market Modernization", sector: "Commerce", impact: "Upgraded market infrastructure supports local traders.", status: "Ongoing" },
    { title: "Bungoma Vocational Training Expansion", sector: "Education", impact: "Enhances technical skills for youth employability.", status: "Planned" }
],

// Kakamega
kakamega: [
    { title: "Kakamega County Market Modernization", sector: "Commerce", impact: "Upgrades stalls and cold storage for traders.", status: "Ongoing" },
    { title: "Kakamega Roads Rehabilitation", sector: "Transport", impact: "Improves rural connectivity to urban centres.", status: "Ongoing" },
    { title: "Kakamega TVET & Skills Centers", sector: "Education", impact: "Skills training for youth to boost employment.", status: "Planned" },
    { title: "Kakamega County Water Supply", sector: "Water", impact: "Expanded access to clean water in rural areas.", status: "Ongoing" },
    { title: "Kakamega Health Facility Enhancements", sector: "Health", impact: "Improves primary and referral health services.", status: "Ongoing" }
],

// Vihiga
vihiga: [
    { title: "Vihiga Rural Roads & Bridges", sector: "Transport", impact: "Improves access to schools and health centres.", status: "Ongoing" },
    { title: "Vihiga County Health Upgrades", sector: "Health", impact: "Improves local primary care and emergency response.", status: "Ongoing" },
    { title: "Vihiga Market Upgrades", sector: "Commerce", impact: "Supports small traders and agri value chains.", status: "Planned" },
    { title: "Vihiga Agricultural Support Programs", sector: "Agriculture", impact: "Enhances crop yields and farmer incomes.", status: "Ongoing" },
    { title: "Vihiga Vocational Training Centers", sector: "Education", impact: "Skills development to boost youth employment.", status: "Planned" }
],

// Trans Nzoia
'trans-nzoia': [
    { title: "Trans Nzoia Farm-to-Market Road Upgrades", sector: "Transport", impact: "Improves access for maize and horticulture producers.", status: "Ongoing" },
    { title: "Trans Nzoia Agricultural Support", sector: "Agriculture", impact: "Seed and extension support for smallholders.", status: "Ongoing" },
    { title: "Trans Nzoia Health Facility Enhancements", sector: "Health", impact: "Improved maternal and emergency care.", status: "Planned" },
    { title: "Trans Nzoia Market Modernization", sector: "Commerce", impact: "Enhances trading environments in Kitale.", status: "Ongoing" },
    { title: "Trans Nzoia Youth Skills Development", sector: "Education", impact: "Vocational training to enhance employment.", status: "Planned" }
],

// Uasin Gishu
'uasin-gishu': [
    { title: "Uasin Gishu Agricultural Hubs & Markets", sector: "Agriculture", impact: "Strengthens the grain value chain and storage.", status: "Ongoing" },
    { title: "Eldoret Urban Roads & Drainage", sector: "Transport", impact: "Improves urban mobility and reduces flooding.", status: "Ongoing" },
    { title: "Uasin Gishu County Referral Hospital Upgrades", sector: "Health", impact: "Expanded specialist services.", status: "Planned" },
    { title: "Uasin Gishu Water Supply Expansion", sector: "Water", impact: "Improved water access for urban and peri-urban areas.", status: "Ongoing" },
    { title: "Uasin Gishu TVET Centers Development", sector: "Education", impact: "Boosts technical skills and youth employment.", status: "Planned" }
],

// Elgeyo-Marakwet
'elgeyo-marakwet': [
    { title: "Elgeyo-Marakwet Rural Road Network", sector: "Transport", impact: "Improves access to highland farms and markets.", status: "Ongoing" },
    { title: "Elgeyo-Marakwet Water & Borehole Projects", sector: "Water", impact: "Increased water access for households and livestock.", status: "Ongoing" },
    { title: "County Skills Centre", sector: "Education", impact: "Vocational training for youth and athletes.", status: "Planned" },
    { title: "Elgeyo-Marakwet Health Facility Upgrades", sector: "Health", impact: "Improved referral and emergency services.", status: "Ongoing" },
    { title: "Elgeyo-Marakwet Agricultural Support", sector: "Agriculture", impact: "Boosts smallholder farm productivity.", status: "Planned" }
],

// Nandi
nandi: [
    { title: "Nandi Roads & Tea-Farm Access", sector: "Transport", impact: "Improves access for tea and horticulture producers.", status: "Ongoing" },
    { title: "Nandi County Health Improvements", sector: "Health", impact: "Better maternal and child health services.", status: "Ongoing" },
    { title: "Nandi Agricultural Value-chain Support", sector: "Agriculture", impact: "Boosts smallholder productivity.", status: "Planned" },
    { title: "Nandi Water Supply Expansion", sector: "Water", impact: "Expanded clean water access in rural areas.", status: "Ongoing" },
    { title: "Nandi Vocational Training", sector: "Education", impact: "Skills training targeting youth employment.", status: "Planned" }
],

// Baringo
baringo: [
    { title: "Baringo Water Supply & Dams", sector: "Water", impact: "Improves water security for households and livestock.", status: "Ongoing" },
    { title: "Baringo Rural Roads", sector: "Transport", impact: "Improves market access for pastoral communities.", status: "Ongoing" },
    { title: "Baringo Health Facility Upgrades", sector: "Health", impact: "Improved primary health coverage.", status: "Planned" },
    { title: "Baringo Agricultural Extension", sector: "Agriculture", impact: "Supports livestock and crop farmers.", status: "Ongoing" },
    { title: "Baringo Vocational Training Centers", sector: "Education", impact: "Youth skills development programs.", status: "Planned" }
],

// Laikipia
laikipia: [
    { title: "Laikipia Irrigation & Farm Support", sector: "Agriculture", impact: "Supports large and smallholder farms with irrigation.", status: "Ongoing" },
    { title: "Nanyuki Town Roads & Drainage", sector: "Transport", impact: "Improves urban mobility and tourism access.", status: "Completed" },
    { title: "Laikipia County Water Projects", sector: "Water", impact: "Expanded domestic water access.", status: "Ongoing" },
    { title: "Laikipia Health Facility Upgrades", sector: "Health", impact: "Improves primary and referral health services.", status: "Ongoing" },
    { title: "Laikipia Vocational Training Expansion", sector: "Education", impact: "Boosts technical skills among youth.", status: "Planned" }
],

// Samburu
samburu: [
    { title: "Samburu Community Water Projects", sector: "Water", impact: "Improved water access to pastoral communities.", status: "Ongoing" },
    { title: "Samburu Rural Roads & Access", sector: "Transport", impact: "Better access to markets and health services.", status: "Planned" },
    { title: "Samburu Primary Health Upgrades", sector: "Health", impact: "Improves basic health service delivery.", status: "Ongoing" },
    { title: "Samburu Livestock Support Programs", sector: "Agriculture", impact: "Enhances pastoralist livelihoods.", status: "Ongoing" },
    { title: "Samburu Education Support Initiatives", sector: "Education", impact: "Supports youth schooling and skills training.", status: "Planned" }
],

// Isiolo
isiolo: [
    { title: "Isiolo Water & Sanitation Projects", sector: "Water", impact: "Improves access in urban and peri-urban areas.", status: "Ongoing" },
    { title: "Isiolo–Nanyuki Road Improvements", sector: "Transport", impact: "Boosts trade and tourism corridor reliability.", status: "Ongoing" },
    { title: "Isiolo County Health Facility Investments", sector: "Health", impact: "Better county referral services.", status: "Planned" },
    { title: "Isiolo Livestock Support Programs", sector: "Agriculture", impact: "Improves pastoralist productivity.", status: "Ongoing" },
    { title: "Isiolo Vocational Training Centers", sector: "Education", impact: "Skills development for youth employment.", status: "Planned" }
],

// Marsabit
marsabit: [
    { title: "Marsabit Boreholes & Water Systems", sector: "Water", impact: "Resilience for pastoral and agro-pastoral communities around North Horr and Moyale.", status: "Ongoing" },
    { title: "Marsabit Rural Access Roads", sector: "Transport", impact: "Improves supply lines and market access in Logologo and Duse.", status: "Planned" },
    { title: "Marsabit Mobile Health Clinics", sector: "Health", impact: "Extends basic care to remote settlements such as Laisamis and North Horr.", status: "Ongoing" },
    { title: "Marsabit County Vocational Training", sector: "Education", impact: "Skills development for youth in Moyale and Marsabit towns.", status: "Planned" },
    { title: "Marsabit Pastoral Livelihood Support", sector: "Agriculture", impact: "Enhances livestock production and drought resilience.", status: "Ongoing" }
],

// Turkana
turkana: [
    { title: "Turkana Water & Borehole Projects", sector: "Water", impact: "Critical water access for pastoralists and settlements in Lodwar and Lokichoggio.", status: "Ongoing" },
    { title: "Lake Turkana Wind Farm Local Benefits", sector: "Energy", impact: "Local employment and community development tied to wind power.", status: "Ongoing" },
    { title: "Turkana Market & Trade Hubs", sector: "Commerce", impact: "Enhanced pastoral value chains and cross-border trade at Lokichar and Kakuma.", status: "Planned" },
    { title: "Turkana Rural Roads Rehabilitation", sector: "Transport", impact: "Improves access to markets and social services.", status: "Planned" },
    { title: "Turkana Health Outreach Programs", sector: "Health", impact: "Mobile clinics and maternal health services in remote areas.", status: "Ongoing" }
],

// West Pokot
'west-pokot': [
    { title: "West Pokot Rural Roads", sector: "Transport", impact: "Improves access to markets and health services in Kapenguria and Kacheliba.", status: "Ongoing" },
    { title: "West Pokot Water & Irrigation Trials", sector: "Agriculture", impact: "Pilot irrigation to boost food production.", status: "Planned" },
    { title: "West Pokot Health Facility Improvements", sector: "Health", impact: "Better primary care and emergency referrals.", status: "Ongoing" },
    { title: "West Pokot Education & Vocational Training", sector: "Education", impact: "Skills development targeting youth unemployment.", status: "Planned" },
    { title: "West Pokot Market Modernization", sector: "Commerce", impact: "Improved market infrastructure in Chepareria and Sigor.", status: "Ongoing" }
],

// Mandera
mandera: [
    { title: "Mandera Water & Borehole Programs", sector: "Water", impact: "Provides potable water across arid zones.", status: "Ongoing" },
    { title: "Mandera Road Upgrades (border links)", sector: "Transport", impact: "Enhances cross-border trade and security logistics.", status: "Planned" },
    { title: "Mandera County Health Outreach", sector: "Health", impact: "Mobile clinics and improved outreach services.", status: "Ongoing" },
    { title: "Mandera Agricultural Support", sector: "Agriculture", impact: "Boosts food security through extension services.", status: "Planned" },
    { title: "Mandera Vocational Training Centers", sector: "Education", impact: "Enhances youth skills development.", status: "Planned" }
],

// Wajir
wajir: [
    { title: "Wajir Water Security Projects", sector: "Water", impact: "Improves water access and reduces water-related conflict.", status: "Ongoing" },
    { title: "Wajir Rural Roads & Bridges", sector: "Transport", impact: "Improves movement of goods and services.", status: "Planned" },
    { title: "Wajir Health Facility Upgrades", sector: "Health", impact: "Strengthens primary care across sub-counties.", status: "Ongoing" },
    { title: "Wajir Pastoral Livelihood Programs", sector: "Agriculture", impact: "Supports livestock production and drought resilience.", status: "Ongoing" },
    { title: "Wajir Youth Vocational Training", sector: "Education", impact: "Skills development to reduce youth unemployment.", status: "Planned" }
],

// Garissa
garissa: [
    { title: "Garissa Boreholes & Solar Water Pumps", sector: "Water & Energy", impact: "Reliable water for households and irrigation using solar pumps.", status: "Ongoing" },
    { title: "Garissa County Hospital Improvements", sector: "Health", impact: "Better emergency and maternal care capacity.", status: "Ongoing" },
    { title: "Garissa Trade & Market Upgrades", sector: "Commerce", impact: "Supports livestock markets and cross-border trade.", status: "Planned" },
    { title: "Garissa Rural Roads Rehabilitation", sector: "Transport", impact: "Improves connectivity to remote villages.", status: "Planned" },
    { title: "Garissa Vocational Training Expansion", sector: "Education", impact: "Youth skills training centers in Garissa town.", status: "Planned" }
],

// Tana River
'tana-river': [
    { title: "Tana River Irrigation Support", sector: "Agriculture", impact: "Supports smallholder irrigation and food security.", status: "Planned" },
    { title: "Tana River Water Supply Projects", sector: "Water", impact: "Increases household water access in riverine areas.", status: "Ongoing" },
    { title: "Tana River Rural Roads", sector: "Transport", impact: "Improves access to markets and services.", status: "Planned" },
    { title: "Tana River Health Facility Upgrades", sector: "Health", impact: "Improves county referral hospital capacity.", status: "Ongoing" },
    { title: "Tana River Market Modernization", sector: "Commerce", impact: "Upgrades markets in Hola and Garsen towns.", status: "Planned" }
],

// Lamu
lamu: [
    { title: "Lamu Port Infrastructure (LAPSSET component)", sector: "Transport", impact: "Supports regional trade and port logistics.", status: "Ongoing" },
    { title: "Lamu County Water & Sanitation", sector: "Water", impact: "Improved domestic water supply for island and coastal communities.", status: "Ongoing" },
    { title: "Lamu Tourism Infrastructure Upgrades", sector: "Tourism", impact: "Enhances tourist facilities and local incomes.", status: "Planned" },
    { title: "Lamu Rural Roads Rehabilitation", sector: "Transport", impact: "Improves access to rural villages and markets.", status: "Planned" },
    { title: "Lamu Health Center Upgrades", sector: "Health", impact: "Improved basic healthcare access for residents.", status: "Ongoing" }
],

// Taita-Taveta
'taita-taveta': [
    { title: "Taita-Taveta Irrigation & Farm Support", sector: "Agriculture", impact: "Supports horticulture and macadamia value-chains.", status: "Ongoing" },
    { title: "Taita-Taveta County Roads", sector: "Transport", impact: "Improves access to Mombasa corridor and markets.", status: "Ongoing" },
    { title: "Taita-Taveta Health Facility Enhancements", sector: "Health", impact: "Better county referral capacity.", status: "Planned" },
    { title: "Taita-Taveta Market Upgrades", sector: "Commerce", impact: "Improves trading conditions in Voi and Wundanyi.", status: "Planned" },
    { title: "Taita-Taveta Vocational Training Centers", sector: "Education", impact: "Skills training programs for youth.", status: "Planned" }
],

// Kericho
kericho: [
    { title: "Kericho Tea Value-Chain Upgrades", sector: "Agriculture", impact: "Boosts tea smallholder incomes through processing and logistics.", status: "Ongoing" },
    { title: "Kericho County Roads & Bridges", sector: "Transport", impact: "Improves farm-to-market routes for tea and horticulture.", status: "Ongoing" },
    { title: "Kericho County Hospital Upgrades", sector: "Health", impact: "Improved specialist services and diagnostics.", status: "Planned" },
    { title: "Kericho Market Modernization", sector: "Commerce", impact: "Enhances local market infrastructure.", status: "Planned" },
    { title: "Kericho Vocational Training Centers", sector: "Education", impact: "Youth skills development and job readiness.", status: "Planned" }
],

// Bomet
bomet: [
    { title: "Bomet County Farm Inputs & Extension", sector: "Agriculture", impact: "Improves yields for smallholder dairy and crop farmers.", status: "Ongoing" },
    { title: "Bomet Market Modernization", sector: "Commerce", impact: "Improves trading environments for local producers.", status: "Planned" },
    { title: "Bomet Health Centre Upgrades", sector: "Health", impact: "Strengthens maternal and child health services.", status: "Ongoing" },
    { title: "Bomet Roads & Bridges", sector: "Transport", impact: "Improves access to markets and health facilities.", status: "Ongoing" },
    { title: "Bomet Vocational Training", sector: "Education", impact: "Skills training targeting youth empowerment.", status: "Planned" }
],

// Narok
narok: [
    { title: "Narok Tourism & Conservation Infrastructure", sector: "Tourism", impact: "Supports sustainable tourism and local employment.", status: "Ongoing" },
    { title: "Narok County Roads Improvements", sector: "Transport", impact: "Improves market access for livestock and crops.", status: "Ongoing" },
    { title: "Narok Market & Trade Hubs", sector: "Commerce", impact: "Boosts incomes for pastoral and agri traders.", status: "Planned" },
    { title: "Narok Health Facility Upgrades", sector: "Health", impact: "Improves referral services and emergency care.", status: "Ongoing" },
    { title: "Narok Vocational Training Centers", sector: "Education", impact: "Enhances youth skills and employment opportunities.", status: "Planned" }
]

};

/* -----------------------------
   RENDER COUNTY GRID
-------------------------------- */
function renderCounties() {
    const countyGrid = document.getElementById('countyGrid');
    if (!countyGrid) return;

    countyGrid.innerHTML = kenyaCounties.map(county => `
        <a href="#${county.id}" class="county-card" data-county="${county.id}">
            ${county.name}
        </a>
    `).join('');

    document.querySelectorAll('.county-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const countyId = this.getAttribute('data-county');
            showCountyDetails(countyId);
        });
    });
}

/* -----------------------------
   SHOW COUNTY DETAILS
-------------------------------- */
function showCountyDetails(countyId) {
    const county = kenyaCounties.find(c => c.id === countyId);
    const detailsSection = document.getElementById('countyDetails');
    const projects = countyProjects[countyId] || [];

    if (!detailsSection || !county) return;

    detailsSection.style.display = 'block';

    // Build project card markup (solid white containers with facts)
    const projectCards = projects.map(p => `
        <div class="project-card" style="
            background: #ffffff;
            border: 1px solid #e6e6e6;
            padding: 18px;
            border-radius: 10px;
            margin-bottom: 14px;
        ">
            <h3 style="margin:0 0 8px 0;">${escapeHtml(p.title)}</h3>
            <p style="margin:0 0 6px 0;"><strong>Sector:</strong> ${escapeHtml(p.sector)}</p>
            <p style="margin:0 0 6px 0;"><strong>Impact:</strong> ${escapeHtml(p.impact)}</p>
            <p style="margin:0;"><strong>Status:</strong> <span class="status-badge">${escapeHtml(p.status)}</span></p>
        </div>
    `).join('');

    // If no projects available show a helpful message
    const content = `
        <div class="container">
            <div class="content-wrapper">
                <h2>${county.name} County — Key Projects</h2>

                ${ projectCards.length ? `<div>${projectCards}</div>` : `<div class="info-box"><p>No project data available for ${county.name} yet.</p></div>` }

                <div style="margin-top: 18px;">
                    <a href="#countyGrid" class="btn btn-outline">Back to Counties</a>
                </div>
            </div>
        </div>
    `;

    detailsSection.innerHTML = content;
    detailsSection.scrollIntoView({ behavior: 'smooth' });
}

/* simple escape to avoid accidental HTML injection if any data changes */
function escapeHtml(str){
    if (!str && str !== 0) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/* -----------------------------
   INIT WHEN ON COUNTIES PAGE
-------------------------------- */
if (window.location.pathname.includes('counties/index.html') || window.location.pathname.endsWith('/counties/') ) {
    renderCounties();
}
