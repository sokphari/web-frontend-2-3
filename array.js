// // Array
// // 1D , 2D , Array key

//  //index  = [0,1,2,3,4,5....]   
// let arr1d = [1,'2','3',true,null]
// console.log(typeof(arr1d)) //output : object
// console.log(arr1d)
// console.log(arr1d[3])
// for(var i = 0 ; i < 5; i++){
//     console.log(arr1d[i])
// }


// // fake data 1D array 30 elements
// let fakeNames = [
//     'Somchai', 'Somsri', 'Anan', 'Preeda', 'Wichai',
//     'Kanya', 'Niran', 'Suda', 'Boonmee', 'Malee',
//     'Prasit', 'Ratana', 'Chaiya', 'Kamon', 'Duangjai',
//     'Preecha', 'Wilai', 'Somkid', 'Pranee', 'Thongchai',
// ]

// for(var i = 0; i < fakeNames.length; i++){
//     console.log( i + " " + fakeNames[i])
// }






// array 2d

// |__id__|__name__|__gender__|__addres__|____|____|
// |__1__|__sakkkk__|____|____|____|____|
// |__2__|__sokkk__|____|____|____|____|


// let arr2D = 
//             [
//                 ['jena','cheathok','visal'],// row 1 , index 0
//                 ['sarin','phanith','sidath'],
//                 ['chandeth','sreymean','chantha']
//             ]

// console.log(arr2D)      
// // console.log(arr2D[row][column])   
// console.log(arr2D[0][2])  
// console.log(arr2D[2][1])  
// console.log(arr2D[1][2])  
// console.log(arr2D[2][2])  
// console.log(arr2D[2][0])  
// console.log(arr2D[1][0])  



// array key

// const listEmployee = {
//                         id:1,
//                         name:'chandeth',
//                         gender:'female',
//                         email:'chandeth@gmail.com',
//                         address:'phnum penh',
//                         ip:'127.0.0.1'
//                     }
// console.log(listEmployee['id'])
// console.log(listEmployee['name'])
// console.log(listEmployee['gender'])
// console.log(listEmployee['email'])
// console.log(listEmployee['address'])
// console.log(listEmployee['ip'])





const products = [
            {
                code:'0001',
                product_name:'Coffee',
                product_size:{
                    size:'L',
                    price:8000,
                    percent_sugar:'50%'
                },
                img:'https://i.pinimg.com/736x/c1/1a/72/c11a72bb3fa99716fe4d7bb57575e80f.jpg',

            },
            {
                code:'0002',
                product_name:'Ilatte',
                product_size:{
                    size:'M',
                    price:14000,
                    percent_sugar:'00%'
                },
                img:'https://i.pinimg.com/736x/77/3f/66/773f66674fdb3e66dbdfbf3393164c65.jpg',

            }
]

// console.log(products[0].product_name)
// console.log(products[0].product_size.price)
// console.log(products[1].product_name)

products.forEach((value)=>{

    document.write(`
        <div class="container d-flex">
            <div class="card">
                <img width="300px" height="300px" src=${value.img} alt="">
                <div>
                    <h3 class="product-name">Name : ${value.product_name}</h3>
                    <h5 class="product-size">
                        <p>size : ${value.product_size.size}</p>
                        <p>sugar : ${value.product_size.price}</p>
                    </h5>
                </div>
            </div>
        </div>
        `)

})