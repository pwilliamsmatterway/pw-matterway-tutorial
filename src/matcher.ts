export default function matcher(window: Window) {
  const isServiceDeskTicket = window.location.href.startsWith(
    `https://hr-service-desk.demo.matterway.io/ticket`,
  );
  const isParentalLeaveTicket =
    window.document
      .getElementById('sys_display.incident.category')
      ?.getAttribute('value') === 'Parental leave';

  return isServiceDeskTicket && isParentalLeaveTicket;
}