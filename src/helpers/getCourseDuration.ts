function getCourseDuration(value: number | string): string {

    let durationValue: number = Number(value);

    if (isNaN(durationValue)) {
        durationValue = 0;
    }

    let m: number = durationValue % 60;
    let h: number = (durationValue - m) / 60;

    let hh: string | number = h < 10 ? `0${h}` : h;
    let mm: string | number = m < 10 ? `0${m}` : m;

    if (h === 0 && m === 1) {
        return `${hh}:${mm} minute`;
    } else if (h === 0 && m > 0) {
        return `${hh}:${mm} minutes`;
    }

    return h === 1 ? `${hh}:${mm} hour` : `${hh}:${mm} hours`;
}

export default getCourseDuration;
