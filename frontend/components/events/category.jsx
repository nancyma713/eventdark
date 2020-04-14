// import React from 'react';
// import EventIndexContainer from '../events/event_index_container';

// class Category extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             index: 0
//         }
//         this.selectCategory = this.selectCategory.bind(this);
//     }

//     selectCategory(index) {
//         this.setState({ index: index });
//     }

//     render() {
//         const CATEGORYLIST = [
//             {name: 'ALL'},
//             {name: 'Activities'},
//             {name: 'Entertainment'},
//             {name: 'Food and Drink'},
//             {name: 'Free'},
//             {name: 'Music'}, 
//             {name: 'Nightlife'},
//             {name: 'Other'},
//             {name: 'Sports and Fitness'},
//             {name: 'Travel and Outdoor'}
//         ]

//         // const cat = CATEGORYLIST[this.state.index];
//         const selected = this.state.index;
//         const categories = CATEGORYLIST.map((cate, index) => {
//             const category = cate.name;
//             const activeClass = index === selected ? 'active' : '';

//             return (
//                 <li key={index} className={activeClass} onClick={() => this.selectCategory(index)}>{category}</li>
//             )
//         })

//         return (
//             <div>
//                 <ul className="category-list">
//                     {categories}
//                 </ul>
//                 <EventIndexContainer />
//             </div>
//         )
//     }

// }

// export default Category;