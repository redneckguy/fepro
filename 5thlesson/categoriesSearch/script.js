'use strict';

const categoriesTree = [
    {
        id: 'beaeea2c-44f1-4563-862d-fc37cf1a139b',
        disabled: false,
        name: 'Bread',
        children: [
            {
                id: 'b92ef86f-13db-4d36-8e8a-2dbbbae472ef',
                disabled: false,
                name: 'Croissants',
                children: []
            },
            {
                id: 'b0bc1865-63ee-4951-8368-065658bde70b',
                disabled: false,
                name: 'White bread',
                children: []
            },
            {
                id: '9f260355-2f7e-444b-8888-46f41d34313a',
                disabled: true,
                name: 'Black bread',
                children: []
            },
        ]
    },
    {
        id: '8ed6a3fa-8942-4e65-b26c-94a9973b8622',
        disabled: false,
        name: 'Fruits & Vegetables',
        children: [
            {
                id: '3ef868cf-a536-4789-809e-fb2e4aa516d4',
                disabled: false,
                name: 'Fruits',
                children: []
            },
            {
                id: '34b10d30-603a-48a4-a380-935ba891e5da',
                disabled: true,
                name: 'Vegetables',
                children: [
                    {
                        id: '62a85aaf-c6a9-4a76-8d37-52ab282f796b',
                        disabled: false,
                        name: 'Local vegetables',
                        children: []
                    },
                    {
                        id: 'f2bc640a-0081-4db4-b7f2-4c8133392a9e',
                        disabled: false,
                        name: 'Imported vegetables',
                        children: []
                    },
                ]
            },
            {
                id: '84c49514-c9a4-4ed7-aa8c-a120098761f1',
                disabled: true,
                name: 'Greens',
                children: []
            },
        ]
    },
    {
        id: '957eb194-6151-4e98-b1f9-b28a24807902',
        name: 'Grocery',
        children: [
            {
                id: '07a3b755-c19b-47ce-810b-adaa3c958a69',
                disabled: false,
                name: 'Spaghetti',
                children: []
            },
            {
                id: '3bbf879d-67f6-45e4-8dca-deb0ad3ebf43',
                disabled: false,
                name: 'Cereals',
                children: []
            },
            {
                id: '2406bcfc-d795-4855-a16a-6d0c74fdc3bc',
                disabled: false,
                name: 'Canned food',
                children: [
                    {
                        id: '3e546013-fbad-4ac2-ac8f-5e1b35c22d70',
                        disabled: false,
                        name: 'Canned meat',
                        children: [
                            {
                                id: 'd3178d75-dc00-4e6e-be2f-34fe83e9a4c5',
                                disabled: false,
                                name: 'Canned pork',
                                children: []
                            },
                            {
                                id: '6ef12fe5-fb55-49b6-b722-3c734f963041',
                                disabled: true,
                                name: 'Canned beef',
                                children: []
                            },
                            {
                                id: 'a69e5dc5-9ef9-4218-86d9-66d166236aeb',
                                disabled: false,
                                name: 'Canned chicken',
                                children: []
                            },
                        ]
                    },
                    {
                        id: 'f38300dd-2e82-40bf-9f5b-c73ca79e9461',
                        disabled: false,
                        name: 'Canned fish',
                        children: []
                    },
                    {
                        id: '1d3c598e-dd4e-453a-ad56-49c31cfc094f',
                        disabled: false,
                        name: 'Canned vegetables',
                        children: []
                    },
                ]
            },
        ]
    },
    {
        id: 'b47b2bbc-df04-4c15-8016-ac4dbcf33cca',
        name: 'Drinks',
        children: [
            {
                id: '88a31184-2b7a-454d-b4ef-1c89e9f3acf6',
                disabled: false,
                name: 'Bottled water',
                children: []
            },
            {
                id: '448ba31c-2e7d-4249-a5eb-eb51829bff42',
                disabled: false,
                name: 'Sweet water',
                children: []
            },
            {
                id: '0aef2b93-9b3e-40d3-af8c-32a40c7ffedf',
                disabled: false,
                name: 'Lemonades',
                children: []
            },
        ]
    }
];

//FUNC #1

const categoryID = "6ef12fe5-fb55-49b6-b722-3c734f963041" // a hardcoded variable that gets an ID for searching its name
let categoryName = '';  // a global variable that will  store the searching name (understood  the last comment regarding
                        // global vars, but seen too late, will try to avoid next time )

//a function that gets  an array of objects and returns the searched category  name
function findCategoryName(obj) {
    obj.forEach(objItem => { //checking each object element using findItem function
        findItem(objItem)
    })
    return categoryName;  //returning a global variable with the founded and stored object's name
}

//search  function
function findItem(item) {
    Object.keys(item).forEach(key => {   //getting every key of an object
        if (typeof item[key] === "object") { //checking  the key's value if it is an object or not
            findItem(item[key])  // if it is an object checking deeper
        }
        if (typeof item[key] === "string") {  //if the key's  value is a string
            const searchAsRegEx = new RegExp(categoryID, "gi");  // creating a regular expression pattern to check global matching and ignoring the letters' case, thank you codewars
            if (item[key].match(searchAsRegEx)) {  //if the searching value is matching the key's value
                categoryName = item.name; //pushing the object's name into a global variable
            }
        }
    })
}

console.table(findCategoryName(categoriesTree))
console.log('')

// FUNC #2

//a function that finds all first non-disabled children elements
function findNotDisabledCategories(array) {
    const notDisabledCategories = []; //an array that will get arrays of non-disabled {name,id} objects
    for (let arrayElement in array) {
        for (const objElementKey in array[arrayElement].children) {  //getting  into the first-level children
            if (array[arrayElement].children[objElementKey].disabled === false) { //check  if a child is disabled or not
                const  temObj = { //creating a temporary  object to push the matched object name and ID
                    name: array[arrayElement].children[objElementKey].name,
                    id: array[arrayElement].children[objElementKey].id,
                }
                notDisabledCategories.push(temObj)  //pushing a new  object with the stored matched name/ID
            }
        }
    }
    return notDisabledCategories
}

console.table(findNotDisabledCategories(categoriesTree));
console.log('')


//FUNC #3

//The same logic function as  the FUNC#1 but with a little different condition

const substringName = 'veget';
const notDisabledCategories = []

function findNotDisabledCatName(obj) {
    obj.forEach(objItem => {
        searchForCategories(objItem)
    })
    return notDisabledCategories;
}

function searchForCategories(item) {
    Object.keys(item).forEach(key => {
        if (typeof item[key] === "object") {
            searchForCategories(item[key])
        }
        if (typeof item[key] === "string") {
            let searchAsRegEx = new RegExp(substringName, "gi");
            if (item[key].match(searchAsRegEx) && !item.disabled) {
                const tempObj = {
                    name: item.name,
                    id: item.id,
                };
                notDisabledCategories.push(tempObj);
            }
        }
    })
}

console.table(findNotDisabledCatName(categoriesTree));
