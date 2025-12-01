// OpenStreetMap-based Flythrough Configuration
// No API tokens required - uses free OpenStreetMap tiles via Leaflet

var config = {
    // =============================================================================
    // MAP STYLE SETTINGS
    // To change style: comment out current tileLayer and uncomment your choice
    // =============================================================================
    
    // Positron Light (clean minimal style, perfect for data visualization)
    tileLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    
    // Dark Positron (dark theme)
    // tileLayer: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    
    // Standard OpenStreetMap (classic map style)
    // tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    
    // Terrain (topographic map)
    // tileLayer: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    
    // =============================================================================
    // COLOR SCALE SETTINGS (Choose one - Plotly inspired)
    // =============================================================================
    
    colorScale: 'RdYlGn',  // Options: 'RdYlGn' (Red-Yellow-Green) or 'Portland' (Blue-White-Red)
    
    // =============================================================================
    // STORY CHAPTERS
    // Students: Fill in with your data
    // - Coordinates: Get from your CSV file (latitude, longitude columns)
    // - Post counts & sentiment scores: Look up in your whitepaper visualizations
    // =============================================================================
    
    chapters: [
        {
            // CHAPTER 1: Overview of both locations
            id: 'intro',
            title: 'Reddit Sentiment Analysis: Two College Towns based off ODU and JMU',
            description: 'Exploring how students discuss their campuses on Reddit - comparing JMU in Harrisonburg, VA and ODU in Norfolk, VA.',
            image: './images/campus_overview_jmu.jpg',
            duration: 2500,
            
            // Camera position (where to fly)
            camera: {
                latitude: 37.60482264492383,             // Midpoint between ODU and JMU
                longitude:  -77.58426363061757,
                zoom: 8                     // Wide view of both locations
            },
            
            showData: 'all_locations'       // Show all locations from both schools
        },
        
        {
            // CHAPTER 2: JMU Campus Overview
            id: 'jmu-campus',
            title: 'JMU Campus Overview',
            description: 'James Madison University in Harrisonburg, Virginia. Three key locations emerge from student discussions. The Quad, D-Hall, The Village',
            image: './images/campus_overview_jmu.jpg',
            duration: 2500,
            
            // Camera position
            camera: {
                latitude: 38.4351338389363,
                longitude: -78.86978845363538,
                zoom: 14
            },
            
            showData: 'jmu_locations'       // Show only JMU locations
        },
        
        {
            // CHAPTER 3: JMU Location 1
            id: 'jmu-location-1',
            title: 'JMU Location 1: The Quad',
            description: 'The main area on campus, part of the bluestone area. The "heart of campus".',
            image: './images/chapter_1_jmu_quad.jpg',
            duration: 2500,
            
            // Camera position
            camera: {
                latitude: 38.43989444662613,           // Replace with coordinates from CSV
                longitude: -78.874930472760010,
                zoom: 17
            },
            
            // Location data (creates the marker on map)
            location: {
                name: 'JMU Location 1',      // Replace with location name from CSV
                latitude: 38.4347,           // Must match camera coordinates
                longitude: -78.8690,
                postCount: 50,               // Look up in your whitepaper visualizations
                robertaScore: 0.25,          // Look up in your whitepaper visualizations
                isJMU: true
            },
            
            showData: 'individual'           // Highlight only this location
        },
        
        {
            // CHAPTER 4: JMU Location 2
            id: 'jmu-location-2',
            title: 'JMU Location 2: D-Hall',
            description: 'One of the more common food options on campus. Located in the west of main campus and has multiple different food options inside, as well as food stations.',
            image: './images/chapter_2_dhall.jpg',
            duration: 2500,
            
            camera: {
                latitude: 38.437286411214814,
                longitude: -78.87194619268928,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 2',
                latitude: 38.4335,
                longitude: -78.8715,
                postCount: 75,
                robertaScore: -0.15,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 5: JMU Location 3
            id: 'jmu-location-3',
            title: 'JMU Location 3: Village',
            description: 'One of the more known housing options on campus. One of the oldest residental areas of JMU. Has 9 buildings and closer to east campus compared to Bluestone.',
            image: './images/chapter_3_village_jmu.jpg',
            duration: 2500,
            
            camera: {
                latitude: 38.436007797598776,
                longitude: -78.86803654082671,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4390,
                longitude: -78.8620,
                postCount: 100,
                robertaScore: 0.55,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 6: ODU Campus Overview
            id: 'odu-campus',
            title: 'ODU Campus Overview',
            description: 'Old Dominion University. Three key locations emerge from student discussions: Hampton Blvd, Powhatan Apartments, and Lamberts Point.',
            image: './images/campus_overview_odu.jpg',
            duration: 2500,
            
            camera: {
                latitude: 36.885801810785075,
                longitude: -76.305878658499998,
                zoom: 14
            },
            
            showData: 'non_jmu_locations'    // Show only UNC locations
        },
        
        {
            // CHAPTER 7: ODU Location 1
            id: 'odu-location-1',
            title: 'ODU Location 1:Hampton Blvd ',
            description: 'Major area that runs through the campus. Student life is located here like dorms, food halls, academic buildings. Its the main community structure for ODU.  ',
            image: './images/chapter_4_hampton_blvd.jpg',
            duration: 2500,
            
            camera: {
                latitude: 36.9041808665476,
                longitude: -76.30439597383146,
                zoom: 17
            },
            
            location: {
                name: 'ODU Location 1',
                latitude: 36.8853,
                longitude: -76.3059,
                postCount: 20,
                robertaScore: 0.1499,
                isJMU: false                 // ODU location
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 8: ODU Location 2
            id: 'odu-location-2',
            title: 'ODU Location 2: Powhatan Apartments ',
            description: 'On campus apartment style housing at ODU, located on the west side of campus. Its near the river boardwalk, the sand-volleyball courts, barbecue grills, as well as the universities Sailing Center.',
            image: './images/chapter_5_powhatan_odu.jpg',
            duration: 2500,
            
            camera: {
                latitude: 36.886772905468376,
                longitude:  -76.31399039262554,
                zoom: 17
            },
            
            location: {
                name: 'ODU Location 2',
                latitude: 35.9060,
                longitude: -79.0480,
                postCount: 85,
                robertaScore: -0.10,
                isJMU: false
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 9: ODU Location 3
            id: 'odu-location-3',
            title: 'ODU Location 3: Lamberts Point ',
            description: 'Neighborhood in Norfolk, Virgina. Located near ODU and houses old homes, residential streets, and located near the river.',
            image: './images/chapter_6_lamberts_point.jpg',
            duration: 2500,
            
            camera: {
                latitude: 36.88321035319649,
                longitude: -76.30810572781452,
                zoom: 17
            },
            
            location: {
                name: 'ODU Location 3',
                latitude: 35.9070,
                longitude: -79.0490,
                postCount: 95,
                robertaScore: 0.40,
                isJMU: false
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 10: Final zoom out
            id: 'conclusion',
            title: 'Conclusion: Comparing Campus Sentiment',
            description: 'Our analysis reveals both similarities and differences in how students experience and discuss these two universities.',
            image: './images/campus_overview_odu.jpg',
            duration: 2500,
            
            camera: {
                latitude: 37.60482264492383, 
                longitude: -77.58426363061757,
                zoom: 8
            },
            
            showData: 'all_locations'
        }
    ]
};
