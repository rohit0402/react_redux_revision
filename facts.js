// whenever a new file is created always use first letter capital  not jruri for folders

compoents
// import from made components and use like <components/>

//props
// one file se const name='rohit'
// <comp1 name={name}/> // passed to components
// another file mein as a props taking
// cont comp1(props)=>{
//     return(<>
//     tumhara naam {props.name}</>)
// }
// or aise bhi props ko le sakte hai isko destructured bolte hai
// cont comp1({name})=>{
//     return(<>
//     tumhara naam {name}</>)
// }
//return ke andar js use karne ke liye {} yeh use karo

some_props_as_array_of_objects
//one file
// const blogs=[
//     {
//         index:1,
//         title:'reactjs',
//     },
//     {
//         index:1,
//         title:'nextjs',
//     },
//     {
//         index:1,
//         title:'python',
//     },
// ];
// return(<>
// <comp1 blogs={blogs} name={name}/></>
// )
//another file
// const comp1({blogs,name})=>{
//     return(<>
//     name is {name}
//     <div>
//         {
//             blogs.map((blog)=>{   //for array traversing  always use map function passes with key value pair where key is index
//                 return <h3>{blog.title}</h3>
//             })
//         }
//     </div>
//     </>)
// }



