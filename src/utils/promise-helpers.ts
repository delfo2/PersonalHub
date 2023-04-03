export function resConverter(res: Response) : Promise<any> {
    return res.json();
}