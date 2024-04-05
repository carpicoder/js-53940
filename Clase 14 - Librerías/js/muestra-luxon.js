// let DateTime = luxon.DateTime;
// let Duration = luxon.Duration;
// let Interval = luxon.Interval;

// console.log(now);

// const dt = DateTime.local(2022, 12, 18, 12, 0, 0, 0).toLocaleString();

// const dt = DateTime.fromObject(
//     {
//         day: 18, month: 12, year: 2022
//     },
//     {
//         zone: "America/Buenos_Aires"
//     }
// )
// const dt = DateTime.fromISO("2024-04-05T15:02:00.000-03:00")
// console.log(dt.setLocale("es").toLocaleString(DateTime.DATE_FULL));
// console.log(dt.toFormat('hh:mm a'));

// console.log(dt.plus({
//     hours: 3,
//     minutes: 30
// }).toLocaleString(DateTime.TIME_SIMPLE))

// console.log(dt.minus({
//     hours: 3,
//     minutes: 30
// }).toLocaleString(DateTime.TIME_SIMPLE))

// console.log(dt.hour);

// const now = DateTime.now();
// const dur = Duration.fromObject({
//     hours: 3,
//     minutes: 30
// });

// const sumaDeHoy = now.plus(dur);
// console.log(sumaDeHoy.toLocaleString(DateTime.DATETIME_FULL));

// const mundial = DateTime.fromISO("2022-12-18T15:00:00.000-03:00");
// const i = Interval.fromDateTimes(mundial, now);
// console.log(i.length("days"));