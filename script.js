document.addEventListener('DOMContentLoaded', function() {
    // Populate game options
    const gamesData = [
        { title: 'Game A', sensitivityFactor: 0.5 },
        { title: 'Game B', sensitivityFactor: 0.75 }
    ];
    const fromGameSelect = document.getElementById('fromGame');
    const toGameSelect = document.getElementById('toGame');

    gamesData.forEach(game => {
        const option = document.createElement('option');
        option.value = game.title;
        option.text = game.title;
        fromGameSelect.add(option.cloneNode(true));
        toGameSelect.add(option.cloneNode(true));
    });

    // Event listener for form submission
    document.getElementById('conversionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const fromGame = document.getElementById('fromGame').value;
        const toGame = document.getElementById('toGame').value;
        const fromSensitivity = parseFloat(document.getElementById('fromSensitivity').value);
        const fromDPI = parseInt(document.getElementById('fromDPI').value);
        const toDPI = parseInt(document.getElementById('toDPI').value);

        // Conversion logic goes here
        console.log(`Conversion from ${fromGame} to ${toGame} with sensitivity ${fromSensitivity} and DPI ${fromDPI} to ${toDPI}`);
        
        // Display result
        document.getElementById('convertedSens').textContent = 'Result';
        document.getElementById('cmPer360').textContent = 'Result';
        document.getElementById('inchPer360').textContent = 'Result';
    });
});
