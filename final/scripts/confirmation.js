const getString = window.location.search;
const formInfo = new URLSearchParams(getString);
const ccNumber = formInfo.get('card-number');
const ccNumberLastFour = ccNumber.toString().slice(-4);

document.querySelector('#results').innerHTML = `
<h2>Ticket Information</h2>
<ul>
<li>Game:  <b>${formInfo.get('ticket-info-field')}</b></li>
<li>Number of tickets:  <b>${formInfo.get('num-of-tickets')}</b></li>
<li>Ticket delivery method:  ${formInfo.get('delivery')}</li>
<li>Seat location:  ${formInfo.get('seat-location')}</li>
</ul>
<h2>Buyer Information</h2>
<ul>
<li>Name:  ${formInfo.get('firstName')} ${formInfo.get('lastName')}</li>
<li>Contact information:  ${formInfo.get('email')} | ${formInfo.get('phone')}</li>
<li>Purchase method:  ${formInfo.get('type')} credit card ending in ${ccNumberLastFour}</li>
</ul>
<br>
<p>Transaction made on ${formInfo.get('timestamp')}</p>
<p><b>Thanks for your purchase!</b></p>
`;