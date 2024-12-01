// Replace 'YOUR_WEBHOOK_URL' with your actual Discord webhook URL
const webhookURL = 'https://discord.com/api/webhooks/1312801262286405692/ZJUOtnWT25uPB1i8cJVs94qPCpyQibF5uVXvcoSX0MvTq93asLBgB9DSXKu0j01GQtGh';

// Example survey response data
const surveyData = {
    username: "Survey Bot", // This name will appear as the sender in Discord
    content: `New Survey Response Received:
    - Question 1: Answer Here
    - Question 2: Answer Here
    - Question 3: Answer Here`
};

// Send survey data to the Discord webhook
fetch(webhookURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(surveyData)
})
    .then(response => {
        if (response.ok) {
            console.log('Survey response successfully sent to Discord!');
        } else {
            console.error('Failed to send survey response:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));