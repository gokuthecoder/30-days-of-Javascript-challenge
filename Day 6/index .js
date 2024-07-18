    /*
               ██████╗  █████╗ ██╗   ██╗     ██████╗         █████╗ ██████╗ ██████╗  █████╗ ██╗   ██╗███████╗
               ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔════╝ ██╗    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝██╔════╝
               ██║  ██║███████║ ╚████╔╝     ███████╗ ╚═╝    ███████║██████╔╝██████╔╝███████║ ╚████╔╝ ███████╗
               ██║  ██║██╔══██║  ╚██╔╝      ██╔═══██╗██╗    ██╔══██║██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  ╚════██║
               ██████╔╝██║  ██║   ██║       ╚██████╔╝╚═╝    ██║  ██║██║  ██║██║  ██║██║  ██║   ██║   ███████║
               ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═════╝        ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
    */

        /********************************************* Task 1 *********************************************/
        const arr = [12, 54, 65, 76];
        console.table(arr);

        /********************************************* Task 2 *********************************************/
        const arr1 = [12, 'Chai', 99, 'code', true, null];
        const arrLength = arr1.length;
        console.log(`arr1 first element : ${arr1[0]} \n\n arr1 last element : ${arr1[arrLength-1]}`);
        
        /********************************************* Task 3 *********************************************/
        const arr2 = [true, 'harry', 12, 453];
        arr.push(7992); // add element in first of array
        console.log(arr2);
        
        /********************************************* Task 4 *********************************************/
        const arr3 = [true, 'harry', 12, 453];
        arr3.pop(); // delete last element from array
        console.log(arr3);

        /********************************************* Task 5 *********************************************/
        let mixed = [42, "hello", true, null, { name: "John" }];
        mixed.shift(); // remove first element from array
        console.log(mixed);

        /********************************************* Task 6 *********************************************/
        let matrix = [
            [4, 5, 6],
            [7, 8, 9],
        ];
        matrix.unshift([1, 2, 3]); // add first element from array
        console.log(matrix);
        
        /********************************************* Task 7 *********************************************/
        let arr4 = [12, 54, 65, 76];
        let MapedArray = arr4.map(value=> value * 2);
        console.log(MapedArray);

        /********************************************* Task 8 *********************************************/
        let arr5 = [12, 54, 65, 76];
        let FilteredEvenArray = arr5.filter(value=> value % 2 === 0 );
        console.log("filtered:", FilteredEvenArray);
        
        /********************************************* Task 9 *********************************************/
        let arr6 = [12, 54, 65, 76];
        const initialValue = 0;
        const sum = arr6.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue,
        );
        
        console.log(sum);

        /********************************************* Task 10 *********************************************/
        let arr7 = [12, 54, 65, 76];
        for (let i = 0; i < arr7.length; i++) {
            const element = arr7[i];
            console.log(element);
        };
        /********************************************* Task 11 *********************************************/
        let arr8 = [9, 18, 27, 36];
        arr8.forEach(function (value){
            console.log(value);
        });
        
        /********************************************* Task 12 *********************************************/
        let twoDimen = [
            ['John Doe', 20, 60, 'A'],
            ['Jane Doe', 10, 52, 'B'],
            ['Petr Chess', 5, 24, 'F'],
            ['Ling Jess', 28, 43, 'A'],
            ['Ben Liard', 16, 51, 'B']
        ];
        
        console.log(twoDimen);
        console.table(twoDimen);
        
        /********************************************* Task 13 *********************************************/
        let anotherTwoDimen = [
            ['Alice Smith', 18, 75, 'B'],
            ['Bob Brown', 22, 68, 'C'],
            ['Cathy Green', 15, 80, 'A'],
            ['David White', 19, 55, 'D'],
            ['Eva Black', 21, 90, 'A']
        ];
        
        console.log(anotherTwoDimen[3][0]);

        
        












































































