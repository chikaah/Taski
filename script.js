let points = 0;

function completeTask() {
    showRewardedInterstitial();
}

function claimBonus() {
    showRewardedPopup();
}

function showRewardedInterstitial() {
    show_9273434().then(() => {
        alert('You have seen an ad!');
        afterAdCompleted();
    }).catch(e => {
        console.log('Ad error:', e);
    });
}

function showRewardedPopup() {
    show_9273434('pop').then(() => {
        alert('Bonus ad completed!');
        afterBonusAdCompleted();
    }).catch(e => {
        console.log('Popup ad error:', e);
    });
}

function afterAdCompleted() {
    points += 5;
    updatePoints();
}

function afterBonusAdCompleted() {
    points += 10;
    updatePoints();
}

function updatePoints() {
    document.getElementById('points').innerText = `Points: ${points}`;
}

// OPTIONAL: Activate In-App Interstitial automatically every few minutes
show_9273434({ 
  type: 'inApp', 
  inAppSettings: { 
    frequency: 2, 
    capping: 0.1, 
    interval: 30, 
    timeout: 5, 
    everyPage: false 
  } 
});￼Enter
