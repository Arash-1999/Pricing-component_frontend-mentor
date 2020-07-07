const annually = document.querySelectorAll('.annually'),
  monthly = document.querySelectorAll('.monthly'),
  switchBtn = document.querySelector('.checkbox');
let monthlyPlan = false;

switchBtn.addEventListener('click', function () {
  if (!monthlyPlan) {
    monthly.forEach((item) => item.style.setProperty('display', 'flex'));
    annually.forEach((item) => item.style.setProperty('display', 'none'));
  } else {
    monthly.forEach((item) => item.style.setProperty('display', 'none'));
    annually.forEach((item) => item.style.setProperty('display', 'flex'));
  }
  monthlyPlan = !monthlyPlan;
});
