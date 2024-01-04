let studentName: string = 'Hi'
let student2Name: string = 'My'
let student3Name: string = 'Name'
let student4Name: string = 'Is'
let student5Name: string = 'Sultan'
let student6Name: string = 'How'
let student7Name: string = 'Are'
let student8Name: string = 'You'
let student9Name: string = 'Whats'
let student10Name: string = 'Your name'

let studentCount1: number = 1;
let studentCount2: number = 2;
let studentCount3: number = 3;
let studentCount4: number = 4;
let studentCount5: number = 5;
let studentCount6: number = 6;
let studentCount7: number = 7;
let studentCount8: number = 8;
let studentCount9: number = 9;
let studentCount10: number = 0;

let isReady: boolean = true;
let isLazy: boolean = false;
let isReadyHomeWork: boolean = true;
let isBlack: boolean = false;
let isLoggedInTelegram: boolean = true;
let isLoggenInWhatsApp: boolean = false;
let isHaveName: boolean = true;
let isWorking: boolean = false;
let isDid: boolean = true;
let isSmart: boolean = false;

type Car = {
  make: string,
  model: string,
  year: number,
  isElectric: boolean
};

type Car2 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car3 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car4 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car5 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car6 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car7 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car8 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car9 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

type Car10 = {
    make: string,
    model: string, 
    year: number,
    isElectric: boolean
};

let randomName: string[] = ["John", "Mary", "Tom"];

let randomName2: string[] = ["John", "Mary", "Tom"];

let randomName3: string[] = ["John", "Mary", "Tom"];

let randomName4: string[] = ["John", "Mary", "Tom"];

let randomName5: string[] = ["John", "Mary", "Tom"];

let randomName6: string[] = ["John", "Mary", "Tom"];

let randomName7: string[] = ["John", "Mary", "Tom"];

let randomName8: string[] = ["John", "Mary", "Tom"];

let randomName9: string[] = ["John", "Mary", "Tom"];

let randomName10: string[] = ["John", "Mary", "Tom"];

function minus ( a: number , b: number ) : number {
    return a - b;
}

function minus2 ( a: number , b: number ) : number {
    return a - b;
}
function minus3 ( a: number , b: number ) : number {
    return a - b;
}

function minus4 ( a: number , b: number ) : number {
    return a - b;
}
function minus5 ( a: number , b: number ) : number {
    return a - b;
}

function minus6 ( a: number , b: number ) : number {
    return a - b;
}
function minus7 ( a: number , b: number ) : number {
    return a - b;
}

function minus8 ( a: number , b: number ) : number {
    return a - b;
}
function minus9 ( a: number , b: number ) : number {
    return a - b;
}

function minus10 ( a: number , b: number ) : number {
    return a - b;
}


function sum ( a: number , b: number ) : number {
    return a + b;
}

function multiply(a: number, b: number ) : number {return a * b}

function isEven (num: number ): boolean {
    return num % 2 === 0;
}

function capitalize ( str: string ): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseArray<T>( arr: T[] ): T[] {
    return arr.reverse();
}

function findMax ( nums: [] ) : number{
    return Math.max(...nums);
}

function filterStrings(arr: Array<number | string>): string[] {
return arr.filter((item) => typeof item === "string") as string[];
}

function calculateAverage ( nums: number[] ): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

function getUniqueValues<T>( arr: T[] ): T[] {
  return Array.from(new Set(arr));
}

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}.${month}.${year}`;
}

