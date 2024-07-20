/* 
        ██████╗  █████╗ ██╗   ██╗     █████╗        ███████╗███████╗ ██████╗     ███████╗███████╗ █████╗ ████████╗██╗   ██╗██████╗ ███████╗███████╗
        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╗    ██╔════╝██╔════╝██╔════╝     ██╔════╝██╔════╝██╔══██╗╚══██╔══╝██║   ██║██╔══██╗██╔════╝██╔════╝
        ██║  ██║███████║ ╚████╔╝     ╚█████╔╝╚═╝    █████╗  ███████╗███████╗     █████╗  █████╗  ███████║   ██║   ██║   ██║██████╔╝█████╗  ███████╗
        ██║  ██║██╔══██║  ╚██╔╝      ██╔══██╗██╗    ██╔══╝  ╚════██║██╔═══██╗    ██╔══╝  ██╔══╝  ██╔══██║   ██║   ██║   ██║██╔══██╗██╔══╝  ╚════██║
        ██████╔╝██║  ██║   ██║       ╚█████╔╝╚═╝    ███████╗███████║╚██████╔╝    ██║     ███████╗██║  ██║   ██║   ╚██████╔╝██║  ██║███████╗███████║
        ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚════╝        ╚══════╝╚══════╝ ╚═════╝     ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
*/

/************************************************* Task 1 ***************************************************/
        let name = 'Gokuthecoder';
        let age = 19;
        let details = `Hey ${name} your age : ${age}`
        console.log(details);

/************************************************* Task 2 ***************************************************/
        let application = `
            Dear principle,
                DAV public School 
        `;
        console.log(application);

/************************************************* Task 3 ***************************************************/
        let arr = [true, "string", null, undefined, { name: "Demon", age: 12 }];
        let [first, second, third, fourth, fifth] = arr;
        console.log(`Array first Element : ${first}\nArray Second Element : ${second}\n`);

/************************************************* Task 4 ***************************************************/
        const book = {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publicationYear: 1960,
            genre: "Fiction",
        };

        const { title, author } = book;
        console.log(`${title}\n${author}`);

/************************************************* Task 5 ***************************************************/
        let existArray = [1, 2, 3, 4, 5];
        let newArray = [...existArray, 6, 7, 8, 9];
        console.log(newArray);

/************************************************* Task 6 ***************************************************/
        function sum(...nums) {
            console.log(nums)
            let sum = 0;
            for (let i = 0; i < nums.length; i++) {
                sum += nums[i];
            };

            console.log(`sum : ${sum}`);

        };
        sum(1, 2, 3, 4, 5)

/************************************************* Task 7 ***************************************************/
        function prodFunc(num1, num2 = 1) {
            let mult = num1 * num2;
            console.log(`Product of num1 and num2 : ${mult}`);
        };

        prodFunc(12, 45);
        prodFunc(12);

/************************************************* Task 8 ***************************************************/
        {
            const titles = "1984";
            const authors = "George Orwell";
            const year = 1949;
            const genre = "Dystopian";
            const rating = 4.7;

            const books =
            {
                titles,
                authors,
                year,
                genre,
                rating,
                getSummry() {
                    return `${this.titles} is a ${this.genre} book written by ${this.authors} in ${this.year}.`;
                }
            };

            console.log(books.getSummry());
        };

/************************************************* Task 9 ***************************************************/
        {
            const titles = "title";
            const authors = "authors";
            const year = "year";
            const genre = "genre";
            const rating = "rating";

            const books = {
                [titles]:"1984",
                [authors]:"George Orwell",
                [year]:1984,
                [genre]:"Dystopian",
                [rating]:4.7
            }

            console.log(books);
        }

