

export function romanize(num: number): string {
    let result = "";
    let current = num;

    if(current >= 1000) {
        let thousands = Math.floor(current / 1000);
        for(let i = 0; i < thousands; i++) {
            result += "M";
        }
        current -= thousands * 1000;
    }

    function roman_system(one: string, five: string, ten:string, base: number) {
        let digit = Math.floor(current / base);
        current -= digit * base;
        if(digit == 4) {
            result += one+five
        }else if(digit == 9) {
            result += one + ten
        }else if(digit >= 5) {
            result += five
            digit -= 5;
            for(let i = 0; i < digit; i++) {
                result += one;
            }
        }else{
            for(let i = 0; i < digit; i++) {
                result += one;
            }
        }
    }

    if(current >= 100) {
        roman_system("C","D","M", 100);
    }

    if(current >= 10) {
        roman_system("X","L","C", 10);
    }

    if(current > 0) {
        roman_system("I","V","X", 1);
    }
    return result;
}
