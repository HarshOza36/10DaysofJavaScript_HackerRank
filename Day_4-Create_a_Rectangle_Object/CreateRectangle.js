/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    const area= Number(a)*Number(b)
    const perimeter=2*(Number(a)+Number(b))
    this.length=a
    this.width=b
    this.area=area
    this.perimeter=perimeter
    
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}