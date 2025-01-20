const temperatureInput = document.getElementById('temperature');
const rainSelect = document.getElementById('rain');
const adviseButton = document.getElementById('advise');
const adviceParagraph = document.getElementById('advice');

adviseButton.addEventListener('click', (e) => {
    e.preventDefault();
    const temperature = parseInt(temperatureInput.value);
    const rain = rainSelect.value;

    if (isNaN(temperature) || temperature === '') {
        adviceParagraph.textContent = 'Please enter a valid temperature.';
        return;
    }

    if (rain === '') {
        adviceParagraph.textContent = 'Please select an option for rain.';
        return;
    }

    const advice = getAdvice(temperature, rain);
    adviceParagraph.textContent = advice;
});

function getAdvice(temperature, rain) {
    let advice = '';

    if (rain === 'yes') {
        advice += 'Bring an umbrella or raincoat. ';
    }

    if (temperature < 0) {
        advice += 'Wear warm and layered clothing, including a hat and gloves.';
    } else if (temperature < 15) {
        advice += 'Wear a light jacket or sweater.';
    } else if (temperature < 25) {
        advice += 'Wear casual, breathable clothing.';
    } else {
        advice += 'Wear light, loose-fitting clothing and stay hydrated.';
    }

    return advice;
}
