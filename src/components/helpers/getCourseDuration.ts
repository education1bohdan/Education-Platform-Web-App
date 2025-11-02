function getCourseDuration(data: number): string {
    let m: number = data % 60;
    let h: number = (data - m) / 60;

    let hh: string | number = h < 10 ? `0${h}` : h;
    let mm: string | number = m < 10 ? `0${m}` : m;

    return h === 1 ? `${hh}:${mm} hour` : `${hh}:${mm} hours`
}

export default getCourseDuration;
export { getCourseDuration };
