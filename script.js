const locations = [
    "Amusement Park", "Art Museum", "Bakery", "Bank", "Beach",
    "Bookstore", "Bowling Alley", "Bridge", "Bus Station", "Casino",
    "Cathedral", "Cemetery", "Circus", "Coffee Shop", "Construction Site",
    "Cruise Ship", "Desert", "Embassy", "Farm", "Fire Station",
    "Forest", "Gas Station", "Grocery Store", "Harbor", "High School",
    "Hospital", "Hotel", "Ice Cream Shop", "Island", "Jail",
    "Lake", "Library", "Lighthouse", "Mall", "Market",
    "Military Base", "Mine", "Monastery", "Movie Theater", "Mountain",
    "Night Club", "Observatory", "Office Building", "Oil Rig", "Opera House",
    "Palace", "Parking Garage", "Pharmacy", "Playground", "Police Station",
    "Port", "Post Office", "Prison", "Quarry", "Race Track",
    "Radio Station", "Resort", "Restaurant", "Roller Skating Rink", "Safari",
    "School", "Science Lab", "Shipyard", "Ski Lodge", "Skyscraper",
    "Spa", "Stadium", "Subway Station", "Supermarket", "Swimming Pool",
    "Temple", "Theme Park", "Train Station", "University", "Vineyard",
    "Volcano", "Waterfall", "Water Park", "Wedding Venue", "Wild West Town",
    "Windmill", "Winery", "Zoo", "Aquarium", "Antique Shop",
    "Arcade", "Ballroom", "Barber Shop", "Baseball Stadium", "Basketball Court",
    "Boxing Gym", "Candy Store", "Car Factory", "Clock Tower", "Comedy Club",
    "Fishing Pier", "Golf Course", "Hunting Cabin", "Ice Skating Rink", "Yacht Club",
    "Camping Ground", "Rock Climbing Gym", "Trampoline Park", "Petting Zoo", "Skate Park",
    "Coworking Space", "Botanical Garden", "Train Yard", "Helicopter Pad", "Brewery",
    "Haunted House", "Waterfall Cave", "City Hall", "Indoor Arena", "Beach House",
    "Luxury Yacht", "Sports Bar", "Farmhouse", "Wind Turbine Field", "Cave System",
    "Jungle", "Floating Market", "Safari Lodge", "Snow Fortress", "Fishing Boat",
    "Water Reservoir", "Cruise Port", "Art Gallery", "Science Museum", "Space Observatory",
    "Library Basement", "Underground Bunker", "Luxury Apartment", "Small Town Diner", "Candy Factory",
    "Escape Room", "Laser Tag Arena", "Tribal Village", "Fishing Dock", "Dog Park",
    "Rooftop Bar", "VR Gaming Arcade", "Ancient Temple", "Abandoned Building", "Fountain Plaza",
    "Private Island", "Car Dealership", "Electronics Store", "Shipwreck Site", "Forest Cabin",
    "Lava Field", "Hot Springs", "Climbing Wall", "Underground Cave", "Volcano Crater",
    "Frozen Lake", "City Rooftop", "Desert Ruins", "Mountain Cabin", "Theme Park Ride",
    "Submarine", "Helicopter", "Luxury Train", "Safari Jeep", "Floating Island",
    "Ruins of a Castle", "Secret Lab", "Battle Arena", "Concert Hall", "Outdoor Cinema",
    "Medieval Town", "Pirate Ship", "Train Platform", "Sky Bridge", "Rainforest",
    "Solar Power Plant", "Greenhouse", "Bamboo Forest", "Underwater City", "Mars Colony",
    "Robot Factory", "Old Mine Shaft", "Meteor Crater", "Airplane Hangar", "Magic Academy",
    "Haunted Forest", "Waterfall Bridge", "Hidden Lagoon", "Luxury Mall", "Beachfront Hotel",
    "Undersea Tunnel", "Floating City", "Space Station", "Underground Metro", "Railway Museum",
    "Lighthouse Cliff", "Abandoned Village", "Rocket Launch Pad", "Cultural Festival", "Winter Palace",
    "Solar Observatory", "Artificial Island", "Cargo Ship", "Space Observatory", "Northern Lights Camp",
    "Futuristic City", "Moon Base", "Planetarium", "Robot Warehouse", "Urban Farm",
    "Luxury Spa", "Floating Bar", "Rural Train Station", "Castle Courtyard", "Ancient Library"
];


document.getElementById('setupPlayers').addEventListener('click', setupPlayers);
document.getElementById('startGame').addEventListener('click', assignRoles);

function setupPlayers() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    if (numPlayers < 4 || numPlayers > 12 || isNaN(numPlayers)) {
        alert('Please enter a valid number of players between 4 and 12.');
        return;
    }

    const playerForm = document.getElementById('playerForm');
    playerForm.innerHTML = '';

    for (let i = 0; i < numPlayers; i++) {
        const label = document.createElement('label');
        label.textContent = `Player ${i + 1} Name:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Enter Player ${i + 1} Name`;
        input.required = true;
        playerForm.appendChild(label);
        playerForm.appendChild(input);
    }

    document.querySelector('.setup').classList.add('hidden');
    document.getElementById('playerNamesSection').classList.remove('hidden');
}

function assignRoles() {
    const playerInputs = document.querySelectorAll('#playerForm input');
    const players = Array.from(playerInputs).map(input => input.value.trim());

    if (players.some(name => name === '')) {
        alert('Please fill in all player names.');
        return;
    }

    const spyIndex = Math.floor(Math.random() * players.length);
    const location = locations[Math.floor(Math.random() * locations.length)];

    const roles = players.map((name, index) => ({
        name,
        role: index === spyIndex ? 'Spy' : location
    }));

    const rolesContainer = document.getElementById('roles');
    rolesContainer.innerHTML = '';

    roles.forEach(player => {
        const button = document.createElement('button');
        button.textContent = `${player.name}: View Location`;
        button.onclick = () => {
            alert(`${player.name}, your location is: ${player.role}`);
        };
        rolesContainer.appendChild(button);
    });

    document.getElementById('playerNamesSection').classList.add('hidden');
    document.getElementById('gameSection').classList.remove('hidden');
}
