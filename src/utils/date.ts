const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
/**
 * 
 * @param input date 2025-01-20
 * @param formate output formate default is DD MM YYYY
 * @returns  20 Junary 2025
 */
export function formateDate(input: string, formate: string = 'DD MM YYYY') {
    //the input is validated, can be used for new Date
    if (input) {
        const date = new Date(input)
        const day = date.getDate() + ''
        const month = MONTH[date.getMonth()]
        const year = date.getFullYear() + ''
        const output = formate.replace(/DD/, day).replace(/MM/, month).replace(/YYYY/, year)
        return output
    }
    return ''
}