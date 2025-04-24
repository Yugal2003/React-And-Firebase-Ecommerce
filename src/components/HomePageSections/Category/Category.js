import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const category = [
        {
            image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
            name: 'Fashion'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
            name: 'Shirt'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
            name: 'Jacket'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
            name: 'Mobile'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
            name: 'Laptop'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
            name: 'Shoes'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
            name: 'Home'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
            name: 'Books'
        }
    ]

  return (
    <div className='w-full'>
        <div className='grid grid-cols-4 gap-4 lg:grid-cols-8'>
            {
                category.map((ele,id) =>{
                    return(
                        <Link to={`/category/${ele.name}`}>
                            <div key={id} className='flex flex-col items-center cursor-pointer hover:scale-105 duration-500'>
                                <img src={ele.image} alt='img' className='w-24 lg:w-32'/>
                                <p className='font-bold text-lg'>{ele.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Category;