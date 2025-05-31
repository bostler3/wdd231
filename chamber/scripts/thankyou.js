const getString = window.location.search;
const formInfo = new URLSearchParams(getString);

document.querySelector('#results').innerHTML = `
<h2>Application Information</h2>
<ul>
<li>Membership level:  <b>${formInfo.get('level')}</b></li>
<li>Organization name:  ${formInfo.get('orgName')}</li>
<li>Submitted by ${formInfo.get('firstName')} ${formInfo.get('lastName')} on ${formInfo.get('timestamp')}</li>
<li>Contact information:  ${formInfo.get('email')} | ${formInfo.get('phone')}</li>
</ul>
`;