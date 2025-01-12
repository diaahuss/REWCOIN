function showOpenScreen() {
    document.getElementById('openScreen').style.display = 'block';
    document.getElementById('signupScreen').style.display = 'none';
    document.getElementById('rewardScreen').style.display = 'none';
    document.getElementById('transactionScreen').style.display = 'none';
}

function showSignup() {
    document.getElementById('openScreen').style.display = 'none';
    document.getElementById('signupScreen').style.display = 'block';
}

function showRewardScreen() {
    document.getElementById('rewardScreen').style.display = 'block';
    document.getElementById('transactionScreen').style.display = 'none';
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate a login check
    if (email === 'test@example.com' && password === 'password') {
        showRewardScreen();
    } else {
        document.getElementById('loginFeedback').innerText = 'Invalid email or password.';
    }
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('signupFeedback').innerText = 'Passwords do not match.';
        return;
    }
    // Simulate a successful signup
    document.getElementById('signupFeedback').innerText = '';
    alert('Signup successful! You can now login.');
    showOpenScreen();
}

function resetPassword() {
    const email = document.getElementById('loginEmail').value;
    // Simulate sending a reset password email
    if (email) {
        alert('Reset password email sent to ' + email);
    } else {
        alert('Please enter your email to reset password.');
    }
}

function submitReward() {
    // Collect data from inputs
    const name = document.getElementById('rewardName').value;
    const email = document.getElementById('rewardEmail').value;
    const voucherCode = document.getElementById('voucherCode').value;
    const walletAddress = document.getElementById('walletAddress').value;
    const businessName = document.getElementById('businessName').value;
    const businessEmail = document.getElementById('businessEmail').value;

    // Simulate reward process submission
    // Send this data to the server via API if required
    
    alert('Reward submitted! Please allow a few days to process the voucher.');
    document.getElementById('rewardFeedback').innerText = '';
    showTransactionScreen(name, email);
}

function showTransactionScreen(name, email) {
    document.getElementById('transactionData').innerText = `Thank you, ${name}. Your reward has been submitted!`;
    showRewardScreen();
}
